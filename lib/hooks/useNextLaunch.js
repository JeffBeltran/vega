import { useQuery } from "react-query";
import axios from "redaxios";

const useNextLaunch = (options) => {
  return useQuery(
    "launches-next",
    async () => {
      const { data } = await axios(
        "https://api.spacexdata.com/v4/launches/next"
      );
      return data;
    },
    { ...options }
  );
};

export default useNextLaunch;
