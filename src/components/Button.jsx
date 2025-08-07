import React from 'react';

const Button = ({ data }) => {
  return (
    <div className='inline-flex text-sm rounded-xl p-3 bg-[rgba(0,0,0,0.05)] m-3 h-8 font-medium items-center capitalize'>
      {data}
    </div>
  );
};

export default Button;
