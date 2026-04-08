"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function UserDetailPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();

  async function fetchUser() {
    const res = await fetch(`https://dummyjson.com/users/${params.id}`);
    const data = await res.json();
    setUser(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

   const back = () => {
    router.push("/users");
  };

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div>
      <button className="btn btn-secondary mb-3" onClick={back}>
        ← Back
      </button>
      <div className="card">
        <div className="card-body">
          <h1>{user.firstName} {user.lastName}</h1>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>City:</strong> {user.address?.city}</p>
        </div>
      </div>
    </div>
  );
}