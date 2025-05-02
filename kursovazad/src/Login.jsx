import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";


function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `http://localhost:5000/users?email=${formData.email}&password=${formData.password}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          localStorage.setItem("user", JSON.stringify(response.data[0]));
          navigate("/bucket");  
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
