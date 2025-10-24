import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  const linkStyle = { textDecoration: "none", padding: "6px 8px", borderRadius: 8 };
  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui", padding: 16 }}>
      <header style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, marginRight: 8 }}>📚 BookSales</h1>
        <NavLink to="/" style={linkStyle}>Dashboard</NavLink>
        <NavLink to="/books" style={linkStyle}>Buku</NavLink>
        <NavLink to="/genres" style={linkStyle}>Genre</NavLink>
        <NavLink to="/authors" style={linkStyle}>Author</NavLink>
      </header>
      <Outlet />
    </div>
  );
}
