// создание массива уникальных значений, отсортированных по количеству повторений

let words = ['a', 'b', 'a', 'c', 'a', 'c'];

const f = (array) => {
	const temp = array.reduce((acc, item) => {
  	acc[item]= (acc[item] || 0) + 1
    return acc
  }, {})
  
  return Object.keys(temp).sort((a, b) => temp[b] - temp[a])
}

f(words)
