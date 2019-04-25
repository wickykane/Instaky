import { FIX_HEADER } from './constant';

export function setFixHeader(data) {
    return {
        type: FIX_HEADER,
        payload: data,
    }
}