import React, { Fragment, useContext, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import Header from "../HeaderLayout/Header";
import Home from "../../pages/Home";
import axios from "axios";
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
  const [httpError, setHttpError] = useState();

  const navigate = useNavigate();

  const { bookmarkList } = useContext(BookmarkContext);

  const getRepo = async () => {
    return await axios.get(
      `https://api.github.com/search/repositories?q=${searchText}`
    );
  };

  const getUsers = async () => {
    return await axios.get(
      `https://api.github.com/search/users?q=${searchText}`
    );
  };

  const getRepoDetail = async (owner: string, repo: string) => {
    return await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
  };

  const getUserDetail = async (user: string) => {
    return await axios.get(`https://api.github.com/users/${user}`);
  };

  const getUserRepos = async (username: string) => {
    return await axios.get(`https://api.github.com/users/${username}/repos`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleOnKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && searchText) {
      setIsLoading(true);
      getRepo()
        .then((res) => {
          console.log("api result", res);
          setSearchRepoResult(res.data.items);
          setRepoCount(res.data);
          navigate("results/repositories");
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setHttpError(error);
        });
      getUsers()
        .then((res) => {
          console.log("users result", res);
          setSearchUsers(res.data.items);
          setUsersCount(res.data);
        })
        .catch((error) => {
          setHttpError(error);
        });
    }
  };
  const getRepositoryDetail = async (
    selectedOwner: string,
    selectedRepo: string
  ) => {
    setIsLoading(true);
    getRepoDetail(selectedOwner, selectedRepo)
      .then((res) => {
        console.log("repo detail", res);
        setRepoDetail(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error);
      });
  };

  const getUserDetailResult = async (selectedUser: string) => {
    setIsLoading(true);
    getUserDetail(selectedUser)
      .then((res) => {
        console.log("user detail", res);
        setUserDetail(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error);
      });
    getUserRepos(selectedUser)
      .then((res) => {
        console.log("user repos", res);
        setUserRepos(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error);
      });
  };

  const foundBookmark = bookmarkList.filter((repo) =>
    repo.fullName.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("hey", foundBookmark);

  if (isLoading) {
    return <Loading />;
  }

  if (httpError) {
    return <Error />;
  }

  return (
    <Fragment>
      <Header
        onChange={handleChange}
        value={searchText}
        onKeyDown={handleOnKeyDown}
      />

      <Box className={classes.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bookmarks"
            element={<Bookmarks handleRepositoryDetail={getRepositoryDetail} />}
          />
          <Route
            path="/results"
            element={
              <>
                <Card>
                  <SideListItem
                    count={repoTotalCount.total_count}
                    to="repositories"
                    icon={<Note />}
                    primary={"Repositories"}
                  />
                  <SideListItem
                    count={usersCount.total_count}
                    to="user"
                    icon={<TagFaces />}
                    primary={"Users"}
                  />
                  {foundBookmark.length > 0 && (
                    <SideListItem
                      count={foundBookmark.length}
                      to="bookmarked"
                      icon={<BookmarkBorderSharp />}
                      primary={"Bookmarked"}
                    />
                  )}
                  <Divider />
                </Card>
                <Outlet />
              </>
            }
          >
            <Route
              path="repositories"
              element={
                <RepoMainView
                  repoCount={repoTotalCount.total_count}
                  searchRepoResults={searchRepoResult}
                  handleRepositoryDetail={getRepositoryDetail}
                />
              }
            />
            <Route
              path="user"
              element={
                <UserMainView
                  userCount={usersCount.total_count}
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

          {repoDetail && (
            <Route
              path="repositories/:repoId"
              element={
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
              }
            />
          )}

          {userDetail && (
            <Route
              path="user/:userId"
              element={
                <UserDetails
                  avatar={userDetail.avatar_url}
                  name={userDetail.name}
                  login={userDetail.login}
                  bio={userDetail.bio}
                  userRepoCount={userDetail.public_repos}
                  userRepositoryList={userRepos}
                  handleRepositoryDetail={getRepositoryDetail}
                />
              }
            />
          )}
        </Routes>
      </Box>
    </Fragment>
  );
};

export default MainLayout;
