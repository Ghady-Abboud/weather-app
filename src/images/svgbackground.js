import * as React from "react"

export const ClearDay = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
        <feOffset dy={4} result="offsetblur" />
        <feComponentTransfer>
          <feFuncA slope={0.05} type="linear" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <style>
        {
          "@keyframes am-weather-cloud-1{0%,to{-webkit-transform:translate(-5px,0);-moz-transform:translate(-5px,0);-ms-transform:translate(-5px,0);transform:translate(-5px,0)}50%{-webkit-transform:translate(10px,0);-moz-transform:translate(10px,0);-ms-transform:translate(10px,0);transform:translate(10px,0)}}@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-sun{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes am-weather-sun-shiny{0%,to{stroke-dasharray:3px 10px;stroke-dashoffset:0}50%{stroke-dasharray:.1px 10px;stroke-dashoffset:-1px}}@keyframes am-weather-moon{0%,to{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(15deg);-moz-transform:rotate(15deg);-ms-transform:rotate(15deg);transform:rotate(15deg)}}@keyframes am-weather-moon-star-1{0%{opacity:0}to{opacity:1}}@keyframes am-weather-moon-star-2{0%{opacity:0}to{opacity:1}}@keyframes am-weather-rain{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}@keyframes am-weather-snow{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(-1.2px) translateY(2px);-moz-transform:translateX(-1.2px) translateY(2px);-ms-transform:translateX(-1.2px) translateY(2px);transform:translateX(-1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(1.4px) translateY(4px);-moz-transform:translateX(1.4px) translateY(4px);-ms-transform:translateX(1.4px) translateY(4px);transform:translateX(1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(-1.6px) translateY(6px);-moz-transform:translateX(-1.6px) translateY(6px);-ms-transform:translateX(-1.6px) translateY(6px);transform:translateX(-1.6px) translateY(6px);opacity:0}}@keyframes am-weather-snow-reverse{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(1.2px) translateY(2px);-moz-transform:translateX(1.2px) translateY(2px);-ms-transform:translateX(1.2px) translateY(2px);transform:translateX(1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(-1.4px) translateY(4px);-moz-transform:translateX(-1.4px) translateY(4px);-ms-transform:translateX(-1.4px) translateY(4px);transform:translateX(-1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(1.6px) translateY(6px);-moz-transform:translateX(1.6px) translateY(6px);-ms-transform:translateX(1.6px) translateY(6px);transform:translateX(1.6px) translateY(6px);opacity:0}}.am-weather-sun-shiny line{-webkit-animation-name:am-weather-sun-shiny;-moz-animation-name:am-weather-sun-shiny;-ms-animation-name:am-weather-sun-shiny;animation-name:am-weather-sun-shiny;-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-iteration-count:infinite}"
        }
      </style>
    </defs>
    <g id="day" filter="url(#blur)">
      <g transform="translate(32 32)">
        <g
          className="am-weather-sun-shiny"
          style={{
            WebkitAnimationTimingFunction: "ease-in-out",
            MozAnimationTimingFunction: "ease-in-out",
            msAnimationTimingFunction: "ease-in-out",
            animationTimingFunction: "ease-in-out",
            WebkitAnimationName: "am-weather-sun",
            MozAnimationName: "am-weather-sun",
            msAnimationName: "am-weather-sun",
            animationName: "am-weather-sun",
            WebkitAnimationDuration: "9s",
            MozAnimationDuration: "9s",
            msAnimationDuration: "9s",
            animationDuration: "9s",
            WebkitAnimationIterationCount: "infinite",
            MozAnimationIterationCount: "infinite",
            msAnimationIterationCount: "infinite",
            animationIterationCount: "infinite",
          }}
        >
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
          />
        </g>
        <circle r={5} fill="orange" stroke="orange" strokeWidth={2} />
      </g>
    </g>
  </svg>
);


