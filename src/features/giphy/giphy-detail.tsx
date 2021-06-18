import { GiphyImageData } from "./models/giphy-thumb";

export interface GiphyDetailViewProps {
  image: GiphyImageData;
}

const GiphyDetailView: React.FC<GiphyDetailViewProps> = ({ image }) => {
  return (
    <div>
      <img src={image.images.fixed_height.url} alt={image.title}></img>
      <p>
        Size: <span>{image.images.fixed_height.width}</span>x
        <span>{image.images.fixed_height.height}</span>
      </p>
      <p>Title: {image.title}</p>
      <p>Username: {image.username}</p>
      <p>Ratings: {image.rating}</p>
    </div>
  );
};

export default GiphyDetailView;
