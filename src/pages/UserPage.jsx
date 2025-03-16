import React from "react";
import { Link } from "react-router-dom";
import { MortyList } from "../components/MortyList";

export default function UserPage() {
  return (
    <div>
      <MortyList/>
      <Link to={"/"}>go to home page </Link>
    </div>
  );
}
