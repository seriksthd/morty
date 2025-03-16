import React from "react";
import { Link } from "react-router-dom";
import { TourList } from "../components/TourList";

export default function UserPage() {
  return (
    <div>
      <TourList />
      <Link to={"/"}>go to home page </Link>
    </div>
  );
}
