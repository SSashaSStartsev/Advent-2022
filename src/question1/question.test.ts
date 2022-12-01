import question from './question'
import { expect } from 'chai'
import { getInputNumbers } from '../helpers'

describe('Question 1', () => {
  it('part A main', async () => {
    const input = await getInputNumbers(1, "input")
    expect(await question.partA(input)).to.equal(70613)
  })

  it('part A sample', async () => {
    const input = await getInputNumbers(1, "sample_input")
    expect(await question.partA(input)).to.equal(24000)
  })

  it('part B main', async () => {
    const input = await getInputNumbers(1, "input")
    expect(await question.partB(input)).to.equal(205805)
  })

  it('part B sample', async () => {
    const input = await getInputNumbers(1, "sample_input")
    expect(await question.partB(input)).to.equal(45000)
  })

})
