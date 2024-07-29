import React from "react";

export function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div>
      {filters.map((filter, index) => (
        <button
          key={index}
          className={filter === selected ? "selected" : ""}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
