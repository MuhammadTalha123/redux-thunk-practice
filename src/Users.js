import React from "react";
import { fetchUser } from "./redux/actionCreator";
import { useSelector, useDispatch } from "react-redux";
// import store from "./redux/store";
// import reducer from "./redux/reducer"

const Users = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state);
  console.log(myState);
  return (
    <div>
      <h1 style={{ fontSize: "40px" }}>Users</h1>
      {myState.loading ? (
        <div style={{ fontSize: "20px" }}>Loading...</div>
      ) : (
        <ol style={{ listStyle: "none" }}>
          {myState.users.map((data, i) => {
            return (
              <li key={i} style={{ marginTop: "20px", fontSize: "20px" }}>
                {`Name: "${data.name}", Email: "${data.email}", Address: "${data.address.street}" `}
              </li>
            );
          })}
        </ol>
      )}
      <button onClick={() => dispatch(fetchUser())} className="btn">
        Load Data
        </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     loading: state.loading,
//     users: state.users,
//     error: state.error,
//   };
// };

export default Users;
