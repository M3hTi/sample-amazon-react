import { useEffect, useRef } from "react";

export function useOutsideClick(handler, capturingPhase = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("the modal is closed");
        handler();
      }
    }
    document.addEventListener("click", handleClick, capturingPhase);
    return () =>
      document.removeEventListener("click", handleClick, capturingPhase);
  }, [handler, capturingPhase]);

  return { ref };
}
