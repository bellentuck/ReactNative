import React, { Component } from 'react';
import { G, Path, Line } from 'react-native-svg';

class FourCurve extends Component {
  render() {
    const { rotation, xStart, yStart } = this.props;
    const rot = rotation;
    const x = xStart; //100
    const y = yStart; //250
    const xx = (xStart-6); //94
    const yy = y; //250
    const l1x1 = xx;
    const l1y1 = (yStart+8.5).toString();
    const l1x2 = x;
    const l1y2 = (yStart+8).toString();
    const l2x1 = x;
    const l2y1 = (yStart+34.5).toString();
    const l2x2 = (xStart+6).toString();
    const l2y2 = (yStart+31.5).toString();
    const l3x1 = (xStart+20).toString();
    const l3y1 = (yStart+56).toString();
    const l3x2 = (xStart+23).toString();
    const l3y2 = (yStart+51).toString();
    const l4x1 = (xStart+50).toString();
    const l4y1 = (yStart+60).toString();
    const l4x2 = (xStart+49.5).toString();
    const l4y2 = (yStart+66).toString();
    return(
      <G rotate={rot} origin={`${x}, ${y}`}>
        <Path
            d={`M${x} ${y} q 0,60 60,60`} //length=60
            // d="M100 250 q 0,60 60,60" //length=60
            fill="none"
            stroke="red"
        />
        <Path
            d={`M${xx} ${yy} q 0,66 66,66`} //length=66? or 72?
            fill="none"
            stroke="red"
        />
        {/*}<Line // I
          x1={l1x1}
          y1={l1y1}
          x2={l1x2}
          y2={l1y2}
          stroke="red"
          strokeWidth=".3"
        />
        <Line // II
          x1={l2x1}
          y1={l2y1}
          x2={l2x2}
          y2={l2y2}
          stroke="red"
          strokeWidth=".3"
        />
        <Line // III
          x1={l3x1}
          y1={l3y1}
          x2={l3x2}
          y2={l3y2}
          stroke="red"
          strokeWidth=".3"
        />
        <Line // IV
          x1={l4x1}
          y1={l4y1}
          x2={l4x2}
          y2={l4y2}
          stroke="red"
          strokeWidth=".3"
        />*/}
      </G>
    );
  }
}

export default FourCurve;

{
  /*<Line // I
    x1="94" //xx
    y1="258.5" //y+8.5
    x2="100" //x
    y2="258" //y+8
    stroke="red"
    strokeWidth=".3"
  />
  <Line // II
    x1="100" //x                //94+6
    y1="284.5" //y+34.5      //253+33-1.5
    x2="106" //x+6            //100+6
    y2="281.5" //y+31.5        //253+30-1.5
    stroke="red"
    strokeWidth=".3"
  />
  <Line // III
    x1="120" //x+20           //94+36
    y1="307" //y+56          //253+33-1.5
    x2="123" //x+23           //100+6
    y2="301" //y+51           //253+30-1.5
    stroke="red"
    strokeWidth=".3"
  />
  <Line // IV
    x1="150" //x+50        //94+66-1
    y1="310" //y+60         //253+60-3
    x2="149.5" //x+49.5     //100+60-1
    y2="316" //y+66         //253+66-3
    stroke="red"
    strokeWidth=".3"
  />*/
}
