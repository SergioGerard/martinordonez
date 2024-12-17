"use client";

import { useState, useEffect } from "react";
import ConfigNews from "@/components/admin/ConfigNews";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

export default function Config({ params: { id } }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedSession = localStorage.getItem("isLoggedIn");
    if (savedSession === "true") {
      setIsLoggedIn(true);
    } else {
      router.push("/admin"); // Redirigir si no está logueado
    }
  }, [router]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "news", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          throw new Error("El post no existe");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleLogout = () => {
    setIsLoggedIn(false);
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

      <ConfigNews {...post} isForUpdate />
    </section>
  );
}
