import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import UsersList from "./UsersList";
import PizzasList from "./PizzasList";
import AddNewPizza from "./AddNewPizza";
import OrdersList from "./OrdersList";

const AdminScreen = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (!currentUser.user.isAdmin) {
      window.location.replace("/");
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ textAlign: "center" }}>Admin Panel</h2>
          <ul className="adminfunction">
            <li>
              <Link className="admin" to="/admin/userslist">
                Users List
              </Link>
            </li>
            <li>
              <Link className="admin" to="/admin/pizzaslist">
                Pizzas List
              </Link>
            </li>
            <li>
              <Link className="admin" to="/admin/addnewpizza">
                Add New Pizza
              </Link>
            </li>
            <li>
              <Link className="admin" to="/admin/orderslist">
                Orders List
              </Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="userslist" element={<UsersList />} />
            <Route path="pizzaslist" element={<PizzasList />} />
            <Route path="addnewpizza" element={<AddNewPizza />} />
            <Route path="orderslist" element={<OrdersList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
