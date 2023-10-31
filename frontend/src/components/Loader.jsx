import React from 'react';

const Loader = () => (
  <div className="mt-2 d-flex justify-content-center">
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Loader;
