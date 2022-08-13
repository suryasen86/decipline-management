import React from 'react'
import Link from 'next/link'
import { Spinner ,Button} from 'react-bootstrap'
import './style.module.scss'
const index = ({btnText, iconActive, clickHandler, className, isLoading }) => {
 
  return (
    <Button
    onClick={(e) => {
    

      if (clickHandler) {
        clickHandler();
      }
    }}
    className={`button-style ${className}`}
    

  >
    {isLoading &&
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    }
    <span> {btnText}</span>
    {iconActive ? (
      <img
        src={""}
        alt=""
        width="25"
        className="btn-icon img-white"
      />
    ) : null}
  </Button>
  )
}

export default index