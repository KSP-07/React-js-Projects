import "./App.css";
import LightSwitch from "./components/Mode-Switch";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QrCode from "./components/qr-code generator";
import RandomColor from "./components/random-color";
import ScrollBar from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-top-and-bottom";
import ScrollToSection from "./components/scroll-top-and-bottom/scroll-to-section";
import SearchAutoComplete from "./components/search-autocomplete-usingApi";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

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
      {/* <TicTacToe/> */}
      {/* Feature flag implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* use-fetch custom hook */}
      {/* <UseFetchHookTest/> */}
      {/* use outside click hook test */}
      {/* <UseOnClickOutsideTest/> */}

      {/* use window resize hook */}
      {/* <UseWindowResizeTest/> */}

      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a particular section */}
      <ScrollToSection/>
    </div>
  );
}

export default App;
