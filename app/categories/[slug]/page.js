import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categories = await res.json();
  return categories.map((cat) => ({ slug: cat.slug }));
}

async function getCategoryProducts(slug) {
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
  const data = await res.json();
  return data.products;
}

export default async function CategoryDetailPage({ params }) {
  const { slug } = await params;
  const products = await getCategoryProducts(slug);

  return (
    <div>
      <Link href="/categories" className="btn btn-secondary mb-3">
        ← Back
      </Link>
      <h1 className="mb-3 text-capitalize">{slug.replace(/-/g, " ")}</h1>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-3 mb-3" key={p.id}>
            <div className="card h-100">
              <Image
                src={p.thumbnail}
                width={300}
                height={200}
                alt={p.title}
                className="card-img-top"
                style={{ objectFit: "cover", height: "160px" }}
              />
              <div className="card-body">
                <h6>{p.title}</h6>
                <p className="text-success fw-bold">${p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}