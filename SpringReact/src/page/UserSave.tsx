import * as React from "react";
import {useState} from "react";
import type {UserType} from "../type/UserType.ts";

export default function UserSave() {
    const [id, setId] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null)

    function addUser(e: React.FormEvent) {
        e.preventDefault();

        const newUser: UserType = {
            id: id,
            username: username,
            password: password
        }

        fetch('http://localhost:8080/api/v1/users/userSave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMessage({text: 'User saved successfully!', type: 'success'});
                setId('');
                setUserName('');
                setPassword('');
            })
            .catch(error => {
                console.error('Error saving user:', error);
                setMessage({text: 'Failed to save user. Please try again.', type: 'error'});
            });
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Customer Management</h1>

            {message && (
                <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'}`}>
                    {message.text}
                </div>
            )}

            <div className="card mb-5">
                <div className="card-header bg-primary text-white">
                    <h5>Add New Customer</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={addUser}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="id"
                                    value={id}
                                    onChange={(e) => setId(String(e.target.value))}
                                    placeholder="Enter ID"
                                    required
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="Enter username"
                                    required
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"  // Changed to password type for security
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(String(e.target.value))}
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Customer</button>
                    </form>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-success text-white">
                    <h5>Customer List</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>UserName</th>
                                <th>Password</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* {customerData.map(customer => (
                                <tr key={customer.id1}>
                                    <td>{customer.id1}</td>
                                    <td>{customer.name1}</td>
                                    <td>{customer.age1}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2">Edit</button>
                                    </td>
                                </tr>
                            ))}*/}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}