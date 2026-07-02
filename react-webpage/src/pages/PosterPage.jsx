import { useEffect } from "react";

const pageStyle = {
  margin: 0,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#000",
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
};

const imageStyle = {
  maxWidth: "100vw",
  maxHeight: "100vh",
  objectFit: "contain",
  cursor: "pointer",
};

function PosterPage() {
  useEffect(() => {
    const previousBodyStyle = document.body.getAttribute("style");

    Object.assign(document.body.style, pageStyle);

    return () => {
      if (previousBodyStyle) {
        document.body.setAttribute("style", previousBodyStyle);
      } else {
        document.body.removeAttribute("style");
      }
    };
  }, []);

  return (
    <a href="/activity" style={linkStyle}>
      <img src="/images/poster_1_final.png" alt="朗誦比賽海報" style={imageStyle} />
    </a>
  );
}

export default PosterPage;
