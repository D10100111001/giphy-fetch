import axios from "axios";
import { useEffect, useState } from "react";
import GiphyDetailView from "../features/giphy/giphy-detail";
import GiphyThumb from "../features/giphy/giphy-thumb";
import {
  GiphyImageData,
  GiphyImageResponse,
} from "../features/giphy/models/giphy-thumb";

export interface HomePageProps {}

const trendingApiEndpoint = "https://api.giphy.com/v1/gifs/trending";
const searchApiEndpoint = "https://api.giphy.com/v1/gifs/search";

const API_KEY = "5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f";

const HomePage: React.FC<HomePageProps> = () => {
  const [selectedImage, setSelectedImage] =
    useState<GiphyImageData | null>(null);
  const [gifsResponse, setGifsResponse] =
    useState<GiphyImageResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const searchGifs = async (text: string) => {
    ///debounce
    setIsLoading(true);
    const searchRes = await axios.get(searchApiEndpoint, {
      params: { api_key: API_KEY, q: text },
    });
    setGifsResponse(searchRes.data);
    setIsLoading(false);
  };

  useEffect(() => {
    async function init() {
      const res = await axios.get(trendingApiEndpoint, {
        params: {
          api_key: API_KEY,
        },
      });
      setGifsResponse(res.data);
      setIsLoading(false);
    }

    init();
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <div>
        <p>Search: </p>
        <input
          type="text"
          id="search-gif"
          onChange={(e) => searchGifs(e.target.value)}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          gifsResponse?.data.map((g) => (
            <GiphyThumb
              key={g.id}
              url={g.images.fixed_height_downsampled.url}
              onTap={() => setSelectedImage(g)}
              description={g.title}
            ></GiphyThumb>
          ))
        )}
      </div>
      {selectedImage && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 1000,
            padding: "10px",
            margin: "10px",
            backgroundColor: "white",
          }}
        >
          <GiphyDetailView image={selectedImage} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
