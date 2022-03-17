/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * Display Tags - affiche les tags sélectionnés
 * @param {string} element
 */
function displayTag(e, parentToDisplay) {
  recipeMatchedTags = []
  const ilListIng = document.createElement('li')
  if (e.path[2].classList[1] == 'bg-primary') {
    ilListIng.setAttribute(
      'class',
      'tags__item tag mb-2 me-2 px-3 py-2 pe-5 badge  bg-primary d-flex flex-row align-items-center'
      /*
      tag : gére l'icone (scss)
      tag__item : gére l'annimation (scss)
      mb-2 : margin-bottom  $spacer * .5
      me-2 : margin-right $spacer * .5
      px-3 : padding  *-left and *-right  $spacer 
      py-2 : padding  *-top and *-bottom  $spacer 
      pe-5 : padding-right $spacer * 3
      badge : Les badges sont mis à l'échelle pour correspondre à la taille de l'élément parent immédiat en utilisant la taille relative de la police et les unités em
      */
    )
    ilListIng.setAttribute('data-category', 'ingredients')
    ilListIng.setAttribute('tabindex', '0')
  }
  if (e.path[2].classList[1] == 'bg-success') {
    ilListIng.setAttribute(
      'class',
      'tags__item mb-2 me-2 px-3 py-2 pe-5 badge tag bg-success d-flex flex-row align-items-center'
    )
    ilListIng.setAttribute('data-category', 'appliances')
    ilListIng.setAttribute('tabindex', '0')
  }
  if (e.path[2].classList[1] == 'bg-danger') {
    ilListIng.setAttribute(
      'class',
      'tags__item mb-2 me-2 px-3 py-2 pe-5 badge tag bg-danger d-flex flex-row align-items-center'
    )
    ilListIng.setAttribute('data-category', 'ustensils')
    ilListIng.setAttribute('tabindex', '0')
  }

  ilListIng.textContent = e.path[0].innerText
  parentToDisplay.appendChild(ilListIng)
}

function getTags(clickedElement) {
  const tagsItem = document.querySelectorAll('.tags__item')
  const tagsItemIngredients = document.querySelectorAll(
    'li[data-category="ingredients"]'
  )
  const tagsItemAppilances = document.querySelectorAll(
    'li[data-category="appliances"]'
  )
  const tagsItemUstenceils = document.querySelectorAll(
    'li[data-category="ustensils"]'
  )
  const ArrayTags = []
  ArrayTagsItemIngredients = []
  ArrayTagsItemAppilances = []
  ArrayTagsItemUstenceils = []
  recipeMatchedTags = []

  const recipesUses = recipes
  matchedGolbal(clickedElement, recipesUses)
  filtredRecipes = matchedGolbal(clickedElement, recipesUses)
  tagsItem.forEach((tag) => {
    ArrayTags.push(tag.innerText)
  })

  tagsItemIngredients.forEach((tag) => {
    ArrayTagsItemIngredients.push(tag.innerText)
  })
  tagsItemAppilances.forEach((tag) => {
    ArrayTagsItemAppilances.push(tag.innerText)
  })
  tagsItemUstenceils.forEach((tag) => {
    ArrayTagsItemUstenceils.push(tag.innerText)
  })
  ArrayTags.forEach((element) => {
    recipeMatchedTags = [...matchedGolbal(element, ArrrayFiltredElements)]
  })

  manageElementsList(
    recipeMatchedTags,
    ArrayTagsItemIngredients,
    ArrayTagsItemAppilances,
    ArrayTagsItemUstenceils
  )

  displayRecipes(recipeMatchedTags)
  //manageTagsAndSearchBar()
}

function manageTagsAndSearchBar() {
  let searchBarValue = document.querySelector('#search-input').value

  //console.log(valueInputSearchBar)

  let elementsInUl = document.querySelectorAll('#tags ul li')
  //console.log(displayedTag)
  console.log(elementsInUl)
  const elementsTags = []
  if (elementsInUl.length == 0 && searchBarValue.length > 2) {
    removeArticles()
    matchedContents = matchContent(searchBarValue, recipes)

    if (matchedContents.length == 0) {
      document.querySelector('#noResult').style.display = 'block'
    } else {
      document.querySelector('#noResult').style.display = 'none'
      displayRecipes(matchedContents)
      displayElementsList(getIngredients(matchedContents), buttonIngretients)
      displayElementsList(getAppliances(matchedContents), buttonAppliances)
      displayElementsList(getUstensils(matchedContents), buttonUstensils)
    }
  } else if (elementsInUl.length == 0 && searchBarValue.length < 2) {
    document.querySelector('#noResult').style.display = 'none'
    displayRecipes(recipes)
    displayElementsList(getIngredients(recipes), buttonIngretients)
    displayElementsList(getAppliances(recipes), buttonAppliances)
    displayElementsList(getUstensils(recipes), buttonUstensils)
  } else if (elementsInUl.length !== 0 && searchBarValue.length > 2) {
    removeArticles()

    matchedContents = matchContent(searchBarValue, recipeMatchedTags)
    console.log(filtredRecipes)
    console.log(matchedContents)
    if (matchedContents.length == 0) {
      document.querySelector('#noResult').style.display = 'block'
    } else {
      document.querySelector('#noResult').style.display = 'none'
      displayRecipes(matchedContents)

      displayElementsList(getIngredients(matchedContents), buttonIngretients)
      displayElementsList(getAppliances(matchedContents), buttonAppliances)
      displayElementsList(getUstensils(matchedContents), buttonUstensils)
    }
  } else if (elementsInUl.length !== 0 && searchBarValue.length < 2) {
    removeArticles()
    document.querySelector('#noResult').style.display = 'none'
    for (let a = 0; a < elementsInUl.length; a++) {
      elementsTags.push(elementsInUl[a].innerText)
    }
    elementsTags.forEach((tag) => console.log(getTags(tag)))
    console.log(recipeMatchedTags)
    //displayRecipes(recipeMatchedTags)
  } else {
    return false
  }
}
