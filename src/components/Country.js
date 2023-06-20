import React from "react";

export default function ProductItems({ name, region, map, flag, border }) {
  return (
    <div className="country">
      <div className="name">Name: {name}</div> <br />
      <div className="region">region: {region}</div> <br />
      <a className="map" href={map} target="_blank" rel="noreferrer noopener">
        Visit map here
      </a>{" "}
      <br />
      <div className="border">
        Border:
        {border
          ? border.map((item) => {
              return <p>{item}</p>;
            })
          : "no borders"}
      </div>
      <div className="flag">flag: {flag}</div>
    </div>
  );
}
