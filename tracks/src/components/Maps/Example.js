/* GAMEPLAN
- state: declare where the pieces are (and *what* each piece is - relevant info for an unstructured db! - capabilities)

- return: the corresponding view of the actual track pieces themselves.
THEN, in "App", you can load a map.
and then, when you add or remove tracks, youre *really* making changes to the map is what youre doing.

eventually, this is to be a db. - firebase?
*/

import React, { Component } from 'react';

class Example extends Component {

  addTrackToMap()
  addCarToMap()
  activateTrack()

  render() {
    const map = {
      tracks: {
        piece1: {
          type: 'CurvePiece',
          origin: {x: 260, y: 244},
          height: 60, //this._radius = height+5
          length: 60,
          rotation: 270
        },
        piece2: {
          type: 'StraightPiece',
          origin: {x: 160, y: 144},
          length: 80,
          rotation: 0
        }
      },
      trains: {
        train1: {
          type: 'SubwayCar',
          car1: {
            frontWheels: {
              x1: ,//xStart
              y1: ,//yStart-2(?)
              x2: ,//xStart+8.60 //SubwayCar-specific width
              y2: //yStart-2(?)
            },
            backWheels: {
              x1: ,//xStart
              y1: ,//yStart-height+2
              x2: ,//xStart+8.60
              y2: //yStart-height+2
            }
          }
        }
      }
    }
    return (
      <Svg height="750" width="450">
      for (let id in tracks) { }
      <map.tracks.piece1
      <CurvePiece origin={{x: 260, y: 244}} height={this._radius-5} length={this._radius-5} rotation={270} />
      <StraightPiece origin={{x: 160, y: 144}} length={80} rotation={0} />
      </Svg>
    );
  }
}

export default Example;
