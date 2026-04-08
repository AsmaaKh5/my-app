import Link from "next/link";

export const dynamic = "force-dynamic";

async function getQuote(id) {
  const res = await fetch(`https://dummyjson.com/quotes/${id}`, {
    cache: "no-store",
  });
  return await res.json();
}

export default async function QuoteDetailPage({ params }) {
  const { id } = await params;
  const quote = await getQuote(id);

  return (
    <div>
      <Link href="/quotes" className="btn btn-secondary mb-3">
        ← Back
      </Link>
      <div className="card">
        <div className="card-body text-center py-5">
          <h2>Quote #{quote.id}</h2>
          <p className="fs-4 mt-3">"{quote.quote}"</p>
          <p className="text-muted fs-5">- {quote.author}</p>
        </div>
      </div>
    </div>
  );
}