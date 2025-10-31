import React, { useState } from "react";
import styles from "./AdminLogin.module.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://theezy-art-website-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("adminToken", data.token);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>🔒</div>
        </div>
        <h2 className={styles.title}>Admin Login</h2>
        <p className={styles.subtitle}>
          Enter your credentials to access the admin panel
        </p>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
