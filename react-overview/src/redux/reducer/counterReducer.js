import { DOWN, RESET, UP } from "../types/counterTypes";

const initialState = {
    counter:0,
}

export const counterReducer = (state = initialState,action) =>{
    switch (action.type) {
        case UP:
            return{
                counter : state.counter + 1
            };
        case DOWN:
            return{
                counter: state.counter -1
            };
        case RESET:
            return{
                counter: 0
            };
        default:
            return state;
    }
}

