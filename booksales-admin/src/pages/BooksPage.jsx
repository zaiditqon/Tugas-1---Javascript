import { useEffect, useMemo, useState } from "react";
import { apiGet, apiPost, apiPut, apiDelete } from "../api/client";
import BooksTable from "../ui/BooksTable";
import BookForm from "../ui/BookForm";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState(emptyDraft());

  const isEditing = useMemo(() => draft.id !== null, [draft.id]);

  useEffect(() => {
    let on = true;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = await apiGet("/books");
        if (on) setBooks(data);
      } catch (e) {
        if (on) setError("Gagal memuat data buku");
      } finally {
        if (on) setLoading(false);
      }
    })();
    return () => { on = false; };
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    setError("");
    const payload = normalizeDraft(draft);
    try {
      if (isEditing) {
        const updated = await apiPut(`/books/${draft.id}`, payload);
        setBooks((prev) => prev.map(b => b.id === draft.id ? updated : b));
      } else {
        const created = await apiPost("/books", payload);
        setBooks((prev) => [created, ...prev]);
      }
      setDraft(emptyDraft());
    } catch {
      setError("Simpan gagal");
    }
  }

  async function handleDelete(id) {
    const backup = books;
    setBooks((prev) => prev.filter(b => b.id !== id));
    try {
      await apiDelete(`/books/${id}`);
    } catch {
      setBooks(backup);
      setError("Hapus gagal");
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Manajemen Buku</h2>

      <BookForm
        draft={draft}
        onChange={setDraft}
        onSubmit={handleSave}
        onCancel={() => setDraft(emptyDraft())}
      />

      {loading && <p>Memuat…</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <BooksTable
        items={books}
        onEdit={(b) => setDraft(fillDraft(b))}
        onDelete={(b) => handleDelete(b.id)}
      />
    </div>
  );
}

function emptyDraft() {
  return { id: null, title: "", author: "", price: 0, stock: 0, genre: "" };
}
function fillDraft(b) {
  return { id: b.id, title: b.title ?? "", author: b.author ?? "", price: b.price ?? 0, stock: b.stock ?? 0, genre: b.genre ?? "" };
}
function normalizeDraft(d) {
  return { ...d, price: Number(d.price), stock: Number(d.stock) };
}
