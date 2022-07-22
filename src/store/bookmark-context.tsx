import React, { ReactNode, useEffect, useState } from "react";
import { IRepoDetailsProps } from "../types/types";

type BookmarkContextObj = {
  bookmarkList: IRepoDetailsProps[];
  addBookmarks: (repo: IRepoDetailsProps) => void;
  deleteBookmarks: (id: number) => void;
};

export const BookmarkContext = React.createContext<BookmarkContextObj>({
  bookmarkList: [],
  addBookmarks: () => null,
  deleteBookmarks: () => null,
});

export const BookmarkContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [bookmarkList, setBookmarkList] = useState<Array<IRepoDetailsProps>>(
    []
  );

  useEffect(() => {
    const bookmarkedRepos = JSON.parse(
      localStorage.getItem("react-bookmarked-repos") || ""
    );
    setBookmarkList(bookmarkedRepos);
  }, []);

  const saveToLocalStroage = (repos: IRepoDetailsProps[]) => {
    localStorage.setItem("react-bookmarked-repos", JSON.stringify(repos));
  };

  const addBookmarks = (repo: IRepoDetailsProps) => {
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
  console.log("Bookmark list", bookmarkList);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkList: bookmarkList,
        addBookmarks: addBookmarks,
        deleteBookmarks: deleteBookmarks,
      }}
    >
      {props.children}
    </BookmarkContext.Provider>
  );
};
