// import React from 'react'
import logo from "../assets/logo/logo2.png"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { house,search } from 'react-bootstrap-icons';
// import * as Icon from "react-bootstrap-icons";
import HeaderItem from "./HeaderItem"
import "./header.css"



function Header() {
    const menu = [
    {
        name:'Home',
        // icon:'🏦'
    },
    {
        name:'Movies',
        // icon:'🔎'
    },
    {
        name:'News & Popular',
        // icon:'👾'
    },
    {
        name:'Contact Me',
        // icon:'📎'
    },
 
]

  return (
    <div className="flex items-center justify-between p-4">
        <div className="flex gap-8 items-center"> 
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="" />
        <div className="flex gap-8">
            {menu.map((item) => (<HeaderItem name={item.name}/>))}
        </div>
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header