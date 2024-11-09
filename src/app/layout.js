import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './../components/navbar/Navbar';
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " className="dark">
    <head>
    </head>
      <body
        className={"  p-0 m-0 dark:bg-[#020202] bg-[#fff] overflow-hidden"}
      >
      <Navbar/>

      <div className="container">

        {children}
      </div>

      </body>
    </html>
  );
}
