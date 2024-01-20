import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Layout from "../components/Layout";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  
  const {pizzas,error,loading}=pizzasstate

  useEffect(() => {
    dispatch(getAllPizzas());
  },[]);
  return (
    <Layout title={"Buy Best Pizzas!!!"}>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something Went Wrong" />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default HomeScreen;
