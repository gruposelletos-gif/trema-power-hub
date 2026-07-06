import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      <main className={`min-h-screen ${isHome ? "" : "pt-20"}`}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PageLayout;
