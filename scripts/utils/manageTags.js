/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * Display Tags - affiche les tags sélectionnés
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

/**
 *  getTags - récupère les tags affichés
 */
function getTags() {
  ArrayTags = []
  arrayTagsItemIngredients = []
  arrayTagsItemAppilances = []
  arrayTagsItemUstenceils = []
  recipeMatchedTags = []
  const elementsTags = []
  let elementsInUl = document.querySelectorAll('#tags ul li')

  for (let a = 0; a < elementsInUl.length; a++) {
    elementsTags.push(elementsInUl[a].innerText)
  }

  const recipesUses = recipes
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

  tagsItem.forEach((tag) => {
    ArrayTags.push(tag.innerText)
  })

  elementsTags.forEach((tag) => {
    /* filtredRecipes - récupére les recettes corresepondantes au tag fermé*/
    /* est utilisé pour gérer les listes d'ingrédients (getIngredients, getAppliances...)*/
    /* est renvoyer également à mactcContent pour gérer les recettes à filtrer de la SeachBar*/
    filtredRecipes = matchedGolbal(tag, recipesUses)

    tagsItemIngredients.forEach((tag) => {
      arrayTagsItemIngredients.push(tag.innerText)
    })
    tagsItemAppilances.forEach((tag) => {
      arrayTagsItemAppilances.push(tag.innerText)
    })
    tagsItemUstenceils.forEach((tag) => {
      arrayTagsItemUstenceils.push(tag.innerText)
    })
  })

  /* ArrayTags.forEach... - récupére les recettes filtrer sans reprendre l'ensemble des recettes*/
  ArrayTags.forEach((element) => {
    recipeMatchedTags = matchedGolbal(element, filteredElements)
  })
}
