import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../api/client";

export default function GenresPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    let on = true;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = await apiGet("/genres");
        if (on) setItems(data);
      } catch {
        if (on) setError("Gagal memuat genre");
      } finally {
        if (on) setLoading(false);
      }
    })();
    return () => { on = false; };
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    if (!name.trim()) return;
    try {
      const created = await apiPost("/genres", { name });
      setItems((prev) => [created, ...prev]);
      setName("");
    } catch {
      setError("Gagal menambah genre");
    }
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Manajemen Genre (Read & Create)</h2>

      <form onSubmit={handleCreate} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input placeholder="Nama genre" value={name} onChange={(e) => setName(e.target.value)} />
        <button disabled={!name.trim()}>Tambah</button>
      </form>

      {loading && <p>Memuat…</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!loading && items.length === 0 && <p>Belum ada genre.</p>}
      {items.length > 0 && (
        <table width="100%" cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th align="left">ID</th>
              <th align="left">Nama</th>
            </tr>
          </thead>
          <tbody>
            {items.map((g) => (
              <tr key={g.id} style={{ borderTop: "1px solid #ddd" }}>
                <td>{g.id}</td>
                <td>{g.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
