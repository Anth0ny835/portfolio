"use client";

import { useEffect, useState } from "react";

const screens = [
  {
    number: "01",
    label: "FARM OVERVIEW",
    title: "Farmer Dashboard",
    image: "/projects/fyp/myagritopia/farmer-dashboard.png",
    description:
      "Central farm overview combining field alerts, estimated soil moisture, an 18-hour moisture forecast, current weather and a compact soil-condition summary for the selected plot.",
  },
  {
    number: "02",
    label: "WEATHER INTELLIGENCE",
    title: "Weather & Farm Advisory",
    image: "/projects/fyp/myagritopia/weather-forecast.png",
    description:
      "Turns weather information into agriculture-focused guidance through a farm summary, current conditions, agricultural impact, irrigation advice, wind risk, farming-task recommendations and a 7-day forecast.",
  },
  {
    number: "03",
    label: "SOIL INTELLIGENCE",
    title: "Soil Insights & Crop Suitability",
    image: "/projects/fyp/myagritopia/soil-insights.png",
    description:
      "Explains recorded soil conditions using pH, moisture, soil type and fertility indicators, then relates those conditions to the suitability of crops already associated with the plot.",
  },
  {
    number: "04",
    label: "DECISION SUPPORT",
    title: "Crop Planning & Advisor",
    image: "/projects/fyp/myagritopia/crop-selection.png",
    description:
      "Uses plot and soil information to compare crop suitability factors, explain why a crop is suitable, support planting decisions and keep existing crop plans visible in the same workflow.",
  },
  {
    number: "05",
    label: "ANALYTICS",
    title: "Farm Data Visualisation",
    image: "/projects/fyp/myagritopia/data-visualization.png",
    description:
      "Combines current moisture readings, forecast trends, weather conditions and soil summaries into visual information that helps farmers understand changing field conditions.",
  },
  {
    number: "06",
    label: "CROP HEALTH",
    title: "Pest Risk & Treatment Analysis",
    image: "/projects/fyp/myagritopia/pest-risk.png",
    description:
      "Demonstrates the crop-health analysis flow from image selection and processing through pest identification, severity and confidence results, risk explanation, recommended actions and prevention guidance.",
  },
  {
    number: "07",
    label: "PLANNING",
    title: "Planting Calendar & Fertilizer Plan",
    image: "/projects/fyp/myagritopia/planting-calendar.png",
    description:
      "Organises crop activities through a calendar-based workflow, showing planting dates, harvest windows, crop-growth information and upcoming fertilizer tasks for the selected plot.",
  },
];

export default function AnthonyFypImplementation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const active = screens[activeIndex];

  const previousIndex =
    (activeIndex - 1 + screens.length) % screens.length;

  const nextIndex =
    (activeIndex + 1) % screens.length;

  const showPrevious = () => {
    setActiveIndex(previousIndex);
  };

  const showNext = () => {
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (current) =>
            (current - 1 + screens.length) %
            screens.length
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex(
          (current) =>
            (current + 1) % screens.length
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [isExpanded]);

  return (
    <>
      <section
        className="antFypImplementation"
        aria-labelledby="ant-fyp-implementation-title"
      >
        <div className="antFypImplHeader">
          <div>
            <h4 id="ant-fyp-implementation-title">
              Inside MYAgriTopia.
            </h4>
          </div>

          <p>
            Seven selected views showing how the system moves
            from farm monitoring and environmental insight into
            agricultural decision support, crop health and planning.
          </p>
        </div>

        <div className="antFypImplViewer">
          {/* LEFT FEATURE RAIL */}
          <nav
            className="antFypImplRail"
            aria-label="MYAgriTopia implementation screens"
          >
            {screens.map((screen, index) => (
              <button
                key={screen.number}
                type="button"
                className={
                  index === activeIndex
                    ? "antFypImplRailItem isActive"
                    : "antFypImplRailItem"
                }
                onClick={() =>
                  setActiveIndex(index)
                }
              >
                <span>
                  {screen.number}
                </span>

                <small>
                  {screen.label}
                </small>
              </button>
            ))}
          </nav>

          {/* MAIN SCREEN */}
          <div className="antFypImplMain">
            <div className="antFypImplCanvas">
              <div className="antFypImplCanvasBar">
                <div>
                  <span>
                    {active.number}
                  </span>

                  <small>
                    {active.label}
                  </small>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setIsExpanded(true)
                  }
                >
                  Open full view ↗
                </button>
              </div>

              <button
                type="button"
                className="antFypImplImageButton"
                onClick={() =>
                  setIsExpanded(true)
                }
                aria-label={`Open ${active.title} screenshot`}
              >
                <img
                  key={active.image}
                  src={active.image}
                  alt={`${active.title} implementation`}
                />
              </button>
            </div>

            <div className="antFypImplControls">
              <button
                type="button"
                onClick={showPrevious}
              >
                ← Previous
              </button>

              <span>
                {String(activeIndex + 1).padStart(
                  2,
                  "0"
                )}
                {" / "}
                {String(screens.length).padStart(
                  2,
                  "0"
                )}
              </span>

              <button
                type="button"
                onClick={showNext}
              >
                Next →
              </button>
            </div>
          </div>

          {/* RIGHT INFORMATION PANEL */}
          <aside className="antFypImplDetail">
            <span className="antFypImplNumber">
              {active.number}
            </span>

            <small>
              {active.label}
            </small>

            <h5>
              {active.title}
            </h5>

            <p>
              {active.description}
            </p>

            <div className="antFypImplDetailMeta">
              <span>
                IMPLEMENTED FEATURE
              </span>

              <span>
                MYAGRITOPIA / 2026
              </span>
            </div>
          </aside>
        </div>
      </section>

      {/* FULLSCREEN IMAGE VIEWER */}
      {isExpanded && (
        <div
          className="antFypLightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} full screenshot`}
        >
          <div className="antFypLightboxTop">
            <div>
              <span>
                {active.number}
              </span>

              <div>
                <small>
                  {active.label}
                </small>

                <strong>
                  {active.title}
                </strong>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setIsExpanded(false)
              }
            >
              Close ×
            </button>
          </div>

          <div className="antFypLightboxImage">
            <img
              src={active.image}
              alt={`${active.title} full implementation screenshot`}
            />
          </div>

          <div className="antFypLightboxControls">
            <button
              type="button"
              onClick={showPrevious}
            >
              ← Previous
            </button>

            <span>
              Use ← → keys to explore
            </span>

            <button
              type="button"
              onClick={showNext}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}