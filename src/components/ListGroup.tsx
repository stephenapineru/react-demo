import { useState } from "react";

// { items: [], heading: string} in order to have reuseable components we'll define poperties of ListGroup component
// "interface" is a typescript feature that allows us to define the shape of an object
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem}: ListGroupProps) {
  

  // Hook, function that allows us to use build-in React features
  // useState is independent between components, 2 ListGroup components will have different selectedIndex
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Can only use html elements, React components, and {} inside JSX markup

  /* if (items.length === 0) 
    return (
            <>
             <p>There are no items in the list</p>;
            </>
        ) */

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item); // pass the item to the parent component
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
