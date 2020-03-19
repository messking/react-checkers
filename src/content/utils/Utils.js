//The following function performs the array manipulations.
export const replaceBoardElements = (arr, fromrow, fromcell, torow, tocell) => {
  let temp = arr[fromrow][fromcell];
  arr[fromrow][fromcell] = arr[torow][tocell];
  arr[torow][tocell] = temp;
  return arr;
};
