'use client'
import React from 'react'

const Dynamicrouts = ({params } :{params: {dynamicrouts : string}}) => {
    console.log(params)
    return (
    <div>Dynamic routs {params.dynamicrouts}</div>
  )
}

export default Dynamicrouts