"use client";

import { useState, useEffect } from "react";
import ConfigNews from "@/components/admin/ConfigNews";
import { useRouter } from "next/navigation";

export default function Config() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedSession = localStorage.getItem("isLoggedIn");
    if (savedSession === "true") {
      setIsLoggedIn(true);
    } else {
      router.push("/admin"); // Redirigir si no está logueado
    }
  }, [router]);

  const handleLogout = () => {
    setIsLoggedIn(false); // Log Out
    localStorage.removeItem("isLoggedIn");
    router.push("/admin");
  };

  if (!isLoggedIn) {
    return null; // No renderizar nada mientras se redirige
  }

  return (
    <section>
      <div className="flex justify-between ">
      <a
          href="/admin"
          style={{
            margin: "20px",
            padding: "10px 20px",
            backgroundColor: "#999",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Go Back
        </a>
        <button
          onClick={handleLogout}
          style={{
            margin: "20px",
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Log Out
        </button>
      </div>

      <ConfigNews />
    </section>
  );
}
