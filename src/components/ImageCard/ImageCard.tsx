type ImageCardProps = {
  urls: {
    small: string;
  };
  alt_description: string;
  onClick: () => void;
};

const ImageCard = ({ urls, alt_description, onClick }: ImageCardProps) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        width="270px"
        height="170px"
        onClick={onClick}
      />
    </div>
  );
};
export default ImageCard;
