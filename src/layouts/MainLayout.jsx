"use client";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-6">
      <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
