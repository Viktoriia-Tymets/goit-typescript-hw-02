import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <MoonLoader
      color="blue"
      cssOverride={{
        margin: "30px auto",
        color: "blue",
      }}
      loading={loading}
      size={60}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;