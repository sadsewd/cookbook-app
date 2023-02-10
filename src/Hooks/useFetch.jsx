import { useState, useEffect } from "react";

const useFetch = () => {
  const [DbData, setDbData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://192.168.8.130:3001/recipes")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setDbData(data);
        setIsPending(false);
      });
  }, []);

  return { DbData, isPending };
};

export default useFetch;
