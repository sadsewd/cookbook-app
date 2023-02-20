import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Details from "./Components/details";
import useFetch from "./hooks/useFetch";
import { UPDATE_DATA } from "./Redux-toolkit/Recipes";
import url from "./url";

const DetailsPage = () => {
  const { DbData: recipes, isPending } = useFetch(url);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UPDATE_DATA({ recipes, isPending }));
  }, [recipes, isPending]);
  return <Details />;
};

export default DetailsPage;
