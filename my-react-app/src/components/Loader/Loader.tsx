import MoonLoader from "react-spinners/MoonLoader";

interface LoaderProps {
  loading: boolean;
}

export default function Loader: React.FC<LoaderProps> = ({ loading }) {
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
