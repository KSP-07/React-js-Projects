import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollTop(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
  }

  function handleScrollBottom(){
    bottomRef.current.scrollIntoView({behavior :"smooth"})
  }

  if(error){
    return <h1>Error Occured! Please try again.</h1>
  }
  if(pending){
    return <h1>Loading! Please Wait</h1>
  }
  return (
    <div>
      <h1>Scroll To Top and Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollBottom}>Scroll To Bottom</button>
      <ul style={{listStyle :'none'}} >
        {data && data.products && data.products.length
          ? data.products.map((dataItem) => <li>{dataItem.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
    <h3>This is the Bottom section</h3>
    </div>
  );
}
