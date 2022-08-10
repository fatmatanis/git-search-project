import React, { useContext } from "react";
import Loading from "../components/UI/Loading";
import RepoDetails from "../components/Detail/RepoDetails";
import Error from "../components/UI/Error";
import { ResultContext } from "../store/result-context";

const RepositoryDetails = () => {
  const { repoDetail, isLoading, error } = useContext(ResultContext);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <RepoDetails
          id={repoDetail.id}
          fullName={repoDetail.full_name}
          description={repoDetail.description}
          link={repoDetail.clone_url}
          forks={repoDetail.forks}
          star={repoDetail.stargazers_count}
          branches={repoDetail.subscribers_count}
          issues={repoDetail.open_issues}
          watch={repoDetail.subscribers_count}
          pullRequests={repoDetail.subscribers_count}
          name={repoDetail.name}
          owner={repoDetail.owner.login}
        />
      )}
      {error && <Error alertText={error} />}
    </>
  );
};

export default RepositoryDetails;
