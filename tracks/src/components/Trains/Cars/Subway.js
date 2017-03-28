import { Cabin,
         CabinWheelConnector,
         End,
         Topline,
         Wheel } from './common';

render() {
  const { x0, y0 } = this.props;
  //propType: number (float)


const start = (y0+1.5).toString();
const end = (y0+height-1.5).toString();


const x = x0.toString();
const y = y0.toString();
const w = width.toString();
const wRelative = (x0+width).toString();
const h = height.toString();
const hRelative = ()

Topline: y1={start} y2={end} x={}
Topline: y1={start} y2={end} x={}
Cabin:  w={w} h={h} x={x} y={y}
CabinWheelConnector:  y={start} x1={x} x2={wRelative}
CabinWheelConnector:  {end}
