import FooterAB from "./footer/FooterAB";
import { useEffect, useState } from "react";
import getData from "../functions/getData";
import WifiSpinner from "./common/spinner/WifiSpinner";
import { Container, Grid, Pagination } from "@mui/material";

function App() {
  const [photoList, setPhotoList] = useState([]);
  const [viewPhotos, setViewPhotos] = useState(0);

  const handleChange = (event, value) => {
    console.log(value);
    setViewPhotos(value);
  };

  useEffect(() => {
    if (photoList.length === 0) {
      getData("https://picsum.photos/v2/list", setPhotoList);
    }
  }, [photoList, viewPhotos]);

  return (
    <div className="App">
      <Container maxWidth="xl" fixed id="appContainer">
        {photoList.length === 0 ? (
          <div className="spinner__box">
            <WifiSpinner loadingText="loading" />
          </div>
        ) : (
          <div className="photo__boxes">
            {photoList
              .filter((photo, index) => {
                return index >= viewPhotos && index < viewPhotos + 3;
              })
              .map((photo) => {
                console.log(photo);
                const splitUrl = photo.url.split("/");
                const url =
                  "http://source.unsplash.com/" + splitUrl[splitUrl.length - 1];
                console.log(url);
                return (
                  <div className="photo__box" key={photo.id}>
                    <img
                      src={url}
                      alt={`photo made by ${photo.author}`}
                      className="box__photo"
                    />
                  </div>
                );
              })}
            <Pagination
              count={photoList.length}
              page={viewPhotos - 1}
              onChange={handleChange}
            />
          </div>
        )}
      </Container>
      <FooterAB />
    </div>
  );
}

export default App;
