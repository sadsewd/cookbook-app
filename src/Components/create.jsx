import { useEffect, useState } from "react";
import * as S from "./style";

export default function Create() {
  const [moreIngredients, setMoreIngredients] = useState(false);
  const [CurrentIngredient, setCurrentIngredient] = useState("");
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
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

  //saves the current ingredients input field value upon change
  const handleIngredients = (e) => {
    setCurrentIngredient(e.target.value);
  };

  //when add button is pressed current ingredient field value is saved in the object recipe,
  //purpose of this function is to put all ingredients in one string and add commas when needed
  const setIngredient = () => {
    if (moreIngredients) {
      setRecipe({
        ...recipe,
        ingredients: `${recipe.ingredients} ,${CurrentIngredient}`,
      });
      setCurrentIngredient("");
    } else {
      setRecipe({
        ...recipe,
        ingredients: CurrentIngredient,
      });
      setMoreIngredients(true);
      setCurrentIngredient("");
    }
  };

  const handleSubmit = () => {
    console.log(recipe);
  };

  return (
    <S.CreateContainer>
      <S.CreateHeader>Add a new recipe</S.CreateHeader>
      <S.CreateForm>
        <S.Label htmlFor="title">Recipe title:</S.Label>
        <S.Input
          type="text"
          id="title"
          name="title"
          value={recipe.title}
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
          <S.AddButton onClick={setIngredient} type="button" value="add" />
        </S.Ingredients>
        <S.IngredientsListHeader>
          Current ingredients: {recipe.ingredients}
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
          type="text"
          name="time"
          id="time"
          value={recipe.time}
          onChange={handleInput}
        />
        <S.Submit type="button" onClick={handleSubmit} value="Submit" />
      </S.CreateForm>
    </S.CreateContainer>
  );
}
