function dropDown(eventPath, placeholder) {
  if (eventPath.attributes[0].ownerElement.classList[6] == 'filter--active') {
    eventPath.classList.remove('filter--active')
    eventPath.firstElementChild.value = ''
    if (placeholder == 'Rechercher un ingrédient') {
      eventPath.firstElementChild.attributes[6].value = 'Ingrédients'
    }
    if (placeholder == 'Rechercher un appareils') {
      eventPath.firstElementChild.attributes[6].value = 'Appareils'
    }
    if (placeholder == 'Rechercher un ustensils') {
      eventPath.firstElementChild.attributes[6].value = 'Ustensiles'
    }
  } else {
    eventPath.classList.add('filter--active')
    if (placeholder == 'Ingrédients') {
      eventPath.firstElementChild.attributes[6].value =
        'Rechercher un ingrédient'
    }
    if (placeholder == 'Appareils') {
      eventPath.firstElementChild.attributes[6].value =
        'Rechercher un appareils'
    }
    if (placeholder == 'Ustensiles') {
      eventPath.firstElementChild.attributes[6].value =
        'Rechercher un ustensils'
    }
  }
}

function manageElementsList(
  filtredRecipes,
  ArrayTagsItemIngredients,
  ArrayTagsItemAppilances,
  ArrayTagsItemUstenceils
) {
  displayElementsList(
    getIngredients(filtredRecipes, ArrayTagsItemIngredients),
    buttonIngretients,
    'ingredient'
  )

  displayElementsList(
    getAppliances(filtredRecipes, ArrayTagsItemAppilances),
    buttonAppliances,
    'appilance'
  )

  displayElementsList(
    getUstensils(filtredRecipes, ArrayTagsItemUstenceils),
    buttonUstensils,
    'ustensil'
  )
}

function filtreIngredientsLists(e, ArrayListElements) {
  let matchedList = ArrayListElements.filter((element) => {
    return element.includes(e.target.value)
  })
  let matchedListNoDouble = matchedList.filter(onlyUniqueInliste)
  console.log(matchedList)
  return matchedListNoDouble
}

function getElementList(ingredeintsListChildren) {
  for (let i = 0; i < ingredeintsListChildren.length; i++) {
    ArrayListElements.push(ingredeintsListChildren[i].innerText)
  }

  return ArrayListElements
}

/**
 * DisplayListe - affiche les listes des éléments au dessous des bouttons
 * @param {Array} elements
 * @param {balise}
 */

function displayElementsList(recipesMatch, button, category) {
  /* 1. efface la liste */
  const ingredientsInDropDown = button.lastElementChild
  while (ingredientsInDropDown.firstChild) {
    ingredientsInDropDown.removeChild(ingredientsInDropDown.firstChild)
  }

  /* 2. affiche la liste mise à jour*/
  recipesMatch.forEach((element) => {
    const ilListIng = document.createElement('li')
    ilListIng.setAttribute('class', 'filter__item col-4  col-sm-6 col-md-4')
    ilListIng.setAttribute('data-category', category)
    ilListIng.setAttribute('tabindex', '0')
    ilListIng.textContent = element
    button.lastElementChild.appendChild(ilListIng)
  })
}
