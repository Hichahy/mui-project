import { IMeal } from './types'

export interface IStore {
    restaurant: {
     meal: IMeal[];
     filteredItems: Array<{}>;
     type: Array<{}>;
    }
}