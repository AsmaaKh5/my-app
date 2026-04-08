import Link from "next/link";

 export const dynamic = "force-dynamic";

async function getQuotes() {
  const res = await fetch("https://dummyjson.com/quotes?limit=10", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.quotes;
}

export default async function QuotesPage() {
  const quotes = await getQuotes();

  return (
    <div>
      <h1 className="mb-3">Quotes (SSR)</h1>
      <div className="row">
        {quotes.map((q) => (
          <div className="col-md-6 mb-3" key={q.id}>
            <div className="card h-100">
              <div className="card-body">
                <p>"{q.quote}"</p>
                <footer className="text-muted">- {q.author}</footer>
                <Link
                  className="btn btn-outline-dark btn-sm mt-2"
                  href={`/quotes/${q.id}`}
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}