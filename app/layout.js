import "./globals.css";

export const metadata = {
  title: "Drip",
  description: "Drip",
  icons: "/dripfavicon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
