import React from "react";

export default function MortyItem({ onClick, user }) {
  const getBorderColor = () => {
    if (user.status === "Alive") return "3px solid green";
    if (user.status === "Dead") return "3px solid red";
    return "3px solid black";
  };

  return (
    <section
      onClick={onClick}
      style={{
        padding: user.status === "unknown" ? "20px 20px 20px 50px   " : "20px",
        border: getBorderColor(),
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <p>{user.name}</p>
      <img src={user.image} alt={user.name} width="300" />
    </section>
  );
}
