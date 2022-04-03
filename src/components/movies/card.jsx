import React from "react";

export default function MovieCard(props) {
  const { data } = props;

  const getPoster = (path) => {
    try {
      return require(`assets/${path}`);
    } catch (err) {
      return require(`assets/placeholder_for_missing_posters.png`);
    }
  };

  return (
    <div>
      <img src={getPoster(data["poster-image"])} alt={data.name}></img>
      <div className="pt-2 pb-4 text-white truncate">{data.name}</div>
    </div>
  );
}
