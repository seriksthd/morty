import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMortyById } from "../store/thunks/mortyThunk";
import MortyItem from "./MortyItem";
import styled from "styled-components";

export default function MortyInfo() {
  const { mortyById } = useSelector((store) => store.morty);
  const dispatch = useDispatch();

  const { mortyInfoId } = useParams();
  useEffect(() => {
    dispatch(getMortyById(mortyInfoId));
  }, [dispatch, mortyInfoId]);

  return (
    <StyledMortyList>
      {mortyById.map((morty) => (
        <MortyItem morty={morty} key={morty.id} />
      ))}
    </StyledMortyList>
  );
}
const StyledMortyList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
  justify-content: center;
`;
