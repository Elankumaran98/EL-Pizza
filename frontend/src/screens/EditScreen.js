import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

const EditScreen = () => {
  const { pizzaid } = useParams();
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const editpizzastate = useSelector((state) => state.EditPizzaReducer);
  const { pizza, error, loading } = getpizzabyidstate;
  const { editsuccess, editloading } = editpizzastate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (pizza) {
      if (pizza._id === pizzaid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setImage(pizza.image);
      } else {
        dispatch(getPizzaById(pizzaid));
      }
    } else {
      dispatch(getPizzaById(pizzaid));
    }
  }, [pizza, dispatch]);

  const formHandler = (e) => {
    e.preventDefault();
    const editedpizza = {
      _id: pizzaid,
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
    dispatch(editPizza(editedpizza));
  };

  return (
    <div>
      <div className="text-left">
        <h2>Edit Pizza</h2>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (
          <Success success="Pizza Details Updated Successfully" />
        )}
        {editloading && <Loading />}
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
            Update Pizza
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditScreen;
