
import { Item } from '../models/Item';
import { ItemActionType, ActionType } from './item.actions';

export const initialState: Array<Item> = [
    { Title: 'Default Value' }
]

export function ItemReducer(
    state: Array<Item> = initialState,
    action: ItemActionType
) {
    switch (action.type) {
        case ActionType.ADD_ITEM:
            return [...state, action.payload];
        case ActionType.REMOVE_ITEM: {
            let { Title } = action.payload;
            state = state.filter(item => item.Title !== Title);
        }
        default:
            return state;
    }
}