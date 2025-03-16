import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllTour } from "../store/thunks/tourThunk";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom";

export const TourList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.tours);

  useEffect(() => {
    dispatch(getAllTour());
  }, []);

  const handleNavigate = (tourId) => {
    navigate(`/tourInfo/${tourId}`);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <hr />
      {loading === true && <StyledLoader color="black" />}
      {error !== "" && <h1 style={{ color: "red" }}>Error</h1>}
      {cart.map((user) => (
        <CharacterCard
          key={user.id}
          user={user}
          onClick={() => handleNavigate(user.id)}
        />
      ))}
    </div>
  );

  function CharacterCard({ user, onClick }) {
    const getBorderColor = () => {
      if (user.status === "Alive") return "4px solid green";
      if (user.status === "Dead") return "4px solid red";
      return "4px solid black";
    };
  
    return (
      <section
        onClick={onClick} 
        style={{
          padding: "20px",
          border: getBorderColor(),
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <p>{user.name}</p>
        <img src={user.image} alt={user.name} width="150" />
      </section>
    );
  }
  
};

const StyledLoader = styled(PacmanLoader)`
  position: absolute;
  left: 50%;
  top: 50%;
`;
