import React, { ReactNode, useEffect, useState } from "react";

import { IRepoDetails } from "../types/types";

type BookmarkProps = {
  children: ReactNode;
};

type BookmarkContextObj = {
  bookmarkList: IRepoDetails[];
  addBookmarks: (repo: IRepoDetails) => void;
  deleteBookmarks: (id: number) => void;
};

export const BookmarkContext = React.createContext<BookmarkContextObj>({
  bookmarkList: [],
  addBookmarks: () => null,
  deleteBookmarks: () => null,
});

export const BookmarkContextProvider = ({ children }: BookmarkProps) => {
  const [bookmarkList, setBookmarkList] = useState<Array<IRepoDetails>>([]);

  useEffect(() => {
    const bookmarkedRepos = JSON.parse(
      localStorage.getItem("react-bookmarked-repos") || "[]"
    );
    setBookmarkList(bookmarkedRepos);
  }, []);

  const saveToLocalStroage = (repos: IRepoDetails[]) => {
    localStorage.setItem("react-bookmarked-repos", JSON.stringify(repos));
  };

  const addBookmarks = (repo: IRepoDetails) => {
    const newBookmarkList = [...bookmarkList, repo];
    setBookmarkList(newBookmarkList);
    saveToLocalStroage(newBookmarkList);
  };
  const deleteBookmarks = (id: number) => {
    const newBookmarkList = [
      ...bookmarkList.filter((found) => found.id !== id),
    ];
    setBookmarkList(newBookmarkList);
    saveToLocalStroage(newBookmarkList);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkList: bookmarkList,
        addBookmarks: addBookmarks,
        deleteBookmarks: deleteBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
