
import React, { useState, useEffect } from 'react';
import { apiGet, apiPut, apiDelete } from './api/client';

const Admin = () => {
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [newGenre, setNewGenre] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  useEffect(() => {
    // Fetch genres and authors from the API
    const fetchData = async () => {
      try {
        const genresData = await apiGet('/api/genres');
        setGenres(genresData);
        const authorsData = await apiGet('/api/authors');
        setAuthors(authorsData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle genre update
  const handleUpdateGenre = async (id) => {
    try {
      const updatedGenre = await apiPut(`/api/genres/${id}`, { name: newGenre });
      setGenres((prevGenres) =>
        prevGenres.map((genre) =>
          genre.id === id ? { ...genre, name: updatedGenre.name } : genre
        )
      );
      setNewGenre(''); // Clear input field
    } catch (error) {
      console.error("Error updating genre:", error);
    }
  };

  // Handle author update
  const handleUpdateAuthor = async (id) => {
    try {
      const updatedAuthor = await apiPut(`/api/authors/${id}`, { name: newAuthor });
      setAuthors((prevAuthors) =>
        prevAuthors.map((author) =>
          author.id === id ? { ...author, name: updatedAuthor.name } : author
        )
      );
      setNewAuthor(''); // Clear input field
    } catch (error) {
      console.error("Error updating author:", error);
    }
  };

  // Handle genre deletion
  const handleDeleteGenre = async (id) => {
    try {
      await apiDelete(`/api/genres/${id}`);
      setGenres((prevGenres) => prevGenres.filter((genre) => genre.id !== id));
    } catch (error) {
      console.error("Error deleting genre:", error);
    }
  };

  // Handle author deletion
  const handleDeleteAuthor = async (id) => {
    try {
      await apiDelete(`/api/authors/${id}`);
      setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id !== id));
    } catch (error) {
      console.error("Error deleting author:", error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <div>
        <h3>Genres</h3>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>
              {genre.name} 
              <button onClick={() => handleUpdateGenre(genre.id)}>Update</button>
              <button onClick={() => handleDeleteGenre(genre.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
          placeholder="Enter new genre"
        />
      </div>

      <div>
        <h3>Authors</h3>
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              {author.name}
              <button onClick={() => handleUpdateAuthor(author.id)}>Update</button>
              <button onClick={() => handleDeleteAuthor(author.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder="Enter new author"
        />
      </div>
    </div>
  );
};

export default Admin;
