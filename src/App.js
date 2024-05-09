import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QrCode from "./components/qr-code generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={7} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"4"} /> */}
      {/* <LoadMoreData /> */}
      {/* Treeview component/ menu UI component / recursive navigation menu  */}
      {/* <TreeView menus={menus} /> */}

      {/* qr code generator */}
      <QrCode />
    </div>
  );
}

export default App;
