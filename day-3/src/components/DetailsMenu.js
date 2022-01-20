import { useState, useEffect } from "react";

export const DetailsMenu = ({ data }) => {
  const {
    Title,
    Year,
    // Rated,
    // Released,
    // Runtime,
    // Genre,
    // Director,
    // Writer,
    // Actors,
    Plot,
    // Language,
    BoxOffice,
    Poster,
  } = data;

  console.log(data);
  return (
    <div style={{ display: "flex" }}>
      <img src={Poster} alt='No Poster' style={{ paddingRight: "16px" }} />
      <div style={{ width: "800px" }}>
        <p>{Title}</p>
        <p>{Year}</p>
        <p>{Plot}</p>
        <p>{BoxOffice}</p>
      </div>
    </div>
  );
};
