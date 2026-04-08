import Link from "next/link";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1> Product Details</h1>
      <p>Product ID: <strong>{id}</strong></p>
      <Link href={`/products/${id}/reviews/1`}>
        View Review #1
      </Link>
    </div>
  );
}