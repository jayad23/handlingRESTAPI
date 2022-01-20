import { Types } from "../TYPES/types";

const initialState = {
    flagButton: false
}

export const firstReducer = ( state = initialState, action)=>{
    switch (action.type) {
        case Types.FetchData:
            return {
                ...state,
                initialData: action.payload,
                userId: undefined
            }

            case Types.submitUser:
                return{
                    ...state,
                    flagButton: false,
                    inputUserVals: action.payload
                }
            
            case Types.setFlag:
                return{
                    ...state,
                    flagButton: action.payload
                }

            case Types.Delete:
                return {
                    ...state,
                    userId: action.payload
                }
            
            case Types.Edit:
                return {
                    ...state,
                    flagButton: true,
                    selectedUser: action.payload
                }
            
            case Types.PutUser:
                return{
                    ...state,
                    selectedUser: null,
                    updatedUser: action.payload
                
                }
        default:
            return state;
    }
}