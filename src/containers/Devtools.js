import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';

const Devtools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
  >
    <LogMonitor />
    <SliderMonitor />
    <ChartMonitor />
  </DockMonitor>
);

export default Devtools;
