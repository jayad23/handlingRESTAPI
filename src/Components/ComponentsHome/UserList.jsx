import React from "react";
import { CardUser } from "../componentList/CardUser";
import { useSelector } from "react-redux";

export const UserList = ()=>{

    const { initialData } = useSelector( data => data.firstReducer)
    

    return (
        <div className="container-list">
            <article className="container-cards">
                {
                    initialData?.map(user=>
                        <CardUser
                            key={user.id}
                            id={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            email={user.email}
                            birthday={user.birthday}
                            password={user.password}
                        />
                    )
                }
            </article>
        </div>
    )
}