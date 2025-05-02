import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/home");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoText}>Parfume</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/home" className={styles.navLink}>
            Home
          </Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login" className={styles.navLink}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className={styles.navLink}>
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className={styles.welcomeText}>Welcome, {user.name}</li>
            <li>
              <Link to="/bucket" className={styles.navLink}>
                Bucket
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

