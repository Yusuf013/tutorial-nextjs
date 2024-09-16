import Header from "./components/Header";
import "./globals.css";



export const metadata = {
  title: "Mijn maandag middag app",
  description: "Deze app gebruik ik alleen op maandag middag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
