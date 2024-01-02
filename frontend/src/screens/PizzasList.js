import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import {  faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PizzasList = () => {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <h2>Pizzas List</h2>
      {loading && <Loading />}
      {error && <Error error="Something Went Wrong" />}
      <table className="table table-bordered border-primary">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => {
              return (
                <tr>
                  <td>{pizza.name}</td>
                  <td>
                    Small:{pizza.prices[0]["small"]} <br />
                    Medium:{pizza.prices[0]["medium"]} <br />
                    Large:{pizza.prices[0]["large"]}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="m-2 mt-4"
                      style={{ color: "red" }}
                    />
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="m-2 mt-4"
                      style={{ color: "green" }}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PizzasList;
