import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DiagnosePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Replace current state to prevent going back here again
    window.history.replaceState({ redirectedFrom: "/diagnose" }, "", "/");

    // Redirect immediately to the new Gradio Space
    window.location.href = "https://huggingface.co/spaces/vaseemaman/medimage";
  }, []);

  return null;
};

export default DiagnosePage;
