import React, { useEffect, useRef, useState } from "react";

const TRACKS = [
  { key: "swe", label: "SWE" },
  { key: "data", label: "Data & Analytics" },
  { key: "pm", label: "Product Management" },
];

const LEVELS = [
  { key: "new-grad", label: "New Grad" },
  { key: "masters", label: "Masters" },
];

// maps to /resumes/<track>-<level>.pdf
function buildResumePath(track, level) {
  return `/resumes/${track}-${level}.pdf`;
}

export default function ResumeModal({ open, onClose, initialTrack = "swe", initialLevel = "new-grad" }) {
  const dialogRef = useRef(null);
  const [track, setTrack] = useState(initialTrack);
  const [level, setLevel] = useState(initialLevel);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      dialogRef.current?.querySelector("button, [href], input, select")?.focus();
    }
  }, [open]);

  if (!open) return null;

  const url = buildResumePath(track, level);

  return (
    <div className="resume-modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div
        className="resume-modal"
        onClick={(e) => e.stopPropagation()}
        ref={dialogRef}
      >
        <div className="resume-modal-header">
          <h3>Choose Resume</h3>
          <button className="icon-x" aria-label="Close" onClick={onClose}>×</button>
        </div>

        <div className="resume-modal-controls">
          <div className="segmented">
            {TRACKS.map(t => (
              <button
                key={t.key}
                className={`seg-btn ${track === t.key ? "active" : ""}`}
                onClick={() => setTrack(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="segmented">
            {LEVELS.map(l => (
              <button
                key={l.key}
                className={`seg-btn ${level === l.key ? "active" : ""}`}
                onClick={() => setLevel(l.key)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="resume-modal-preview">
          <p className="preview-path">Selected: {track.toUpperCase()} • {level.replace("-", " ")}</p>
        </div>

        <div className="resume-modal-actions">
          <a
            className="resume-cta"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF
          </a>
          <button className="resume-ghost" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
