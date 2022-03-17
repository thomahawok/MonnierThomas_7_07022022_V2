/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let matchedContents = []
let matchedIngredients = []
let matchedAppilances = []
let matchedUstensils = []
let filtredRecipes = []
let recipeMatchedTags = []
let ArrrayFiltredElements = []
let ArrayTagsItemIngredients = []
let ArrayTagsItemAppilances = []
let ArrayTagsItemUstenceils = []
let ArrayListElements = []

const buttonIngretients = document.querySelector('.bg-primary')
const buttonAppliances = document.querySelector('.bg-success')
const buttonUstensils = document.querySelector('.bg-danger')

class Main {
  constructor(recipes) {
    this._recipes = recipes
  }
  main() {
    displayRecipes(recipes)
    displayElementsList(getIngredients(recipes), buttonIngretients)
    displayElementsList(getAppliances(recipes), buttonAppliances)
    displayElementsList(getUstensils(recipes), buttonUstensils)

    /** Ecoute input de la search bar **/
    const searchInput = document.querySelector('.form-control')
    searchInput.addEventListener('input', (e) => {
      const searchBarValue = e.target.value
      const elementsInUl = e.path[3].children[1].children[0].children
      manageTagsAndSearchBar(searchBarValue, elementsInUl)
    })

    /** Ecoute les listes pour afficher les tags sélectionnés **/
    const elementList = document.querySelectorAll('.filter ul')
    elementList.forEach((element) => {
      element.addEventListener('click', (e) => {
        const clickedElement = e.path[0].innerText
        const ulElementDomTag = e.path[5].children[1].children[0]
        const inputPlaceHoder = e.path[2].children[0].placeholder
        const divButton = e.path[2]
        const recipesUses = recipes
        filtredRecipes = matchedGolbal(clickedElement, recipesUses)
        displayTag(e, ulElementDomTag)
        dropDown(divButton, inputPlaceHoder)
        getTags(clickedElement)
        manageTagsAndSearchBar()
        ArrayListElements = []
      })
    })

    /** effacer les tags sélectionnés **/
    const tags = document.querySelector('#tags')
    tags.addEventListener('click', (e) => {
      e.path[0].remove()
      const searchBarValue = e.path[3].children[0].children[2].children[0].value
      const elementsInUl = e.path[1].children

      //getTags()
      manageTagsAndSearchBar(searchBarValue, elementsInUl)
    })

    /** Ecoute les boutton "input"**/

    const btnFilter = document.querySelectorAll('.filter')
    btnFilter.forEach((button) => {
      button.addEventListener('click', (e) => {
        const eventPath = e.path[0]
        const placeholder = e.path[0].children[0].placeholder
        dropDown(eventPath, placeholder)
      })
      button.addEventListener('input', (e) => {
        const arrayElementsListDropDown = getElementList(
          button.children[1].children
        )
        const newIngredeintList = filtreIngredientsLists(
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

function displayRecipes(recipes) {
  removeArticles()
  recipes.forEach((recipe) => {
    const TemplateRecipes = new RecipesCard(recipe)
    const cardSection = document.getElementById('cardSection')
    cardSection.appendChild(TemplateRecipes.createReipesCard())
  })
}

function removeArticles() {
  const articles = document.querySelectorAll('article')
  articles.forEach((element) => element.remove())
}
