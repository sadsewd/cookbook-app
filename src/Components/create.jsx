import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function Create() {
  const navigate = useNavigate();
  const [CurrentIngredient, setCurrentIngredient] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [],
    method: "",
    time: "",
    id: "",
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
    console.log(ingredient);
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

  //right now only redirects back to home page but should save date to the db after submitting
  const handleSubmit = () => {
    navigate("/");
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
        <S.Submit type="button" onClick={handleSubmit} value="Submit" />
      </S.CreateForm>
    </S.CreateContainer>
  );
}
