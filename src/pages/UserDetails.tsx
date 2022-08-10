import React, { useContext } from "react";

import UserSearchDetails from "../components/Detail/UserSearchDetails";
import useRepoDetail from "../hook/useRepoDetail";
import { ResultContext } from "../store/result-context";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

const UserDetails = () => {
  const { userDetail, userRepos, isLoading, error } = useContext(ResultContext);
  const getRepositoryDetail = useRepoDetail(`https://api.github.com/repos/`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <UserSearchDetails
          avatar={userDetail.avatar_url}
          name={userDetail.name}
          login={userDetail.login}
          bio={userDetail.bio}
          userRepoCount={userDetail.public_repos}
          userRepositoryList={userRepos}
          getRepoDetail={getRepositoryDetail}
        />
      )}
      {error && <Error alertText={error} />}
    </>
  );
};

export default UserDetails;
