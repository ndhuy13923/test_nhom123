import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8081/')
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/users/' + id);
            toast.success('Delete success');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
            <div className="w-75 bg-white rounded p-3">
                <h2>List Users</h2>
                <Link to="/create" className="btn btn-success">
                    Add +
                </Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.address}</td>
                                <td>
                                    <Link
                                        to={`detail/${item.id}`}
                                        className="btn btn-primary ms-1"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={`update/${item.id}`}
                                        className="btn btn-warning ms-1"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        className="btn btn-danger ms-1"
                                        onClick={(e) => {
                                            handleDelete(item.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
