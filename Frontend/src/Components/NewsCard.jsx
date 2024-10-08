import React from 'react';

const NewsCard = ({ title, description, source, publishedAt, url, urlToImage }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col" // Added flex-col
    >
      <img
        className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
        src={urlToImage || 'https://via.placeholder.com/150'}
        alt={title}
      />
      <div className="flex-grow p-4"> {/* Added flex-grow to push footer down */}
        <h3 className="font-bold text-lg mb-2 hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
      </div>
      <div className="flex justify-between items-center p-4 text-xs text-gray-500" style={{ marginBottom: '5px' }}>
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{source}</span>
        <span>{new Date(publishedAt).toLocaleDateString()}</span>
      </div>
    </a>
  );
};

export default NewsCard;
