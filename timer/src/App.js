//--starting simple: just a stopwatch--//
// next step will be to create a more complex
//frame such that multiple 'mini-apps' can be
//added into the overall App.
//// STOPWATCH ////
'use strict';

import React, { Component } from 'react';
import { Platform,
         ListView,
         StyleSheet,
         StatusBar,
         Text,
         TouchableHighlight,
         View } from 'react-native';
import Util from './utils';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './reducers';

//************ watch face **************//
class WatchFace extends Component {
  static propTypes = {
    sectionTime: React.PropTypes.string.isRequired,
    totalTime: React.PropTypes.string.isRequired
  };
  render () {
    return (
      <View style={styles.watchFaceContainer}>
        {// <Text style={styles.sectionTimeText}>TIME       |       LAST CHECKPOINT   </Text>
        // You have
        // X Y Z
        // seconds left.
        // Its been X Y Z since your last checkpoint.
        }
        <Text style={styles.sectionTime}>10.0000: The Game</Text>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    );
  }
}

//************ watch control **************//
class WatchControl extends Component {
  // (A) propTypes
  static propTypes = {
    startWatch: React.PropTypes.func.isRequired,
    stopWatch: React.PropTypes.func.isRequired,
    addRecord: React.PropTypes.func.isRequired,
    clearRecord: React.PropTypes.func.isRequired
  };
  // (B) constructor method
  constructor(props) {
    super(props);
    this.state = {
      //rightBtnText
      startBtnText: "Start",
      //rightBtnColor
      startBtnColor: "#60b644", //green
      //leftBtnText
      stopBtnText: "Time", //record yr time
      //stopBtnColor: "#fff",
      underlayColor: "#fff", //white
      watchOn: false
    };
  }
  // (C) helper methods
  //// [1] declare start-and-stop functionality
  _startWatch() {
    if (!this.state.watchOn) {
      this.props.startWatch()
      this.setState({
        startBtnText: "Stop",
        startBtnColor: "#ff0044", //red
        stopBtnText: "Time",
        //stopBtnColor:
        underlayColor: "#eee", //grey
        watchOn: true
      })
    } else {
      this.props.stopWatch()
      this.setState({
        startBtnText: "Resume",
        startBtnColor: "#60b644", //green
        stopBtnText: "Reset",
        //stopBtnColor:
        underlayColor: "#eee", //white
        watchOn: false
      })
    }
  }
  //// [2] declare record-setting functionality
  _addRecord() {
    if (this.state.watchOn) {
      this.props.addRecord()
    } else {
      this.props.clearRecord()
      this.setState({
        startBtnText: "Start",
        stopBtnText: "Time"
      })
    }
  }
  // (D) render method
  render() {
    return (
      <View style={styles.watchControlContainer}>

        <View style={{
          flex: 1,
          alignItems: "flex-start"
        }}>
          <TouchableHighlight
            style={styles.btnStop}
            underlayColor={this.state.underlayColor}
            onPress={() => this._addRecord()}
          >
            <Text style={styles.btnStopText}>
              {this.state.stopBtnText}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={{
          flex: 1,
          alignItems: "flex-end"
        }}>
        <TouchableHighlight
          style={styles.btnStart}
          underlayColor="#eee"
          onPress={() => this._startWatch()}
        >
            <Text style={[
              styles.btnStartText,
              {color:this.state.startBtnColor}
            ]}>
              {this.state.startBtnText}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

//************ watch record **************//
class WatchRecord extends Component {

  render() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    theDataSource = ds.cloneWithRows(this.props.record);
    return (
      <ListView
        style={styles.recordList}
        dataSource={theDataSource}
        renderRow={(rowData) =>
          <View style={styles.recordItem}>
            <Text style={styles.recordItemTitle}>
              {rowData.title}
            </Text>
            <View style={{alignItems: "center"}}>
              <Text style={styles.recordItemTime}>
                {rowData.time}
              </Text>
            </View>
          </View>
        }
      />
    );
  }
}

//************ baseline exports (setup, cleanup, functionality) ***********//
export default class extends Component {
  // setup/initialization
  constructor() {
    super();
    this.state = {
      stopWatch: false,
      resetWatch: true,
      initialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: "00:00:00",
      sectionTime: "00:00:00",
      recordCounter: 0,
      record: [
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""}
      ],
    };
  }
  // setup/initialization
  componentDidMount() {
    if (Platform.OS === "ios") {
      StatusBar.setBarStyle(0);
    }
  }
  // cleanup
  componentWillUnmount() {
    this._stopWatch();
    this._clearRecord();
  }
  // helper methods --- vaguely like CRUD METHODS
  //////////////
  //**"START"***//
  _startWatch() {
    // set state
    if (this.state.resetWatch) {
      this.setState({
        stopWatch: false,
        resetWatch: false,
        timeAccumulation: 0,
        initialTime: (new Date()).getTime()
      })
    } else {
      this.setState({
        stopWatch: false,
        initialTime: (new Date()).getTime()
      })
    }
    // configure the timer itself
    let
      milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
    let interval = setInterval(
      () => {
        this.setState({
          currentTime: (new Date()).getTime()
        })
        countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
        minute = Math.floor(countingTime/(60*1000));
          second = Math.floor((countingTime-6000*minute)/1000);
          milSecond = Math.floor((countingTime%1000)/10);
          seccountingTime = countingTime - this.state.recordTime;
          secminute = Math.floor(seccountingTime/(60*1000));
          secsecond = Math.floor((seccountingTime-6000*secminute)/1000);
          secmilSecond = Math.floor((seccountingTime%1000)/10);
          this.setState({
            totalTime:
              (minute<10? "0"+minute:minute) +
              ":" +
              (second<10? "0"+second:second) +
              ":" +
              (milSecond<10? "0"+milSecond:milSecond),
            sectionTime:
              (secminute<10? "0"+secminute:secminute) +
              ":" +
              (secsecond<10? "0"+secsecond:secsecond) +
              ":" +
              (secmilSecond<10? "0"+secmilSecond:secmilSecond),
          })
          // in a different mode, might be semantically different, e.g.:
          // this.setState({
          //   totalTime:
          //     (minute<10? "0"+minute:minute) +
          //     "min & " +
          //     (second<10? "0"+second:second) +
          //     "sec & " +
          //     (milSecond<10? "0"+milSecond:milSecond),
          //   sectionTime:
          //     (secminute<10? "0"+secminute:secminute) +
          //     ":" +
          //     (secsecond<10? "0"+secsecond:secsecond) +
          //     "." +
          //     (secmilSecond<10? "0"+secmilSecond:secmilSecond),
          // })
          if (this.state.stopWatch) {
            this.setState({
              timeAccumulation: countingTime
            })
            clearInterval(interval)
          };
      },
    10);
  }
  //STOP***//
  _stopWatch() {
    this.setState({
      stopWatch: true
    });
  }
  //** record-setting **//
  _addRecord() {
    let { recordCounter, record } = this.state;
    recordCounter++;

    if (recordCounter < 8) {
      record.pop();
    }
    record.unshift({
      title: "Checkpoint " + recordCounter,
      time: this.state.sectionTime
    });
    this.setState({
      recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
      recordCounter: recordCounter,
      record: record
    })
    // use refs to call functions within other sub components
// this.refs.record._updateData(); to force updates
  }
  //** record-removal **//
  // reset to constructor state
  _clearRecord() {
    this.setState({
      stopWatch: false,
      resetWatch: true,
      initialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: "00:00:00",
      sectionTime: "00:00:00",
      recordCounter: 0,
      record: [
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""},
        {title: "", time: ""}
      ],
    });
  }
  // render method
  render() {
    return (
      <View style={styles.watchContainer}>
        <WatchFace
          totalTime={this.state.totalTime}
          sectionTime={this.state.sectionTime}
        ></WatchFace>
        <WatchControl
          addRecord={() => this._addRecord()}
          clearRecord={() => this._clearRecord()}
          startWatch={() => this._startWatch()}
          stopWatch={() => this._stopWatch()}
        ></WatchControl>
        <WatchRecord
          record={this.state.record}
        ></WatchRecord>
      </View>
    );
  }
}

