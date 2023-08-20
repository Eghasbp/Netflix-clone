// import React from 'react'

function HeaderItem({name,icon}) {
  return (
    <div className="flex items-center gap-3 text-10px font-semibold cursor-pointer hover:underline underline-offset-8">
      <h2>{icon}</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem;