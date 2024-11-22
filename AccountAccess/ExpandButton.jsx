import React from "react";

const styles = {
  expandBtn: {
    width: "30px",
    height: "30px",
    margin: "auto",
    color: "#227c9d",
    backgroundColor: "#fef9ef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #d3d3d3",
    borderRadius: "50%",
    cursor: "pointer",
  },
  flex: {
    display: "flex",
  },
};

const ExpandButton = (node) => {
  return (
    <>
      {node && (
        <div style={styles.expandBtn}>
          <span>{node.data._directSubordinates}</span>
          <span style={styles.flex}>{node.children ? "up" : "down"}</span>
        </div>
      )}
    </>
  );
};

export default ExpandButton;
