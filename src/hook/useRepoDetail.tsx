import { useContext } from "react";

import axios, { AxiosError } from "axios";
import { ResultContext } from "../store/result-context";

const useRepoDetail = (url: string) => {
  const { setRepoDetail, setIsLoading, setError } = useContext(ResultContext);

  const getRepositoryDetail = async (
    selectedOwner: string,
    selectedRepo: string
  ) => {
    setIsLoading(true);
    try {
      const getRepoDetail = await axios.get(
        `${url}${selectedOwner}/${selectedRepo}`
      );
      setRepoDetail(getRepoDetail.data);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
    }
    setIsLoading(false);
  };

  return getRepositoryDetail;
};

export default useRepoDetail;
