import { useEffect, useRef } from 'react';

// A proper isometric Rubik's cube with 9 visible stickers per face,
// grid lines between stickers, and correct solved-state colors.
// Top = Yellow, Front (right face) = Red, Right (left face) = Blue
export default function RubiksCube3D({ size = 140 }) {
  const s = size;

  // Isometric projection helpers
  // We'll draw 3 visible faces: top, front-right, front-left
  // Using CSS 3D transform for a clean isometric look

  // Each face is an s×s square divided into 3×3 stickers
  // Colors per face (solved state)
  const Y = '#ffd700'; // yellow  - top
  const R = '#ff2d2d'; // red     - front
  const B = '#0080ff'; // blue    - right
  const O = '#ff8c00'; // orange  - left
  const G = '#00d26a'; // green   - back
  const W = '#f0f0f0'; // white   - bottom

  // Top face: 3x3 all yellow
  const topColors = [Y,Y,Y, Y,Y,Y, Y,Y,Y];
  // Front-right face: 3x3 all red
  const frontColors = [R,R,R, R,R,R, R,R,R];
  // Front-left face: 3x3 all blue
  const sideColors = [B,B,B, B,B,B, B,B,B];

  const cell = s / 3;
  const gap = 3;

  const renderStickers = (colors) =>
    colors.map((color, i) => {
      const row = Math.floor(i / 3);
      const col = i % 3;
      return (
        <rect
          key={i}
          x={col * cell + gap}
          y={row * cell + gap}
          width={cell - gap * 2}
          height={cell - gap * 2}
          fill={color}
          rx="3"
          style={{ filter: `drop-shadow(0 0 4px ${color}80)` }}
        />
      );
    });

  // Isometric cube geometry using SVG transforms
  // Standard isometric: 
  //   top face:   skewX(-30deg) + scaleY(0.5) shifted right
  //   left face:  skewY(30deg) + scaleX(0.5)
  //   right face: skewY(-30deg) + scaleX(0.5) shifted right
  const isoW = s;
  const isoH = s;
  const totalW = isoW * 2;
  const totalH = isoH * 1.75;

  return (
    <div className="animate-float" style={{ width: totalW, height: totalH }}>
      <svg
        width={totalW}
        height={totalH}
        viewBox={`0 0 ${totalW} ${totalH}`}
        style={{ filter: 'drop-shadow(0 8px 40px rgba(0,229,255,0.25)) drop-shadow(0 0 20px rgba(0,229,255,0.1))' }}
        overflow="visible"
      >
        {/* === TOP FACE (Yellow) === */}
        {/* Transform: skewX(-30) scaleY(0.5), then translate into position */}
        <g transform={`translate(${isoW * 0.5}, ${isoH * 0.25}) skewX(-30) scale(1, 0.5773)`}>
          {/* Face background */}
          <rect x={0} y={0} width={isoW} height={isoH} fill="#1a1500" stroke="#2a2000" strokeWidth="1" />
          {/* Grid lines */}
          <line x1={cell} y1={0} x2={cell} y2={isoH} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={cell*2} y1={0} x2={cell*2} y2={isoH} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={0} y1={cell} x2={isoW} y2={cell} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={0} y1={cell*2} x2={isoW} y2={cell*2} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          {renderStickers(topColors)}
        </g>

        {/* === LEFT FACE (Blue) === */}
        <g transform={`translate(0, ${isoH * 0.25}) skewY(30) scale(0.5773, 1)`}>
          <rect x={0} y={0} width={isoW} height={isoH} fill="#050a14" stroke="#0a1a2e" strokeWidth="1" />
          <line x1={cell} y1={0} x2={cell} y2={isoH} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={cell*2} y1={0} x2={cell*2} y2={isoH} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={0} y1={cell} x2={isoW} y2={cell} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={0} y1={cell*2} x2={isoW} y2={cell*2} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          {renderStickers(sideColors)}
        </g>

        {/* === RIGHT FACE (Red) === */}
        <g transform={`translate(${isoW}, ${isoH * 0.25}) skewY(-30) scale(0.5773, 1)`}>
          <rect x={0} y={0} width={isoW} height={isoH} fill="#140000" stroke="#2e0000" strokeWidth="1" />
          <line x1={cell} y1={0} x2={cell} y2={isoH} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={cell*2} y1={0} x2={cell*2} y2={isoH} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={0} y1={cell} x2={isoW} y2={cell} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          <line x1={0} y1={cell*2} x2={isoW} y2={cell*2} stroke="#000" strokeWidth="1.5" opacity="0.6" />
          {renderStickers(frontColors)}
        </g>

        {/* === EDGE OUTLINES (neon) === */}
        {/* Top outline */}
        <polyline
          points={`${isoW*0.5},${isoH*0.25} ${isoW},0 ${isoW*1.5},${isoH*0.25}`}
          fill="none" stroke="rgba(0,229,255,0.7)" strokeWidth="1.5"
        />
        {/* Left edge */}
        <line x1={isoW*0.5} y1={isoH*0.25} x2={0} y2={isoH*0.75} stroke="rgba(0,229,255,0.5)" strokeWidth="1.5" />
        {/* Right edge */}
        <line x1={isoW*1.5} y1={isoH*0.25} x2={isoW*2} y2={isoH*0.75} stroke="rgba(0,229,255,0.5)" strokeWidth="1.5" />
        {/* Center vertical */}
        <line x1={isoW} y1={isoH*0.25} x2={isoW} y2={isoH*1.25} stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" />
        {/* Bottom edges */}
        <line x1={0} y1={isoH*0.75} x2={isoW} y2={isoH*1.25} stroke="rgba(0,229,255,0.5)" strokeWidth="1.5" />
        <line x1={isoW*2} y1={isoH*0.75} x2={isoW} y2={isoH*1.25} stroke="rgba(0,229,255,0.5)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}