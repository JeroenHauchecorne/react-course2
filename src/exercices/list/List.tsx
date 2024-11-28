import { recipes } from "./data";


export const List = () => {
  const recipesWithGarlic = recipes.filter((x) =>
    x.ingredients.includes("garlic")
  );
  const recipesWithoutGarlic = recipes.filter(
    (x) => !x.ingredients.includes("garlic")
  );
  return (
    <div>
      <h1>Recipes with garlic</h1>
      {recipesWithGarlic.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}

      <h1>Recipes without garlic</h1>
      {recipesWithoutGarlic.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
