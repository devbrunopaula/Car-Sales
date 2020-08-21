import React from 'react';
import { useDispatch } from 'react-redux'
import { addFeautures } from '../Redux/Actions'


const AdditionalFeature = props => {


  const dispatch = useDispatch()

  const haddleAddFeature = () => {
    dispatch(addFeautures(props.feature, props.feature.price))

  }

  return (
    <li>
      <button onClick={haddleAddFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
