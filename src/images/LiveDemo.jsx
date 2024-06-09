import React from 'react';

const LiveDemoSVG = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="live-demo"
  >
    <rect x="2" y="4" width="20" height="14" rx="2" ry="2" fill="#000" />
    <text x="12" y="12" textAnchor="middle" fontSize="6" fill="white">demo</text>
    <path d="M6 18H18V20H6V18Z" fill="#000" />
    <path d="M3 22H21" stroke="#000" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default LiveDemoSVG;
