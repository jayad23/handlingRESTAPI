import React from "react";
import { UserForm } from "../Components/ComponentsHome/UserForm";
import { UserList } from "../Components/ComponentsHome/UserList";

export const Home = ()=>{
    return (
        <div className="container-home">
            <UserForm/>
            <UserList/>
        </div>
    )
}