import Link from "next/link";

async function getCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  return data;
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <h1 className="mb-3">Categories (SSG)</h1>
      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-3 mb-3" key={cat.slug}>
            <div className="card h-100">
              <div className="card-body text-center">
                <h5>{cat.name}</h5>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="btn btn-dark btn-sm mt-2"
                >
                  See Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}