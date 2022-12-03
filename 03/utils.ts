export const splitLines = (text: string) => text.split('\n')

export const splitStringInHalf = (text: string) => {
  const half = Math.ceil(text.length / 2)
  return [text.slice(0, half), text.slice(half)]
}

export const findCommonLetters = (str1: string, str2: string): string[] => {
  const commonLetters = []
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      commonLetters.push(str1[i])
    }
  }
  return commonLetters
}

export const isLowerCase = (letter: string) => letter === letter.toLowerCase()

export const getLetterPriority = (letter: string) => {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const priority = (isLowerCase(letter) ? lowerAlphabet : upperAlphabet).indexOf(letter) + 1
  return isLowerCase(letter) ? priority : priority + 26
}

