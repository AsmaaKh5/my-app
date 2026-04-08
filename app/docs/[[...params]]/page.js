"use client";

import { useParams, useRouter } from "next/navigation";

export default function DocsPage() {
  const { params = [] } = useParams();
  const router = useRouter();

   const goHome = () => {
    router.replace("/");
  };

  // /docs
  if (params.length === 0) {
    return (
      <div>
        <h1>Docs Page</h1>
        <p>Welcome to documentation</p>
        <button className="btn btn-dark" onClick={goHome}>
          Go Home
        </button>
      </div>
    );
  }

  // /docs/one
  if (params.length === 1) {
    return (
      <div>
        <h1>The first: {params[0]}</h1>
        <button className="btn btn-dark" onClick={goHome}>
          Go Home
        </button>
      </div>
    );
  }

  // /docs/one/two
  if (params.length === 2) {
    return (
      <div>
        <h1>The first: {params[0]}</h1>
        <h1>The second: {params[1]}</h1>
        <button className="btn btn-dark" onClick={goHome}>
          Go Home
        </button>
      </div>
    );
  }

  // /docs/one/two/three/...
  return (
    <div>
      <h1>All Params:</h1>
      {params.map((p, i) => (
        <h3 key={i}>Param {i + 1}: {p}</h3>
      ))}
      <button className="btn btn-dark" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
}