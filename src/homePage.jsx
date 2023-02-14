import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./Components/Home/home";
import useFetch from "./hooks/useFetch";
import { UPDATE_DATA } from "./Redux-toolkit/Recipes";

const HomePage = () => {
  const { DbData: recipes, isPending } = useFetch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UPDATE_DATA({ recipes, isPending }));
  }, [recipes, isPending]);
  return <Home />;
};

export default HomePage;
