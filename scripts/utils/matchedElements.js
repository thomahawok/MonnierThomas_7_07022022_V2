/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function matchContent(request, filtredRecipes) {
  console.log(request)
  console.log(filtredRecipes)
  matchedContents = []
  let recipesMatched = filtredRecipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(request) ||
      recipe.description.toLowerCase().includes(request) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(request)
      ) ||
      recipe.ustensils.some((ustensil) =>
        ustensil.toLowerCase().includes(request)
      )
    )
  })
  console.log(recipesMatched)
  return recipesMatched
}

function matchedGolbal(request, recipes) {
  console.log(request)

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
  const filteredElements = recipesMatched.filter(onlyUniqueInliste)
  //console.log(filteredElements)
  ArrrayFiltredElements = [...filteredElements]
  //console.log(ArrrayFiltredElements)
  return filteredElements
}
