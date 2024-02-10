import React from 'react'

function Logo({width = '',className=""}) {
  return (
    <div className={ `${className} `} style={{width:`${width}`}}>Blogger</div>
  )
}

export default Logo