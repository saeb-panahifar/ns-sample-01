import { Item } from '../models/Item';

export interface AppState {
    readonly items: Array<Item>;
}