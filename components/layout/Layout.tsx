import Header from "./Header";
import Footer from "./Footer";
import { ReactElement } from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className={quicksand.className}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
