import React, { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    if (title.trim() && author.trim()) {
      const newBook = {
        id: Date.now(),
        title: title.trim(),
        author: author.trim()
      };

      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
    }
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Favorite Books List</h1>

      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button onClick={handleAddBook}>Add Book</button>

      <ul>
        {books.map((book, index) => (
          <li key={book.id}>
            {index + 1}. {book.title} by {book.author}

            <button onClick={() => handleDelete(book.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;