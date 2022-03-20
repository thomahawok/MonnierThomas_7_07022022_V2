/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * matchContent - filtre les recettes en fonction de l'input de la searchBar et
 * des recettes qui lui sont transmises.
 **/
function matchContent(request, filtredRecipes) {
  matchedContents = []
  let brutRecipesMatched = []
  let recipesMatched = []
  console.time('recipesMatched')
  for (let i = 0; i < filtredRecipes.length; i++) {
    for (let j = 0; j < filtredRecipes[i].ingredients.length; j++) {
      for (let k = 0; k < filtredRecipes[i].ustensils.length; k++) {
        if (
          filtredRecipes[i].name.toLowerCase().includes(request) ||
          filtredRecipes[i].description.toLowerCase().includes(request) ||
          filtredRecipes[i].ingredients[j].ingredient
            .toLowerCase()
            .includes(request) ||
          filtredRecipes[i].appliance.toLowerCase().includes(request) ||
          filtredRecipes[i].ustensils[k].toLowerCase().includes(request)
        ) {
          brutRecipesMatched.push(filtredRecipes[i])
        }
      }
    }
  }
  console.timeEnd('recipesMatched')
  recipesMatched = [...new Set(brutRecipesMatched)]
  return recipesMatched
}

/**
 * matchedGolbal - filtre les recettes en fonction des élements sélectionnés et
 * des recettes qui lui sont transmises.
 **/
function matchedGolbal(request, recipes) {
  console.time('filteredElements')
  matchedIngredients = []
  let matchedIngredientsTag = []

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      if (
        recipes[i].ingredients[j].ingredient.toLowerCase().includes(request)
      ) {
        matchedIngredientsTag.push(recipes[i])
      }
    }
  }

  matchedAppilances = []
  let matchedAppilancesTag = []
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].appliance.toLowerCase().includes(request)) {
      matchedAppilancesTag.push(recipes[i])
    }
  }

  matchedUstensils = []
  let matchedUstensilsTag = []
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ustensils.length; j++) {
      if (recipes[i].ustensils[j].toLowerCase().includes(request)) {
        matchedUstensilsTag.push(recipes[i])
      }
    }
  }

  const IngredeintApplianceConcnat =
    matchedIngredientsTag.concat(matchedAppilancesTag)
  const recipesMatched = IngredeintApplianceConcnat.concat(matchedUstensilsTag)
  const filteredElements = [...new Set(recipesMatched)]
  ArrrayFiltredElements = [...filteredElements]
  console.timeEnd('filteredElements')
  return filteredElements
}
