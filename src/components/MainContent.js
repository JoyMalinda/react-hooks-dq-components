import React from "react";
import GenrePicker from "./GenrePicker";
import AlbumList from "./AlbumList";

function MainContent() {
  return <main>{
    <div>
    <GenrePicker/>
    <AlbumList/>
    </div>
    }</main>;
}

export default MainContent;
