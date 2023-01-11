import React from 'react'
import { MdEmail } from 'react-icons/md';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';




const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://github.com/racecn">
        <div>
            <FaGithub />
        </div>
        </a>
        <div>
            <FaLinkedinIn />
        </div>
        <a href="mailto:racecn@gmail.com">
        <div>
            < MdEmail />
        </div>
        </a>
    </div>
  )
}

export default SocialMedia