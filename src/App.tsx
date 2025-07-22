import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import "./App.css";

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular?: string;
  };
  alt_description?: string | null;
  [key: string]: any;
}

interface FetchFotosResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

const fetchFotos = async (query: string, page: number): Promise<FetchFotosResponse> => {
  const accessKey = "g6x5jfFmrf3J9lUeV9Bn7WlzbP0DBCpbG4wUIF0BCQ4";
  const perPage = 16;

  const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${query}&client_id=${accessKey}`;

 
    const responce = await fetch(url);
    if (!responce.ok) {
      throw new Error("Please try again...");
    }

    const data: FetchFotosResponse = await response.json();
  return data;
};


export default function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<UnsplashImage | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const handleSearch = (value: string) => {
    setImages([]);
    setQuery(value);
    setPage(1);
  };

  const handleLoadMoreButton = () => {
    setPage((prev) => prev + 1);
  };

  const handleModalWindow = (image: UnsplashImage) => {
    setCurrentImg(image);
  };

  useEffect(() => {
    if (query === "") return;

    setError(false);
    setLoading(true);

    const getImages = async () => {
      try {
        const data = await fetchFotos(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setLoading(false);
      } catch (error) {
        console.log(" error:", error);
        setError(true);
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          handleLoadMore={handleLoadMoreButton}
          handleOpenModal={handleModalWindow}
        />
      )}
      <Loader loading={loading} />
      {error && <ErrorMessage />}
      {currentImg && (
        <ImageModal
          image={currentImg}
          handleCloseModal={() => setCurrentImg(null)}
        />
      )}
    </>
  );
}

