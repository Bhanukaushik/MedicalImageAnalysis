import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DiagnosePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Replace current state to prevent going back here again
    window.history.replaceState({ redirectedFrom: "/diagnose" }, "", "/");

    // Redirect immediately to Gradio
    window.location.href = "https://bhanukaushik-lung-cancer-detector.hf.space";
  }, []);

  return null;
};

export default DiagnosePage;
