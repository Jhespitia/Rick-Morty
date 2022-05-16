import React from "react";

const FilterBTN = ({ input, task, setPageNumber, index, name }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #ff019;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check text-danger justify-content-center">
        <input
          onClick={() => {
            setPageNumber(1);
            task(input);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            setPageNumber(1);
          }}
          className="btn btn-danger"
          for={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
