import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import axios, { AxiosError } from "axios";
import { ResultContext } from "../../store/result-context";
import Header from "../HeaderLayout/index";
import Home from "../../pages/Home";
import RepoMainView from "../RepositoryLayout/RepoMainView";
import UserMainView from "../UserLayout/UserMainView";
import UserDetails from "../../pages/UserDetails";
import Bookmarks from "../../pages/Bookmarks";
import BookmarkedSearch from "../Bookmark";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import RepositoryDetails from "../../pages/RepositoryDetails";
import SideBar from "../UI/SideBar";

const MainLayout = () => {
  const {
    repoResults,
    userResults,
    setRepoDetail,
    userDetail,
    setUserDetail,
    userRepos,
    setUserRepos,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useContext(ResultContext);

  const getRepositoryDetail = async (
    selectedOwner: string,
    selectedRepo: string
  ) => {
    setIsLoading(true);
    try {
      const getRepoDetail = await axios.get(
        `https://api.github.com/repos/${selectedOwner}/${selectedRepo}`
      );
      setRepoDetail(getRepoDetail.data);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
    }
    setIsLoading(false);
  };

  const userDetailResults = async (selectedUser: string) => {
    return await axios.get(`https://api.github.com/users/${selectedUser}`);
  };

  const userReposResults = async (selectedUser: string) => {
    return await axios.get(
      `https://api.github.com/users/${selectedUser}/repos`
    );
  };

  const getUserDetails = async (selectedUser: string) => {
    setIsLoading(true);

    try {
      const [getUserDetail, getUserRepos] = await Promise.all([
        userDetailResults(selectedUser),
        userReposResults(selectedUser),
      ]);
      setUserDetail(getUserDetail.data);
      setUserRepos(getUserRepos.data);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
    }
    setIsLoading(false);
  };

  const handleErrorClose = () => {
    setError("");
  };

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLoading && <Loading />}
              {!isLoading && <Home />}
            </>
          }
        />
        <Route
          path="/bookmarks"
          element={<Bookmarks getRepoDetail={getRepositoryDetail} />}
        />
        <Route path="/results" element={<SideBar />}>
          <Route
            path="repositories"
            element={
              <RepoMainView
                repoCount={repoResults.count.toLocaleString()}
                searchRepoResults={repoResults.repoSearch}
                getRepoDetail={getRepositoryDetail}
              />
            }
          />
          <Route
            path="user"
            element={
              <UserMainView
                userCount={userResults.count.toLocaleString()}
                searchUsersResults={userResults.userSearch}
                getUserDetail={getUserDetails}
              />
            }
          />

          <Route
            path="bookmarked"
            element={<BookmarkedSearch getRepoDetail={getRepositoryDetail} />}
          />
        </Route>

        <Route path="repositories/:repoId" element={<RepositoryDetails />} />

        <Route
          path="user/:userId"
          element={
            <>
              {isLoading && <Loading />}
              {error && (
                <Error alertText={error} handleErrorClose={handleErrorClose} />
              )}
              {!isLoading && userDetail && userRepos && (
                <UserDetails
                  avatar={userDetail.avatar_url}
                  name={userDetail.name}
                  login={userDetail.login}
                  bio={userDetail.bio}
                  userRepoCount={userDetail.public_repos}
                  userRepositoryList={userRepos}
                  getRepoDetail={getRepositoryDetail}
                />
              )}
            </>
          }
        />
      </Routes>
    </>
  );
};
export default MainLayout;
