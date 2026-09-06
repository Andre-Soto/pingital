"use client";

import { useEffect } from "react";

export default function LeadConversionEvent() {
  useEffect(() => {
    const submitted = sessionStorage.getItem("pingital_form_submitted");

    if (submitted !== "true") {
      return;
    }

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "generate_lead",
      form_name: "project_brief",
    });

    sessionStorage.removeItem("pingital_form_submitted");
  }, []);

  return null;
}