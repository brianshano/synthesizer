import React from 'react';
require('./Knob.scss');
const Knob = (props) => {
  const percent = 43;
  const styles = {
    poti: {
      position: 'relative',
      height: (parseInt(100, 10) + 10 * 2),
      width: (parseInt(100, 10) + 10 * 2),
      cursor: 'crosshair'
    },
    knob: {
      userSelect: 'none',
      position: 'relative',
      border: 'none',
      borderRadius: '100%',
      // background: 'linear-gradient( 0deg, #777, #999 40%, #eee )',
      background: 'linear-gradient( 0deg, #555, #777 40%, #999 )',
      // boxShadow: '2px 2px 5px 1px #777',
      boxShadow: '2px 2px 5px 1px #000',
      // boxShadow: 'rgb(119, 119, 250) 2px 1px 2px 2px',
      height: 100 / 2,
      width: 100 / 2,
      float:'left',
      transform: 'translate(-50%,-50%)',
      position: 'absolute',
      top: '50%',
      left: '50%',
      pointerEvents: 'none'
    },
    marker: {
      height: 20,
      width: 2,
      position: 'absolute',
      top: '50%',
      left: '50%',
      boxShadow: '0 2px 3px 0px',
      backgroundColor: '#fff',
      pointerEvents: 'none',

    },
    label: {
      fontFamily: 'sans-serif',
      fontSize: '0.5em',
      display: 'flex',
      marginBottom: '1em',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      textTransform: 'uppercase'
    },
    value: {
      position: 'absolute',
      top: '100%',
      top: '-35px',
      left: '50%',
      width: '100%',
      borderRadius: '20%',
      boxShadow: '0 0 4px -2px inset',
      textAlign: 'center',
      transform: 'translateX(-50%)',
      background: '#eee',
      // color: 'white',
      borderRadius: 2,
      padding: 5,
      fontFamily: 'sans-serif',
      fontSize: '0.8rem',
      zIndex: 10,
      pointerEvents: 'none',
      display: 'none'
    }
  };
  // <input style={style} type="range" orient='circular' min="0" value={percent} max="100" step="1" />
  return (
    <div className="knob-container">
      <div className={`knob ${props.type}-knob`} style={ styles.knob }>
        <div className='marker' style={ styles.marker }></div>
        <div className='value' style={ styles.value }>2</div>
      </div>
    </div>
  );
};

// class Knob extends React.Component {
//   // const percent = 43;
//   // const style = {
//   //   backgroundColor: 'lightblue',
//   //   color: 'blue',
//   //   appearance: 'none',
//   //   transform: 'translate3d(20px, 40px, 50px)'
//   // }
//   // <input style={style} type="range" orient='circular' min="0" value={percent} max="100" step="1" />
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     let canvas = document.getElementById("canvas");
//     console.log(canvas);
//     let ctx = canvas.getContext("2d");
//     ctx.beginPath();
//     ctx.moveTo(50,20);
//     ctx.bezierCurveTo(10, 100, 100, 100, 10, 10);
//     ctx.stroke();
//     console.log(ctx);
//
//     ctx.strokeStyle = "green";
//     ctx.strokeRect(10, 10, 10, 10);
//   }
//   render() {
//     return (
//       <div className="knob-container">
//         <canvas id="canvas"></canvas>
//       </div>
//     );
//   }
// }

export default Knob;
