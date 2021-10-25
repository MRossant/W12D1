export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemonMovesNames = (state) => {
  let values = Object.values(state.entities.moves);
  return values.map((el) => {
    return el.name
  })
}
  