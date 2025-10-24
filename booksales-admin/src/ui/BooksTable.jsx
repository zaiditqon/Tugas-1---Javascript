export default function BooksTable({ items, onEdit, onDelete }) {
  if (!items.length) return <p>Tidak ada data buku.</p>;
  return (
    <table width="100%" cellPadding={8} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th align="left">Judul</th>
          <th align="left">Penulis</th>
          <th align="left">Genre</th>
          <th align="right">Harga</th>
          <th align="right">Stok</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {items.map((b) => (
          <tr key={b.id} style={{ borderTop: "1px solid #ddd" }}>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.genre}</td>
            <td align="right">{formatIDR(b.price)}</td>
            <td align="right">{b.stock}</td>
            <td align="center">
              <button onClick={() => onEdit(b)}>Edit</button>{" "}
              <button onClick={() => onDelete(b)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function formatIDR(n) { try { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(n ?? 0); } catch { return n; } }
