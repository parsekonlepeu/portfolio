import * as React from "react";

export const useVisible = () => {
  const [visible, setVisible] = React.useState(false);
  React.useLayoutEffect(() => {
    if (window.innerWidth > 950) {
      setVisible(true);
    }
  });
  React.useEffect(() => {
    const handleResize = (e: Event): any => {
      const window = e.target as Window;
      if (window.innerWidth < 950) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return {
    visible: visible,
  };
};
