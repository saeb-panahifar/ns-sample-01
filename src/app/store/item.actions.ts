import { Item } from '../models/Item';
import { Action } from '@ngrx/store';

export enum ActionType {
    ADD_ITEM = '[ITEM] Add Item',
    REMOVE_ITEM = '[ITEM] Remove Item'
}
export class AddAction implements Action {
    readonly type = ActionType.ADD_ITEM;
    constructor(public payload: Item) { }
}

export class RemoveAction implements Action {
  readonly type = ActionType.REMOVE_ITEM;
  constructor(public payload: Item) { }
}

export type ItemActionType = AddAction | RemoveAction;