import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { adminRouter, userRouter } from "./common/router";
import LayoutUser from "./layout/user/LayoutUser";
import AdminLayout from "./layout/AdminLayout";
import { sharinganIcon } from "./components/Loading";

function App() {
  return (
    <div className="App">
      <Suspense fallback={sharinganIcon}>
        <Switch>
          {userRouter.map((page, index) => {
            const Component = page.component;
            return (
              <Route
                key={index}
                exact={page.isExact}
                path={page.path}
                render={() => (
                  <LayoutUser>
                    <Component />
                  </LayoutUser>
                )}
              />
            );
          })}
          {adminRouter.map((c, index) => {
            const Component = c.component;
            return (
              <Route
                key={index}
                exact={c.isExact}
                path={c.path}
                render={() => (
                  <AdminLayout>
                    <Component />
                  </AdminLayout>
                )}
              ></Route>
            );
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
