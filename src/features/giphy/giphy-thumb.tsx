// import { useState } from "react";

export interface Props {
  url: string;
  description: string;
  onTap: () => void;
}

const GiphyThumb: React.FC<Props> = ({ url, description, onTap }) => {
  // const [] useState<>();
  return (
    <div style={{ padding: "5px" }}>
      <img onClick={onTap} src={url} alt={description}></img>
    </div>
  );
};

export default GiphyThumb;
