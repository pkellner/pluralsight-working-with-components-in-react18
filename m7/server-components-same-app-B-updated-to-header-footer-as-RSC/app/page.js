import "server-only";
import React, { Suspense } from "react";
import App from "@/app/components/App";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading... (from Page.js, a React Server Component)</div>}>
        <App />
      </Suspense>
      <Footer />
    </>
  );
}
