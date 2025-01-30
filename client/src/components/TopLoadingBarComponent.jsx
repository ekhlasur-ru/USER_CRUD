import React, { useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import PropTypes from "prop-types";

const TopLoadingBarComponent = ({ progress }) => {
  const ref = useRef(null);

  return (
    <LoadingBar
      color="#f11946"
      height={3}
      transitionTime={5}
      progress={progress}
      onLoaderFinished={() => ref.current.complete(0)}
    />
  );
};

TopLoadingBarComponent.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default TopLoadingBarComponent;
