import Image from 'next/image';

import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-screen bg-cover  flex-col items-start justify-between pl-24" style={{backgroundImage: 'url("/images/background.jpg")'}}>
      <div className="grid items-center mt-4" 
         style={{ backgroundImage: "url('../images/bg.jpg')", height: '100vh', backgroundRepeat: 'no-repeat',backgroundSize:"cover" }}>
            <h1 className="text-5xl pt-28 text-gray-900 dark:text-white mt-0">hi i m   </h1>
            <h2 className='text-6xl text-gray-900 dark:text-white'>Nitin verma</h2>

              <p className="text-4xl text-gray-900 dark:text-white ">i m a full stack develper </p>
              <div>
              <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">explore more</button>
              <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">get in touch</button>
                
               

              </div>
              <div>
                <ul className="list-none flex gap-3">
                    <li className='p-3 bg-purple-600 rounded'><CiLinkedin /></li>
                    <li className='p-3 bg-purple-600 rounded'><FaXTwitter /></li>
                    <li className='p-3 bg-purple-600 rounded'><FaGitAlt /></li>
                    <li className='p-3 bg-purple-600 rounded'><MdEmail /></li>
                    <li className='p-3 bg-purple-600 rounded'><FaInstagramSquare /></li>
                </ul>

              </div>
        </div>
    
    </main>
  )
}
