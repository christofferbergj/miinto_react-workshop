/* eslint-disable import/no-absolute-path */
import { faker } from '@faker-js/faker'

import dynamite1 from '/dynamite1.png'
import dynamite2 from '/dynamite2.png'
import dynamite3 from '/dynamite3.png'
import dynamite4 from '/dynamite4.png'
import dynamite5 from '/dynamite5.png'
import dynamite6 from '/dynamite6.png'
import dynamite7 from '/dynamite7.png'

export type TProduct = {
  id: string
  title: string
  price: string
  image?: string
}

const images = [
  dynamite1,
  dynamite2,
  dynamite3,
  dynamite4,
  dynamite5,
  dynamite6,
  dynamite7,
]

export const generateProduct = (overrides?: Partial<TProduct>): TProduct => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  price: Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(faker.datatype.number({ min: 500, max: 5000 })),
  image: faker.helpers.arrayElement(images),
  ...overrides,
})
