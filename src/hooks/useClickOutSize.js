import { useEffect, useRef, useState } from "react";

export default function useClickOutSize(domNode = "buttom") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef();

  useEffect(() => {
    const dom = nodeRef.current;
    function handleCheckOut(e) {
      if (dom && !dom.contains(e.target) && !e.target.matches(domNode)) {
        setShow(false);
      }
    }
    if (dom) {
      document.addEventListener("click", handleCheckOut);
    }

    return () => document.removeEventListener("click", handleCheckOut);
  }, [domNode]);
  return { show, setShow, nodeRef };
}
