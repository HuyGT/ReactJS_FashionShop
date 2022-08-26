import { useEffect, useRef } from "react";

function useScrollProduct(isLoading) {
  const nodeRef = useRef();
  useEffect(() => {
    if (isLoading) {
      const top = nodeRef.current.offsetTop - 100;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, [isLoading]);

  return { nodeRef };
}

export default useScrollProduct;
