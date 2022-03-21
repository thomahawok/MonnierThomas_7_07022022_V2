# MonnierThomas_7_07022022_V2

![logo](asset/logo.png)

# OpenClassrooms - Parcours Développeur Front-end

## <a id="start">Projet 7 - Les petits plats</a>

Les Petits Plats est un site proposant des recettes de cuisine.
Le moteur de recherche du site permet de filtrer les recettes en saisissant un ou plusieurs mots dans la barre de recherche, et/ou en sélectionnant des ingrédients, appareils et ustensiles.

---

## Fonctionnalités demandées

Développer un site sur base d'un fichier JavaScript contenant un tableau de 50 recettes.
Implémenter un moteur de recherche pour filtrer les recettes.
Comparer les performances entre 2 versions du projet. A savoir :

- Une approche fonctionnelle ( méthodes **filter** et **forEach**),
- Une approche native (boucle **for**,).

---

# Fiche d’investigation de fonctionnalité

**Problématique :**
Comme indiqué dito, deux approches différentes pour l’algorithme de recherche sont prévues (fonctionnelle et native).
Il s'agit de trouver l’algorithme le plus rapide entre les deux approches.

| **Cas 1 : Recherche avec boucles natives "For"** |
| :----------------------------------------------- |

Pour la barre de recherche :
Une boucle "for" pour chaque mot clé renseigné dans le champ de recherche, puis :

- Une autre boucle for est utilisé pour parcourir les recettes et vérifier la correspondance avec :

  - le titre,
  - la description,
  - les ingrédients :
    - Une autre boucle "for" parours les ingrédients, puis :
  - les appareils
  - les ustensils :
    - Une autre boucle "for" parours les ustensils.

  Une fois les mots analysés, le tableau est filtré pour supprimer les doublons du résultat.

Pour les tags :
Les recettes filtées précédemment deviennet le référenceile des recettes filttées en fonction des tags.
Chaque tag est passé dans une boucle "for" spécifique (ingrédeints, ustensils et appareils).
Pous chaque éléments trouvé un tableau spécifique est créé.
Chaque tableau est concaténé pour créé un tableau golbale.
Ce tableau est filtré pour supprimer les doublons du résultat.
Ce tableau contenant les recettes corrsepondantes au tag sélectionné est retourné a cette même fonction pour filtrer les recttes en fonction d'un autre tags "clické".
Cela permet de ne récupéter uniqement les recettes correspondantes à tous les tags sélectionnés. |

| Avantages            | Inconvenient                               |
| :------------------- | :----------------------------------------- |
| Rapidité d’exécution | Code moins lisible et donc peu maintenable |

| N           | Utilisation                                                           |
| :---------- | :-------------------------------------------------------------------- |
| **Cas n 1** | L’utilisateur remplis uniquement le champ de recherche                |
| **Cas n 2** | L’utilisateur laisse le champ de recherche vide et sélectionne un tag |
| **Cas n 3** | L’utilisateur sélectionne un tag et remplis le champ de recherche     |

| **Option 2 : Recherche avec méthodes de l'objet array (foreach, filter...)** |
| :--------------------------------------------------------------------------- |

Le principe est identique que pour le cas 1 (avec boucle native). Ici on utilise la méthode filter. Cela permet, pour chaque mot clé renseigné dans le champ de recherche de filtrer (avec la méthode filter donc) les recettes pour vérifier la correspondance avec le titre, la description, les ingrédients, les appareils et les ustensils.
Une fois tous les mots analysés le tableau est filtré pour supprimer les doublons présents dans le tableau de résultat.|

idem pour les tags.

| Avantages                                 | Inconvenient                                   |
| :---------------------------------------- | :--------------------------------------------- |
| Code plus rapide à écrire et plus lisible | Utilise plus de ressources, donc moins rappide |

| N           | Utilisation                                                           |
| :---------- | :-------------------------------------------------------------------- |
| **Cas n 1** | L’utilisateur remplis uniquement le champ de recherche                |
| **Cas n 2** | L’utilisateur laisse le champ de recherche vide et sélectionne un tag |
| **Cas n 3** | L’utilisateur sélectionne un tag et remplis le champ de recherche     |

| Solution retenue                                                                                                      |
| :-------------------------------------------------------------------------------------------------------------------- |
| Aux vues des résultats et le but étant la rapidité d'exécution, l'utilisation de boucle native est la plus pertiante. |

### **Description des deux algorithmes de recherches**

**Algorithmes utilisant les boucles natives for :**
Pour la bar de recherche, le principe est de faire une boucle **for** sur chaque mot clé pour rechercher une correspondance sur le titre, la description, les ingrédients, les appareils et les ustensiles.
Puis des boucles **for** sur toutes les recettes renvois une correspondance trouvée et l’ajoute au tableau de résultat.

Pour les tags, chaque tag est considéré comme des mots clés et sont prioritaires sur le résultat de la recherche.

_(figure 1 - 2)_

**Algorithmes utilisant une approche fonctionnelle :**
Le principe est de faire une boucle **forEach** sur chaque mot clé pour rechercher une correspondance sur le titre, la description, les ingrédients, les appareils et les ustensiles. La méthode **filter** sur chaque recette renvois une correspondance et l’ajoute au tableau de résultat. Chaque tag sont considérés comme des mots clés et sont prioritaires sur le résultat de la recherche.

_(figure 1 - 3)_

**Figure 1 - Algorigramme**
**Fonctionnement global**

![figure1](doc/Algorigramme-overall%20functioning.jpg)

**Figure 2 - Algorigramme**
**Fonctionnement algorithme de recherche - boucles forEach**
![figure2](doc/Algorigramme%20-search%20for.jpg)

**Figure 3 - Algorigramme**
**Fonctionnement algorithme de recherche - boucle for**
![figure3](s)

#### **Paramètres de recherche avec 3 cas d’utilisation**

**1er cas d’utilisation** : on renseigne le champ de recherche sans tag

Par exemple :
input = "poisson"

**2ème cas d’utilisation** : le champ de recherche est vide et un tag est sélectionné

Par exemple :
tags: [
{
value: "carotte"
category: "ingredients"
}
]

**3ème cas d’utilisation** : le champ de recherche est renseigné et un tag sélectionné

Par exemple :
input = "poisson"
tags: [
{
value: "carotte"
category: "ingredients"
}
]

#### **Résultats des performances :**

Temps en fonction des 3 cas d’usage de la recherche avancée.

| | | **CAS N1** | **CAS N2** | **CAS N3** |
| | | _console.time('OnlyInput')_ | _console.time('OnlyTag')_ | _console.time('InputAndTag')_ |
| :----- | :----------------- | :-------------------------------: | :---------------------------------: | :-------------------------------: |
| **V1** | Algo boucle native | **0.00415039 ms** | **0.00195312 ms** | **0.002929 ms** |
| **V2** | Algo fonctionnel | 117173 (98.64%) | 20302 (97.37%) | 6042 (82.08%) |

**V1 CAS N1**  
![test1](doc/V1-CAS1%20-%20SearchOnly.pngCASN1.png)  
**V1 CAS N2**  
![test2](doc/V1-CAS2%20-%20TagOnly.png)  
**V1 CAS N3**  
![test3](doc/V1-CAS3%20-%20TagAndSeach.png)
