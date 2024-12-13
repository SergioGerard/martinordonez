"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ViewNews from "@/components/admin/ViewNews";

import CryptoJS from "crypto-js";

import { authenticateUser } from "@/lib/firestore";

export default function View() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const savedSession = localStorage.getItem("isLoggedIn");
    if (savedSession === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const generateSHA256 = (password) => {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    try {

      const hashedPassword = generateSHA256(password);

      const user = await authenticateUser(username, hashedPassword);

      console.log('ess-->',JSON.stringify(user))

      if (user) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        console.log("Usuario autenticado:", user);
      } else {
        alert("Usuario o contraseña incorrectos");
      }

    } catch (error) {
      console.error("Error al autenticar:", error);
      alert("Hubo un problema con el login");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  if (!isLoggedIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            background: "#000",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <div className="flex justify-center mt-5 mb-8">
           
          </div>
          <div>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{ display: "block", marginBottom: "5px", color: "#fff" }}
              >
                Usuario:
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #333",
                  borderRadius: "5px",
                  background: "#333",
                  color: "#999",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{ display: "block", marginBottom: "5px", color: "#fff" }}
              >
                Contraseña:
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #333",
                  borderRadius: "5px",
                  background: "#333",
                  color: "#999",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "10px",
                width: "100%",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <section>
      <div className="flex justify-between bg-[#140f1a]">
        <div className="flex justify-center p-5">
        </div>
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
      <ViewNews />
    </section>
  );
}
