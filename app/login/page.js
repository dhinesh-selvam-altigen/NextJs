"use client";

import { useState } from "react";
import api from "../../app/utils/api";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!formData.email || !formData.password) return toast.error("Please fill in all fields");
      const { data } = await api.post("/auth/login", formData);
      alert(`Login successful! Token: ${data.token}`);
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: "400px", margin: "50px auto" }}
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ 
          textAlign: 'center', 
          color: '#333',
          marginBottom: '30px',
          fontSize: '2rem',
          fontWeight: '600'
        }}
      >
        Login
      </motion.h2>
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" }}
        style={{
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        }}
      >
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            padding: "12px 15px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            transition: "border-color 0.3s ease",
            outline: "none",
          }}
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            padding: "12px 15px",
            marginBottom: "25px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            transition: "border-color 0.3s ease",
            outline: "none",
          }}
        />
        <motion.button 
          type="submit" 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            backgroundColor: "#4A90E2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Login
        </motion.button>
      </motion.div>
    </motion.form>
  );
}
 