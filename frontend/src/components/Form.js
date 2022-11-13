import React, { useState } from "react";
import axios from 'axios';


const POST_MEMBER_API = "http://127.0.0.1:8000/api/member";
export default function Info(memberProps) {
    let initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
      };
    const {member} = memberProps
    

    if (member !== "None" || member !== undefined) {
        initialValues = {
            first_name: member.member.first_name,
            last_name: member.member.last_name,
            email: member.member.email,
            phone: member.member.phone
        }
    }
    console.log(initialValues)
    const [values, setValues] = useState(initialValues);
    const [checkedOption, setCheckedOption] = useState("1");
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
      
    };

    const handleOptionChange = (e) => {
        setCheckedOption(e.target.value);
    }

    const handleOnSumbit = (e) => {
        e.preventDefault();
        const member = {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phone,
            role: checkedOption,
            team: ""
        };

        axios.post(POST_MEMBER_API, member)
             .catch((err) => { console.error(err) });
    };


    return (
        <div>
            <div class="flex flex-col justify-center w-9/12">
                <form className='input-search' onSubmit={handleOnSumbit}>
                    <div><h2>Info</h2></div>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleInputChange}
                            value={values.first_name}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleInputChange}
                            value={values.last_name}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            name='email'
                            onChange={handleInputChange}
                            value={values.email}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                    <label>Phone</label>
                        <input
                            type="text"
                            placeholder="Phone"
                            name='phone'
                            onChange={handleInputChange}
                            value={values.phone}
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <h2>role</h2>
                    <div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Regulat - Can't delete members</span>
                                <input
                                    type="radio"
                                    name="radio-10" 
                                    value="1"
                                    checked={checkedOption === "1"}
                                    onChange={handleOptionChange}
                                    className="radio checked:bg-red-500"
                                 />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Admin - Can delete members</span>
                                <input
                                    type="radio"
                                    name="radio-10"
                                    value="0"
                                    checked={checkedOption === "0"}
                                    onChange={handleOptionChange}
                                    className="radio checked:bg-blue-500"/>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-info" type='submit'>Info</button>
                </form>
            </div>

        </div>

    )
}
