import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pizzas from "../pizzasdata";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div className="row">
      {pizzas.map((pizza) => {
        return (
          <div className="col-md-4 ">
            <div>
              <Pizza pizza={pizza} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeScreen;
