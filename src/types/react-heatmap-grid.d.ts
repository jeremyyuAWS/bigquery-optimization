declare module 'react-heatmap-grid' {
  import { FC, CSSProperties } from 'react';

  interface HeatMapProps {
    xLabels: string[];
    yLabels: string[];
    data: number[][];
    cellStyle?: (background: string, value: number, min: number, max: number) => CSSProperties;
    cellRender?: (value: number) => string | null;
  }

  const HeatMap: FC<HeatMapProps>;
  export default HeatMap;
} 