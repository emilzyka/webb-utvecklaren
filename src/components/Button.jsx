import React, { useState } from 'react';

export const Button = () => {
  const [num, numSet] = useState(0);
  return (
    <>
      <button
        className='text-2xl border border-red-400 p-12'
        onClick={() => numSet(num + 1)}>
        Add
      </button>
      <p>{num}</p>
    </>
  );
};
