import React, { useState, useEffect } from "react";
import { userSubmit, SettingFlag, updatingUser } from '../../REDUX/ACTIONS/action'
import { useDispatch, useSelector } from "react-redux";

export const UserForm = ()=>{
    const dispatch = useDispatch()
    const flagButton = useSelector( store => store.firstReducer.flagButton)
    const selectedUser = useSelector( store => store.firstReducer.selectedUser)
    const [ inputValues, setInputValues ] = useState({
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        birthday:""
    })

    const submitUser = (e)=>{
        e.preventDefault()
        if(!selectedUser){
            dispatch(userSubmit(inputValues))
            setInputValues({
                email:"",
                password:"",
                first_name:"",
                last_name:"",
                birthday:""
            })
        }else{
            dispatch(updatingUser(inputValues))
            setInputValues({
                email:"",
                password:"",
                first_name:"",
                last_name:"",
                birthday:""
            })
            dispatch(SettingFlag())
        }
        e.target.reset()
    }

    useEffect(()=>{
        if(selectedUser){
            setInputValues(selectedUser)
        }
    }, [selectedUser])

    const clearVals = ()=>{
        setInputValues({
            email:"",
            password:"",
            first_name:"",
            last_name:"",
            birthday:""
        })
        dispatch(SettingFlag())
    }

    return (
        <div className="container-form">
            <form onSubmit={(e)=> submitUser(e)}>
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                           id="name"
                           value = {inputValues.first_name}
                           onChange = {(e)=> setInputValues({...inputValues, first_name: e.target.value})}
                        />
                </section>
                <section>
                    <label htmlFor="lastname">Lastname</label>
                    <input 
                            type="text" 
                            id="lastname"
                            value = {inputValues.last_name}
                            onChange = {(e)=> setInputValues({...inputValues, last_name: e.target.value})}
                        />
                </section>
                <section>
                    <label htmlFor="email">E-mail</label>
                    <input 
                            type="text" 
                            id="email"
                            value = {inputValues.email}
                            onChange = {(e)=> setInputValues({...inputValues, email: e.target.value})}
                        />
                </section>
                <section>
                    <label htmlFor="dob">Birthdate</label>
                    <input 
                            type="date" 
                            id="dob"
                            value = {inputValues.birthday}
                            onChange = {(e)=> setInputValues({...inputValues, birthday: e.target.value})}
                        />
                </section>
                <section>
                    <label htmlFor="password">Password</label>
                    <input 
                            type="password" 
                            id="password"
                            value = {inputValues.password}
                            onChange = {(e)=> setInputValues({...inputValues, password: e.target.value})}
                        />
                </section>
                <div className="container-btns">
                    <button type="submit"> Send </button>
                    {
                        flagButton && <button onClick={()=> clearVals()}type="button"> Clear </button>
                    }
                </div>
            </form>
        </div>
    )
}