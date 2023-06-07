import React from 'react'

function CenterMenu() {
    const liStyle = "text-[17px] mr-[3rem] hover:cursor-pointer"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>About</li>
            <li className={liStyle}>Top Tracks</li>
            <li className={liStyle}>Event Schedule</li>
            <li className={liStyle}>Contact</li>
        </ul>
    </div>
    )
}

export default CenterMenu