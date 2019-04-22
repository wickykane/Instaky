import { CHANGE_ITEM } from './constant';

export function changeItem(data) {
  return {
    type: CHANGE_ITEM,
    payload: data
  };
}
