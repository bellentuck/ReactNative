import { Cabin,
         CabinWheelConnector,
         End,
         Topline,
         Wheel } from './common';


const start = (y0+1.5).toString();
const end = (y0+height-1.5).toString();


const x = x0.toString();
const y = y0.toString();
const w = width.toString();
const h = height.toString();

Topline: y0={start} y1={end} x={}
Topline: y0={start} y1={end} x={}
Cabin:  w={w} h={h} x={x} y={y}
CabinWheelConnector:  y={start} width={width}
CabinWheelConnector:  {end}
