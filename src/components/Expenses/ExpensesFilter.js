import React from "react";

import "./ExpensesFilter.css";

const START_YEAR = 2020;

const ExpensesFilter = (props) => {
  function dropdownChangeHandler(event) {
    props.onChangeFilter(event.target.value);
  }

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= START_YEAR; year--) {
    years.push(year);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          cy-data-selector="year-filter"
          onChange={dropdownChangeHandler}
          value={props.selected}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
