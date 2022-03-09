import React from "react";
import Photo from "./photo/Photo";

function PhotosBox({ photoList, viewPhotos, setModalPhoto }) {
  return (
    <div className="photo__boxes">
      {photoList
        .filter((photo, index) => {
          return index >= viewPhotos && index < viewPhotos + 3;
        })
        .map((photo) => {
          const splitUrl = photo.url.split("/");
          photo.correctUrl =
            "https://source.unsplash.com/" + splitUrl[splitUrl.length - 1];
          return (
            <Photo setModalPhoto={setModalPhoto} photo={photo} key={photo.id} />
          );
        })}
    </div>
  );
}

export default PhotosBox;
