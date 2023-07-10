import { expect, test } from 'vitest'
import {Slug} from './slug'

test('It should be able create a new slug from text', () => {
  const slug =  Slug.createFromText('A text received')

  expect(slug.value).toEqual('a-text-received')
})