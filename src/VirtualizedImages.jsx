import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "react-virtualized";

function VirtualizedImages() {
  const [images, setImages] = useState([]);

  const getAllImages = useCallback(async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=500"
    );
    const data = await response.json();
    setImages(data);
  }, []);

  useEffect(() => {
    getAllImages();
  }, []);

  const columnCount = 3;
  const rowCount = Math.ceil(images.length / columnCount);

  const cellRenderer = ({ columnIndex, rowIndex, key, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    const img = images[index];

    if (!img) return null;

    return (
      <div key={key} style={{ ...style, padding: "4px", gap: "2px" }}>
        <img
          src={img.download_url}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            marginLeft: "2px",
          }}
        />
      </div>
    );
  };

  
  return (
    <div>
      <h2>Virtualized 2*2 Image Grid</h2>

      <Grid
        cellRenderer={cellRenderer}
        columnCount={columnCount}
        columnWidth={300}
        rowCount={rowCount}
        rowHeight={250}
        height={600}
        width={650}
      />
    </div>
  );
}

export default VirtualizedImages;
