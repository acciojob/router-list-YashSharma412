import React from 'react'

function Item({count}) {
  return (
    <div>
        <h1>Item {count}</h1>
        <p>Description for Item {count}</p>
    </div>
  )
}

export default Item;