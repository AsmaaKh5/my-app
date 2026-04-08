import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "2rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}