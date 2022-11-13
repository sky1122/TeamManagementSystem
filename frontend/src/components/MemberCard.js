import React from 'react'
import Info from './Form'

export default function Card(member) {
    return (

        <div>
            <input type="checkbox" id={member.member.id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={member.member.id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Update {member.member.first_name} {member.member.last_name} </h3>
                    <Info member={member} />
                </div>
            </div>


            <div className="card card-side bg-base-100 shadow-xl w-96">
                <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Name: {member.member.first_name} {member.member.last_name}</h2>
                    <p>Phone: {member.member.phone}</p>
                    <p>Email: {member.member.email}</p>
                    <p>Role: {member.member.role === "1" ? "regular" : "admin"}</p>
                    <div className="card-actions justify-end">
                    <label htmlFor={member.member.id} className="btn">Edit</label>
                    </div>
                </div>
            </div>
        </div >
    )
}
