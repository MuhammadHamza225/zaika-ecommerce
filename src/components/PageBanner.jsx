import React from 'react';

const PageBanner = ({ title }) => {
  return (
    <div className="bg-gray-100 py-20 text-center">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500">Home / {title}</p>
    </div>
  );
};

export default PageBanner;
