"use client"
import { useEffect, useState } from "react";
import HomePage from "./Page/HomePage";
import Loader from "./components/Loader";

export default function Home() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return <>
  { loading ? <Loader/> : <HomePage/>}
  </>
}
