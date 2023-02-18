import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Details from "./Components/details";
import useFetch from "./hooks/useFetch";
import { UPDATE_DATA } from "./Redux-toolkit/Recipes";

const DetailsPage = () => {
  const { DbData: recipes, isPending } = useFetch();
  const dispatch = useDispatch();
  let { id } = useParams();
  id -= 1;
  useEffect(() => {
    dispatch(UPDATE_DATA({ recipes, isPending }));
  }, [recipes, isPending]);
  return <Details id={id} />;
};

export default DetailsPage;
