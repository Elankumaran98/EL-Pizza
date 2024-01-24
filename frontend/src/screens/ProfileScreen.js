import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails, updateUserDetails } from "../actions/userActions";
import Layout from '../components/Layout'

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser, loading, error } = userState;
  const [userDetails, setUserDetails] = useState(currentUser);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(updateUserDetails(userDetails));
      console.log("User updated successfully:", response);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Layout title={"Profile - EL Pizza App"}>
      <div>
        {!loading && !error && (
          <>
            {editMode ? (
              <form
                className="row mt-5 "
                style={{ justifyContent: "center" }}
                onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  required
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  required
                />
                <button className="btn mt-3" type="submit">
                  Save Changes
                </button>
                <button
                  className="btn mt-3"
                  type="button"
                  onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </form>
            ) : (
              <div style={{ textAlign: "center" }}>
                <h2 className="m-2 shadow p-3 mb-5 bg-body-tertiary rounded myhead">
                  Profile
                </h2>
                {currentUser.user.photo && (
                  <img
                    className="rounded-circle"
                    src={`data:image/png;base64,${currentUser.user.photo}`}
                    alt={currentUser.user.name}
                    style={{ width: 150, height: 150, marginRight: "5px" }}
                  />
                )}
                <p>Name: {currentUser.user.name}</p>
                <p>Email: {currentUser.user.email}</p>
              </div>
            )}
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => setEditMode(true)}
                className="btn mt-3 mb-3">
                Edit Profile
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ProfileScreen;
