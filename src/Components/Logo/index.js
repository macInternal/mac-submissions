import React from 'react';

export default class Logo extends React.Component {
  render() {
    let width = 0, height = 0;
    if (this.props.width) {
      width = this.props.width;
      height = this.props.width * 223.541 / 207.343;
    }
    else {
      height = this.props.height || 223.541;
      width = this.props.height * 207.343 / 223.541;
    }
    return (
      <svg className={this.props.className} style={this.props.style} xmlns="http://www.w3.org/2000/svg" width={`${width}pt`} height={`${height}pt`} viewBox={`0 0 207.343 223.541`} version="1.1">
        <g id="surface1">
          <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(63.607788%,77.4114992%,90.1959228%)'}} d="M 154.105469 69.644531 L 85.09375 63.558594 L 57.683594 128.03125 L 109.757813 173.960938 L 169.347656 137.875 Z M 154.105469 69.644531 "/>
          <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(99.714966%,94.82666%,66.5856932%)', backgroundColor: 'white'}} d="M 194.011719 150.078125 L 194.011719 89.390625 L 169.347656 39.679688 L 154.105469 69.644531 L 169.347656 137.875 Z M 194.011719 150.078125"/>
          <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(63.2171632%,84.3463136%,72.9058836%)', backgroundColor: 'white'}} d="M 169.347656 39.679688 L 109.757813 15.074219 L 57.683594 29.832031 L 85.09375 63.558594 L 154.105469 69.644531 Z M 169.347656 39.679688 "/>
          <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(97.0397948%,60.5706788%,79.8394776%)', backgroundColor: 'white'}} d="M 169.347656 137.875 L 109.757813 173.960938 L 97.585938 208.464844 L 149.660156 193.707031 L 194.011719 150.078125 Z M 169.347656 137.875 "/>
          <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(87.3809816%,74.4921876%,88.357544%)', backgroundColor: 'white'}} d="M 57.683594 29.832031 L 13.332031 73.460938 L 13.332031 134.148438 L 57.683594 128.03125 L 85.09375 63.558594 Z M 57.683594 29.832031 "/>
          <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%,80%,60%)', backgroundColor: 'white'}} d="M 97.585938 208.464844 L 37.996094 183.863281 L 13.332031 134.148438 L 57.683594 128.03125 L 109.757813 173.960938 Z M 97.585938 208.464844 "/>
          <path style={{fill: 'none', strokeWidth: '0.79701', strokeLinecap: 'butt', strokeLinejoin: 'round', stroke: 'rgb(0%, 0%, 0%)', strokeOpacity: '1', strokeMiterlimit: '10'}} d="M 90.339719 -38.308125 L 90.339719 22.379375 L 65.675656 72.090312 L 50.433469 42.125469 L 65.675656 -26.105 Z M 50.433469 42.125469 L -18.57825 48.211406 L -45.988406 -16.26125 L 6.085813 -62.190938 L 65.675656 -26.105 M 65.675656 72.090312 L 6.085813 96.695781 L -45.988406 81.937969 L -18.57825 48.211406 L 50.433469 42.125469 M 65.675656 -26.105 L 6.085813 -62.190938 L -6.086062 -96.694844 L 45.988156 -81.937031 L 90.339719 -38.308125 M -45.988406 81.937969 L -90.339969 38.309062 L -90.339969 -22.378438 L -45.988406 -16.26125 L 6.085813 -62.190938 M -6.086062 -96.694844 L -65.675906 -72.093281 L -90.339969 -22.378438 " transform="matrix(1,0,0,-1,103.672,111.77)"/>
        </g>
      </svg>
    );
  }
}