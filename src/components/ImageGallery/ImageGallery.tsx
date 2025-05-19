import { Image } from "../../App/App";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
  results: Image[];
  onCardClick: (url: string) => void;
};

const ImageGallery = ({ results, onCardClick }: ImageGalleryProps) => {
  return (
    <ul className={s.list}>
      {results.map(({ id, urls, alt_description }) => (
        <li key={id} className={s.list}>
          <ImageCard
            urls={urls}
            alt_description={alt_description}
            onClick={() => onCardClick(urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
