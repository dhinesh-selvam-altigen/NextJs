import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      padding: "20px",
      backgroundColor: "#2c3e50",
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <Link href="/" style={{
        color: "#ecf0f1",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "500",
        padding: "8px 16px",
        borderRadius: "4px",
        transition: "all 0.3s ease",
        ":hover": {
          backgroundColor: "#34495e",
          transform: "translateY(-2px)"
        }
      }}>
        Home
      </Link>
      <Link href="/login" style={{
        color: "#ecf0f1", 
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "500",
        padding: "8px 16px",
        borderRadius: "4px",
        transition: "all 0.3s ease",
        ":hover": {
          backgroundColor: "#34495e",
          transform: "translateY(-2px)"
        }
      }}>
        Login
      </Link>
      <Link href="/users" style={{
        color: "#ecf0f1",
        textDecoration: "none", 
        fontSize: "16px",
        fontWeight: "500",
        padding: "8px 16px",
        borderRadius: "4px",
        transition: "all 0.3s ease",
        ":hover": {
          backgroundColor: "#34495e",
          transform: "translateY(-2px)"
        }
      }}>
        Users
      </Link>
      <Link href="/movies" style={{
        color: "#ecf0f1",
        textDecoration: "none", 
        fontSize: "16px",
        fontWeight: "500",
        padding: "8px 16px",
        borderRadius: "4px",
        transition: "all 0.3s ease",
        ":hover": {
          backgroundColor: "#34495e",
          transform: "translateY(-2px)"
        }
      }}>
        Movies
      </Link>
    </nav>
  );
}
