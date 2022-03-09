import React from "react";

function Photo({ photo, setModalPhoto }) {
  return (
    <div
      className="photo__box"
      key={photo.id}
      onClick={() => {
        setModalPhoto(photo);
        document.getElementById("photoModal").classList.add("flex");
      }}
    >
      <img
        src={photo.correctUrl}
        alt={`photo made by ${photo.author}`}
        className="box__photo"
      />
    </div>
  );
}

export default Photo;
