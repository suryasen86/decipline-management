import React from 'react'
import Link from 'next/link'
import { Spinner } from 'react-bootstrap'
const index = ({btnText, iconActive, clickHandler, href, className, isLoading }) => {
  return (
    <Link
    onClick={(e) => {
      if (!href) {
        e.preventDefault();
      }

      if (clickHandler) {
        clickHandler();
      }
    }}
    className={`button-style ${className}`}
    to={href ? href : '#'}

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
  </Link>
  )
}

export default index