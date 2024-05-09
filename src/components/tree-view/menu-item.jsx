import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function hanldeToggleChildren(getCurrentLable) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLable]: !displayCurrentChildren[getCurrentLable],
    });
  }
  console.log(displayCurrentChildren);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => hanldeToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="black" size={25} />
            ) : (
              <FaPlus color="black" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
