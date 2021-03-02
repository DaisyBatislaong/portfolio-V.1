import React from 'react'

interface Iprops{
   title: string
}
const TitleHero = ({title}:Iprops) => {
   return (
      <div className="space-y-2 flex flex-col flex-wrap"><h1>{title}</h1><div className=" border-yellow-500 border-2"></div></div>
   )
}

export default TitleHero
