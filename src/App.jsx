import React from "react";

export default function App() {
  // --- 5×5 EXACT GRID COLORS (MATCH MAIN IMAGE) ---
  const cellColors = [
    ["green", "red", "green", "green", "green"],
    ["red", "green", "green", "yellow", "green"],
    ["green", "green", "yellow", "green", "yellow"],
    ["yellow", "red", "red", "red", "green"],
    ["green", "red", "green", "red", "green"],
  ];

  // pill style
  const pillStyle = (status) => {
    let color = "";
    let border = "";
    let bg = "";
    let shadow = "";

    if (status === "green") {
      color = "#1C8F3A";
      border = "2px solid #1C8F3A";
      bg = "linear-gradient(135deg, #E6FBE6, #C8F5C8)";
      shadow = "0 4px 10px rgba(0, 128, 0, 0.25)";
    }

    if (status === "red") {
      color = "#D63031";
      border = "2px solid #D63031";
      bg = "#FFFFFF";
      shadow = "0 4px 10px rgba(214,48,49,0.25)";
    }

    if (status === "yellow") {
      color = "#D4A017";
      border = "2px solid #D4A017";
      bg = "linear-gradient(135deg, #FFF7D0, #FFEFA3)";
      shadow = "0 4px 10px rgba(212,160,23,0.25)";
    }

    return {
      width: "95px",
      padding: "7px 0",
      borderRadius: "25px",
      background: bg,
      border: border,
      textAlign: "center",
      fontWeight: "700",
      color: color,
      fontSize: "15px",
      boxShadow: shadow,
      userSelect: "none",
    };
  };

  return (
    <>
      <style>
        {`
        @media (max-width: 1000px) {
          .grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .grid { grid-template-columns: repeat(1, 1fr) !important; }
        }
      `}
      </style>

      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          padding: "35px 0",
          background: "#F0F3F4",
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px", textAlign: "center" }}>
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "470px",
              margin: "0 auto",
              padding: "15px 20px",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #DEF1E1, #EAF7EC, #F6FAF7)",
              boxShadow:
                "0px 5px 25px rgba(0,0,0,0.15), inset 0px 4px 8px rgba(255,255,255,0.9)",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 5px 12px rgba(0,0,0,0.15)",
              }}
            >
              <svg
                width="22"
                height="22"
                stroke="#2B6E3A"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 17L7 11L13 5" />
              </svg>
            </div>

            <span
              style={{
                color: "#2B6E3A",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Asset Operations
            </span>
          </div>

          {/* PIE + TEXT */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              // FIX: Now text never touches the pie
              gap: "70px",
              marginLeft: "-40px",
            }}
          >
            <div
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              2 of 114 Assets are <br />
              <span style={{ color: "#2B6E3A" }}>running</span>
            </div>

            {/* PIE CHART */}
            <div style={{ position: "relative", width: "190px", height: "190px" }}>
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  left: "8px",
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.22)",
                  filter: "blur(7px)",
                }}
              />

              <svg
                width="180"
                height="180"
                viewBox="0 0 100 100"
                style={{ position: "relative", zIndex: 2 }}
              >
                <path d="M50 50 L50 0 A50 50 0 1 0 50 100 Z" fill="#1A6E38" />
                <path
                  d="M50 50 L50 0 A50 50 0 0 1 100 50 Z"
                  fill="#B2F5C9"
                />
                <path
                  d="M50 50 L100 50 A50 50 0 0 1 50 100 Z"
                  fill="#55C66E"
                />

                <path
                  d="M50 50 L62 58 A12 12 0 0 1 50 50 Z"
                  fill="rgba(0,0,0,0.22)"
                />
              </svg>

              {/* LEFT GREEN ARROW */}
              <div
                style={{
                  position: "absolute",
                  left: "-50px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <svg width="58" height="45">
                  <path d="M52 23 H5" stroke="#000" strokeWidth="1.3" />
                  <path
                    d="M10 15 L5 23 L10 31"
                    stroke="#00D02D"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* TOP YELLOW ICON */}
              <div
                style={{
                  position: "absolute",
                  right: "-45px",
                  top: "-10px",
                }}
              >
                <svg width="58" height="50">
                  <path
                    d="M5 15 L50 15 L50 45"
                    stroke="#000"
                    strokeWidth="1.4"
                    fill="none"
                  />
                  <circle cx="50" cy="15" r="8" fill="#FFE85A" stroke="#000" />
                </svg>
              </div>

              {/* RIGHT RED ARROW */}
              <div
                style={{
                  position: "absolute",
                  right: "-50px",
                  bottom: "5px",
                }}
              >
                <svg width="58" height="45">
                  <path d="M5 22 H52" stroke="#000" strokeWidth="1.4" />
                  <path
                    d="M42 15 L52 22 L42 29"
                    stroke="#FF3B30"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* FILTER BUTTONS */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {["All", "Running", "Stopped", "Alarms"].map((btn) => (
              <div
                key={btn}
                style={{
                  padding: "8px 20px",
                  background: "linear-gradient(135deg, #E5EEF4, #F2F6F9)",
                  borderRadius: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
                }}
              >
                {btn}
              </div>
            ))}
          </div>

          {/* STATUS CARDS */}
          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {/* RUNNING CARD */}
            <div
              style={{
                width: "260px",
                padding: "28px",
                borderRadius: "22px",
                background: "linear-gradient(135deg, #C7F2CC, #DDF7E1)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
                textAlign: "center",
              }}
            >
              {/* ✔ NEW WIND TURBINE SVG (GREEN) */}
              <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                <path
                  d="M30 10 L38 28 L22 28 Z"
                  stroke="#1CFF1C"
                  strokeWidth="3"
                  fill="none"
                />
                <path d="M30 28 V48" stroke="#1CFF1C" strokeWidth="3" />
                <path d="M20 48 H40" stroke="#1CFF1C" strokeWidth="3" />
              </svg>

              <p style={{ color: "#1B8F3A", fontWeight: "700", marginTop: "10px" }}>
                Running
              </p>
              <p style={{ fontWeight: "600", marginTop: "5px" }}>KN – R21</p>
            </div>

            {/* STOPPED CARD */}
            <div
              style={{
                width: "260px",
                padding: "28px",
                borderRadius: "22px",
                background: "linear-gradient(135deg, #F8D6D6, #FBE7E7)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
                textAlign: "center",
              }}
            >
              {/* ✔ NEW WIND TURBINE SVG (RED) */}
              <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                <path
                  d="M30 10 L38 28 L22 28 Z"
                  stroke="#FF1C1C"
                  strokeWidth="3"
                  fill="none"
                />
                <path d="M30 28 V48" stroke="#FF1C1C" strokeWidth="3" />
                <path d="M20 48 H40" stroke="#FF1C1C" strokeWidth="3" />
              </svg>

              <p style={{ color: "#FF3B30", fontWeight: "700", marginTop: "10px" }}>
                Stopped
              </p>
              <p style={{ fontWeight: "600", marginTop: "5px" }}>SJ – 517</p>
            </div>
          </div>

          {/* --- FIXED 5×5 COMPACT GRID --- */}
          <div
            className="grid"
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              justifyItems: "center",
              rowGap: "18px",
              columnGap: "5px",
              padding: "0 40px",
            }}
          >
            {cellColors.map((row, r) =>
              row.map((color, c) => (
                <div key={`${r}-${c}`} style={pillStyle(color)}>
                  SJ-517
                </div>
              ))
            )}
          </div>

          {/* FOOTER */}
          <div
            style={{
              marginTop: "60px",
              paddingTop: "15px",
              borderTop: "1px solid #E2E2E2",
              display: "flex",
              justifyContent: "center",
              gap: "110px",
            }}
          >
            <svg width="28" height="28" stroke="#2B6E3A" fill="none" strokeWidth="2">
              <path d="M4 12 L14 3 L24 12 V24 H4 Z" />
            </svg>

            <svg width="28" height="28" stroke="#2B6E3A" fill="none" strokeWidth="2">
              <circle cx="14" cy="14" r="10" />
              <path d="M4 14 H24 M14 4 V24" />
            </svg>

            <svg width="28" height="28" stroke="#2B6E3A" fill="none" strokeWidth="2">
              <rect x="6" y="14" width="4" height="8" />
              <rect x="12" y="10" width="4" height="12" />
              <rect x="18" y="6" width="4" height="16" />
            </svg>

            <svg width="28" height="28" stroke="#2B6E3A" fill="none" strokeWidth="2">
              <circle cx="14" cy="14" r="10" />
              <path d="M14 8 V14 L18 16" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
