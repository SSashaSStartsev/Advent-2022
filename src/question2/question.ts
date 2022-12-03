const partB = async (input: string[][]) => {
  let score = 0
  let casePairs :{[key: string]: number} = {
    'X': 0,
    'Y': 3,
    'Z':6
  }
  let scorePairs :{[key: string]: number} = {
    'X': 1,
    'Y': 2,
    'Z': 3
  }
  let drawPairs:{[key: string]: number}  = {
    'A' : 1,
    'B' : 2,
    'C' : 3
  }
  let winPairs:{[key: string]: number} = {
    'A' : 2,
    'B': 3,
    'C': 1
  }
  let losePairs:{[key: string]: number} = {
    'A' : 3,
    'B': 1,
    'C': 2
  }

  input.forEach(pair => {
   
    switch (pair[1]) {
      case 'X':
        score += 0
        score += losePairs[pair[0]]
        break;
      case 'Y':
        score += 3
        score += drawPairs[pair[0]]
        break;
      case 'Z':
        score += 6
        score += winPairs[pair[0]]
        break;
      default:
        break;
    }
  });
  return score
}

const partA = async (input: string[][]) => {
  let score = 0
  let scorePairs :{[key: string]: number} = {
    'X': 1,
    'Y': 2,
    'Z': 3
  }
  let drawPairs:{[key: string]: string}  = {
    'A' : 'X',
    'B' : 'Y',
    'C' : 'Z'
  }
  let winPairs:{[key: string]: string} = {
    'A' : 'Y',
    'B': 'Z',
    'C': 'X'
  }

  input.forEach(pair => {
    if (winPairs[pair[0]] === pair[1]) {
      score += 6
    }
    else if (drawPairs[pair[0]] === pair[1]) {
      score += 3
    }
    score += scorePairs[pair[1]]
  });
  return score
}

export default {
  partA,
  partB,
}