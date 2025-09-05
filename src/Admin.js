import React from "react";

function Admin() {
  return (
    <div style={styles.container}>
      <h1>관리자 페이지</h1>
      <p>환영합니다! 🎉</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#eaf7ff",
    fontFamily: "Arial, sans-serif",
  },
};

export default Admin;
