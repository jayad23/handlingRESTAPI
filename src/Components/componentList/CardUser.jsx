import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../../REDUX/ACTIONS/action";

export const CardUser = ( props )=>{
    const dispatch = useDispatch()
    const {
        id, first_name, last_name, email, birthday
    } = props;
    
    const userDelete = ( id )=>{
        dispatch(deleteUser(id))
    }

    const userEdit = ( param ) =>{
        dispatch(editUser(param))
    }

    return (
        <article className="cards">
            <ul className="clards-Ulist">
                <li><b>Name:</b> <span style={{'color': 'green'}}><b>{first_name}</b></span></li>
                <li><b>Lastname:</b> <span style={{'color': 'green'}}><b>{last_name}</b></span></li>
                <li><b>Email:</b> <span style={{'color': 'green'}}><b>{email}</b></span></li>
                <li><b>DOB:</b> <span style={{'color': 'green'}}><b>{birthday}</b></span></li>
            </ul>
            <section className="container-edit">
                <i onClick = {()=> userEdit( props )} className="fas fa-user-edit"></i>
                <i onClick = {()=> userDelete(id)} className="fas fa-trash-alt"></i>
            </section>
        </article>
    )
}