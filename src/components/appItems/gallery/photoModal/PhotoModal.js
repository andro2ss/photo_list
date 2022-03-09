import React from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./PhotoModal.scss";

function PhotoModal({ photo }) {
  return (
    <div className="photo__modal" id="photoModal">
      <div className="modal__box">
        <Button
          className="btn--close"
          onClick={() => {
            document.getElementById("photoModal").classList.remove("flex");
          }}
        >
          <CloseIcon />
        </Button>
        <div className="modal__photo">
          <img src={photo.correctUrl} alt={`photo made by ${photo.author}`} />
        </div>
        <span className="photo__info">
          <span className="bold">Author:</span> {photo.author}
        </span>
      </div>
    </div>
  );
}

export default PhotoModal;
