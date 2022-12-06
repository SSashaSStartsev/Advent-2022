import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers, getCommaSeperatedStrings, getInputStrings } from '../helpers'

describe('Question 6', () => {
  it('part A main', async () => {
    const input = await getInputStrings(6, "input")
    expect(await question.partA(input)).to.equal(1582)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(6, "sample_input")
    expect(await question.partA(input)).to.equal(7)
  })

  it('part B main', async () => {
    const input = await getInputStrings(6, "input")
    expect(await question.partB(input)).to.equal(3588)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(6, "sample_input")
    expect(await question.partB(input)).to.equal(19)
  })

})
