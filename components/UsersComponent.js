"use client";

import { useEffect, useState } from "react";

export default function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users?limit=12");
      const data = await res.json();
      setUsers(data.users);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  }

   useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="mt-3">Loading Users...</h3>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger mt-4">{error}</div>;
  }

  return (
    <div>
      <h1 className="mb-3">👥 Users</h1>
      <span className="badge bg-success mb-4 fs-6">
        CSR - Client Side Rendering (البيانات بتتجاب من الـ Browser بعد تحميل الصفحة)
      </span>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-3" key={user.id}>
            <div className="card h-100">
              <div className="card-body text-center">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="rounded-circle mb-3"
                  width={80}
                  height={80}
                />
                <h5 className="card-title">
                  {user.firstName} {user.lastName}
                </h5>
                <p className="card-text text-muted">{user.email}</p>
                <p className="card-text">
                  <small>📞 {user.phone}</small>
                </p>
                <p className="card-text">
                  <small>
                    🏙️ {user.address?.city}, {user.address?.state}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}