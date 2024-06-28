import React, { useEffect } from "react";
import "./App.css";
import FetchData from "./practical/FetchData";
import Timer from "./practical/Timer";
import ItemList from "./practical/ItemList";
import FileUpload from "./practical/FileUpload";
import RealTimeClock from "./practical/RealTimeClock";
import LoadMoreItems from "./practical/LoadMore";
import ImageGallery from "./practical/ImageGallary";
import TextareaWithCounter from "./practical/TextCount";
import DropDown from "./practical/DropDown";

// import Theme from "./practical/Theme";
import CheckboxGroupWithCheckAll from "./practical2/ALlCheck";
import Accordion from "./practical2/Accordian";
import Example from "./Example";
import {
  Counter,
  DynamicForm,
  InfiniteScroll,
  Pagination,
  PasswordGenerator,
  TrafficLight,
} from "./ytPractical/index";
import Reducer from "./cmp/Reducer";
import Tabs from "./practical2/Tabs";
import Forms from "./practical2/Forms";
import Check from "./cmp/Check";
import SerchFilter from "./practical2/SerchFilter";
import Login from "./Login";
import Game from "./tic-tac-toe/Game";
import Pc from "./practical2/Pc";

const App = () => {

  const fetchData =async()=>{
    const response =await fetch("https://ecom-backend-iuv5.onrender.com");
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* <DropDown /> */}
      {/* <FetchData /> */}
      {/* <SerchFilter /> */}
      {/* <FileUpload /> */}
      {/* <Accordion /> */}
      {/* <TextareaWithCounter /> */}
      {/* <CheckboxGroupWithCheckAll /> */}
      {/* <LoadMoreItems /> */}
      {/* <Theme /> */}
      {/* <ImageGallery /> */}
      {/* <RealTimeClock /> */}
      {/* <ItemList /> */}
      {/* <Timer /> */}

      {/* <Example /> */}
      <Counter />
      {/* <Reducer /> */}
      {/* <Tabs /> */}
      {/* <Forms /> */}
      {/* <Check /> */}
      {/* =================================== */}
      {/* <Counter /> */}
      {/* <PasswordGenerator /> */}
      {/* // TODO <Pagination /> */}
      {/* <InfiniteScroll /> */}
      {/* <Login /> */}
      {/* <DynamicForm /> */}
      {/* <TrafficLight /> */}
      {/* <Game /> */}
      <Pc/>
    </div>
  );
};

export default App;
