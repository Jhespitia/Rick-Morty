import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({ setSpecies, setPageNumber }) => {
  let species = [
    "Alien",
    "Animal",
    "Cronenberg",
    "Disease",
    "Human",
    "Humanoid",
    "Mythological",
    "Planet",
    "Poopybutthole",
    "Robot",
    "Unknown",
  ];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {species.map((item, index) => {
            return (
              <FilterBTN
                name="species"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setSpecies}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Species;