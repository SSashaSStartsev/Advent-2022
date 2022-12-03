import question from './question'
import { expect } from 'chai'
import { getInputGrid, getInputNumbers, getInputStrings } from '../helpers'

describe('Question 2', () => {
  it('part A main', async () => {
    const input = await getInputGrid(2, "input")
    expect(await question.partA(input)).to.equal(12855)
  })

  it('part A sample', async () => {
    const input = await getInputGrid(2, "sample_input")
    expect(await question.partA(input)).to.equal(15)
  })

  it('part B main', async () => {
    const input = await getInputGrid(2, "input")
    expect(await question.partB(input)).to.equal(13726)
  })

  it('part B sample', async () => {
    const input = await getInputGrid(2, "sample_input")
    expect(await question.partB(input)).to.equal(12)
  })

})
