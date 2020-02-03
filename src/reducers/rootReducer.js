const initState = {
    city: 'initial city',
    
}

const rootReducer = (state = initState, action) => {

    if (action.type === 'SEARCH_CITY') {
        return {
            ...state,
            city: action.city
        }
    }

    else return state
}


export default rootReducer