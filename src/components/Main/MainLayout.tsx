import React, { Fragment, useContext, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import Header from "../HeaderLayout/Header";
import Home from "../../pages/Home";
import axios, { AxiosError } from "axios";
import RepoMainView from "../RepositoryLayout/RepoMainView";
import UserMainView from "../UserLayout/UserMainView";
import Card from "../UI/Card";
import SideListItem from "../SideListItem";
import RepoDetails from "../../pages/RepoDetails";
import UserDetails from "../../pages/UserDetails";
import Bookmarks from "../../pages/Bookmarks";
import { BookmarkContext } from "../../store/bookmark-context";
import BookmarkedSearch from "../Bookmark/BookmarkedSearch";
import {
  IRepository,
  IRepositoryDetail,
  TotalCount,
  IUsers,
  IUsersDetail,
} from "../../types/types";
import classes from "./MainLayout.module.css";
import { BookmarkBorderSharp, Note, TagFaces } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import Loading from "../Loading";
import Error from "../Error";

const MainLayout = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRepoResult, setSearchRepoResult] = useState<Array<IRepository>>(
    []
  );
  const [searchUsers, setSearchUsers] = useState<Array<IUsers>>([]);
  const [repoTotalCount, setRepoCount] = useState<TotalCount>({
    total_count: 0,
  });
  const [usersCount, setUsersCount] = useState<TotalCount>({
    total_count: 0,
  });

  const [repoDetail, setRepoDetail] = useState<IRepositoryDetail>();

  const [userDetail, setUserDetail] = useState<IUsersDetail>();
  const [userRepos, setUserRepos] = useState<Array<IRepository>>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState("");

  const navigate = useNavigate();

  const { bookmarkList } = useContext(BookmarkContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const repositoryResults = async () => {
    return await axios.get(
      `https://api.github.com/search/repositories?q=${searchText}`
    );
  };

  const userResults = async () => {
    return await axios.get(
      `https://api.github.com/search/users?q=${searchText}`
    );
  };

  const handleOnKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && searchText) {
      setIsLoading(true);
      try {
        const [getRepo, getUser] = await Promise.all([
          repositoryResults(),
          userResults(),
        ]);
        console.log("repoUser", getRepo, getUser);

        setSearchRepoResult(getRepo.data.items);
        setRepoCount(getRepo.data);
        setSearchUsers(getUser.data.items);
        setUsersCount(getUser.data);
      } catch (error) {
        const err = error as AxiosError;
        setHttpError(err.message);
      }
      setIsLoading(false);
      navigate("results/repositories");
    }
  };

  const getRepositoryDetail = async (
    selectedOwner: string,
    selectedRepo: string
  ) => {
    setIsLoading(true);
    try {
      const getRepoDetail = await axios.get(
        `https://api.github.com/repos/${selectedOwner}/${selectedRepo}`
      );
      console.log("repo detail", getRepoDetail);
      setRepoDetail(getRepoDetail.data);
    } catch (error) {
      const err = error as AxiosError;
      setHttpError(err.message);
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

  const getUserDetailResult = async (selectedUser: string) => {
    setIsLoading(true);

    try {
      const [getUserDetail, getUserRepos] = await Promise.all([
        userDetailResults(selectedUser),
        userReposResults(selectedUser),
      ]);
      setUserDetail(getUserDetail.data);
      setUserRepos(getUserRepos.data);
      console.log("User Details and users repos", getUserDetail, getUserRepos);
    } catch (error) {
      const err = error as AxiosError;
      setHttpError(err.message);
    }
    setIsLoading(false);
  };

  const foundBookmark = bookmarkList.filter((repo) =>
    repo.fullName.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("hey", foundBookmark);

  return (
    <Fragment>
      <Header
        onChange={handleChange}
        value={searchText}
        onKeyDown={handleOnKeyDown}
      />
      <Box className={classes.main}>
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
            element={<Bookmarks handleRepositoryDetail={getRepositoryDetail} />}
          />
          <Route
            path="/results"
            element={
              <>
                {isLoading && <Loading />}
                {httpError && <Error alertText={httpError} />}
                {!isLoading && (
                  <>
                    <Card>
                      <SideListItem
                        count={repoTotalCount.total_count.toLocaleString()}
                        to="repositories"
                        icon={<Note />}
                        primary={"Repositories"}
                      />
                      <SideListItem
                        count={usersCount.total_count.toLocaleString()}
                        to="user"
                        icon={<TagFaces />}
                        primary={"Users"}
                      />
                      {foundBookmark.length > 0 && (
                        <SideListItem
                          count={foundBookmark.length.toLocaleString()}
                          to="bookmarked"
                          icon={<BookmarkBorderSharp />}
                          primary={"Bookmarked"}
                        />
                      )}
                      <Divider />
                    </Card>
                    <Outlet />
                  </>
                )}
              </>
            }
          >
            <Route
              path="repositories"
              element={
                <>
                  <RepoMainView
                    repoCount={repoTotalCount.total_count.toLocaleString()}
                    searchRepoResults={searchRepoResult}
                    handleRepositoryDetail={getRepositoryDetail}
                  />
                </>
              }
            />
            <Route
              path="user"
              element={
                <UserMainView
                  userCount={usersCount.total_count.toLocaleString()}
                  searchUsersResults={searchUsers}
                  handleUserDetail={getUserDetailResult}
                />
              }
            />

            <Route
              path="bookmarked"
              element={
                <BookmarkedSearch
                  text={searchText}
                  handleRepositoryDetail={getRepositoryDetail}
                />
              }
            />
          </Route>

          <Route
            path="repositories/:repoId"
            element={
              <>
                {isLoading && <Loading />}
                {httpError && <Error alertText={httpError} />}
                {!isLoading && repoDetail && (
                  <RepoDetails
                    id={repoDetail.id}
                    fullName={repoDetail.full_name}
                    description={repoDetail.description}
                    link={repoDetail.clone_url}
                    fork={repoDetail.forks}
                    star={repoDetail.stargazers_count}
                    branch={repoDetail.subscribers_count}
                    issues={repoDetail.open_issues}
                    watch={repoDetail.subscribers_count}
                    pullRequest={repoDetail.subscribers_count}
                    name={repoDetail.name}
                    owner={repoDetail.owner.login}
                  />
                )}
              </>
            }
          />

          <Route
            path="user/:userId"
            element={
              <>
                {isLoading && <Loading />}
                {httpError && <Error alertText={httpError} />}
                {!isLoading && userDetail && userRepos && (
                  <UserDetails
                    avatar={userDetail.avatar_url}
                    name={userDetail.name}
                    login={userDetail.login}
                    bio={userDetail.bio}
                    userRepoCount={userDetail.public_repos}
                    userRepositoryList={userRepos}
                    handleRepositoryDetail={getRepositoryDetail}
                  />
                )}
              </>
            }
          />
        </Routes>
      </Box>
    </Fragment>
  );
};

export default MainLayout;
