import * as S from "./style";
import { useData } from "../Hooks/useData";

export default function Home() {
  const { data } = useData();
  console.log(data);
  return <p>hom</p>;
}
