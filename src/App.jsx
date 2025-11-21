import React, { useState } from "react";

const assets = [
  { id: 1, name: "KN- R21", status: "Running" },
  { id: 2, name: "SJ-517", status: "Stopped" },
  { id: 3, name: "SJ-517", status: "Running" },
  { id: 4, name: "SJ-517", status: "Running" },
  { id: 5, name: "SJ-517", status: "Stopped" },
  { id: 6, name: "SJ-517", status: "Running" },
  { id: 7, name: "SJ-517", status: "Running" },
  { id: 8, name: "SJ-517", status: "Stopped" },
  { id: 9, name: "SJ-517", status: "Running" },
  { id: 10, name: "SJ-517", status: "Running" },
  { id: 11, name: "SJ-517", status: "Warning" },
  { id: 12, name: "SJ-517", status: "Running" },
  { id: 13, name: "SJ-517", status: "Stopped" },
  { id: 14, name: "SJ-517", status: "Running" },
  { id: 15, name: "SJ-517", status: "Stopped" },
  { id: 16, name: "SJ-517", status: "Running" },
  { id: 17, name: "SJ-517", status: "Running" },
  { id: 18, name: "SJ-517", status: "Warning" },
  { id: 19, name: "SJ-517", status: "Stopped" },
  { id: 20, name: "SJ-517", status: "Running" },
  { id: 21, name: "SJ-517", status: "Stopped" },
  { id: 22, name: "SJ-517", status: "Running" },
  { id: 23, name: "SJ-517", status: "Running" },
  { id: 24, name: "SJ-517", status: "Warning" },
];

// SVG icons for reuse
const IconBack = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3abb48"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <line x1="15" y1="18" x2="9" y2="12" />
    <line x1="15" y1="6" x2="9" y2="12" />
  </svg>
);

const IconWindGreen = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3abb48"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M17 6a3 3 0 0 0-3-3 3 3 0 0 0-3 3" />
    <path d="M12 6v12" />
    <path d="M6 9h9" />
  </svg>
);

const IconWindRed = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f52828"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M17 6a3 3 0 0 0-3-3 3 3 0 0 0-3 3" />
    <path d="M12 6v12" />
    <path d="M6 9h9" />
  </svg>
);

const IconBellGreen = () => (
  <svg
    width="18"
    height="18"
    fill="#3abb48"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 24c1.104 0 1.99-.894 1.99-2h-3.98c0 1.106.886 2 1.99 2zM18 17v-5c0-3.073-1.764-5.64-4.5-6.32V5c0-.828-.673-1.5-1.5-1.5S10.5 4.172 10.5 5v.68C7.766 6.36 6 8.927 6 12v5l-2 2v1h16v-1l-2-2z" />
  </svg>
);

const IconBellYellow = () => (
  <svg
    width="18"
    height="18"
    fill="#e8d740"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 24c1.104 0 1.99-.894 1.99-2h-3.98c0 1.106.886 2 1.99 2zM18 17v-5c0-3.073-1.764-5.64-4.5-6.32V5c0-.828-.673-1.5-1.5-1.5S10.5 4.172 10.5 5v.68C7.766 6.36 6 8.927 6 12v5l-2 2v1h16v-1l-2-2z" />
  </svg>
);

const IconBellRed = () => (
  <svg
    width="18"
    height="18"
    fill="#f52828"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 24c1.104 0 1.99-.894 1.99-2h-3.98c0 1.106.886 2 1.99 2zM18 17v-5c0-3.073-1.764-5.64-4.5-6.32V5c0-.828-.673-1.5-1.5-1.5S10.5 4.172 10.5 5v.68C7.766 6.36 6 8.927 6 12v5l-2 2v1h16v-1l-2-2z" />
  </svg>
);

const IconHome = () => (
  <svg
    width="34"
    height="34"
    fill="none"
    stroke="#3a7d42"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M3 12l9-9 9 9" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const IconGlobe = () => (
  <svg
    width="34"
    height="34"
    fill="none"
    stroke="#3a7d42"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 1 0 20" />
    <path d="M12 2a15 15 0 0 0 0 20" />
  </svg>
);

