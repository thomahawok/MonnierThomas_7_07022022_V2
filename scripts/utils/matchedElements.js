/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * matchContent - filtre les recettes en fonction de l'input de la searchBar et
 * des recettes qui lui sont transmises.
 **/
function matchContent(request, filtredRecipes) {
  matchedContents = []
  console.time('recipesMatched')
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
  console.timeEnd('recipesMatched')
  return recipesMatched
}

/**
 * matchedGolbal - filtre les recettes en fonction des élements sélectionnés et
 * des recettes qui lui sont transmises.
 **/
function matchedGolbal(request, recipes) {
  matchedIngredients = []
  console.time('filteredElements')
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
  const filteredElements = [...new Set(recipesMatched)]
  ArrrayFiltredElements = [...filteredElements]
  console.timeEnd('filteredElements')
  return filteredElements
}
