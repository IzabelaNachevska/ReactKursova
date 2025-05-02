import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Register.module.css";


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    parfumType: "",
    parfumSize: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users", formData)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
        required
      />
      <select name="parfumType" onChange={handleChange} required>
        <option value="">Select Parfum Type</option>
        <option value="Fresh">Fresh</option>
        <option value="Sweet">Sweet</option>
        <option value="Woody">Woody</option>
      </select>

      <select name="parfumSize" onChange={handleChange} required>
        <option value="">Select Parfum Size</option>
        <option value="30">30 ml</option>
        <option value="50">50 ml</option>
        <option value="100">100 ml</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
