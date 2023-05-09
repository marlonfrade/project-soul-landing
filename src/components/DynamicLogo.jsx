import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Logo() {
  const { theme } = useContext(ThemeContext)
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1051.000000pt"
      height="595.000000pt"
      viewBox="0 0 1051.000000 595.000000"
      preserveAspectRatio="xMidYMid meet"
      className="w-80 h-40"
    >
      <g
        transform="translate(0.000000,595.000000) scale(0.100000,-0.100000)"
        fill={theme === 'dark' ? '#8E6CD4' : '#4E1473'}
        stroke="none"
      >
        <path
          d="M6605 4371 l-280 -68 -3 -1337 -2 -1336 290 0 290 0 0 1405 c0 773
-3 1405 -7 1404 -5 -1 -134 -31 -288 -68z m62 -2537 c-3 -3 -12 -4 -19 -1 -8
3 -5 6 6 6 11 1 17 -2 13 -5z"
        />
        <path
          d="M675 3659 c-182 -24 -341 -92 -450 -191 -111 -102 -159 -203 -171
-362 -23 -289 97 -477 374 -588 76 -30 415 -120 502 -133 25 -4 77 -16 115
-27 139 -40 185 -79 185 -155 0 -57 -21 -96 -63 -116 -51 -24 -172 -40 -267
-35 -171 10 -252 75 -295 238 -8 32 -17 45 -28 44 -22 -2 -551 -116 -556 -120
-2 -2 9 -43 23 -91 89 -289 300 -458 633 -508 125 -19 396 -19 533 0 348 47
540 183 596 421 23 98 15 325 -14 406 -55 154 -182 273 -375 355 -88 37 -197
68 -413 117 -274 62 -373 116 -360 194 3 19 11 41 18 50 58 70 329 83 448 22
19 -10 47 -31 63 -47 26 -28 67 -124 67 -158 0 -8 2 -15 5 -15 18 0 561 123
567 128 10 11 -46 166 -83 228 -102 169 -257 274 -478 326 -67 15 -132 20
-296 23 -116 2 -241 0 -280 -6z"
        />
        <path
          d="M2716 3660 c-346 -54 -593 -252 -692 -555 -23 -69 -28 -102 -32 -237
l-4 -158 468 0 469 0 -115 115 -115 115 90 90 c49 49 94 90 100 90 6 0 132
-121 280 -270 l270 -270 -270 -270 c-148 -148 -274 -270 -280 -270 -6 0 -51
41 -100 90 l-90 90 115 115 115 115 -469 0 -469 0 6 -102 c7 -121 26 -197 72
-293 100 -208 287 -354 541 -422 94 -25 111 -27 334 -27 224 0 240 1 335 27
360 97 575 335 616 680 7 59 9 203 7 379 -5 326 -14 379 -83 523 -103 214
-283 354 -540 421 -89 23 -123 27 -300 30 -110 1 -227 -1 -259 -6z"
        />
        <path
          d="M4170 2933 c0 -763 4 -830 53 -965 74 -204 210 -304 467 -343 241
-37 431 -8 680 104 50 23 95 39 99 37 4 -3 20 -35 35 -71 l28 -65 239 0 239 0
0 1005 0 1005 -295 0 -295 0 -2 -727 -3 -728 -103 -52 c-119 -59 -205 -78
-324 -70 -136 9 -195 61 -217 192 -7 40 -11 299 -11 723 l0 662 -295 0 -295 0
0 -707z"
        />
        <path
          d="M7114 3332 c-29 -4 -37 -38 -18 -73 17 -34 56 -92 75 -113 8 -8 30
-34 49 -57 37 -45 52 -60 124 -127 25 -24 46 -40 46 -38 0 5 18 -8 54 -39 6
-5 28 -19 49 -29 20 -11 37 -24 37 -29 0 -6 3 -7 7 -4 9 10 34 -14 27 -25 -21
-34 -20 -300 1 -388 3 -14 8 -36 11 -50 3 -14 8 -34 11 -45 4 -11 7 -24 8 -30
3 -27 27 -94 45 -122 28 -47 51 -42 85 17 16 28 33 50 38 50 4 0 6 4 3 8 -3 5
7 21 21 38 14 16 50 67 81 114 30 47 59 87 64 88 4 2 6 8 2 13 -3 5 0 9 5 9 6
0 11 7 11 15 0 8 4 15 10 15 5 0 12 11 16 25 3 14 9 25 13 25 3 0 24 29 46 65
22 36 43 65 48 65 4 0 5 5 2 10 -3 6 -1 10 4 10 6 0 11 6 11 14 0 8 3 16 8 18
6 2 35 44 77 109 50 78 90 135 97 137 4 2 8 9 8 16 0 7 11 26 24 41 14 16 23
32 20 37 -3 4 -2 8 3 8 17 0 65 89 58 109 -7 23 -32 29 -135 36 -41 3 -109 8
-150 10 -41 3 -106 8 -145 10 -38 3 -101 7 -140 10 -95 6 -258 16 -325 20 -30
2 -55 4 -55 5 0 1 -31 3 -70 5 -38 2 -70 4 -70 5 0 1 -34 3 -75 4 -42 1 -80 4
-85 7 -6 3 -20 3 -31 1z"
          fill={theme === 'dark' ? '#8E6CD4' : '#4E1473'}
        />
        <path
          d="M2672 1115 c-21 -33 -21 -35 -3 -35 10 0 31 16 45 35 l27 35 -23 0
c-15 0 -31 -12 -46 -35z"
          fill="white"
        />
        <path
          d="M138 1123 c-16 -4 -18 -21 -18 -179 0 -167 1 -174 20 -174 19 0 20 7
20 180 0 99 -1 179 -2 179 -2 -1 -11 -3 -20 -6z"
          fill="white"
        />
        <path
          d="M5128 1123 c-25 -6 -23 -33 2 -33 13 0 20 7 20 20 0 11 -1 19 -2 19
-2 -1 -11 -3 -20 -6z"
          fill="white"
        />
        <path
          d="M4270 1065 c0 -31 -3 -35 -25 -35 -16 0 -25 -6 -25 -15 0 -9 9 -15
25 -15 25 0 25 0 25 -100 0 -95 1 -100 25 -116 18 -12 39 -15 70 -12 51 6 75
22 75 49 0 25 -21 24 -43 -2 -13 -14 -27 -19 -50 -17 l-32 3 -3 98 -3 97 56 0
c42 0 55 3 55 15 0 12 -13 15 -55 15 l-55 0 0 35 c0 28 -4 35 -20 35 -16 0
-20 -7 -20 -35z"
          fill="white"
        />
        <path
          d="M895 1017 c-17 -8 -36 -26 -43 -41 -17 -37 -15 -121 3 -156 30 -57
148 -67 192 -15 19 22 23 38 23 95 0 58 -4 73 -23 96 -28 32 -104 43 -152 21z
m115 -37 c16 -16 20 -33 20 -80 0 -72 -21 -100 -74 -100 -48 0 -76 37 -76 100
0 63 28 100 76 100 21 0 42 -8 54 -20z"
          fill="white"
        />
        <path
          d="M1775 1005 c-23 -22 -25 -32 -25 -110 0 -79 2 -88 26 -112 22 -22 31
-25 72 -20 26 3 56 9 66 13 17 7 19 4 13 -31 -3 -20 -14 -46 -23 -56 -23 -26
-78 -25 -103 2 -14 16 -24 19 -36 11 -16 -9 -16 -11 3 -30 27 -27 85 -37 132
-23 60 18 70 50 70 230 0 142 -1 151 -19 151 -11 0 -21 -5 -23 -10 -2 -7 -15
-7 -38 0 -56 16 -89 12 -115 -15z m136 -15 c16 -9 19 -22 19 -95 0 -94 -7
-105 -73 -105 -52 0 -71 27 -71 105 0 48 5 69 19 85 20 22 73 27 106 10z"
          fill="white"
        />
        <path
          d="M2640 900 c0 -123 1 -130 20 -130 19 0 20 7 20 130 0 123 -1 130 -20
130 -19 0 -20 -7 -20 -130z"
          fill="white"
        />
        <path
          d="M3402 1020 c-32 -13 -48 -54 -34 -84 8 -18 26 -28 69 -40 32 -9 65
-20 73 -25 20 -11 25 -51 8 -62 -25 -16 -81 -10 -104 12 -16 15 -27 18 -39 12
-15 -9 -14 -12 4 -34 17 -21 27 -24 89 -24 81 0 102 13 102 61 0 41 -19 60
-73 75 -65 17 -87 28 -93 44 -17 42 70 63 110 26 13 -12 28 -16 39 -12 18 7
18 8 -1 30 -15 19 -30 25 -73 27 -30 2 -64 -1 -77 -6z"
          fill="white"
        />
        <path
          d="M5110 900 c0 -123 1 -130 20 -130 19 0 20 7 20 130 0 123 -1 130 -20
130 -19 0 -20 -7 -20 -130z"
          fill="white"
        />
        <path
          d="M5885 1016 c-38 -16 -55 -53 -55 -117 0 -88 40 -129 124 -129 37 0
96 34 96 54 0 24 -24 24 -47 -1 -15 -15 -33 -23 -57 -23 -48 0 -76 37 -76 100
0 63 28 100 76 100 24 0 42 -8 58 -25 29 -31 62 -25 45 7 -22 42 -107 59 -164
34z"
          fill="white"
        />
        <path
          d="M6770 1023 c-20 -8 -50 -34 -50 -43 0 -18 32 -18 50 0 24 24 82 26
105 4 29 -29 14 -46 -57 -63 -76 -19 -108 -43 -108 -78 0 -62 55 -87 135 -61
37 12 45 13 49 1 3 -7 12 -13 21 -13 12 0 15 17 15 104 0 130 -10 148 -91 152
-30 2 -61 1 -69 -3z m111 -206 c-16 -16 -99 -21 -116 -7 -19 16 -19 54 0 70 8
7 38 17 67 24 l53 12 3 -45 c2 -24 -1 -48 -7 -54z"
          fill="white"
        />
      </g>
    </svg>
  )
}