import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "next blog",
  description: "start writing your next blog post now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="main">
            <Nav/>
            <div className="m-10">{children}</div>
            
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}