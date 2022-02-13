import { useEffect, useState } from "react";

export const useCheckCounter = (total, className) => {
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    setIsChanged(true);
    const interval = setTimeout(() => {
      setIsChanged(false);
    }, 500);
    return () => clearTimeout(interval);
  }, [total]);
  return isChanged && className;
};