const IconChart = () => (
  <svg
    width="34"
    height="34"
    fill="none"
    stroke="#3a7d42"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const IconCube = () => (
  <svg
    width="34"
    height="34"
    fill="none"
    stroke="#3a7d42"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.732l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.732l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.732z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

function App() {
  const [filter, setFilter] = useState("All");
  const totalAssets = assets.length;
  const runningAssets = assets.filter((a) => a.status === "Running").length;

  const filteredAssets =
    filter === "All"
      ? assets
      : filter === "Alarms"
      ? assets.filter((a) => a.status === "Warning")
      : assets.filter((a) => a.status === filter);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background-color: #edf0e6; /* exact main image bg */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #3abb48;
          user-select: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .app {
          max-width: 360px;
          margin: 16px auto 40px;
          padding: 0 16px;
          background-color: #edf0e6;
          user-select: none;
        }
        /* Top Button */
        .top-button {
          width: 320px;
          height: 50px;
          border-radius: 30px;
          background: #fbfefb;
          box-shadow:
            inset 6px 6px 12px #dbe8db,
            inset -6px -6px 12px #fafffb;
          border: none;
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 24px;
          font-weight: 600;
          font-size: 16px;
          color: #3abb48;
          cursor: pointer;
          user-select: none;
          margin-bottom: 18px;
          outline-offset: 2px;
        }
        .top-button svg {
          flex-shrink: 0;
          width: 12px;
          height: 12px;
        }
        /* Status text */
        .status-text {
          font-weight: 700;
          font-size: 18px;
          color: black;
          margin-left: 4px;
          margin-bottom: 30px;
          user-select: none;
          line-height: 1.3;
        }
        /* Pie Chart */
        .pie-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin-left: 4px;
          margin-bottom: 34px;
          border-radius: 50%;
          background: conic-gradient(
            #12672e 0deg 180deg,
            #68af83 180deg 230deg,
            #2ea14e 230deg 270deg,
            #8bd64f 270deg 360deg
          );
          box-shadow: inset 4px 4px 8px #dcead9, inset -4px -4px 8px #f8fef8;
        }
        /* Connecting lines */
        .line {
          position: absolute;
          border: 1.2px solid #9dbf99;
          border-radius: 2px;
        }
        .line1 {
          top: 54px;
          left: 38px;
          width: 16px;
          height: 0;
        }
        .line2 {
          top: 15px;
          right: 37px;
          width: 16px;
          height: 0;
        }
        .line3 {
          bottom: 14px;
          right: 15px;
          width: 0;
          height: 20px;
        }
        /* Bell icons */
        .bell-icon {
          position: absolute;
          width: 18px;
          height: 18px;
        }
        .bell-green {
          left: 10px;
          top: 53%;
          transform: translateY(-50%);
        }
        .bell-yellow {
          right: 22px;
          top: 8px;
        }
        .bell-red {
          right: 12px;
          bottom: 8px;
        }
        /* Filter Buttons */
        .filters {
          display: flex;
          gap: 12px;
          margin-left: 4px;
          margin-bottom: 32px;
          justify-content: flex-start;
        }
        .filter-btn {
          padding: 6px 14px;
          border: 1.3px solid #acc9b6;
          border-radius: 20px;
          font-weight: 600;
          font-size: 13px;
          background: #fbfefb;
          color: #3abb48;
          box-shadow:
            inset 2px 2px 6px #d3e1d3,
            inset -2px -2px 6px #f8fffa;
          cursor: pointer;
          user-select: none;
          min-width: 60px;
          text-align: center;
          transition: background-color 0.25s ease, color 0.25s ease;
        }
        .filter-btn.active {
          background-color: #acc9b6;
          border-color: #acc9b6;
          color: white;
          box-shadow: none;
        }
        .filter-btn:hover:not(.active) {
          background-color: #e2f2e2;
        }
        /* Status Cards */
        .status-cards {
          display: flex;
          justify-content: flex-start;
          gap: 20px;
          margin-left: 4px;
          margin-bottom: 36px;
        }
        .status-card {
          width: 178px;
          height: 50px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 18px;
          box-shadow:
            1px 1px 8px rgba(0, 0, 0, 0.15);
          cursor: default;
          user-select: none;
          font-weight: 600;
          font-size: 16px;
          color: black;
        }
        .status-card.running {
          background: linear-gradient(135deg, #bcdeb7, #a6ce9a);
          color: #217622;
          box-shadow: 2px 2px 10px #abc382;
        }
        .status-card.stopped {
          background: linear-gradient(135deg, #f5b4b4, #ec8888);
          color: #a81313;
          box-shadow: 2px 2px 10px #d15a5a;
        }
        .status-card svg {
          flex-shrink: 0;
          filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.1));
          stroke-width: 2.3;
        }
        .card-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .card-main-text {
          font-weight: 700;
        }
        .card-sub-text {
          font-size: 12px;
          opacity: 0.7;
        }
        /* Grid Container */
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px 12px;
          margin-left: 4px;
          margin-bottom: 40px;
        }
        /* Grid Buttons */
        .grid-btn {
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          border: 1.3px solid;
          background: rgba(255 255 255 / 0.15);
          padding: 9px 10px;
          box-shadow: inset 1.5px 1.5px 4px #e4f0de,
            inset -1.5px -1.5px 4px #f9fff9;
          cursor: pointer;
          user-select: none;
          text-align: center;
          color: #3abb48;
          transition: filter 0.3s ease;
        }
        .grid-btn.red {
          border-color: #f52828;
          color: #f52828;
          box-shadow: inset 1.5px 1.5px 4px #f3d6d6,
            inset -1.5px -1.5px 4px #fff1f1;
        }
        .grid-btn.yellow {
          border-color: #e8d740;
          color: #e8d740;
          box-shadow: inset 1.5px 1.5px 4px #fefacf,
            inset -1.5px -1.5px 4px #fffdea;
        }
        .grid-btn:hover {
          filter: brightness(1.1);
        }
        /* Bottom Navigation */
        .bottom-bar {
          margin-left: 4px;
          max-width: 352px;
          background: #e5ebe2;
          border-radius: 26px 26px 0 0;
          height: 66px;
          padding: 14px 0;
          border-top: 3px dotted #3abb48;
          display: flex;
          justify-content: space-evenly;
          user-select: none;
          overflow-x: auto;
        }
        .bottom-bar button {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #3a7d42;
          padding: 0 10px;
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          transition: color 0.3s ease;
        }
        .bottom-bar button:hover {
          color: #27492a;
        }
        .bottom-bar svg {
          width: 34px;
          height: 34px;
          stroke-width: 1.5;
          stroke: currentColor;
          fill: none;
          user-select: none;
        }
      `}</style>

      <main className="app" aria-label="Asset operations screen">
        <button className="top-button" aria-label="Back to Asset Operations">
          <IconBack />
          Asset Operations
        </button>

        <div className="status-text" aria-live="polite" aria-atomic="true">
          {runningAssets} of {totalAssets} Assets are running
        </div>

        <div className="pie-container" role="img" aria-label="Asset status pie chart">
          <div className="line line1" />
          <div className="line line2" />
          <div className="line line3" />
          <span className="bell-icon bell-green" title="Running status">
            <IconBellGreen />
          </span>
          <span className="bell-icon bell-yellow" title="Stopped status">
            <IconBellYellow />
          </span>
          <span className="bell-icon bell-red" title="Alarms">
            <IconBellRed />
          </span>
        </div>

        <div className="filters" role="radiogroup" aria-label="Asset filter options">
          {["All", "Running", "Stopped", "Alarms"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
              role="radio"
              aria-checked={filter === f}
              type="button"
            >
              {f}
            </button>
          ))}
        </div>

        <section className="status-cards" aria-label="Status highlight cards">
          <article className="status-card running" tabIndex={-1}>
            <IconWindGreen />
            <div className="card-text-group">
              <div className="card-main-text">Running</div>
              <div className="card-sub-text">KN- R21</div>
            </div>
          </article>
          <article className="status-card stopped" tabIndex={-1}>
            <IconWindRed />
            <div className="card-text-group">
              <div className="card-main-text">Stopped</div>
              <div className="card-sub-text">SJ-517</div>
            </div>
          </article>
        </section>

        <section
          className="grid"
          role="list"
          aria-label="Asset status grid"
          tabIndex={-1}
        >
          {filteredAssets.map(({ id, name, status }) => (
            <button
              key={id}
              className={`grid-btn ${
                status === "Running"
                  ? "green"
                  : status === "Stopped"
                  ? "red"
                  : "yellow"
              }`}
              type="button"
              role="listitem"
              aria-label={`Asset ${name} is ${status}`}
            >
              {name}
            </button>
          ))}
        </section>

        <nav className="bottom-bar" aria-label="Main navigation buttons">
          {[IconHome, IconGlobe, IconChart, IconCube].map((IconComp, i) => (
            <button key={i} type="button" aria-label={`Navigation icon ${i + 1}`}>
              <IconComp />
            </button>
          ))}
        </nav>
      </main>
    </>
  );
}

export default App;
