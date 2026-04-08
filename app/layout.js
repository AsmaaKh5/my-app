import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mt-4">{children}</main>
        <BootstrapClient />
      </body>
    </html>
  );
}