import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../REDUX/ACTIONS/action'

export const FetchComponent = () => { 
    const [ error, setError ] = useState({error:''})
    const dispatch = useDispatch()
    const inputVals = useSelector( store => store.firstReducer.inputUserVals)
    const userId = useSelector( store => store.firstReducer.userId)
    const updatedUser = useSelector( store => store.firstReducer.updatedUser)
    const store = useSelector( store => store)
    console.log(store)
    // const urlApi = 
    useEffect(() => {
        function request (){
            axios.get('https://users-crud1.herokuapp.com/users/')
            .then( res => dispatch(fetchData(res.data)))
            .catch( err => dispatch(fetchData(err)))
        }
        request()
        

        if( updatedUser !== undefined ){
            axios.put(`https://users-crud1.herokuapp.com/users/${updatedUser.id}/`, updatedUser)
            .then(()=> request())
            .catch(err => setError({...error, error: err}))
    
        }
        
        if(inputVals){
            axios.post('https://users-crud1.herokuapp.com/users/', inputVals)
            .then(()=> request())
            .catch(err => setError({...error, error: err}))
        }

        if(userId !== undefined){
            axios.delete(`https://users-crud1.herokuapp.com/users/${userId}/`)
            .then(()=> request())
            .catch(err => setError({...error, error: err}))
        }
    },[inputVals, userId, updatedUser])
    
    return <div></div>
}   