TODO:
1. Reuseable Nav component at top where "PokeAPI" is on left and "search/favorites" page links on right.
2. Use react-router for above pages. ("/" will be search page and "/favorites" will be favorites page).
3. SEARCH PAGE will have search bar (like marvel proj), and once searched, "POKECARD" component will pop up with searched pokemon.
4. FAVORITES PAGE will be all "POKECARDS" that have been saved to favorites via localStorage.
5. "POKECARDS" will display info along with "fav btn"(star icon). Once favorited, the isFavorited state turns to true which will save in localStorage. Additionally, once favorited, the star icon will become "Saved!/Favorited!".
6. When an already favorited "POKECARD" is unfavorited, its deleted form localStorage, state is changed back to false,and is reverted back to star icon.
7. When "POKECARD" is on screen, user must interact with it to display all other info. (via hover/click). Maybe a modal pops up? Or a card flip?

SETUP
1. You will have "search state", pokedex "empty array state", "isFavorited state (boolean)", and possibly a localStorage state containing all favorites (array).
2. You will have nav component and POKECARD component
3. You will have search page and Favorites page
4. UseEffect for favorites page since its on load, normal api function on search page since nothing loads until u search
