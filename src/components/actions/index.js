import {SET_CONTENTS} from "./actions";

export const setContents = payload => {
    return {
        type: SET_CONTENTS,
        payload: payload
    }
}

