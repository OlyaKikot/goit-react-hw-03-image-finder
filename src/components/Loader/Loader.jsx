import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Loader.module.css";

export default function loader() {
  return (
    <Loader
      className={s.loader}
      type="ThreeDots"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
    />
  );
}
