import React from "react";
import CsrHero from "./CsrHero";
import CsrItems from "./CsrItems";

const CsrHolder = () => {
  return (
    <div className="w-full h-full">
      <CsrHero />
      <CsrItems />
    </div>
  );
};

export default CsrHolder;
