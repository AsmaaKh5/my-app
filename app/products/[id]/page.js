import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  return data.products.map((p) => ({ id: p.id.toString() }));
}

export const revalidate = 10;

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return await res.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div>
      <Link href="/products" className="btn btn-secondary mb-3">
        ← Back
      </Link>
      <div className="row">
        <div className="col-md-6">
          <Image
            src={product.thumbnail}
            width={400}
            height={300}
            alt={product.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3 className="text-success">${product.price}</h3>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
        </div>
      </div>
    </div>
  );
}