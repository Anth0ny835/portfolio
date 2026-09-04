"use client";

import { useEffect, useRef, useState } from "react";

const views = [
  {
    number: "01",
    key: "overview",
    label: "OVERVIEW",
    title: "National Situational Overview",
    description:
      "A high-level monitoring view combining national weather conditions, priority intelligence, map-based alerts and an operator attention queue.",
    image:
      "/projects/internship/world-monitor/overview.png",
  },
  {
    number: "02",
    key: "weather",
    label: "WEATHER",
    title: "Environmental Monitoring",
    description:
      "A dedicated environmental view presenting national weather conditions, AQI information, active warnings, forecast outlooks and map-based weather context.",
    image:
      "/projects/internship/world-monitor/weather.png",
  },
  {
    number: "03",
    key: "intel",
    label: "INTEL",
    title: "National Intelligence",
    description:
      "A dedicated intelligence workspace for national news, priority information and location-based monitoring, with the dashboard bot retained as a supporting feature.",
    image:
      "/projects/internship/world-monitor/intel.png",
  },
];

export default function AnthonyWorldMonitor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] =
    useState<"next" | "previous">("next");

  const [isExpanded, setIsExpanded] =
    useState(false);

  const touchStartX = useRef<number | null>(null);

  const active = views[activeIndex];

  const changeView = (nextIndex: number) => {
    if (nextIndex === activeIndex) return;

    setDirection(
      nextIndex > activeIndex ? "next" : "previous"
    );

    setActiveIndex(nextIndex);
  };

  const showPrevious = () => {
    setDirection("previous");

    setActiveIndex((current) =>
      current === 0
        ? views.length - 1
        : current - 1
    );
  };

  const showNext = () => {
    setDirection("next");

    setActiveIndex((current) =>
      current === views.length - 1
        ? 0
        : current + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (
        event.key === "Escape" &&
        isExpanded
      ) {
        setIsExpanded(false);
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

  const handleTouchStart = (
    event: React.TouchEvent
  ) => {
    touchStartX.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = (
    event: React.TouchEvent
  ) => {
    if (touchStartX.current === null) return;

    const difference =
      event.changedTouches[0].clientX -
      touchStartX.current;

    if (Math.abs(difference) > 55) {
      if (difference > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }

    touchStartX.current = null;
  };

  return (
    <>
      <section
        className="antWorldMonitor"
        aria-labelledby="ant-world-monitor-title"
      >
        {/* INTRO */}
        <header className="antWorldMonitorHeader">
          <div>
            <small>EXPLORE THE DASHBOARD</small>

            <h4 id="ant-world-monitor-title">
              World Monitor.
            </h4>
          </div>

          <p>
            Three dedicated monitoring views organise
            national situation awareness, environmental
            information and intelligence content while
            maintaining one connected dashboard experience.
          </p>
        </header>

        {/* VIEW SELECTOR */}
        <nav
          className="antWorldMonitorTabs"
          aria-label="World Monitor dashboard views"
        >
          {views.map((view, index) => (
            <button
              key={view.key}
              type="button"
              className={
                index === activeIndex
                  ? "isActive"
                  : ""
              }
              onClick={() => changeView(index)}
              aria-current={
                index === activeIndex
                  ? "true"
                  : undefined
              }
            >
              <span>{view.number}</span>

              <strong>{view.label}</strong>
            </button>
          ))}
        </nav>

        {/* MAIN VIEWER */}
        <div
          className="antWorldMonitorViewer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="antWorldMonitorTopBar">
            <div>
              <span>{active.number}</span>

              <small>{active.label}</small>
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
            className="antWorldMonitorImageButton"
            onClick={() => setIsExpanded(true)}
            aria-label={`Open ${active.title} screenshot`}
          >
            <img
              key={`${active.key}-${direction}`}
              className={
                direction === "next"
                  ? "antWorldMonitorImageEnterNext"
                  : "antWorldMonitorImageEnterPrevious"
              }
              src={active.image}
              alt={`${active.title} dashboard`}
            />
          </button>

          {/* VIEW DESCRIPTION */}
          <div className="antWorldMonitorDetails">
            <div>
              <span>{active.number}</span>

              <div>
                <small>{active.label}</small>

                <h5>{active.title}</h5>
              </div>
            </div>

            <p>{active.description}</p>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="antWorldMonitorControls">
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
            {String(views.length).padStart(
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
      </section>

      {/* FULLSCREEN VIEW */}
      {isExpanded && (
        <div
          className="antWorldMonitorLightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} full screenshot`}
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setIsExpanded(false);
            }
          }}
        >
          <div className="antWorldMonitorLightboxTop">
            <div>
              <span>{active.number}</span>

              <div>
                <small>{active.label}</small>

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

          <div className="antWorldMonitorLightboxImage">
            <img
              key={`lightbox-${active.key}`}
              src={active.image}
              alt={`${active.title} full dashboard screenshot`}
            />
          </div>

          <div className="antWorldMonitorLightboxControls">
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