import WifiSpinner from "../../common/spinner/WifiSpinner";
import "./LoadingSpinner.scss";

export function LoadingSpinner(props) {
  return (
    <>
      {props.photoList.length === 0 && (
        <div className="spinner__box">
          <WifiSpinner loadingText="loading" />
        </div>
      )}
    </>
  );
}
