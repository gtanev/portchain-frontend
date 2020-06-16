export const stableSort = (array, sortKey, sortDir) => {
  const stableArray = array.map((value, index) => [value, index]);

  stableArray.sort((a, b) => sortByKey(a[0], b[0]) || a[1] - b[1]);

  return stableArray.map(value => value[0]);

  function sortByKey(o1, o2) {
    if (o1[sortKey] < o2[sortKey]) return sortDir === 'desc' ? 1 : -1;
    if (o1[sortKey] > o2[sortKey]) return sortDir === 'desc' ? -1 : 1;
    return 0;
  }
};
