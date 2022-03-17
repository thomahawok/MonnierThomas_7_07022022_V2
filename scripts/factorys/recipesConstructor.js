class RecipesCard {
  constructor(recipes) {
    this._id = recipes.id
    this._name = recipes.name
    this._servings = recipes.servings
    this._time = recipes.time
    this._description = recipes.description
    this._appilance = recipes.appilance
    this._ingredients = recipes.ingredients
  }

  createReipesCard() {
    const wrapperRecipe = document.createElement('article')
    wrapperRecipe.setAttribute('class', 'col')

    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'card bg-light border-0 rounded')

    const img = document.createElement('img')
    img.setAttribute('class', 'card__img card-img-top')
    img.src = 'assets/exemple.jpeg'

    const divContents = document.createElement('div')
    divContents.setAttribute('class', 'row card-body card__body')

    const divHeaderRow = document.createElement('div')
    divHeaderRow.setAttribute(
      'class',
      'd-flex justify-content-between align-items-center mb-2 px-2'
    )

    const hTitle1 = document.createElement('h2')
    hTitle1.setAttribute('class', 'card-title w-50 card-content-title')
    hTitle1.textContent = this._name

    const divHeaderCol2 = document.createElement('div')
    divHeaderCol2.setAttribute(
      'class',
      'd-flex font-weight-bold align-items-center'
    )

    const spanCol2 = document.createElement('span')
    spanCol2.setAttribute(
      'class',
      'far fa-clock me-2 text-center card___spanTime'
    )
    spanCol2.setAttribute('style', 'font-size:1.5rem')

    const hTime1 = document.createElement('h2')
    hTime1.setAttribute('class', 'ml-2 text-center')
    hTime1.textContent = this._time + ' min'

    const divIngredients = document.createElement('div')
    divIngredients.setAttribute('class', 'row col mx-0 px-2')
    divIngredients.setAttribute('id', this._id)

    const ulIngredeint = document.createElement('ul')
    ulIngredeint.setAttribute('class', 'card__ulIngredient px-0')

    const divRecipe = document.createElement('div')
    divRecipe.setAttribute('class', 'col')

    const pRecipe = document.createElement('p')
    pRecipe.setAttribute('class', 'card-text card__recipe')
    pRecipe.textContent = this._description

    wrapperRecipe.appendChild(divCard)

    divCard.appendChild(img)
    divCard.appendChild(divContents)

    divContents.appendChild(divHeaderRow)

    divHeaderRow.appendChild(hTitle1)
    divHeaderRow.appendChild(divHeaderCol2)

    divHeaderCol2.appendChild(spanCol2)
    divHeaderCol2.appendChild(hTime1)

    divContents.appendChild(divIngredients)

    divIngredients.appendChild(ulIngredeint)

    this._ingredients.forEach((ingredienta) => {
      const li = document.createElement('li')
      const b = document.createElement('b')
      b.textContent = `${ingredienta.ingredient}`
      li.appendChild(b)
      if (ingredienta.quantity !== null && ingredienta.quantity !== undefined) {
        const span = document.createElement('span')
        span.textContent = `: ${ingredienta.quantity}`
        if (ingredienta.unit !== null && ingredienta.unit !== undefined) {
          span.textContent = `: ${ingredienta.quantity} ${ingredienta.unit}`
        }
        li.appendChild(span)
      }
      ulIngredeint.appendChild(li)
    })

    divContents.appendChild(divRecipe)

    divRecipe.appendChild(pRecipe)

    return wrapperRecipe
  }
}

class IngredientsCard {
  constructor(ingredienta) {
    this._ingredient = ingredienta.ingredient
    this._quantity = ingredienta.quantity
    this._unit = ingredienta.unit
  }

  createIngCard() {
    const pIng = document.createElement('li')
    pIng.setAttribute('class', 'ilIngredeint')

    const spanIng = document.createElement('span')
    spanIng.setAttribute('class', 'font-weight-bold')
    pIng.appendChild(spanIng)

    if (this._unit === undefined && this._quantity === undefined) {
      pIng.textContent = this._ingredient
    } else if (this._ingredient && this._quantity && this._unit === undefined) {
      pIng.textContent = this._ingredient + ' : ' + this._quantity
    } else {
      pIng.textContent =
        this._ingredient + ' : ' + this._quantity + ' ' + this._unit
    }
    return pIng
  }
}
