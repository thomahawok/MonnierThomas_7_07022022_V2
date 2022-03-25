/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let matchedContents = []
let matchedIngredients = []
let matchedAppilances = []
let matchedUstensils = []
let filtredRecipes = []
let recipeMatchedTags = []
let filteredElements = []
let arrayTagsItemIngredients = []
let arrayTagsItemAppilances = []
let arrayTagsItemUstenceils = []
let arrayListElements = []
let ArrayTags = []

const buttonIngretients = document.querySelector('.bg-primary')
const buttonAppliances = document.querySelector('.bg-success')
const buttonUstensils = document.querySelector('.bg-danger')

class Main {
  constructor(recipes) {
    this._recipes = recipes
  }
  main() {
    manageDisplay()

    /** Ecoute input de la searchbar **/
    const searchInput = document.querySelector('.form-control')
    searchInput.addEventListener('input', (e) => {
      const searchBarValue = e.target.value
      const elementsInUl = e.path[3].children[1].children[0].children
      manageDisplay(searchBarValue, elementsInUl)
    })

    /** Ecoute les listes d'élémnts (ingrédients, appareils, ustensils) pour afficher les tags sélectionnés **/
    const elementList = document.querySelectorAll('.filter ul')
    elementList.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.stopPropagation()
        const ulElementDomTag = e.path[5].children[1].children[0]
        const inputPlaceHoder = e.path[2].children[0].placeholder
        const divButton = e.path[2]
        if (e.target.tagName == 'LI') {
          displayTag(e, ulElementDomTag)
          buttonInputPlaceHolder(divButton, inputPlaceHoder)
          manageDisplay()
          arrayListElements = []
        }
        {
          return false
        }
      })
    })

    /** effacer les tags sélectionnés **/
    const tags = document.querySelector('#tags ul')
    tags.addEventListener('click', (e) => {
      if (e.target.tagName == 'LI') {
        e.target.remove()
      } else {
        return false
      }
      manageDisplay()
    })

    /** Ecoute les boutton "input"**/
    const btnFilter = document.querySelectorAll('.filter')
    btnFilter.forEach((button) => {
      button.addEventListener('click', (e) => {
        const eventPath = e.path[0]
        const placeholder = e.path[0].children[0].placeholder
        buttonInputPlaceHolder(eventPath, placeholder)
      })
      button.addEventListener('input', (e) => {
        const arrayElementsListDropDown = getElementList(
          button.children[1].children
        )
        const newIngredeintList = filtreElementsListOnInput(
          e,
          arrayElementsListDropDown
        )
        displayElementsList(newIngredeintList, button)
      })
    })
  }
}
const app = new Main(recipes)
app.main()

/**
 * manageDisplay - Gère l'affichage des recettes listes d'élements et message de recettes non trouvés en fonction des cas :
 * - Uniquement la serachBar (plus de trois lettre ou pas),
 * - Uniquement les Tags
 * - SerachBar et Tags (ou inversement)
 **/
function manageDisplay() {
  let searchBarValue = document.querySelector('#search-input').value
  let elementsInUl = document.querySelectorAll('#tags ul li')
  if (elementsInUl.length == 0 && searchBarValue.length > 2) {
    removeArticles()
    document.querySelector('#noResult').style.display = 'none'
    matchedContents = matchContent(searchBarValue, recipes)
    if (matchedContents.length == 0) {
      document.querySelector('#noResult').style.display = 'block'
    } else {
      console.time('OnlyInput')
      matchedContents
      console.timeEnd('OnlyInput')

      displayRecipes(matchedContents)
      manageElementsList(matchedContents)
    }
  } else if (elementsInUl.length == 0 && searchBarValue.length < 2) {
    document.querySelector('#noResult').style.display = 'none'
    displayRecipes(recipes)
    manageElementsList(recipes)
  } else if (elementsInUl.length !== 0 && searchBarValue.length > 2) {
    removeArticles()
    getTags()

    matchedContents = matchContent(searchBarValue, recipeMatchedTags)
    manageElementsList(
      matchedContents,
      arrayTagsItemIngredients,
      arrayTagsItemAppilances,
      arrayTagsItemUstenceils
    )
    if (matchedContents.length == 0) {
      document.querySelector('#noResult').style.display = 'block'
    } else {
      console.time('InputAndTag')
      matchedContents
      console.timeEnd('InputAndTag')

      displayRecipes(matchedContents)
    }
  } else if (elementsInUl.length !== 0 && searchBarValue.length < 2) {
    removeArticles()
    document.querySelector('#noResult').style.display = 'none'

    getTags()

    manageElementsList(
      recipeMatchedTags,
      arrayTagsItemIngredients,
      arrayTagsItemAppilances,
      arrayTagsItemUstenceils
    )

    console.time('OnlyTag')
    recipeMatchedTags
    console.timeEnd('OnlyTag')

    displayRecipes(recipeMatchedTags)
  } else {
    return false
  }
}

/**
 * removeArticles - Affiche les recettes
 **/
function displayRecipes(recipes) {
  removeArticles()
  recipes.forEach((recipe) => {
    const TemplateRecipes = new RecipesCard(recipe)
    const cardSection = document.getElementById('cardSection')
    cardSection.appendChild(TemplateRecipes.createReipesCard())
  })
}

/**
 * removeArticles - Efface les recettes affichées
 **/
function removeArticles() {
  const articles = document.querySelectorAll('article')
  articles.forEach((element) => element.remove())
}
