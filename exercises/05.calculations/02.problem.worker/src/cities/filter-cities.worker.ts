import * as Comlink from 'comlink'
import { matchSorter } from 'match-sorter'
import cities from './us-cities.json'

const allCities = cities.map((city, index) => ({ ...city, id: String(index) }))

export function searchCities(filter: string) {
	return matchSorter(allCities, filter, { keys: ['name'] })
}

const exposed = {
	searchCities,
}

Comlink.expose(exposed)

export type Exposed = typeof exposed
