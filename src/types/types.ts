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

export interface IUsers {
  id: number;
  login: string;
  avatar_url: string;
  handleUserDetail: (arg0: string) => void;
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

export interface IRepoDetailsProps {
  owner: string;
  name: string;
  id: number;
  fullName: string;
  watch: number;
  star: number;
  fork: number;
  branch: number;
  issues: number;
  pullRequest: number;
  description: string;
  link?: string;
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
  handleRepositoryDetail: (arg0: string, arg1: string) => void;
  userRepositoryList: IRepository[];
}

export interface IBookmarkListProps {
  handleRepositoryDetail: (arg0: string, arg1: string) => void;
}
