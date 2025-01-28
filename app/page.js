import Image from "next/image";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <>
      <Layout/>
      <Navbar />
    </>
  );
}
