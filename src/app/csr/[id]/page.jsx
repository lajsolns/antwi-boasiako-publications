import DetailsHolder from "@/componentData/Csr/DetailsHolder";
import Footer from "@/componentData/Footer";
import Navigation from "@/componentData/NavBar";
import Topics from "@/componentData/Topics";
import React from "react";
import { CsrProvider } from "@/context/CsrContext";

const CsrDetailsPage = async ({ params }) => {
  const id = await Promise.resolve(Number(params.id));
  
  return (
    <div className="w-svw min-h-screen font-[family-name:var(--font-geist-sans)] rounded-md bg-stone-950">
      <main className="w-full h-full rounded-md shadow-sm">
        <nav className="w-full rounded-md sticky top-0 left-0 z-50">
          <Navigation />
        </nav>
        <CsrProvider>
          <DetailsHolder id={id} />
        </CsrProvider>
        <Topics />
      </main>
      <Footer />
    </div>
  );
};

export default CsrDetailsPage;
