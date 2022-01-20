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
                    flagButton: action.payload,
                    selectedUser: undefined
                }

            case Types.Delete:
                return {
                    ...state,
                    userId: action.payload,
                    inputUserVals: undefined
                }
            // comments
            case Types.Edit:
                return {
                    ...state,
                    flagButton: true,
                    selectedUser: action.payload
                }
            
            case Types.PutUser:
                return{
                    ...state,
                    updatedUser: action.payload
                
                }
        default:
            return state;
    }
}