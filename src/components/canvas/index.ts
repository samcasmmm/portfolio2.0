'use client';

import dynamic from 'next/dynamic';

export const CanvasLoader = dynamic(() => import('./canvas-loader'), {
  ssr: false,
});

export const ComputersCanvas = dynamic(() => import('./computers-canvas'), {
  ssr: false,
});

export const EarthCanvas = dynamic(() => import('./earth-canvas'), {
  ssr: false,
});

export const BallCanvas = dynamic(() => import('./ball-canvas'), {
  ssr: false,
});

export const StarsCanvas = dynamic(() => import('./stars-canvas'), {
  ssr: false,
});

export { default as DirectCanvasLoader } from './canvas-loader';
export { default as DirectComputersCanvas } from './computers-canvas';
export { default as DirectEarthCanvas } from './earth-canvas';
export { default as DirectBallCanvas } from './ball-canvas';
export { default as DirectStarsCanvas } from './stars-canvas';
