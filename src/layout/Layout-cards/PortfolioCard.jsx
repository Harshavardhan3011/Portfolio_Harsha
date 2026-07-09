// src/layout/Layout-cards/PortfolioCard.jsx
import React, { useMemo, useState } from "react";
import Carousel from "./Carousel";
import { projects as RAW } from "../../data/projects";

const TAGS = ["all", "web", "ui", "tool"];

export default function PortfolioCard() {
  const [active, setActive] = useState(null); // index | null
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("all");

  const projects = useMemo(() => {
    const list = RAW.filter((p) =>
      [p.title, p.desc, ...(p.tech || [])]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase())
    );
    return tag === "all" ? list : list.filter((p) => p.type === tag);
  }, [q, tag]);

  if (active !== null) {
    const project = projects[active];
    if (!project) setActive(null);
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-xl border border-green-100 mt-8">
        <button
          onClick={() => setActive(null)}
          className="mb-4 px-4 py-1 bg-gray-200 rounded hover:bg-green-100 transition text-gray-600"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold mb-2 text-green-600">
          {project?.title}
        </h2>
        <p className="mb-4 text-gray-700">{project?.desc}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {project?.tech?.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200"
            >
              {t}
            </span>
          ))}
          {project?.year && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700 border">
              {project.year}
            </span>
          )}
        </div>

        <Carousel images={project?.images || []} />
        {project?.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 shadow transition"
          >
            View Project →
          </a>
        )}
      </div>
    );
  }

  return (
    <section className="mt-10">
      {/* Controls */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-3 md:gap-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by title, tech, or description"
          className="w-full md:flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="flex gap-2">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-3 py-2 rounded-lg border transition ${
                tag === t
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-green-700 border-green-200 hover:bg-green-50"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {projects.map((proj, i) => (
          <button
            key={proj.slug}
            onClick={() => setActive(i)}
            className="group bg-white border border-green-200 rounded-2xl shadow-md p-4 text-left hover:bg-green-50 hover:shadow-lg transition-all duration-200"
          >
            <div className="h-40 w-full overflow-hidden rounded-xl border border-green-100 mb-3">
              <img
                src={proj.images?.[0]}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-lg font-semibold text-green-700">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{proj.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {proj.tech?.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
