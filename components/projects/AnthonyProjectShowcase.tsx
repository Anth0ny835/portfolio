"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";
// import {
//   categoryLabels,
//   type Project,
//   type ProjectCategory,
// } from "@/data/projects";

import {
  categoryEnabled,
  categoryLabels,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

import AnthonyFypImplementation from "./AnthonyFypImplementation";
import AnthonyWorldMonitor from "./AnthonyWorldMonitor";

const categoryOrder: ProjectCategory[] = [
  "personal-portfolio",
  "internship",
  "fyp",
  "university",
];

const visibleCategoryOrder = categoryOrder.filter(
  (category) => categoryEnabled[category]
);

const categoryIcons: Record<ProjectCategory, IconName> = {
  "personal-portfolio": "code",
  internship: "briefcase",
  fyp: "graduation",
  university: "book",
};

function wrap(index: number, length: number) {
  if (!length) return 0;
  return (index + length) % length;
}

export default function AnthonyProjectShowcase({
  allProjects,
}: {
  allProjects: Project[];
}) {
  // const groups = useMemo(
  //   () =>
  //     categoryOrder.map((category) => ({
  //       category,
  //       label: categoryLabels[category],
  //       projects: allProjects.filter((project) => project.category === category),
  //     })),
  //   [allProjects]
  // );
  const groups = useMemo(
    () =>
      visibleCategoryOrder.map((category) => ({
        category,
        label: categoryLabels[category],
        projects: allProjects.filter(
          (project) => project.category === category
        ),
      })),
    [allProjects]
  );

  // const [category, setCategory] =
  // useState<ProjectCategory>("personal-portfolio");

  const [category, setCategory] = useState<ProjectCategory>(
    visibleCategoryOrder[0] ?? "internship"
  );

  const [indexes, setIndexes] = useState<Record<ProjectCategory, number>>({
    "personal-portfolio": 0,
    internship: 0,
    fyp: 0,
    university: 0,
  });

  const [motion, setMotion] =
    useState<"next" | "previous" | "none">("none");
  const [motionKey, setMotionKey] = useState(0);

  const currentGroup = groups.find((group) => group.category === category)!;
  const items = currentGroup.projects;
  const currentIndex = wrap(indexes[category] ?? 0, items.length);
  const current = items[currentIndex];

  const previousIndex = wrap(currentIndex - 1, items.length);
  const nextIndex = wrap(currentIndex + 1, items.length);
  const previous = items[previousIndex];
  const next = items[nextIndex];

  const viewerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);
  const dragCurrent = useRef<number | null>(null);
  const wheelLock = useRef(false);

  const activate = (
    index: number,
    direction: "next" | "previous" | "none"
  ) => {
    if (!items.length) return;

    setMotion(direction);
    setMotionKey((value) => value + 1);
    setIndexes((old) => ({
      ...old,
      [category]: wrap(index, items.length),
    }));
  };

  const choose = (index: number) => {
    if (index === currentIndex) return;
    activate(index, index > currentIndex ? "next" : "previous");
  };

  const move = (direction: -1 | 1) => {
    if (items.length <= 1) return;
    activate(
      currentIndex + direction,
      direction > 0 ? "next" : "previous"
    );
  };

  const switchCategory = (nextCategory: ProjectCategory) => {
    setMotion("none");
    setCategory(nextCategory);
  };

  useEffect(() => {
    const node = viewerRef.current;
    if (!node) return;

    const onWheel = (event: WheelEvent) => {
      if (items.length <= 1) return;

      const intent =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (Math.abs(intent) < 18 || wheelLock.current) return;

      event.preventDefault();
      wheelLock.current = true;

      move(intent > 0 ? 1 : -1);

      window.setTimeout(() => {
        wheelLock.current = false;
      }, 420);
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [items.length, currentIndex, category]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (items.length <= 1) return;
    dragStart.current = event.clientX;
    dragCurrent.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    dragCurrent.current = event.clientX;
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null || dragCurrent.current === null) return;

    const distance = dragCurrent.current - dragStart.current;

    dragStart.current = null;
    dragCurrent.current = null;

    if (Math.abs(distance) > 55) {
      move(distance < 0 ? 1 : -1);
    }

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch { }
  };

  if (!current) return null;

  const sameOnlyProject = items.length === 1;

  return (
    <div className="antPostShowcase">
      <div
        className="antPostTabs"
        role="tablist"
        aria-label="Anthony project categories"
      >
        {groups.map((group) => (
          <button
            key={group.category}
            type="button"
            role="tab"
            aria-selected={category === group.category}
            className={category === group.category ? "active" : ""}
            onClick={() => switchCategory(group.category)}
          >
            <Icon name={categoryIcons[group.category]} size={17} />
            <span>{group.label}</span>
            <small>{group.projects.length}</small>
          </button>
        ))}
      </div>

      <div
        className={`antPostViewer ${sameOnlyProject ? "single" : ""}`}
        ref={viewerRef}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          dragStart.current = null;
          dragCurrent.current = null;
        }}
        aria-label={`${currentGroup.label} project viewer. Scroll, swipe, or use arrow keys.`}
      >
        {!sameOnlyProject && (
          <button
            type="button"
            className="antPostSide antPostPrevious"
            onClick={() => move(-1)}
            aria-label={`Previous project: ${previous.title}`}
          >
            <div className="antPostSideVisual" aria-hidden="true">
              <div className="antPostSideWindow">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="antPostSideText">
              <small>PREVIOUS</small>
              <strong>{previous.title}</strong>
              <p>{previous.summary}</p>
              <span>
                View project <Icon name="arrow" size={14} />
              </span>
            </div>
          </button>
        )}

        <article
          key={`${category}-${currentIndex}-${motionKey}`}
          className={`antPostCurrent ${motion === "next"
            ? "antPostEnterNext"
            : motion === "previous"
              ? "antPostEnterPrevious"
              : ""
            }`}
        >
          {current.category !== "fyp" &&
            current.category !== "internship" && (
              <div className="antPostCurrentVisual">
                <div className="antPostCurrentWindow">
                  <div className="antPostBrowserBar">
                    <i />
                    <i />
                    <i />
                    <span>PROJECT PREVIEW</span>
                  </div>

                  <div className="antPostBrowserBody">
                    <div className="antPostLargePane" />

                    <div className="antPostSmallPanes">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                <div className="antPostIndex">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </div>
              </div>
            )}

          <div className="antPostCurrentContent">
            <div className="antPostCurrentMeta">
              <span>{currentGroup.label}</span>
              <small>
                {current.status === "placeholder"
                  ? "PLACEHOLDER"
                  : "LIVE PROJECT"}
              </small>
            </div>

            <h3>{current.title}</h3>
            <p>{current.summary}</p>

            <div className="antTags">
              {current.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {current.category === "fyp" && (
              <AnthonyFypImplementation />
            )}

            {current.category === "internship" && (
              <AnthonyWorldMonitor />
            )}

            {/* <div className="antPostHint">
              <span>
                {items.length > 1
                  ? "Scroll · drag · swipe · arrow keys"
                  : "Single project in this category"}
              </span>
              <span>Case study details later</span>
            </div> */}
          </div>
        </article>

        {!sameOnlyProject && (
          <button
            type="button"
            className="antPostSide antPostNext"
            onClick={() => move(1)}
            aria-label={`Next project: ${next.title}`}
          >
            <div className="antPostSideVisual" aria-hidden="true">
              <div className="antPostSideWindow">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="antPostSideText">
              <small>NEXT</small>
              <strong>{next.title}</strong>
              <p>{next.summary}</p>
              <span>
                View project <Icon name="arrow" size={14} />
              </span>
            </div>
          </button>
        )}
      </div>

      {items.length > 1 && (
        <div className="antPostPagination" aria-label="Project pagination">
          {items.map((project, index) => (
            <button
              type="button"
              key={project.title}
              className={index === currentIndex ? "active" : ""}
              onClick={() => choose(index)}
              aria-label={`View ${project.title}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
