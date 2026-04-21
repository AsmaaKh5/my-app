import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();

  const paths = [];
  for (const product of data.products) {
    const detailRes = await fetch(`https://dummyjson.com/products/${product.id}`);
    const detail = await detailRes.json();
    const reviews = detail.reviews || [];
    reviews.forEach((_, index) => {
      paths.push({
        id: product.id.toString(),
        reviewId: index.toString(),
      });
    });
  }
  return paths;
}

export const revalidate = 30;

async function getReview(id, reviewId) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  const review = product.reviews?.[parseInt(reviewId)];
  return { review, productTitle: product.title };
}

export default async function ReviewPage({ params }) {
  const { id, reviewId } = await params;
  const { review, productTitle } = await getReview(id, reviewId);

  if (!review) {
    return (
      <div>
        <h2 className="alert alert-danger">Review Not Found</h2>
        <Link href={`/products/${id}`} className="btn btn-secondary">
          ← Back to Product
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href={`/products/${id}`} className="btn btn-secondary mb-3">
        ← Back to {productTitle}
      </Link>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>{review.reviewerName}</h4>
            <span className="badge bg-warning text-dark fs-6">
              ⭐ {review.rating}
            </span>
          </div>
          <p className="text-muted">
            {new Date(review.date).toLocaleDateString()}
          </p>
          <hr />
          <p className="fs-5">"{review.comment}"</p>
        </div>
      </div>
    </div>
  );
}