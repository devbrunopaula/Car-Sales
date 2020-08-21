import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
const Total = props => {
  const { additionalPrice, car } = useSelector(state => state.car)
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
