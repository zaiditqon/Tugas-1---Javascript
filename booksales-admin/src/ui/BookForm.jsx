export default function BookForm({ draft, onChange, onSubmit, onCancel }) {
  const disabled = !draft.title.trim() || !draft.author.trim();
  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 8, marginBottom: 16 }}>
      <div style={{ display: "grid", gap: 6, gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        <input placeholder="Judul" value={draft.title} onChange={(e) => onChange({ ...draft, title: e.target.value })} />
        <input placeholder="Penulis" value={draft.author} onChange={(e) => onChange({ ...draft, author: e.target.value })} />
        <input placeholder="Genre" value={draft.genre} onChange={(e) => onChange({ ...draft, genre: e.target.value })} />
        <input placeholder="Harga" type="number" value={draft.price} onChange={(e) => onChange({ ...draft, price: e.target.value })} />
        <input placeholder="Stok" type="number" value={draft.stock} onChange={(e) => onChange({ ...draft, stock: e.target.value })} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button disabled={disabled}>{draft.id ? "Perbarui" : "Tambah"}</button>
        {draft.id && (
          <button type="button" onClick={onCancel}>Batal</button>
        )}
      </div>
    </form>
  );
}
