/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * getIngredients - récupère la lise des ingrédeints en fonction des recettes qui lui sont transmise
 * et retourne la liste sans doublon.
 **/
function getIngredients(filtredRecipes, tagsItemIngredients) {
  const ingredients = []
  Object.keys(filtredRecipes).forEach((key) => {
    let recipeIng = filtredRecipes[key].ingredients
    Object.keys(recipeIng).forEach((key) => {
      let recipeIngIng = recipeIng[key].ingredient
      ingredients.push(recipeIngIng.toLowerCase())
    })
  })

  let newFilteredElementIng = []
  const filteredElementIng = filterElementList(ingredients, tagsItemIngredients)

  newFilteredElementIng = filteredElementIng.filter(
    (element) => !ArrayTags.includes(element)
  )
  return newFilteredElementIng
}

/**
 * getAppliances - récupère la lise des appareils en fonction des recettes qui lui sont transmise
 * et retourne la liste sans doublon.
 **/
function getAppliances(filtredRecipes, tagsItemAppilances) {
  const appliances = []
  Object.keys(filtredRecipes).forEach((key) => {
    let recipeAppliance = filtredRecipes[key].appliance
    appliances.push(recipeAppliance.toLowerCase())
  })
  return filterElementList(appliances, tagsItemAppilances)
}

/**
 * getUstensils - récupère la lise des ustensils en fonction des recettes qui lui sont transmise
 * et retourne la liste sans doublon.
 **/
function getUstensils(filtredRecipes, tagsItemUstenceils) {
  let ustensils = []
  filtredRecipes.forEach((recipe) =>
    recipe.ustensils.forEach((ustensil) =>
      ustensils.push(ustensil.toLowerCase())
    )
  )
  return filterElementList(ustensils, tagsItemUstenceils)
}

/**
 * filterElementList - retoune une liste d'élement (ingrédients, appareils, ustensils) sans doublon
 *
 **/
function filterElementList(getedElements, anyArrayTags) {
  const filteredElement = [...new Set(getedElements)]
  filteredElement.sort((a, b) => a.localeCompare(b))
  if (anyArrayTags) {
    return filterListeAndTags(filteredElement, anyArrayTags)
  } else {
    return filteredElement
  }
}

/**
 * onlyUniqueInliste - Supprime les doublons.
 * onlyUniqueInliste - plus utilisée - remplacée par [...new Set(quelquechose)].
 **/
function onlyUniqueInliste(value, index, self) {
  return self.indexOf(value) === index
}

/**
 * filterListeAndTags - Retourne les éléments communs aux listes d'élements
 * (ingrédients, appareils, ustensils) et au Tags affichés.
 **/
function filterListeAndTags(filteredElement, anyArrayTags) {
  let symetricDifference = []
  symetricDifference = [
    ...anyArrayTags.filter((v) => !filteredElement.includes(v)),
    ...filteredElement.filter((f) => !anyArrayTags.includes(f)),
  ]
  return symetricDifference
}

/**
 * filtreElementsListOnInput - filtre les élements (ingrédients, appareils, ustensils)en fonction des mots tapés
 * dans l'input des bouttons.
 **/
function filtreElementsListOnInput(e, ArrayListElements) {
  let matchedList = ArrayListElements.filter((element) => {
    return element.includes(e.target.value)
  })
  let matchedListNoDouble = matchedList.filter(onlyUniqueInliste)
  return matchedListNoDouble
}
