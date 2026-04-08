import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          MyApp
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/quotes">Quotes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/docs">Docs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}