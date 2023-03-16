import React, { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { FadeLoader, MoonLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = ({ loading, color = "#ffff" }) => {
  return (
    <BeatLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

const FLoader = ({ loading, color = "#36d7b7", size = 50 }) => {
  return (
    <MoonLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export { Loader, FLoader };
