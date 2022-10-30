// import '../styles/globals.css';
import "../styles/tailwind.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../api";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () =>
      checkUser()
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }

  return (
    <div>
      <nav className="p-6 border-b border-gray-300">
        <Link href="/">
          <span className="mr-6 cursor-pointer">Home</span>
        </Link>

        {user && (
          <Link href="/create-shop">
            <span className="mr-6 cursor-pointer">Create Shop</span>
          </Link>
        )}
        {user && (
          <Link href="/my-shops">
            <span className="mr-6 cursor-pointer">My Shops</span>
          </Link>
        )}
        <Link href="/categories">
          <span className="mr-6 cursor-pointer">Categories</span>
        </Link>

        <Link href="/profile">
          <span className="mr-6 cursor-pointer">Profile</span>
        </Link>
      </nav>

      <div className="py-8 px-16">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
