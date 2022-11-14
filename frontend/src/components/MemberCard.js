import React, { useState } from "react";
import axios from 'axios';
import FormUpdate from './FormUpdate';
const DELETE_MEMBER_API = "http://127.0.0.1:8000/api/member/"

export default function Card(member) {
    const [errorMessage, setErrorMessage] = useState('');
    const handleOnDelet = (e) => {
        console.log("handleOnDelet");
        e.preventDefault();

        console.log("card")
        console.log(member.member.id)
        if (member.member.role === "0") {
            setErrorMessage('Cannot delete Admin');
        }
        console.log(errorMessage);
        console.log(errorMessage === "");
        if (member.member.role === "1") {
            axios({
                method: 'delete',
                url: DELETE_MEMBER_API + member.member.id,
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }


        // axios.post(POST_MEMBER_API, member)
        //     .catch((err) => { console.error(err) });
        // this.props.history.push('/Team')
    };

    return (

        <div>
            <input type="checkbox" id={member.member.id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={member.member.id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Update {member.member.first_name} {member.member.last_name} </h3>
                    <FormUpdate member={member} />
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl w-96">
                <figure>
                    <img src="https://placeimg.com/192/192/people" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {member.member.first_name} {member.member.last_name}</h2>
                    <p>Phone: {member.member.phone}</p>
                    <p>Email: {member.member.email}</p>
                    <p>Role: {member.member.role === "1" ? "regular" : "admin"}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-error" onClick={handleOnDelet}>Delete</button>
                        <label htmlFor={member.member.id} className="btn">Edit</label>
                        {errorMessage && (<p className="error"> {errorMessage} </p>)}
                    </div>
                </div>
            </div>
        </div >
    )
}
