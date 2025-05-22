export default function UserSave() {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">User Management</h2>

            {/* User Actions */}
            <div className="mb-4 d-flex gap-2">
                <button className="btn btn-primary" id="addBtn">Add User</button>
                <button className="btn btn-warning" id="editBtn" disabled>Edit Selected</button>
                <button className="btn btn-danger" id="deleteBtn" disabled>Delete Selected</button>
            </div>

            {/* Add/Edit User Form (hidden by default) */}
            <div className="card mb-4 d-none" id="userFormCard">
                <div className="card-header bg-primary text-white">
                    <h5 id="formTitle">Add User</h5>
                </div>
                <div className="card-body">
                    <form id="userForm">
                        <input type="hidden" id="userId" />
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-secondary" id="cancelBtn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Users Table */}
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h5>User List</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody id="userTableBody">
                            {/* Sample row - in a real app, this would be dynamically generated */}
                            <tr>
                                <td><input type="radio" name="userSelect" value="1" /></td>
                                <td>1</td>
                                <td>sampleUser</td>
                            </tr>
                            <tr>
                                <td><input type="radio" name="userSelect" value="2" /></td>
                                <td>2</td>
                                <td>anotherUser</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}