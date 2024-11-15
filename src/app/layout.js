import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './../components/navbar/Navbar';
import { SearchBarProvider } from './../context/SearchBarContext/searchBarContext';
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en " className="dark">
      <head>
        <title>Drive Elite | Home Page</title>
      </head>
      <body
        className={"  p-0 m-0 dark:bg-[#020202] bg-[#fff] overflow-x-hidden"}
      >
        <SearchBarProvider>

        <Navbar />

        <div className="container">

          {children}
        </div>
        </SearchBarProvider>


      </body>
    </html>
  );
}
