import { useEffect } from "react";
import Home from "./Components/Home/home";
import { useData } from "./Hooks/useData";
import useFetch from "./hooks/useFetch";

const HomePage = () => {
  const { DbData: recipes, isPending } = useFetch();
  const { refetchData } = useData();
  useEffect(() => {
    refetchData({ recipes, isPending });
  }, [recipes, isPending]);
  return <Home />;
};

export default HomePage;
