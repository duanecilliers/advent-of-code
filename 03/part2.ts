import { sum } from "../utils/math"
import { findCommonLettersInGroup, getLetterPriority, groupEvery, splitLines } from "./utils"

const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')

const result = groupEvery(splitLines(file), 3)
  .filter(group => group.length === 3)
  .map(findCommonLettersInGroup)
  .flat()
  .map(getLetterPriority)

console.log({ result: sum(result) })