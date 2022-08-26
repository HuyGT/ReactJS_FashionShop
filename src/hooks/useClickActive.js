import { useEffect } from "react";

export default function useClickActive(element) {
  useEffect(() => {
    const nodeDome = document.querySelectorAll(element);

    const handleActive = (e) => {
      const target = e.target;
      [...nodeDome].forEach((item) => {
        item.classList.remove("active");
      });
      target.classList.add("active");
    };

    [...nodeDome].forEach((item) => {
      item.addEventListener("click", handleActive);
    });

    return () => {
      [...nodeDome].forEach((item) => {
        item.removeEventListener("click", handleActive);
      });
    };
  }, [element]);
}
