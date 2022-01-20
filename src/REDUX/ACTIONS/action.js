import { Types } from "../TYPES/types";
// Action Function

export const fetchData = ( dataApi )=>{
    return {
        type: Types.FetchData,
        payload: dataApi
    }
}

export const userSubmit = ( inputValues ) =>{
    console.log('User Submitted')
    return {
        type: Types.submitUser,
        payload: inputValues
    }
}

export const deleteUser = ( userOff ) =>{
    return {
        type: Types.Delete,
        payload: userOff
    }
}

export const editUser = ( user ) =>{
    console.log('User Edited')
    return {
        type: Types.Edit,
        payload: user
    }
}

export const SettingFlag = ()=>{
    return{
        type: Types.setFlag,
        payload: false
    }
}

export const updatingUser = ( user ) =>{

    return {
        type: Types.PutUser,
        payload: user
    }
}

