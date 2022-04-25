export const sortedByPopularity = (sortedPizzas) => {
  const arr = sortedPizzas.slice();
  return arr.sort((a, b) => b.rating - a.rating);
};

export const sortedByPrice = (sortedPizzas) => {
  const arr = sortedPizzas.slice();
  return arr.sort((a, b) => a.price - b.price);
};

export const sortedByAlphabet = (sortedPizzas) => {
  const arr = sortedPizzas.slice();
  return arr.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};
