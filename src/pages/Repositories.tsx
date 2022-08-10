import React, { useContext } from "react";

import { ResultContext } from "../store/result-context";
import useRepoDetail from "../hook/useRepoDetail";
import RepoMainView from "../components/RepositoryLayout/RepoMainView";

const Repositories = () => {
  const { repoResults } = useContext(ResultContext);
  const getRepositoryDetail = useRepoDetail(`https://api.github.com/repos/`);

  return (
    <RepoMainView
      repoCount={repoResults.count.toLocaleString()}
      searchRepoResults={repoResults.repoSearch}
      getRepoDetail={getRepositoryDetail}
    />
  );
};

export default Repositories;
