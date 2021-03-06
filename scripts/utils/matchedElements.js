/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * matchContent - filtre les recettes en fonction de l'input de la searchBar et
 * des recettes qui lui sont transmises.
 **/
function matchContent(request, filtredRecipes) {
  matchedContents = []
  let recipesMatched = filtredRecipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(request) ||
      recipe.description.toLowerCase().includes(request) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(request)
      ) ||
      recipe.appliance.toLowerCase().includes(request) ||
      recipe.ustensils.some((ustensil) =>
        ustensil.toLowerCase().includes(request)
      )
    )
  })
  return recipesMatched
}

/**
 * matchedGolbal - filtre les recettes en fonction des élements sélectionnés et
 * des recettes qui lui sont transmises.
 **/
function matchedGolbal(request, recipes) {
  matchedIngredients = []
  let matchedIngredientsTag = recipes.filter((recipe) => {
    return recipe.ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(request)
    )
  })

  matchedAppilances = []
  let matchedAppilancesTag = recipes.filter((recipe) => {
    return recipe.appliance.toLowerCase().includes(request)
  })

  matchedUstensils = []
  let matchedUstensilsTag = recipes.filter((recipe) => {
    return recipe.ustensils.some((ustensil) =>
      ustensil.toLowerCase().includes(request)
    )
  })

  const IngredeintApplianceConcnat =
    matchedIngredientsTag.concat(matchedAppilancesTag)
  const recipesMatched = IngredeintApplianceConcnat.concat(matchedUstensilsTag)
  filteredElements = [...new Set(recipesMatched)]
  return filteredElements
}
