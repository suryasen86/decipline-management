import React,{Fragment,useState,useEffect} from 'react'
import './style.scss'
import { Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
const Index = ({type,placeholder,name,handleChange,isInvalid,className,errors,label}) => {
  return (
     
    <Fragment>
       <Form.Label className="label-primary">{label}</Form.Label>
      <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          isInvalid={isInvalid}
          className={`form-control ${className}`}
        />

        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
    </Fragment>
  )
}

Index.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name:PropTypes.string,
  isInvalid:PropTypes.boolean,
  className:PropTypes.string,
  errors:PropTypes.string,
  label:PropTypes.string
};
export default Index