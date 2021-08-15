import React from 'react'

const Information = ({aboutUs, info}) => {
  return (
    <div>
      {aboutUs ? aboutUs : ''}
      {info ? info : ''}
    </div>
  )
}

export default Information

//create a helper file to take care of conditional rendering