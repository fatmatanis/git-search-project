import React, { ReactNode, useState } from "react";
import {
  IRepoSearchResults,
  IRepository,
  IRepositoryDetail,
  IUsersDetail,
  IUserSearchResults,
} from "../types/types";

type ResultContextProps = {
  children: ReactNode;
};

type ResultContextObj = {
  repoResults: IRepoSearchResults;
  setRepoResults: (repoResults: IRepoSearchResults) => void;
  userResults: IUserSearchResults;
  setUserResults: (userResults: IUserSearchResults) => void;
  repoDetail: IRepositoryDetail;
  setRepoDetail: (repoDetail: IRepositoryDetail) => void;
  userDetail: IUsersDetail;
  setUserDetail: (userDetail: IUsersDetail) => void;
  userRepos: IRepository[];
  setUserRepos: (userRepos: IRepository[]) => void;
  isLoading: boolean;
  setIsLoading: (arg0: boolean) => void;
  error: string;
  setError: (arg0: string) => void;
};

const ResultContextDefaultValues: ResultContextObj = {
  repoResults: {
    count: 0,
    repoSearch: [],
  },
  setRepoResults: () => null,
  userResults: {
    count: 0,
    userSearch: [],
  },
  setUserResults: () => null,
  repoDetail: {
    id: 0,
    branches_url: 0,
    clone_url: "",
    description: "",
    full_name: "",
    open_issues: 0,
    forks: 0,
    watchers: 0,
    stargazers_count: 0,
    subscribers_count: 0,
    name: "",
    owner: {
      login: "",
    },
  },
  setRepoDetail: () => null,
  userDetail: { avatar_url: "", name: "", login: "", bio: "", public_repos: 0 },
  setUserDetail: () => null,
  userRepos: [],
  setUserRepos: () => null,
  isLoading: false,
  setIsLoading: () => null,
  error: "",
  setError: () => null,
};
export const ResultContext = React.createContext<ResultContextObj>(
  ResultContextDefaultValues
);

const ResultContextProvider = ({ children }: ResultContextProps) => {
  const [repoResults, setRepoResults] = useState(
    ResultContextDefaultValues.repoResults
  );
  const [userResults, setUserResults] = useState(
    ResultContextDefaultValues.userResults
  );
  const [repoDetail, setRepoDetail] = useState(
    ResultContextDefaultValues.repoDetail
  );
  const [userDetail, setUserDetail] = useState(
    ResultContextDefaultValues.userDetail
  );
  const [userRepos, setUserRepos] = useState(
    ResultContextDefaultValues.userRepos
  );
  const [isLoading, setIsLoading] = useState(
    ResultContextDefaultValues.isLoading
  );
  const [error, setError] = useState(ResultContextDefaultValues.error);

  return (
    <ResultContext.Provider
      value={{
        repoResults,
        setRepoResults,
        userResults,
        setUserResults,
        repoDetail,
        setRepoDetail,
        userDetail,
        setUserDetail,
        userRepos,
        setUserRepos,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
