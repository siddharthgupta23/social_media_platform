import React, { useState } from 'react';

const Search = ({ allWidgets }) => {
  const [query, setQuery] = useState('');


  const filteredWidgets = allWidgets.filter(widget =>
    widget.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search widgets..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map(widget => (
            <li key={widget.id}>{widget.text}</li>
          ))
        ) : (
          <li>No widgets found</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
