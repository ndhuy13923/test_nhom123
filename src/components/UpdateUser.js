import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8081/detail/${id}`)
            .then((res) =>
                setValues({
                    ...values,
                    firstName: res.data[0].firstName,
                    lastName: res.data[0].lastName,
                    address: res.data[0].address,
                }),
            )
            .catch((err) => console.log(err));
    }, []);

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        address: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put('http://localhost:8081/update/' + id, values)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div className="container mt-5">
                <h1>Update User</h1>
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
                                setValues({
                                    ...values,
                                    firstName: event.target.value,
                                })
                            }
                            value={values.firstName}
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
                                setValues({
                                    ...values,
                                    lastName: event.target.value,
                                })
                            }
                            value={values.lastName}
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
                            onChange={(event) =>
                                setValues({
                                    ...values,
                                    address: event.target.value,
                                })
                            }
                            value={values.address}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
