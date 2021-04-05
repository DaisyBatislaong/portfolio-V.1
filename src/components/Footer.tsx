import React from 'react'

const Footer = () => {
   const year = new Date().getFullYear()
   return (
      <div className="mt-24 mb-10 text-center font-semibold">
         Created by Daisy Batislaong || &copy; {year}
      </div>
   )
}

export default Footer
