import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

// Script for scrolling to top of page on navigation
function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
}

export default withRouter(ScrollToTop);
