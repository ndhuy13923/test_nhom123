import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8081/create', {
                firstName,
                lastName,
                address,
            })
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div className="container mt-5">
                <h1>Create User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            onChange={(event) =>
                                setfirstName(event.target.value)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            onChange={(event) =>
                                setLastName(event.target.value)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            type="address"
                            className="form-control"
                            id="address"
                            name="address"
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
