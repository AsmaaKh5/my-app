import Link from "next/link";

export default async function ReviewPage({ params }) {
  const { id, reviewId } = await params;

  return (
    <div>
      <h1> Review Details</h1>
      <p>Product ID: <strong>{id}</strong></p>
      <p>Review ID: <strong>{reviewId}</strong></p>
      <br />
      <Link href={`/products/${id}`} className="btn btn-secondary">
        ← Back to Product
      </Link>
    </div>
  );
}