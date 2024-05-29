import { useRef } from "react";

export default function ScrollToSection() {

    const ref = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "Pink",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "Green",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "Orange",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "Blue",
      },
    },
  ];

  function handleScroll(){
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
        top:pos,
        behavior:"smooth"
    });
  }
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScroll}>Click to Scroll</button>
      {data.map((dataItem , index) => (
        <div ref={index===3 ? ref :null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
