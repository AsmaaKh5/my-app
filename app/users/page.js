"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchUsers() {
    const res = await fetch("https://dummyjson.com/users?limit=12");
    const data = await res.json();
    setUsers(data.users);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

   const goToUser = (id) => {
    router.push(`/users/${id}`);
  };

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div>
      <h1 className="mb-3">Users (CSR)</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.firstName} {u.lastName}</td>
              <td>{u.email}</td>
              <td>
                {/* Programmatic Navigation بدل Link */}
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => goToUser(u.id)}
                >
                  See Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}