import 'server-only';
import React, { Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout//Footer';
import ImportantContextProvider from './contexts/ImportantContext';
import ToDoFilterToolbar from './components/todo/ToDoFilterToolbar';
import ToDoList from './components/todo/ToDoList';

export default function Page() {
  return (
    <>
      <Header />
      <ImportantContextProvider>
        <ToDoFilterToolbar />
        <Suspense fallback={<div>Loading... </div>}>
          <ToDoList />
        </Suspense>
      </ImportantContextProvider>
      <Footer />
    </>
  );
}
