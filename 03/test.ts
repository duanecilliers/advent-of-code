import { assert } from "../utils/test"
import { findCommonLetters, findCommonLettersInGroup, getLetterPriority, groupEvery, isLowerCase, splitLines, splitStringInHalf } from "./utils"

const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

assert(
  splitLines(sampleInput).includes('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn'),
  'Splits lines'
)

const lines = splitLines(sampleInput)
const splitString = splitStringInHalf(lines[0])
assert(
  splitString[0] === 'vJrwpWtwJgWr' && splitString[1] === 'hcsFMMfFFhFp',
  'Splits lines in half'
)

const commonLetters = findCommonLetters(splitString[0], splitString[1])
assert(
  commonLetters.length === 1 && commonLetters.includes('p'),
  'Finds common letters'
)

assert(
  isLowerCase('a') === true && isLowerCase('A') === false,
  'Is lower case'
)

assert(
  getLetterPriority('a') === 1 && getLetterPriority('A') === 27
  && getLetterPriority('z') === 26 && getLetterPriority('Z') === 52,
  'Gets letter priority'
)

const groups = groupEvery(lines, 3)
assert(
  groups.length === 2 && groups[0].length === 3,
  'Groups every n elements'
)

const group2 = splitLines(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg`)

const commonLettersInGroup = findCommonLettersInGroup(groupEvery(group2, 3)[0])

assert(
  commonLettersInGroup.length === 1 && commonLettersInGroup.includes('r'),
  'Finds common letters in group'
)