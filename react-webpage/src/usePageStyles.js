import { useEffect } from "react";

export function usePageStyles(href) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.dataset.pageStyles = "true";
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [href]);
}
