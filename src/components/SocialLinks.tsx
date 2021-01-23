import React from 'react'
import {socialLinks} from '../data/data'



const SocialLinks = () => {
   const {github, twitter, linkedIn, gmail } = socialLinks;
   return (
      <div>
         <a href={github}>Github</a>
      </div>
   )
}

export default SocialLinks