//************ stylesheet **************//
const styles = StyleSheet.create({
  watchContainer:{
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    marginTop: 60,
  },
  watchFaceContainer:{
    width: Util.size.width,
    paddingTop: 50, paddingLeft: 30, paddingRight:30, paddingBottom:40,
    backgroundColor: "#fff",
    borderBottomWidth: 1, borderBottomColor:"#ddd",
    height: 170,
  },
  // sectionTimeText:{
  //   fontSize: 10,
  //   fontWeight:"100",
  //   paddingRight: 30,
  //   color: "#555",
  //   position:"absolute",
  //   left:Util.size.width-319,
  //   top:39
  // },
  sectionTime:{
    fontSize: 20,
    fontWeight:"100",
    paddingRight: 30,
    color: "#555",
    position:"absolute",
    left:Util.size.width-140,
    top:30
  },
  totalTime:{
    fontSize: Util.size.width === 375? 70:60,
    fontWeight: "100",
    color: "#222",
    paddingLeft:20
  },
  watchControlContainer:{
    width: Util.size.width,
    height: 100,
    flexDirection:"row",
    backgroundColor: '#f3f3f3',
    paddingTop: 30, paddingLeft: 60, paddingRight:60, paddingBottom:0,
  },
  btnStart:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnStop:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnStartText:{
    fontSize:14,
    backgroundColor:"transparent"
  },
  btnStopText:{
    fontSize:14,
    backgroundColor:"transparent",
    color:"#555"
  },
  recordList:{
    width: Util.size.width,
    height: Util.size.height - 300,
    paddingLeft: 15,
  },
  recordItem:{
    height: 40,
    borderBottomWidth:Util.pixel,
    borderBottomColor:"#bbb",
    paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
    flexDirection:"row",
    alignItems:"center"
  },
  recordItemTitle:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"left",
    paddingLeft:20,
    color:"#777"
  },
  recordItemTime:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"right",
    paddingRight:20,
    paddingTop:6,
    color:"#222"
  },
  // watchContainer: {
  //
  // },
  // watchFaceContainer: {
  //
  // },
  // sectionTime: {
  //
  // },
  // totalTime: {
  //
  // },
  // watchControlContainer: {
  //
  // },
  // btnStart: {
  //
  // },
  // btnStop: {
  //
  // },
  // btnStartText: {
  //
  // },
  // btnStopText: {
  //
  // },
  // recordList: {
  //
  // },
  // recordItem: {
  //
  // },
  // recordItemTitle: {
  //
  // },
  // recordItemTime: {
  //
  // },
});

//Initial Test:
// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
//
// class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Yo</Text>
//       </View>
//     );
//   }
// }
//
// export default App;
