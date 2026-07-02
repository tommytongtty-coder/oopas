import { useEffect } from "react";
import ActivityPage from "./pages/ActivityPage.jsx";
import PosterPage from "./pages/PosterPage.jsx";
import TutorialPage from "./pages/TutorialPage.jsx";

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function App() {
  const path = normalizePath(window.location.pathname);

  useEffect(() => {
    if (path === "/activity") {
      document.title = "朗誦比賽及活動 | Institution For Gifted Children";
    } else if (path === "/activity/poster-1") {
      document.title = "朗誦比賽海報預覽 | Institution For Gifted Children";
    } else {
      document.title = "資優兒童協會 | Institution For Gifted Children";
    }
  }, [path]);

  if (path === "/activity") {
    return <ActivityPage />;
  }

  if (path === "/activity/poster-1") {
    return <PosterPage />;
  }

  return <TutorialPage />;
}

export default App;
