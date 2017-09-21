const calculateMax = (array) => {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let current = array[i]['in_count'];
    if (current > max) {
      max = current;
    }
  }
  return max;
}

const sortDate = (array) => {
  let sortedArr = array.data.sort((a,b) => { return Date.parse(b.date) - Date.parse(a.date) });

  return sortedArr;
}

export { calculateMax, sortDate };
