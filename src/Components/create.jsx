import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function Create() {
  const navigate = useNavigate();
  const [CurrentIngredient, setCurrentIngredient] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [isPendingTemp, setIsPending] = useState(false);
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    method: "",
    time: "",
  });

  //saves values from input fields where values have changed,
  //this does not include ingredients as that needs to be edited before saving
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  //saves the current ingredients to ingredients array on clicking add
  const addIngredients = () => {
    setIngredient((prevState) => [...prevState, CurrentIngredient]);
    setCurrentIngredient("");
  };

  //sets the ingredients to recipe object after there has been a new ingredient added, this has been done with use effect because if
  // its done when setting ingredient array it does not update the recipe object
  useEffect(() => {
    setRecipe({
      ...recipe,
      ingredients: ingredient,
    });
  }, [ingredient]);

  //saves the current ingredients input field value upon change
  const handleIngredients = (e) => {
    setCurrentIngredient(e.target.value);
  };

  //send the data to the json server and redirects to homepage
  const handleSubmit = () => {
    setIsPending(true);
    fetch("http://192.168.8.130:3001/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <S.CreateContainer>
      <S.CreateHeader>Add a new recipe</S.CreateHeader>
      <S.CreateForm>
        <S.Label htmlFor="name">Recipe title:</S.Label>
        <S.Input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleInput}
        />
        <S.Label htmlFor="ingredients">Recipe ingredients:</S.Label>
        <S.Ingredients>
          <S.IngredientsInput
            type="text"
            id="ingredients"
            value={CurrentIngredient}
            onChange={handleIngredients}
          />
          <S.AddButton onClick={addIngredients} type="button" value="add" />
        </S.Ingredients>
        <S.IngredientsListHeader>
          Current ingredients: {ingredient.toString()}
        </S.IngredientsListHeader>
        <S.Label htmlFor="cookingMethod">Recipe method:</S.Label>
        <S.TextArea
          id="cookingMethod"
          name="method"
          cols="30"
          rows="10"
          value={recipe.method}
          onChange={handleInput}
        ></S.TextArea>
        <S.Label htmlFor="time">Cooking time (in minutes):</S.Label>
        <S.Input
          type="number"
          name="time"
          id="time"
          value={recipe.time}
          onChange={handleInput}
        />
        {!isPendingTemp && (
          <S.Submit type="button" onClick={handleSubmit} value="Submit" />
        )}
        {isPendingTemp && (
          <S.Submit type="button" disabled value="Adding recipe..." />
        )}
      </S.CreateForm>
    </S.CreateContainer>
  );
}
