import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "1rem" }}>
      <Link href="/" style={{ color: "white", marginRight: "1rem" }}>
        Home
      </Link>
      <Link href="/products" style={{ color: "white" }}>
        Products
      </Link>
    </nav>
  );
}