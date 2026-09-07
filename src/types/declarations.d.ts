declare module 'react-vertical-timeline-component' {
  import type { ReactNode, CSSProperties } from 'react';

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '1-column-left' | '1-column-right' | '2-columns';
    lineColor?: string;
    children?: ReactNode;
  }

  export interface VerticalTimelineElementProps {
    id?: string;
    className?: string;
    date?: string;
    dateClassName?: string;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    intersectionObserverProps?: Record<string, unknown>;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: CSSProperties;
    textClassName?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    visible?: boolean;
    children?: ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}

declare module 'maath/random/dist/maath-random.esm' {
  export function inSphere(
    array: Float32Array,
    options?: { radius?: number }
  ): Float32Array;
  export function inBox(
    array: Float32Array,
    options?: { sides?: number | [number, number, number] }
  ): Float32Array;
}

declare module 'react-tilt' {
  import type { ReactNode, CSSProperties, HTMLAttributes } from 'react';

  export interface TiltOptions {
    reverse?: boolean;
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: string | null;
    reset?: boolean;
    easing?: string;
  }

  export interface TiltProps extends HTMLAttributes<HTMLDivElement> {
    options?: TiltOptions;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  }

  export const Tilt: React.FC<TiltProps>;
}
