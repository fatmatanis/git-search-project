import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../HeaderLayout/index";
import SideBar from "../UI/SideBar";
import Home from "../../pages/Home";
import Bookmarks from "../../pages/Bookmarks";
import BookmarkedSearch from "../../pages/BookmarkedSearch";
import RepositoryDetails from "../../pages/RepositoryDetails";
import UserDetails from "../../pages/UserDetails";
import Repositories from "../../pages/Repositories";
import Users from "../../pages/Users";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/results" element={<SideBar />}>
          <Route path="repositories" element={<Repositories />} />
          <Route path="user" element={<Users />} />
          <Route path="bookmarked" element={<BookmarkedSearch />} />
        </Route>
        <Route path="repositories/:repoId" element={<RepositoryDetails />} />
        <Route path="user/:userId" element={<UserDetails />} />
      </Routes>
    </>
  );
};
export default MainLayout;
