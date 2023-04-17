import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { BsDiscord } from "react-icons/bs";

const Navbar = () => {
  return (
<div class="flex justify-between items-center">
    <p className="text-white p-3 font-bold inline-block">Hedera Sales</p>
    <div class="flex items-center mr-6">
        <button className="icon-button text-white mr-4 text-xl">
            <VscGithubInverted />
        </button>
        <button className="icon-button text-white text-xl" style={{ marginLeft: 'auto' }}>
            <BsDiscord />
        </button>
    </div>
</div>
  )
}

export default Navbar