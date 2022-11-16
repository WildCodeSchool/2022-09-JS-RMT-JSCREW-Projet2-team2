import React from "react";
import "./TemplateFilter.css";

function TemplateFilter({ handleCheck, types }) {
  return (
    <div>
      {/* Template-search - MOBILE */}
      <div
        className="accordion fixed-top container-md d-md-none p-0 "
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Filter
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show color-accordion text-white"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="form-check mb-1">
                <input
                  onClick={() => "favoris"}
                  className="form-check-input"
                  type="checkbox"
                  checked={false}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Favoris
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={false}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Sort by price(ASC)
                </label>
              </div>
              {types.map((type) => {
                return (
                  <div className="form-check mb-2" key={type.name}>
                    <input
                      // onClick={() =>setFilter(type)}
                      className="form-check-input"
                      type="checkbox"
                      checked
                      id="checkbox"
                      onChange={() => handleCheck(type)}
                    />
                    <label className="form-check-label" htmlFor="checkbox">
                      {type.name}
                    </label>
                    {/* <div>{checked ? "Checked" : "Not checked"}</div> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateFilter;
