function construct2DArray(original, m, n) {
    if (m * n !== original.length) {
      return [];
    }
    let res = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < original.length; i++) {
      res[Math.floor(i / n)][i % n] = original[i];
    }
    return res;
  }

  const original = [1,2,3,4];
  const m = 2
  const n = 2;

  console.log(construct2DArray(original, m, n))