import React, { ReactNode, useState } from "react";

type InputContexProps = {
  children: ReactNode;
};

type InputContextObj = {
  searchText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputContex = React.createContext<InputContextObj>({
  searchText: "",
  handleChange: () => null,
});

export const InputContexProvider = ({ children }: InputContexProps) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  //   console.log("text", searchText);

  return (
    <InputContex.Provider
      value={{ searchText: searchText, handleChange: handleChange }}
    >
      {children}
    </InputContex.Provider>
  );
};
