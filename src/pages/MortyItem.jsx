import React from "react";

export default function MortyItem({ morty }) {
  const getBorderColor = () => {
    if (morty.status === "Alive") return "3px solid green";
    if (morty.status === "Dead") return "3px solid red";
    return "3px solid black";
  };

  return (
    <section
      style={{
        padding: morty.status === "unknown" ? "20px 20px 20px 50px   " : "20px",
        border: getBorderColor(),
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <p>{morty.name}</p>
      <img src={morty.image} alt={morty.name} width="300" />
    </section>
  );
}
