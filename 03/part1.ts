import { uniq } from "../utils/array"
import { sum } from "../utils/math"
import { findCommonLetters, getLetterPriority, splitLines, splitStringInHalf } from "./utils"

const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')

const result = splitLines(file).map(line => {
  const [rucksack1, rucksack2] = splitStringInHalf(line)
  const commonLetters = findCommonLetters(rucksack1, rucksack2)
  const priorities = uniq(commonLetters).map(getLetterPriority)
  return sum(priorities)
})

console.log({ result: sum(result) })