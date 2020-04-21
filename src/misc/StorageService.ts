import React from "react";

const STORAGE_KEY = "@rewards";

const useRewardStorage = () => {
  const [rewards, setRewards] = React.useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );
  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rewards));
  }, [rewards]);
  return [rewards, setRewards];
};

export default useRewardStorage;
