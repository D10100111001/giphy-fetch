export interface GiphyImageResponse {
  data: GiphyImageData[];
}

export interface GiphyImageData {
  title: string;
  username: string;
  rating: string;
  pageUrl: string;
  id: string;
  create_datetime: string;
  images: GiphyImages;
}

export interface GiphyImages {
  fixed_height: GiphyImage;
  fixed_height_still: GiphyImage;
  fixed_height_downsampled: GiphyImage;
}

export interface GiphyImage {
  url: string;
  width: string;
  height: string;
}
