import React from "react";

const STORAGE_KEY = "@rewards";

const useRewardStorage = () => {
  const [storedRewards, setStoredRewards] = React.useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );
  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedRewards));
  }, [storedRewards]);
  return [storedRewards, setStoredRewards];
};

export default useRewardStorage;
