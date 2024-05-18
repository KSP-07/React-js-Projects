import "./App.css";
import LightSwitch from "./components/Mode-Switch";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QrCode from "./components/qr-code generator";
import RandomColor from "./components/random-color";
import ScrollBar from "./components/scroll-indicator";
import SearchAutoComplete from "./components/search-autocomplete-usingApi";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
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
      {/* <QrCode /> */}

      {/* theme switch */}
      {/* <LightSwitch/> */}

      {/* scroll percentage indicator */}
      {/* <ScrollBar url={'https://dummyjson.com/products?limit = 100'}/> */}
      {/* custom tab function */}
      {/* <TabTest/> */}

      {/* custom popup */}
      {/* <ModalTest/> */}

      {/* Gtihub data fetch */}
      {/* <GithubProfileFinder/> */}

      {/* search autocomplete */}
      {/* <SearchAutoComplete/> */}

      {/* tic tac toe */}
      <TicTacToe/>
    </div>
  );
}

export default App;