export const Thunder = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
        <feOffset dy={4} result="offsetblur" />
        <feComponentTransfer>
          <feFuncA slope={0.05} type="linear" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <style>
        {
          "@keyframes am-weather-cloud-1{0%,to{-webkit-transform:translate(-5px,0);-moz-transform:translate(-5px,0);-ms-transform:translate(-5px,0);transform:translate(-5px,0)}50%{-webkit-transform:translate(10px,0);-moz-transform:translate(10px,0);-ms-transform:translate(10px,0);transform:translate(10px,0)}}@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-stroke{0%,12%,16%,20%,24%,28%,4%,8%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}10%,14%,18%,2%{-webkit-transform:translate(.3px,0);-moz-transform:translate(.3px,0);-ms-transform:translate(.3px,0);transform:translate(.3px,0)}6%{-webkit-transform:translate(.5px,.4px);-moz-transform:translate(.5px,.4px);-ms-transform:translate(.5px,.4px);transform:translate(.5px,.4px)}22%{-webkit-transform:translate(1px,0);-moz-transform:translate(1px,0);-ms-transform:translate(1px,0);transform:translate(1px,0)}26%{-webkit-transform:translate(-1px,0);-moz-transform:translate(-1px,0);-ms-transform:translate(-1px,0);transform:translate(-1px,0)}40%{fill:orange;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}65%{fill:#fff;-webkit-transform:translate(-1px,5px);-moz-transform:translate(-1px,5px);-ms-transform:translate(-1px,5px);transform:translate(-1px,5px)}61%{fill:orange}}.am-weather-cloud-2{-webkit-animation-name:am-weather-cloud-2;-moz-animation-name:am-weather-cloud-2;animation-name:am-weather-cloud-2;-webkit-animation-duration:3s;-moz-animation-duration:3s;animation-duration:3s;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite}"
        }
      </style>
    </defs>
    <g id="thunder" filter="url(#blur)">
      <path
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        style={{
          WebkitAnimationName: "am-weather-cloud-1",
          MozAnimationName: "am-weather-cloud-1",
          animationName: "am-weather-cloud-1",
          WebkitAnimationDuration: "7s",
          MozAnimationDuration: "7s",
          animationDuration: "7s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
        transform="matrix(.6 0 0 .6 10 4)"
      />
      <path
        fill="#57A0EE"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      />
      <path
        fill="orange"
        stroke="#fff"
        d="M14.3-2.9h6.2l-4.1 7.2h3.9l-8.8 10.3 3.4-7.7h-3.8z"
        style={{
          WebkitAnimationName: "am-weather-stroke",
          MozAnimationName: "am-weather-stroke",
          animationName: "am-weather-stroke",
          WebkitAnimationDuration: "1.11s",
          MozAnimationDuration: "1.11s",
          animationDuration: "1.11s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
        transform="matrix(1.2 0 0 1.2 11 38)"
      />
    </g>
  </svg>
);


export const CloudyDay = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
        <feOffset dy={4} result="offsetblur" />
        <feComponentTransfer>
          <feFuncA slope={0.05} type="linear" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <style>
        {
          "@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-sun{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes am-weather-sun-shiny{0%,to{stroke-dasharray:3px 10px;stroke-dashoffset:0}50%{stroke-dasharray:.1px 10px;stroke-dashoffset:-1px}}.am-weather-sun-shiny line{-webkit-animation-name:am-weather-sun-shiny;-moz-animation-name:am-weather-sun-shiny;-ms-animation-name:am-weather-sun-shiny;animation-name:am-weather-sun-shiny;-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-iteration-count:infinite}"
        }
      </style>
    </defs>
    <g id="cloudy-day-3" filter="url(#blur)">
      <g transform="translate(20 26)">
        <g
          style={{
            WebkitAnimationName: "am-weather-sun",
            MozAnimationName: "am-weather-sun",
            msAnimationName: "am-weather-sun",
            animationName: "am-weather-sun",
            WebkitAnimationDuration: "9s",
            MozAnimationDuration: "9s",
            msAnimationDuration: "9s",
            animationDuration: "9s",
            WebkitAnimationTimingFunction: "linear",
            MozAnimationTimingFunction: "linear",
            msAnimationTimingFunction: "linear",
            animationTimingFunction: "linear",
            WebkitAnimationIterationCount: "infinite",
            MozAnimationIterationCount: "infinite",
            msAnimationIterationCount: "infinite",
            animationIterationCount: "infinite",
          }}
        >
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
          />
        </g>
        <circle r={5} fill="orange" stroke="orange" strokeWidth={2} />
      </g>
      <path
        fill="#57A0EE"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        style={{
          WebkitAnimationName: "am-weather-cloud-2",
          MozAnimationName: "am-weather-cloud-2",
          animationName: "am-weather-cloud-2",
          WebkitAnimationDuration: "3s",
          MozAnimationDuration: "3s",
          animationDuration: "3s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
        transform="translate(0 -1)"
      />
    </g>
  </svg>
);

export const RainyDay = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
        <feOffset dy={4} result="offsetblur" />
        <feComponentTransfer>
          <feFuncA slope={0.05} type="linear" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <style>
        {
          "@keyframes am-weather-rain{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}.am-weather-rain-1{-webkit-animation-name:am-weather-rain;-moz-animation-name:am-weather-rain;-ms-animation-name:am-weather-rain;animation-name:am-weather-rain;-webkit-animation-duration:8s;-moz-animation-duration:8s;-ms-animation-duration:8s;animation-duration:8s;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-iteration-count:infinite}"
        }
      </style>
    </defs>
    <g id="rainy-7" filter="url(#blur)">
      <path
        fill="#57A0EE"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      />
      <path
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="0.1,7"
        strokeLinecap="round"
        strokeWidth={3}
        d="m25.902 46.117-1.389 7.878"
        className="am-weather-rain-1"
      />
      <path
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="0.1,7"
        strokeLinecap="round"
        strokeWidth={3}
        d="M0 0v8"
        style={{
          WebkitAnimationName: "am-weather-rain",
          MozAnimationName: "am-weather-rain",
          msAnimationName: "am-weather-rain",
          animationName: "am-weather-rain",
          WebkitAnimationDelay: ".25s",
          MozAnimationDelay: ".25s",
          msAnimationDelay: ".25s",
          animationDelay: ".25s",
          WebkitAnimationDuration: "8s",
          MozAnimationDuration: "8s",
          msAnimationDuration: "8s",
          animationDuration: "8s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          msAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          msAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
        transform="rotate(10 -241.676 200.666)"
      />
      <path
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="0.1,7"
        strokeLinecap="round"
        strokeWidth={3}
        d="m35.924 46.868-1.39 7.879"
        className="am-weather-rain-1"
      />
    </g>
  </svg>
);

export const SnowyDay = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
        <feOffset dy={4} result="offsetblur" />
        <feComponentTransfer>
          <feFuncA slope={0.05} type="linear" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <style>
        {
          "@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-snow{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(-1.2px) translateY(2px);-moz-transform:translateX(-1.2px) translateY(2px);-ms-transform:translateX(-1.2px) translateY(2px);transform:translateX(-1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(1.4px) translateY(4px);-moz-transform:translateX(1.4px) translateY(4px);-ms-transform:translateX(1.4px) translateY(4px);transform:translateX(1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(-1.6px) translateY(6px);-moz-transform:translateX(-1.6px) translateY(6px);-ms-transform:translateX(-1.6px) translateY(6px);transform:translateX(-1.6px) translateY(6px);opacity:0}}@keyframes am-weather-snow-reverse{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(1.2px) translateY(2px);-moz-transform:translateX(1.2px) translateY(2px);-ms-transform:translateX(1.2px) translateY(2px);transform:translateX(1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(-1.4px) translateY(4px);-moz-transform:translateX(-1.4px) translateY(4px);-ms-transform:translateX(-1.4px) translateY(4px);transform:translateX(-1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(1.6px) translateY(6px);-moz-transform:translateX(1.6px) translateY(6px);-ms-transform:translateX(1.6px) translateY(6px);transform:translateX(1.6px) translateY(6px);opacity:0}}"
        }
      </style>
    </defs>
    <g id="snowy-6" filter="url(#blur)">
      <path
        fill="#57A0EE"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        style={{
          WebkitAnimationName: "am-weather-cloud-2",
          MozAnimationName: "am-weather-cloud-2",
          animationName: "am-weather-cloud-2",
          WebkitAnimationDuration: "3s",
          MozAnimationDuration: "3s",
          animationDuration: "3s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
        transform="translate(0 -1)"
      />
      <g
        style={{
          WebkitAnimationName: "am-weather-snow",
          MozAnimationName: "am-weather-snow",
          msAnimationName: "am-weather-snow",
          animationName: "am-weather-snow",
          WebkitAnimationDuration: "2s",
          MozAnimationDuration: "2s",
          msAnimationDuration: "2s",
          animationDuration: "2s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          msAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          msAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
      >
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M23 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          d="m24.768 45.232-3.536 3.536M25.5 47h-5M24.768 48.768l-3.536-3.536"
        />
      </g>
      <g
        style={{
          WebkitAnimationName: "am-weather-snow",
          MozAnimationName: "am-weather-snow",
          msAnimationName: "am-weather-snow",
          animationName: "am-weather-snow",
          WebkitAnimationDelay: "1.2s",
          MozAnimationDelay: "1.2s",
          msAnimationDelay: "1.2s",
          animationDelay: "1.2s",
          WebkitAnimationDuration: "2s",
          MozAnimationDuration: "2s",
          msAnimationDuration: "2s",
          animationDuration: "2s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          msAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          msAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
      >
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M31 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          d="m32.768 45.232-3.536 3.536M33.5 47h-5M32.768 48.768l-3.536-3.536"
        />
      </g>
      <g
        style={{
          WebkitAnimationName: "am-weather-snow-reverse",
          MozAnimationName: "am-weather-snow-reverse",
          msAnimationName: "am-weather-snow-reverse",
          animationName: "am-weather-snow-reverse",
          WebkitAnimationDuration: "2s",
          MozAnimationDuration: "2s",
          msAnimationDuration: "2s",
          animationDuration: "2s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          msAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          msAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
      >
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M40 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          d="m41.768 45.232-3.536 3.536M42.5 47h-5M41.768 48.768l-3.536-3.536"
        />
      </g>
    </g>
  </svg>
)