import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./Logout";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  const navigate = useNavigate();

  const handleMyListClick = () => {
    navigate("/my-list");
  };

  return (
    <> 
      <div className='side-btn'>
      <LogoutButton />
      <button onClick={handleMyListClick} className="mylist-button">
         List
      </button>
      </div>
      <Search />
      <Movies />
    </>
  );
};

export default Home;
