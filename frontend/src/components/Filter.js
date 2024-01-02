import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "./Pizza";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.getAllPizzasReducer.pizzas);

  const handleSearch = () => {
    dispatch(getAllPizzas(searchTerm)); // Dispatch action to fetch filtered pizzas
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search pizzas..."
      />
      <button onClick={handleSearch}>Search</button>
      {pizzas.length > 0 && (
        <div>
          {pizzas.map((pizza) => (
            <Pizza key={pizza._id} pizza={pizza} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
