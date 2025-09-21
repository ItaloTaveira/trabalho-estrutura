export default function selectionSortObj(arr, campo, ordem = "asc") {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (
        (ordem === "asc" && arr[j][campo] < arr[idx][campo]) ||
        (ordem === "desc" && arr[j][campo] > arr[idx][campo])
      ) {
        idx = j;
      }
    }
    if (idx !== i) {
      let temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }
  return arr;
}
