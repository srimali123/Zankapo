import React, { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { FadeLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = ({ loading, color = "#ffffff" }) => {
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

const FLoader = ({ loading, color = "#ffffff" }) => {
  return (
    <FadeLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export { Loader, FLoader };
