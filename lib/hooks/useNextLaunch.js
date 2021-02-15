import { useEffect, useState } from "react";
import axios from "redaxios";

const useNextLaunch = (options = { enabled: true }) => {
  const [nextLaunch, setNextLaunch] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getNextLaunch = () => {
    setIsLoading(true);
    axios("https://api.spacexdata.com/v4/launches/next")
      .then((res) => {
        setNextLaunch(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log("but now it should", options.enabled);
    if (options.enabled) {
      getNextLaunch();
    }
  }, []);

  return {
    isLoading,
    nextLaunch,
    getNextLaunch,
  };
};

export default useNextLaunch;
