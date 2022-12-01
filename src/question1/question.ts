const partA = async (input: number[]) => {
  let highest = 0
  let curr = 0
  for(let i = 0; i<=input.length; i++) {
    if (!input[i]) {
      if (curr > highest) {
        highest = curr.valueOf()
      }
      curr = 0
    }
    else {
      curr+=input[i]
    }
  }
  
  return highest
}

const partB = async (input: number[]) => {
  let elves: number[] = []
  let curr = 0
  for(let i = 0; i<=input.length; i++) {
    if (!input[i]) {
      elves.push(curr)
      curr = 0
    }
    else {
      curr+=input[i]
    }
  }
  
  return elves.sort((a,b) => b-a).slice(0,3).reduce((a,b) => a+b)
}

export default {
  partA,
  partB,
}