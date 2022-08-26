import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTER_PATH } from "../common/routerLink";

function useBackPage() {
  const history = useHistory();
  const { profile } = useSelector((state) => state.authReducer);
  const location = useLocation();

  useEffect(() => {
    if (Object.keys(profile) <= 0) {
      history.push(ROUTER_PATH.HOME.path);
      return;
    }
    if (
      location.pathname === ROUTER_PATH.ADMIN.path &&
      profile.role !== "admin"
    ) {
      history.push(ROUTER_PATH.LOGIN.path);
      return;
    }
  }, [history, location.pathname, profile]);
}

export default useBackPage;
