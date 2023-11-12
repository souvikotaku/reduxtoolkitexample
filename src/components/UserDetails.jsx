import React, { useEffect, useState } from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, deleteUser } from "../store/slices/UserSlice";
import { fetchtodos } from "../store/slices/apislice";
import {
  addUserLocal,
  removeUserLocal,
  deleteUserLocal,
} from "../store/slices/localSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const getuserdetails = useSelector((state) => {
    return state.users;
  });

  const getuserdetailslocal = useSelector((state) => {
    return state.userslocal;
  });

  const getapidata = useSelector((state) => {
    return state.apiSlice;
  });

  console.log("getuserdetails", getuserdetails);
  console.log("getuserdetailslocal", getuserdetailslocal);

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
    dispatch(addUserLocal(payload));
  };

  const deleteoneUser = (id) => {
    console.log(id);
    dispatch(removeUser(id));
    dispatch(removeUserLocal(id));
  };

  const deleteAllUser = () => {
    dispatch(deleteUser());
    dispatch(deleteUserLocal());
  };

  const callApi = () => {
    dispatch(fetchtodos());
    console.log("getapidata", getapidata);
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button
            className="btn add-btn"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </button>
        </div>
        <ul>
          {getuserdetailslocal &&
            getuserdetailslocal?.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => deleteoneUser(index)}>delete</button>
                <button onClick={() => callApi()}>call api</button>
              </li>
            ))}
        </ul>
        <hr />
        <button onClick={deleteAllUser}>delete all user</button>
        {/* <DeleteAllUser /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
