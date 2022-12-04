const getScore = (key: string) : number => {
  if (key.charCodeAt(0) >= 'a'.charCodeAt(0)) {
    return (key.charCodeAt(0) - ('a'.charCodeAt(0)-1))
  } else {
    return (key.charCodeAt(0) - ('A'.charCodeAt(0)-1) + 26)
  }
}

const partA = async (input: string[]) => {
  let score = 0

  input.forEach(sack => {
    let firstHalf = sack.slice(0, Math.floor(sack.length/2))
    let secondHalf = sack.slice(Math.floor(sack.length/2), sack.length)
    let key = 'a'
    secondHalf.split('').forEach(element => {
      if (firstHalf.includes(element)) key = element
    });
    score += getScore(key)
    console.log(score)
  });

  return score
}

const partB = async (input: string[]) => {
  let score = 0
  for (let index: number = 0; index < input.length; index+=3) {
    let currTrio = input.slice(index, index+3)
    let key: string = 'a'
    currTrio[0].split('').forEach(element => {
      if (currTrio[1].includes(element) && currTrio[2].includes(element)) key = element
    });
    score += getScore(key)
  }
  return score
}

export default {
  partA,
  partB,
}