import React, { useState } from "react";
import { Pagination } from "@mui/material";
import PhotoModal from "./photoModal/PhotoModal";
import PhotosBox from "./photosBox/PhotosBox";
import "./Gallery.scss";

function Gallery({ photoList }) {
  const [viewPhotos, setViewPhotos] = useState(0);
  const [paginationPage, setPaginationPage] = useState(1);
  const [modalPhoto, setModalPhoto] = useState({});

  const handleChange = (event, value) => {
    setPaginationPage(value);
    if (value === 1) {
      setViewPhotos(0);
    } else {
      setViewPhotos((value - 1) * 3);
    }
  };
  return (
    <>
      {photoList.length > 0 && (
        <div className="photo__container">
          <h1 className="photo__title animate__animated animate__backInDown">
            Gallery
          </h1>
          <PhotosBox
            photoList={photoList}
            viewPhotos={viewPhotos}
            setModalPhoto={setModalPhoto}
          />
          <Pagination
            className="photo__pagination animate__animated animate__backInUp"
            color="primary"
            count={Math.ceil(photoList.length / 3)}
            page={paginationPage}
            onChange={handleChange}
          />
          <PhotoModal photo={modalPhoto} />
        </div>
      )}
    </>
  );
}

export default Gallery;
