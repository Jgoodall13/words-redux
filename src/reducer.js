const initalstate = {
    words: ""
}

export const showWords = (state=initalstate, action={}) => {
    switch(action.type){
        case ('DISPLAY_WORDS'):
            return Object.assign({}, state, {
                words: action.payload
            })
        default :
            return state;
    }
}