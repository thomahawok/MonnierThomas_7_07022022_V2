/* eslint-disable no-unused-vars */
/**
 * getIngredients - récupère la lise des ingrédeints en fonction des recettes qui lui sont transmise
 * et retourne la liste sans doublon.
 **/
function getIngredients(filtredRecipes, tagsItemIngredients) {
  const ingredients = []
  for (let i = 0; i < filtredRecipes.length; i++) {
    for (let j = 0; j < filtredRecipes[i].ingredients.length; j++) {
      let recipeIngIng = filtredRecipes[i].ingredients[j].ingredient
      ingredients.push(recipeIngIng.toLowerCase())
    }
  }
  return filterElementList(ingredients, tagsItemIngredients)
}

/**
 * getAppliances - récupère la lise des appareils en fonction des recettes qui lui sont transmise
 * et retourne la liste sans doublon.
 **/
function getAppliances(filtredRecipes, tagsItemAppilances) {
  const appliances = []
  for (let i = 0; i < filtredRecipes.length; i++) {
    let recipeAppliance = filtredRecipes[i].appliance
    appliances.push(recipeAppliance.toLowerCase())
  }
  return filterElementList(appliances, tagsItemAppilances)
}

/**
 * getUstensils - récupère la lise des ustensils en fonction des recettes qui lui sont transmise
 * et retourne la liste sans doublon.
 **/
function getUstensils(filtredRecipes, tagsItemUstenceils) {
  let ustensils = []
  for (let i = 0; i < filtredRecipes.length; i++) {
    for (let j = 0; j < filtredRecipes[i].ustensils.length; j++) {
      let ustensilList = filtredRecipes[i].ustensils[j]
      ustensils.push(ustensilList.toLowerCase())
    }
  }
  return filterElementList(ustensils, tagsItemUstenceils)
}

/**
 * filterElementList - retoune une liste d'élement (ingrédients, appareils, ustensils) sans doublon
 *
 **/
function filterElementList(getedElements, anyArrayTags) {
  const filteredElement = [...new Set(getedElements)]
  bubbleSort(filteredElement)
  if (anyArrayTags) {
    return difference(filteredElement, anyArrayTags)
  } else {
    return filteredElement
  }
}

/**
/*bubbleSort - compare deux éléments consécutif en avancent dans le tableau*/
/*on parcourt la liste à trier du début à la fin, lorsque l’on
rencontre deux éléments consécutifs qui ne sont pas dans
l’ordre, on les permute. Si l’on parcourt la liste sans rencontrer d’éléments
consécutifs en désordre, alors la liste est triée.
**/
function bubbleSort(arr) {
  let length = arr.length
  /* pour chaque élément du tableau :  -  */
  for (let i = 0; i < length; i++) {
    /* n oérations */
    /* pour chaque élément du tableau -1: */
    for (let j = 0; j < length - i - 1; j++) {
      /* n-1 opérations*/
      /* on compare deux éléments consécutifs - 
      si l'avant dernière valeur du tableur et infférieur à la dernère*/
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        /* on permure les deux élements */
        arr[j] = arr[j + 1] /* (n-1)* (n-1) opérations au plus*/
        arr[j + 1] = tmp /* (n-1)* (n-1) opérations au plus*/
      }
    }
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
function difference(filteredElement, anyArrayTags) {
  let symetricDifference = []
  let i = 0,
    j = 0
  let flag = false

  for (i = 0; i < filteredElement.length; i++) {
    /* Réinitialise le drapeau et l'autre itérateur de tableau */
    j = 0
    flag = false
    while (j != anyArrayTags.length) {
      if (filteredElement[i] == anyArrayTags[j]) {
        flag = true
        break
      }
      j++
    }

    /* Si la valeur n'est pas présente dans le deuxième tableau, poussez cette valeur
      au tableau symetricDifference */
    if (!flag) {
      symetricDifference.push(filteredElement[i])
    }
  }
  flag = false

  /* Pour anyArrayTags */
  for (i = 0; i < anyArrayTags.length; i++) {
    /* Réinitialise le drapeau et l'autre itérateur de tableau */
    j = 0
    flag = false
    while (j != filteredElement.length) {
      if (anyArrayTags[i] == filteredElement[j]) {
        flag = true
        break
      }
      j++
    }

    /* Si la valeur n'est pas présente dans le premier tableau, poussez cette valeur
      au tableau symetricDifference */
    if (!flag) {
      symetricDifference.push(anyArrayTags[i])
    }
  }
  return symetricDifference
}
/* 
function filterListeAndTags(filteredElement, anyArrayTags) {
  let symetricDifference = []
  symetricDifference = [
    ...anyArrayTags.filter((v) => !filteredElement.includes(v)),
    ...filteredElement.filter((f) => !anyArrayTags.includes(f)),
  ]
  return symetricDifference
}
*/

/**
 * filtreElementsListOnInput - filtre les élements (ingrédients, appareils, ustensils)en fonction des mots tapés
 * dans l'input des bouttons.
 **/
function filtreElementsListOnInput(e, ArrayListElements) {
  let matchedList = []
  for (let i = 0; i < ArrayListElements.length; i++) {
    if (ArrayListElements[i].includes(e.target.value))
      matchedList.push(ArrayListElements[i].toLowerCase())
  }
  let matchedListNoDouble = [...new Set(matchedList)]
  return matchedListNoDouble
}
