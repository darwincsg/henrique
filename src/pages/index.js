import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [color1, setColor1] = useState("#fff")
  const [color2, setColor2] = useState("#fff")
  const [color3, setColor3] = useState("#fff")
  const [color4, setColor4] = useState("#fff")
  const [color5, setColor5] = useState("#fff")

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <g id="Layer_1">
          <title>Layer 1</title>
          <rect id="svg_1" height="398" width="568" y="112.33334" x="113" stroke="#000" fill={color1} onMouseEnter={() => setColor1("#ff0000")} onMouseLeave={() => setColor1("#fff")} onClick={() => alert("click")}/>
          <rect id="svg_7" height="221" width="183" y="112.33334" x="312" stroke="#000" fill={color2} onMouseEnter={() => setColor2("#00ff00")} onMouseLeave={() => setColor2("#fff")} onClick={() => alert("click")}/>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_8" y2="332.33334" x2="334" y1="112.33334" x1="334" stroke="#000" fill="#00f"/>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_9" y2="332.33334" x2="469" y1="112.33334" x1="469" stroke="#000" fill="#ff0"/>
          <ellipse ry="63.5" rx="65.5" id="svg_12" cy="324.83334" cx="401.5" stroke="#000" fill={color3} onMouseEnter={() => setColor3("#0000ff")} onMouseLeave={() => setColor3("#fff")} onClick={() => alert("click")}/>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_13" y2="509.33334" x2="267" y1="332.33334" x1="335" stroke="#000" fill="none"/>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_14" y2="510.33334" x2="535" y1="330.33334" x1="467" stroke="#000" fill="none"/>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_16" y2="333.33334" x2="477" y1="332.33334" x1="333" stroke="#000" fill="none"/>
          <rect id="svg_17" height="159" width="50" y="112.33334" x="113" stroke="#000" fill={color4} onMouseEnter={() => setColor4("#ffff00")} onMouseLeave={() => setColor4("#fff")} onClick={() => alert("click")}/>
          <rect id="svg_18" height="179" width="44" y="112.33334" x="637" stroke="#000" fill={color5} onMouseEnter={() => setColor5("#ff00ff")} onMouseLeave={() => setColor5("#fff")} onClick={() => alert("click")}/>
          <path d="m161,269.33334c0,-1 0.33749,0.31 2,3c1.487,2.40601 6.14774,9.94342 8,15c3.26306,8.90799 4.05132,11.15396 5,14c1.58115,4.74341 4.95517,6.54916 6,10c0.28978,0.95709 1,5 2,6c2,2 3.08052,4.48691 5,7c2.18855,2.86536 4.73116,5.28415 10,10c4.77115,4.27039 9.186,6.69254 11,8c2.29454,1.65381 5.16119,3.7464 10,7c4.14925,2.78995 8,5 10,6c2,1 6,3 8,4c2,1 6.07843,2.78986 9,4c4.13171,1.71143 6.15224,2.23462 8,3c2.61313,1.0824 5.02676,3.77023 6,4c2.17624,0.51373 5.41208,1.96854 9,4c2.4613,1.39355 2.29871,0.94855 4,2c1.9021,1.17557 1.29291,2.29291 2,3c0.70709,0.70709 1.85272,1.1731 3,2c1.814,1.30746 3.41885,1.41885 5,3c1.58115,1.58115 4,2 4,2c2,1 4.186,1.69254 6,3c1.14728,0.8269 2,3 4,3c1,0 4.69345,3.4588 6,4c1.84775,0.76538 4.31,0.33749 7,2c2.40601,1.487 4.186,2.69254 6,4c1.14728,0.8269 3.76935,2.30322 5,3c3.58792,2.03146 3.71201,1.98163 9,3c1.9639,0.3782 4.90283,1.22421 7,2c3.867,1.43048 6.0535,1.5405 8,2c2.17624,0.51373 3.82376,1.48627 6,2c2.91974,0.68927 6.08026,-0.68927 9,0c2.17624,0.51373 5.0535,0.5405 7,1c2.17624,0.51373 5,1 8,1c2,0 4,1 6,1c4,0 7.03873,-0.48056 10,0c3.12143,0.50653 5,1 6,1c3,0 10,0 14,0c1,0 2,0 5,0c1,0 3,0 7,0c4,0 6,0 10,0c0,0 5,0 8,0c1,0 4,0 6,0c4,0 8.08026,-0.31073 11,-1c2.17624,-0.51373 4.0361,-0.6218 6,-1c5.28799,-1.01837 7.133,-2.56952 11,-4c2.09717,-0.77579 4,-3 6,-4c4,-2 5.74673,-2.37134 10,-5c1.9021,-1.17557 4.3237,-2.13321 8,-4c6.96387,-3.53616 6.88153,-5.19028 10,-7c3.86798,-2.24469 6.85272,-4.1731 8,-5c1.81396,-1.30746 4.13202,-2.75531 8,-5c3.11847,-1.80972 6.22272,-2.724 10,-6c2.13672,-1.85318 5.18604,-3.69254 7,-5c3.44183,-2.48071 5.18604,-3.69254 7,-5c2.29456,-1.65381 5,-4 7,-6c2,-2 3.83771,-1.83771 7,-5c1.58112,-1.58115 2,-3 5,-6c1,-1 3.18604,-2.69254 5,-4c2.29456,-1.65381 2.18604,-2.69254 4,-4c1.14728,-0.8269 3,-3 5,-5c2,-2 2.69257,-2.186 4,-4c0.8269,-1.14728 1,-2 2,-3c1,-1 4.47424,-4.14935 5,-5c1.1756,-1.9021 4.9176,-1.38687 6,-4c0.38269,-0.92389 2.8244,-1.0979 4,-3c0.52576,-0.85065 1.41888,-2.41885 3,-4c1.58112,-1.58115 2.0979,-1.82443 4,-3c0.85065,-0.52573 0.297,-1.61383 3,-4c1.67633,-1.47983 4,-2 6,-4c1,-1 2,-2 3,-3c1,-1 1.4588,-0.69345 2,-2c0.38269,-0.92389 1.07611,-0.61731 2,-1c1.30658,-0.5412 1.4588,-1.69345 2,-3c0.38269,-0.92389 1,-1 1,-1c0,-1 0,-2 1,-2c0,0 0.29291,-0.29291 1,-1c0.70709,-0.70709 1,-1 2,-1c0,0 1.29291,0.70709 2,0c0.70709,-0.70709 0,-1 1,-1l0,-1l1,0" id="svg_19" stroke="#000" fill="none"/>
        </g>
      </svg>
    </main>
  )
}
