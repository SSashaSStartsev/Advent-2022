import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers, getCommaSeperatedStrings } from '../helpers'

describe('Question 4', () => {
  it('part A main', async () => {
    const input = await getCommaSeperatedStrings(4, "input")
    expect(await question.partA(input)).to.equal(7903)
  })

  it('part A sample', async () => {
    const input = await getCommaSeperatedStrings(4, "sample_input")
    expect(await question.partA(input)).to.equal(2)
  })

  it('part B main', async () => {
    const input = await getCommaSeperatedStrings(4, "input")
    expect(await question.partB(input)).to.equal(823)
  })

  it('part B sample', async () => {
    const input = await getCommaSeperatedStrings(4, "sample_input")
    expect(await question.partB(input)).to.equal(4)
  })

})
