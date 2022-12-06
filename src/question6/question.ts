const partA = async (input: string[]) => {
  let score = 0
  let lastFour: string[] = []
  let line = input[0].split('')
  for (let index = 0; index < line.length; index++) {
    const x = line[index];
    if (lastFour.length < 4){
      lastFour.push(x)
    }
    else {
      if (new Set(lastFour).size === lastFour.length){
        return index
      }
      lastFour.push(x)
      lastFour = lastFour.slice(1 ,5)
    }
  }
  return score
}

const partB = async (input: string[]) => {
  let lastFour: string[] = []
  let line = input[0].split('')
  for (let index = 0; index < line.length; index++) {
    const x = line[index];
    if (lastFour.length < 14){
      lastFour.push(x)
    }
    else {
      if (new Set(lastFour).size === lastFour.length){
        return index
      }
      lastFour.push(x)
      lastFour = lastFour.slice(1 ,15)
    }
  }
}

export default {
  partA,
  partB,
}