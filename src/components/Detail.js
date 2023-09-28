import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
    const [users, setUsers] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8081/detail/${id}`)
            .then((res) => setUsers(res.data[0]))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <div class="card d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <div className="p-2">
                        <h2 className="text-center">User Detail</h2>
                        <h2 class="card-title">
                            firstName: <i>{users.firstName}</i>
                        </h2>
                        <h2 class="card-title">
                            Last Name: <i>{users.lastName}</i>
                        </h2>
                        <h2 class="card-text">
                            Address:{' '}
                            <i>
                                <em>{users.address}</em>
                            </i>
                        </h2>
                    </div>
                    <Link to="/" className="btn btn-primary ms-1">
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
}
