const partA = async (input: string[][]) => {
  let overlapScore = 0

  input.forEach(pair => {
    let pairOne = pair[0].split('-').map(x => Number.parseInt(x))
    let pairTwo = pair[1].split('-').map((x) => Number.parseInt(x))
    if (pairOne[0] >= pairTwo[0] && pairOne[0] <= pairTwo[1]){
      if (pairOne[1] >= pairTwo[0] && pairOne[1] <= pairTwo[1]){
        overlapScore++
        return;
      }
    }
    if (pairTwo[0] >= pairOne[0] && pairTwo[0] <= pairOne[1]){
      if (pairTwo[1] >= pairOne[0] && pairTwo[1] <= pairOne[1]){
        overlapScore++
      }
    }
  });

  return overlapScore
}

const partB = async (input: string[][]) => {
  let overlapScore = 0

  input.forEach(pair => {
    let pairOne = pair[0].split('-').map(x => Number.parseInt(x))
    let pairTwo = pair[1].split('-').map((x) => Number.parseInt(x))
    if (pairOne[0] >= pairTwo[0] && pairOne[0] <= pairTwo[1]){
      overlapScore++
      return;
    }
    if (pairOne[1] >= pairTwo[0] && pairOne[1] <= pairTwo[1]){
      overlapScore++
      return;
    }
    if (pairTwo[0] >= pairOne[0] && pairTwo[0] <= pairOne[1]){
      overlapScore++
      return;
    }
    if (pairTwo[1] >= pairOne[0] && pairTwo[1] <= pairOne[1]){
      overlapScore++
      return;
    }
  });

  return overlapScore
}

export default {
  partA,
  partB,
}