import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.payload})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results]; 
            // This is not enough as a copy of an array of objects will still contain objects that point to the original objects
            // newArray.slice(id, 1);
            // const updatedArray = state.results.filter((result, index) => index !== id);
            const updatedArray = state.results.filter(result => result.id !== action.payload);
            return{
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }

};

// Use concat instead of push, as push will mutate the original state, while concat will not. Filter and slice returns a new copy aswell

export default reducer;