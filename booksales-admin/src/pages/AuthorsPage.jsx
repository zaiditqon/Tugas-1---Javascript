import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../api/client";

export default function AuthorsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", country: "" });

  useEffect(() => {
    let on = true;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = await apiGet("/authors");
        if (on) setItems(data);
      } catch {
        if (on) setError("Gagal memuat author");
      } finally {
        if (on) setLoading(false);
      }
    })();
    return () => { on = false; };
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    try {
      const created = await apiPost("/authors", form);
      setItems((prev) => [created, ...prev]);
      setForm({ name: "", country: "" });
    } catch {
      setError("Gagal menambah author");
    }
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Manajemen Author (Read & Create)</h2>

      <form onSubmit={handleCreate} style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr auto", marginBottom: 16 }}>
        <input placeholder="Nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Negara" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
        <button disabled={!form.name.trim()}>Tambah</button>
      </form>

      {loading && <p>Memuat…</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!loading && items.length === 0 && <p>Belum ada author.</p>}
      {items.length > 0 && (
        <table width="100%" cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th align="left">ID</th>
              <th align="left">Nama</th>
              <th align="left">Negara</th>
            </tr>
          </thead>
          <tbody>
            {items.map((a) => (
              <tr key={a.id} style={{ borderTop: "1px solid #ddd" }}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
