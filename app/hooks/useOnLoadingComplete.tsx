import { useCallback, useState } from "react";

export function useOnLoadingComplete() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback((image: HTMLImageElement) => {
    setImageLoaded(true);
    image.classList.remove("opacity-0");
  }, []);

  return { imageLoaded, handleImageLoad };
}
