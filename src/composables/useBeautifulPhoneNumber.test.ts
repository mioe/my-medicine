import { expect, test } from 'vitest'
import { useBeautifulPhoneNumber } from './useBeautifulPhoneNumber'

const p1 = '+79998887766'
const p2 = '+389998887766'
const p3 = '+449998887766'

const r1 = '+7 999 888 77 66'
const r2 = '+38 999 888 77 66'
const r3 = '+44 999 888 77 66'

test(`try ${p1}`, () => {
	expect(useBeautifulPhoneNumber(p1)).toBe(r1)
})

test(`try ${p2}`, () => {
	expect(useBeautifulPhoneNumber(p2)).toBe(r2)
})

test(`try ${p3}`, () => {
	expect(useBeautifulPhoneNumber(p3)).toBe(r3)
})
