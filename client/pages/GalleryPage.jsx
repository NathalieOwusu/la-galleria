
import React, { useState } from 'react';

const GalleryPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false); // For showing loading state
  const [searchExecuted, setSearchExecuted] = useState(false); // To track search status

  // Fetch artworks based on search query
  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      alert('Please enter a search term!');
      return;
    }

    setIsSearching(true); // Start searching
    setSearchExecuted(true); // Mark search as executed

    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${searchQuery}&fields=id,title,image_id,artist_display&limit=1`
      );
      const result = await response.json();

      if (response.ok) {
        setArtworks(result.data);
      } else {
        console.error(result.error || 'Failed to fetch artworks');
      }
    } catch (error) {
      console.error('Error fetching artworks:', error);
    } finally {
      setIsSearching(false); // Stop searching
    }
  };

  // Handle adding artwork to the gallery
  const addToGallery = (artwork) => {
    setGallery((prevGallery) => [...prevGallery, artwork]);
  };

  return (
    <div className="gallery-page" >
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for artworks by name"
          className="search-input"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Artwork Grid */}
      {searchExecuted && (
        <div className="results-container">
          {isSearching ? (
            <p className="search-status" >Searching for artworks...</p>
          ) : artworks.length === 0 ? (
            <p className="search-status">No artworks found for "{searchQuery}"</p>
          ) : (
            <div className="artwork-grid">
              {artworks.map((artwork) => (
                <div key={artwork.id} className="artwork-card">
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                    alt={artwork.title}
                  />
                  <h3>{artwork.title}</h3>
                  <p>{artwork.artist_display}</p>
                  <button className="add-button" onClick={() => addToGallery(artwork)}>Add to Gallery</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* User Gallery */}
      <h2 className="gallery-header" >Your Gallery</h2>
      <div className="gallery-grid">
        {gallery.map((artwork, index) => (
          <div key={index} className="artwork-card">
            <img
              src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              alt={artwork.title}
            />
            <h3>{artwork.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
