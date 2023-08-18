import "server-only";
import App from "@/app/components/App";
import React, { Suspense } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading... (from App.js in React Server Component)</div>}>
        <App />
      </Suspense>
      <Footer />
    </>
  );
}
