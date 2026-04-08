"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

   const back = () => {
    router.replace("/");
  };

  return (
    <div className="mt-5">
      <h1 className="alert alert-danger">404 - Page Not Found</h1>
      <p>OOPS, Something Wrong</p>
      <button className="btn btn-dark w-100" onClick={back}>
        Back To Home
      </button>
    </div>
  );
}