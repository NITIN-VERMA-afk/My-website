import React from "react";
import Image from "next/image";

import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="grid-cols-2">
        <div className="flex-col ">
            <h1 className="text-center">get in touch</h1>
            
           <p className="text-center">feel free to contact us </p> 
        </div>
        <div className=" flex-col">
          <h1>Feel free to contact me !</h1>
          <p>
            Hello Everyone! Have a great day :) I am here to help you. If you
            want to know something or you have any suggestion then please mail
            me. Thank You.
          </p>
          <div>
            <ul className="list-none flex gap-3">
              <li className="p-3 bg-purple-600 rounded">
                <CiLinkedin />
              </li>
              <li className="p-3 bg-purple-600 rounded">
                <FaXTwitter />
              </li>
              <li className="p-3 bg-purple-600 rounded">
                <FaGitAlt />
              </li>
              <li className="p-3 bg-purple-600 rounded">
                <MdEmail />
              </li>
              <li className="p-3 bg-purple-600 rounded">
                <FaInstagramSquare />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-col ">
            <form  className="" action="">
               
                <label htmlFor="">name</label>
                <input type="text" name="" id="" placeholder="Enter your name"/>
                <label htmlFor="">Email</label>
                <input type="text" name="" id=""  placeholder="Enter your Email"/>
                <textarea name="" id="" cols={30} rows={10} placeholder="Enter your message">

                </textarea>
                <button type="submit">Send</button>

                
                
            </form>


        </div>
      </div>
    </>
  );
};

export default page;