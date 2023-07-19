import { ObjectValues } from '@/types'

const API_URL = 'https://swapi.dev/'

export const API_PATHS = {
  PEOPLE: 'api/people'
} as const

export type Path = ObjectValues<typeof API_PATHS>

export const getPeople = () =>
  fetch(`${API_URL}/${API_PATHS.PEOPLE}`).then((res) => res.json())
