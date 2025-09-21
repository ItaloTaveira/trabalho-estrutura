export default function mergeSortObj(arr, campo) {
  if (arr.length <= 1) return arr;

  const meio = Math.floor(arr.length / 2);
  const esquerda = mergeSortObj(arr.slice(0, meio), campo);
  const direita = mergeSortObj(arr.slice(meio), campo);

  return merge(esquerda, direita, campo);
}

function merge(esq, dir, campo) {
  let result = [];
  let i = 0, j = 0;

  while (i < esq.length && j < dir.length) {
    if (esq[i][campo] < dir[j][campo]) {
      result.push(esq[i]);
      i++;
    } else {
      result.push(dir[j]);
      j++;
    }
  }

  return result.concat(esq.slice(i)).concat(dir.slice(j));
}
