import React, { useEffect, useState } from "react";
import { LoaderContainer, DotContainer, Dot } from "./Loader.styled";

const Loader = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAnimationError = (error) => {
    console.error("Animation error:", error);
    setHasError(true);
    setErrorMessage(error?.message || "Animation failed to load");
  };

  if (hasError) {
    return (
      <LoaderContainer>
        <div>Loading...</div>
        {errorMessage && <div style={{ fontSize: "12px", color: "red", marginTop: "10px" }}>{errorMessage}</div>}
      </LoaderContainer>
    );
  }

  return (
    <LoaderContainer>
      <DotContainer className="loader">
        <Dot color="#4285F4" delay={0} position={0} /> {/* Blue */}
        <Dot color="#EA4335" delay={0.1} position={1} /> {/* Red */}
        <Dot color="#FBBC04" delay={0.2} position={2} /> {/* Yellow */}
        <Dot color="#34A853" delay={0.3} position={3} /> {/* Green */}
      </DotContainer>
    </LoaderContainer>
  );
};

export default Loader;
