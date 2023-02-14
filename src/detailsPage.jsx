import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Components/details";
import { useData } from "./Hooks/useData";
import useFetch from "./hooks/useFetch";

const DetailsPage = () => {
  const { DbData: recipes, isPending } = useFetch();
  const { refetchData } = useData();
  let { id } = useParams();
  id -= 1;
  useEffect(() => {
    refetchData({ recipes, isPending });
  }, [recipes, isPending]);
  return <Details id={id} />;
};

export default DetailsPage;
