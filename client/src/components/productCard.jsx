import React, { forwardRef } from 'react';

const ProductCard = ({ item }, ref) => {
  return (
    <div
      ref={ref}
      className="text-white rounded-md shadow-sm shadow-teal-600  p-6 flex flex-col items-center gap-6 transition duration-300 hover:shadow-sm hover:shadow-teal-400 cursor-pointer hover:scale-95"
    >
      <img src={item.img} alt="" />
      <h2 className="text-gray-300 font-meduium text-2xl tracking-wide">
        {item.title}
      </h2>
      <p className="text-gray-100 font-bold text-3xl tracking-wide">
        {item.value} {item.price}
      </p>
    </div>
  );
};

export default forwardRef(ProductCard);
