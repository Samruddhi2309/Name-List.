import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import FlipMove from 'react-flip-move';
import './ListItems.css'


function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
     return(
        <FlipMove>
            <div className='list' key={item.key}>
         <p>
            <input type='text'
            id={item.text}
            value={item.text}
           onChange={
            (e) => {
                props.setUpadate(e.target.value, item.key)
            }
           }
/>
          <span>
            <FontAwesomeIcon  className='faicons' icon='trash'
            onClick={() =>
            props.deleteItem(item.key)
            }
            />
          </span>
         </p>
            </div>
        </FlipMove>
     )
    })
  return (
    <div>{listItems}</div>
  )
}

export default ListItems