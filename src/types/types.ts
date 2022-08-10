export interface IListItemLinkProps {
  icon: React.ReactElement;
  primary: string;
  count: string;
  to: string;
}
export interface IBaseRepositoryProps {
  id: number;
  fullName: string;
  description: string;
  name: string;
  handleRepositoryDetail: (arg0: string, arg1: string) => void;
  login: string;
}

export interface IRepository {
  id: number;
  description: string;
  name: string;
  handleRepositoryDetail: (arg0: string, arg1: string) => void;
  full_name: string;
  owner: {
    login: string;
  };
}

export type TotalCount = {
  total_count: number;
};

export interface IRepoSearchResults {
  count: number;
  repoSearch: IRepository[];
}

export interface IRepoMainViewProps {
  searchRepoResults: IRepository[];
  repoCount: string;
  getRepoDetail: (arg0: string, arg1: string) => void;
}

export interface IUserMainViewProps {
  searchUsersResults: IUsers[];
  userCount: string;
  getUserDetail: (arg0: string) => void;
}
export interface IUsers {
  id: number;
  login: string;
  avatar_url: string;
  handleUserDetail: (arg0: string) => void;
}

export interface IUserSearchResults {
  count: number;
  userSearch: IUsers[];
}

export interface IRepositoryDetail {
  id: number;
  branches_url: number;
  clone_url: string;
  description: string;
  full_name: string;
  open_issues: number;
  forks: number;
  watchers: number;
  stargazers_count: number;
  subscribers_count: number;
  name: string;
  owner: {
    login: string;
  };
}

export interface IRepoDetails {
  owner: string;
  name: string;
  id: number;
  fullName: string;
  watch: number;
  star: number;
  forks: number;
  branches: number;
  issues: number;
  pullRequests: number;
  description: string;
  link: string;
}

export interface IDetailItemProps {
  icon?: React.ReactElement;
  text?: string;
  number?: React.ReactNode;
}

export interface IUsersDetail {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
}

export interface IUsersDetailProps {
  avatar: string;
  name: string;
  login: string;
  bio: string;
  userRepoCount: number;
  getRepoDetail: (arg0: string, arg1: string) => void;
  userRepositoryList: IRepository[];
}

export interface IBookmarkListProps {
  getRepoDetail: (arg0: string, arg1: string) => void;
}

export type ErrorProps = {
  alertText: string;
  handleErrorClose?: () => void;
};
