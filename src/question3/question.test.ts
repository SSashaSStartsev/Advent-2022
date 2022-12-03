import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers, getInputStrings } from '../helpers'

describe('Question 3', () => {
  it('part A main', async () => {
    const input = await getInputStrings(3, "input")
    expect(await question.partA(input)).to.equal(7903)
  })

  it('part A sample', async () => {
    const input = await getInputStrings(3, "sample_input")
    expect(await question.partA(input)).to.equal(157)
  })

  it('part B main', async () => {
    const input = await getInputStrings(3, "input")
    expect(await question.partB(input)).to.equal(2548)
  })

  it('part B sample', async () => {
    const input = await getInputStrings(3, "sample_input")
    expect(await question.partB(input)).to.equal(70)
  })

})
