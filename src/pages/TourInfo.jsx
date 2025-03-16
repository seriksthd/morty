import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTourById } from "../store/thunks/tourThunk";
import styled from "styled-components";

export default function TourInfo() {
  const { tourById } = useSelector((store) => store.tours);
  console.log("tourById: ", tourById);
  const dispatch = useDispatch();

  const { tourInfoId } = useParams();
  useEffect(() => {
    dispatch(getTourById(tourInfoId));
  }, [dispatch, tourInfoId]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center"}}>
      {tourById?.map((tour) => (
        <TourInfoItem tour={tour} key={tour.id} />
      ))}
    </div>
  );

  function TourInfoItem({ tour }) {
    const getBorderColor = () => {
      if (tour.status === "Alive") return "4px solid green";
      if (tour.status === "Dead") return "4px solid red";
      return "4px solid black";
    };
    return (
      <section
        style={{
          padding: "20px",
          border: getBorderColor(),
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <p>{tour.name}</p>
        <img src={tour.image} alt={tour.name} width="150" />
      </section>
    );
  }
}

const TourCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 500px;
  max-width: 70%;

  margin: auto;

  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  &h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  & > p {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  & > span {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  & > button {
    width: 100%;
    padding: 20px;
    background-color: #333;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid #333;
    transition: all 250ms ease-in-out;
    &:hover {
      background-color: #fff;
      color: #333;
      border: 1px solid #333;
    }
  }
`;
