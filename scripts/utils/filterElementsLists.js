/* eslint-disable no-unused-vars */

function getIngredients(filtredRecipes, tagsItemIngredients) {
  const ingredients = []
  console.time('timer ForEach')
  Object.keys(filtredRecipes).forEach((key) => {
    let recipeIng = filtredRecipes[key].ingredients
    Object.keys(recipeIng).forEach((key) => {
      let recipeIngIng = recipeIng[key].ingredient
      ingredients.push(recipeIngIng.toLowerCase())
    })
  })
  console.timeEnd('timer ForEach')
  console.timeLog('timer ForEach')
  return filterElementList(ingredients, tagsItemIngredients)
}

function getAppliances(filtredRecipes, tagsItemAppilances) {
  const appliances = []
  Object.keys(filtredRecipes).forEach((key) => {
    let recipeAppliance = filtredRecipes[key].appliance
    appliances.push(recipeAppliance.toLowerCase())
  })
  return filterElementList(appliances, tagsItemAppilances)
}

function getUstensils(filtredRecipes, tagsItemUstenceils) {
  let ustensils = []
  filtredRecipes.forEach((recipe) =>
    recipe.ustensils.forEach((ustensil) =>
      ustensils.push(ustensil.toLowerCase())
    )
  )
  return filterElementList(ustensils, tagsItemUstenceils)
}

function filterElementList(getedElements, anyArrayTags) {
  console.log(anyArrayTags)
  const filteredElement = getedElements.filter(onlyUniqueInliste)
  filteredElement.sort((a, b) => a.localeCompare(b))
  if (anyArrayTags) {
    return filterListeAndTags(filteredElement, anyArrayTags)
  } else {
    return filteredElement
  }
}

function onlyUniqueInliste(value, index, self) {
  return self.indexOf(value) === index
}

function filterListeAndTags(filteredElement, anyArrayTags) {
  let symetricDifference = []
  console.log(anyArrayTags)
  symetricDifference = [
    ...anyArrayTags.filter((v) => !filteredElement.includes(v)),
    ...filteredElement.filter((f) => !anyArrayTags.includes(f)),
  ]
  return symetricDifference
}
