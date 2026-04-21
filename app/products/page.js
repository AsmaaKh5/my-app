import Link from "next/link";
import Image from "next/image";

export const revalidate = 10;

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="mb-3">Products (ISR)</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>
                <Image src={p.thumbnail} width={50} height={50} alt={p.title} />
              </td>
              <td>${p.price}</td>
              <td>
                <Link className="btn btn-dark btn-sm" href={`/products/${p.id}`}>
                  See Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}