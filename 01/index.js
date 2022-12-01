const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.resolve('./input.txt'), 'utf8')

// console.log(JSON.stringify(file))

const caloriesByElf = file.split('\n\n').map(elf => elf.split('\n'))

const sum = (arr) => arr.reduce((a, b) => a + b, 0)

const findLargest = (arr) => arr.reduce((a, b) => Math.max(a, b), 0)

const totalCaloriesByElf = caloriesByElf.map(calories =>
  sum(calories.map(cal => parseInt(cal)))  
).filter(cal => !!cal)

const largest = findLargest(totalCaloriesByElf)

console.log(largest);

const top3Largest = totalCaloriesByElf.sort((a, b) => b - a).slice(0, 3)
console.log(sum(top3Largest))
