"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { getDisplayGroups, getTagGroup } from "@/data/tagGroups";
import Reveal from "@/app/components/Reveal";
import ArchiveFooter from "@/app/components/ArchiveFooter";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string>("ALL");
  const [selectedGroup, setSelectedGroup] = useState<string>("ALL");
  const [isTagsDrawerOpen, setIsTagsDrawerOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  // Groups ordered according to language
  const displayGroups = useMemo(() => getDisplayGroups(language), [language]);

  // Group all tags extracted from projects and count occurrences
  const { tagsByGroup, tagCounts, allUniqueTags } = useMemo(() => {
    const counts: Record<string, number> = {};
    const grouped: Record<string, Set<string>> = {};
    const unique = new Set<string>();

    displayGroups.forEach((g) => {
      grouped[g] = new Set<string>();
    });

    projects.forEach((p) => {
      p[language].tags.forEach((tag) => {
        unique.add(tag);
        counts[tag] = (counts[tag] || 0) + 1;
        const group = getTagGroup(tag, language);
        if (!grouped[group]) {
          grouped[group] = new Set<string>();
        }
        grouped[group].add(tag);
      });
    });

    const resultGrouped: Record<string, string[]> = {};
    Object.keys(grouped).forEach((grp) => {
      resultGrouped[grp] = Array.from(grouped[grp]).sort();
    });

    return {
      tagsByGroup: resultGrouped,
      tagCounts: counts,
      allUniqueTags: Array.from(unique),
    };
  }, [language, displayGroups]);

  // Filter projects based on active selection (Tag or Group)
  const filteredProjects = useMemo(() => {
    if (selectedTag !== "ALL") {
      return projects.filter((p) =>
        p[language].tags.some(
          (t) => t.toLowerCase() === selectedTag.toLowerCase()
        )
      );
    }

    if (selectedGroup !== "ALL") {
      return projects.filter((p) =>
        p[language].tags.some(
          (t) => getTagGroup(t, language).toLowerCase() === selectedGroup.toLowerCase()
        )
      );
    }

    return projects;
  }, [selectedTag, selectedGroup, language]);

  const handleSelectGroup = (group: string) => {
    setSelectedGroup(group);
    setSelectedTag("ALL");
  };

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    setSelectedGroup("ALL");
  };

  const handleResetFilters = () => {
    setSelectedTag("ALL");
    setSelectedGroup("ALL");
  };

  return (
    <main className="page-shell archive-page">
      <div className="container">
        {/* ARCHIVE HERO */}
        <section className="archive-hero">
          <div className="archive-hero-grid">
            <div>
              <div className="kicker">JOTAGGE / WORK ARCHIVE</div>
              <h1 className="display-title">
                The<br />
                <em>archive.</em>
              </h1>
            </div>
            <div>
              <p className="lead">
                {language === "pt"
                  ? "Projetos que saíram da cabeça e ganharam forma no mundo. Software, sistemas web, interfaces, áudio, identidades e experimentações autorais."
                  : "Projects that left the head and took form in the world. Software, web systems, interfaces, audio, identities, and creative experiments."}
              </p>
              <div className="archive-index" style={{ marginTop: "32px" }}>
                <strong>{String(projects.length).padStart(2, "0")}</strong>{" "}
                {language === "pt" ? "TRABALHOS CATALOGADOS" : "WORKS DOCUMENTED"}
                <br />
                2022 — 2026 · RECIFE / PE
              </div>
            </div>
          </div>
        </section>

        {/* TAG SYSTEM & FILTER CONTROLS */}
        <div className="tag-system">
          <div className="tag-system-header">
            {/* Primary area filter tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
              <button
                className={`btn-pill ${selectedTag === "ALL" && selectedGroup === "ALL" ? "is-active" : ""}`}
                onClick={handleResetFilters}
              >
                {language === "pt" ? "TODOS OS PROJETOS" : "ALL PROJECTS"} ({projects.length})
              </button>

              {displayGroups.map((group) => {
                const isGroupActive = selectedGroup === group;
                return (
                  <button
                    key={group}
                    className={`btn-pill ${isGroupActive ? "is-active" : ""}`}
                    onClick={() => handleSelectGroup(group)}
                  >
                    {group}
                  </button>
                );
              })}

              <button
                className={`btn-pill ${isTagsDrawerOpen ? "is-active" : ""}`}
                onClick={() => setIsTagsDrawerOpen((prev) => !prev)}
                style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.06)" }}
              >
                <span>{isTagsDrawerOpen ? "▲" : "▼"}</span>
                <span>
                  {isTagsDrawerOpen
                    ? language === "pt"
                      ? "RECOLHER TAGS"
                      : "HIDE TAGS"
                    : language === "pt"
                    ? `FILTRAR POR TAGS (${allUniqueTags.length})`
                    : `FILTER BY TAGS (${allUniqueTags.length})`}
                </span>
              </button>
            </div>

            {/* View Switcher: List vs Grid */}
            <div className="view-toggle-group">
              <button
                className={`view-btn ${viewMode === "list" ? "is-active" : ""}`}
                onClick={() => setViewMode("list")}
                title="Visualização em Lista"
              >
                LISTA
              </button>
              <button
                className={`view-btn ${viewMode === "grid" ? "is-active" : ""}`}
                onClick={() => setViewMode("grid")}
                title="Visualização em Grade"
              >
                GRADE
              </button>
            </div>
          </div>

          {/* Active Filter Indicator */}
          {(selectedTag !== "ALL" || selectedGroup !== "ALL") && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "16px",
                fontFamily: "var(--mono)",
                fontSize: "11px",
              }}
            >
              <span style={{ color: "var(--dim)", textTransform: "uppercase" }}>
                {language === "pt" ? "Filtro ativo:" : "Active filter:"}
              </span>
              <span
                style={{
                  background: "var(--accent)",
                  color: "#070708",
                  padding: "4px 10px",
                  borderRadius: "3px",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {selectedTag !== "ALL" ? selectedTag : selectedGroup} ({filteredProjects.length})
              </span>
              <button
                onClick={handleResetFilters}
                style={{
                  color: "var(--muted)",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "10px",
                }}
              >
                {language === "pt" ? "Limpar filtro" : "Clear filter"}
              </button>
            </div>
          )}

          {/* COLLAPSIBLE TAG DRAWER GROUPED BY AREA */}
          {isTagsDrawerOpen && (
            <div className="tag-groups-drawer">
              {displayGroups.map((group) => {
                const tags = tagsByGroup[group] || [];
                if (tags.length === 0) return null;

                return (
                  <div key={group} className="tag-group-block">
                    <div className="tag-group-header">
                      <span>{group}</span>
                      <span style={{ color: "var(--dim)", fontSize: "9px" }}>
                        {tags.length} {language === "pt" ? "TAGS" : "TAGS"}
                      </span>
                    </div>

                    <div className="tag-chips-wrap">
                      {tags.map((tag) => {
                        const isTagActive = selectedTag.toLowerCase() === tag.toLowerCase();
                        const count = tagCounts[tag] || 0;

                        return (
                          <button
                            key={tag}
                            className={`tag-chip ${isTagActive ? "is-active" : ""}`}
                            onClick={() => handleSelectTag(tag)}
                          >
                            <span>{tag}</span>
                            <span className="chip-count">({count})</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* RESULTS COUNT */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            fontFamily: "var(--mono)",
            fontSize: "10px",
            color: "var(--dim)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <span>
            {language === "pt" ? "Exibindo" : "Showing"}{" "}
            <strong style={{ color: "var(--accent)" }}>{filteredProjects.length}</strong>{" "}
            {language === "pt" ? "projetos" : "projects"}
          </span>
        </div>

        {/* PROJECT LIST VIEW */}
        {viewMode === "list" ? (
          <section className="project-list">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 25}>
                <Link
                  href={`/projetos/${project.slug}`}
                  className="project-card"
                  data-cursor="VIEW"
                >
                  <span className="project-card-no">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2>{project[language].title}</h2>
                    <p>{project[language].description}</p>
                    <div className="tagline" style={{ marginTop: "14px" }}>
                      {project[language].tags.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card-media">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project[language].title}
                        fill
                        sizes="(max-width: 900px) 100vw, 40vw"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "#111" }} />
                    )}
                  </div>

                  <span style={{ color: "var(--dim)", fontSize: "16px" }}>↗</span>
                </Link>
              </Reveal>
            ))}
          </section>
        ) : (
          /* PROJECT GRID VIEW */
          <section className="projects-grid">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 30}>
                <Link
                  href={`/projetos/${project.slug}`}
                  className="grid-card"
                  data-cursor="VIEW"
                >
                  <div className="grid-card-media">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project[language].title}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "#111" }} />
                    )}
                  </div>

                  <div className="grid-card-body">
                    <div>
                      <div className="grid-card-header">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span>{project[language].tags[0] || "PROJECT"}</span>
                      </div>
                      <h3>{project[language].title}</h3>
                      <p>{project[language].description}</p>
                    </div>

                    <div className="tagline">
                      {project[language].tags.slice(0, 3).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </section>
        )}
      </div>

      <ArchiveFooter />
    </main>
  );
}
