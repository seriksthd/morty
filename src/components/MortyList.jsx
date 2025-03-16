import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom";
import { getAllMorty } from "../store/thunks/mortyThunk";
import MortyItem from "./MortyItem";

export const MortyList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { morty, loading, error } = useSelector((state) => state.morty);

  useEffect(() => {
    dispatch(getAllMorty());
  }, []);

  const handleNavigate = (mortyId) => {
    navigate(`/mortyInfo/${mortyId}`);
  };

  return (
    <StyledMortyList>
      {loading === true && <StyledLoader color="black" />}
      {error !== "" && <h1 style={{ color: "red" }}>Error</h1>}
      {morty.map((user) => (
        <MortyItem
          key={user.id}
          user={user}
          onClick={() => handleNavigate(user.id)}
        />
      ))}
    </StyledMortyList>
  );
};
const StyledMortyList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
`;
const StyledLoader = styled(PacmanLoader)`
  position: absolute;
  left: 50%;
  top: 50%;
`;
