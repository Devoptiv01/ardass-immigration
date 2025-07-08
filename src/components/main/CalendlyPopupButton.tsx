"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyPopupButton = ({ classes }: { classes?: string }) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    .calendly-overlay, .calendly-popup {
      z-index: 99999 !important;
      pointer-events: auto !important;
    }

    iframe {
      z-index: 99999 !important;
      pointer-events: auto !important;
    }
  `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    // Inject widget CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Inject Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      // if (window.Calendly) {     // it is for floating badge widget
      //   window.Calendly.initBadgeWidget({
      //     url: "https://calendly.com/dev-devoptiv",
      //     text: "Schedule time with me",
      //     color: "#ff6400",
      //     textColor: "#ffffff",
      //     branding: false,
      //   });
      // }
    };
    document.body.appendChild(script);

    // Optional: Cleanup if needed
    return () => {
      document.querySelector(".calendly-badge-widget")?.remove();
    };
  }, []);

  //   const CalendlyPopupButton = () => {
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src = "https://assets.calendly.com/assets/external/widget.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }, []);
  // }

  const handleClick = () => {
    if (window.Calendly) {
      disableBodyScroll();
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/dev-devoptiv",
      });

      // Delay observer start slightly to let Calendly inject the popup
      setTimeout(() => {
        observePopupClose();
      }, 300);
    }
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "";
  };

  const observePopupClose = () => {
    const observer = new MutationObserver(() => {
      const popup = document.querySelector(".calendly-popup");
      if (!popup) {
        enableBodyScroll();
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-extra-dark-orange text-white rounded hover:bg-dark-orange transition duration-300 ${classes}`}
    >
      Book Consultation
    </button>
  );
};

export default CalendlyPopupButton;
