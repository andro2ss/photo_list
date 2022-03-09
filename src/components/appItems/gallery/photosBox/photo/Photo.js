import React from "react";

function Photo({ photo, setModalPhoto }) {
  return (
    <div
      className="photo__box"
      onClick={() => {
        setModalPhoto(photo);
        document.getElementById("photoModal").classList.add("flex");
      }}
    >
      <img
        src={photo.correctUrl}
        alt={`photo made by ${photo.author}`}
        className="box__photo animate__animated animate__backInLeft"
      />
    </div>
  );
}

export default Photo;
