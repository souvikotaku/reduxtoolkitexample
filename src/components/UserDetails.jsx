import React, { useEffect, useState } from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, deleteUser } from "../store/slices/UserSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const getuserdetails = useSelector((state) => {
    return state.users;
  });

  console.log("getuserdetails", getuserdetails);

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };

  const deleteoneUser = (id) => {
    console.log(id);
    dispatch(removeUser(id));
  };

  const deleteAllUser = () => {
    console.log();
    dispatch(deleteUser());
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
          {getuserdetails &&
            getuserdetails?.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => deleteoneUser(index)}>delete</button>
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
