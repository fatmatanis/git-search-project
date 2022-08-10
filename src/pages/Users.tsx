import React, { useContext } from "react";

import axios, { AxiosError } from "axios";
import { ResultContext } from "../store/result-context";
import UserMainView from "../components/UserLayout/UserMainView";

const Users = () => {
  const { userResults, setUserDetail, setUserRepos, setIsLoading, setError } =
    useContext(ResultContext);

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

  return (
    <UserMainView
      userCount={userResults.count.toLocaleString()}
      searchUsersResults={userResults.userSearch}
      getUserDetail={getUserDetails}
    />
  );
};

export default Users;
