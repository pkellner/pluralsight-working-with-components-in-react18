import App from "@/app/components/App";
import React, { Suspense } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading... (from App.js RSC)</div>}>
      <Header />
      <App />
      <Footer />
    </Suspense>
  );
}
