import React from 'react';
import { removeFeautures } from '../Redux/Actions/'
import { useDispatch } from 'react-redux'

const AddedFeature = props => {

  const dispatch = useDispatch()
  const handleRemove = () => {
    // console.log(props.feature.price)
    dispatch(removeFeautures(props.feature.id, props.feature.price))
  }

  return (
    <li>
      <button onClick={handleRemove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
