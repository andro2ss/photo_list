import FooterAB from "./common/footer/FooterAB";
import { useEffect, useState } from "react";
import getData from "../functions/getData";
import { Container } from "@mui/material";
import { LoadingSpinner } from "./appItems/loadingSpinner/LoadingSpinner";
import Gallery from "./appItems/gallery/Gallery";
import "./App.scss";

function App() {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    if (photoList.length === 0) {
      getData("https://picsum.photos/v2/list", setPhotoList);
    }
  }, [photoList]);

  return (
    <div className="App">
      <Container maxWidth="xl" fixed id="appContainer">
        <LoadingSpinner photoList={photoList} />
        <Gallery photoList={photoList} />
      </Container>
      <FooterAB />
    </div>
  );
}

export default App;
