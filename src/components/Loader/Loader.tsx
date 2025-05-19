import ClipLoader from "react-spinners/ClipLoader";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
      <ClipLoader color="#ff8484" size={55} />
    </div>
  );
};

export default Loader;
