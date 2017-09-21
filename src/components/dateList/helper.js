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

const dayOfWeek = (number) => {
  const obj = {
    '0': 'SUN',
    '1': 'MON',
    '2': 'TUE',
    '3': 'WED',
    '4': 'THU',
    '5': 'FRI',
    '6': 'SAT',
  }
  return obj[number];
}
export { calculateMax, sortDate, dayOfWeek };
