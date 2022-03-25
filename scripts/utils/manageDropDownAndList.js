/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * buttonInputPlaceHolder - Au click, modifie l'intitulé du "placeholder" des bouttons
 **/
function buttonInputPlaceHolder(eventPath, placeholder) {
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

/**
 * manageElementsList - Gère la liste des éléments (ingrédients, appareils, ustensils)
 **/
function manageElementsList(
  filtredRecipes,
  arrayTagsItemIngredients,
  arrayTagsItemAppilances,
  arrayTagsItemUstenceils
) {
  displayElementsList(
    getIngredients(filtredRecipes, arrayTagsItemIngredients),
    buttonIngretients,
    'ingredient'
  )

  displayElementsList(
    getAppliances(filtredRecipes, arrayTagsItemAppilances),
    buttonAppliances,
    'appilance'
  )

  displayElementsList(
    getUstensils(filtredRecipes, arrayTagsItemUstenceils),
    buttonUstensils,
    'ustensil'
  )
}

/**
 * getElementList - A l'input sur un boutton, récupère la liste des éléments associés
 **/
function getElementList(ingredeintsListChildren) {
  for (let i = 0; i < ingredeintsListChildren.length; i++) {
    arrayListElements.push(ingredeintsListChildren[i].innerText)
  }
  return arrayListElements
}

/**
 * displayElementsList - Affiche les listes des éléments au dessous des bouttons
 **/
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
