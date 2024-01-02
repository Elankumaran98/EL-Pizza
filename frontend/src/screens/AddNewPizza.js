import React, { useState } from "react";
import { addPizza } from "../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

const AddNewPizza = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;

  const formHandler = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    console.log(pizza);
    dispatch(addPizza(pizza));
  };

  return (
    <div>
      <div className="text-left">
        <h2>Add Pizza</h2>
        {loading && <Loading />}
        {success && <Success success="New Pizza Added Successfully" />}
        {error && <Error error="Something went wrong" />}
        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="Pizza Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Small Pizza's Price"
            value={smallPrice}
            onChange={(e) => setSmallPrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Medium Pizza's Price"
            value={mediumPrice}
            onChange={(e) => setMediumPrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Large Pizza's Price"
            value={largePrice}
            onChange={(e) => setLargePrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Pizza's Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Pizza's Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="btn mt-3" type="submit">
            Add Pizza
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPizza;
