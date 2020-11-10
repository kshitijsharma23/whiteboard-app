import * as React from 'react';
import { Colors } from '../../constants/Colors';

import { Tools } from '../../models/Tools';

interface IIConProps {
    height?: number;
    width?: number;
    stroke?: string;
    className?: string;
}

export const Hand = ({ height = 44, width = 44, className = '', stroke = Colors.iconStroke }: IIConProps): JSX.Element => {
    return (
        <svg version="1.1" viewBox="0 0 44 44" height={height} width={width} className={className} xmlns="http://www.w3.org/2000/svg">
            {/* <svg version="1.1" viewBox="0 0 44 44" height="44px" width="44px" xmlns="http://www.w3.org/2000/svg"></svg> */}
            <title>hand copy</title>
            <desc>Created with Sketch.</desc>
            <defs/>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                <g id="hand-copy" stroke={stroke} strokeWidth="1.7">
                    <g id="hand" transform="translate(11.000000, 9.000000)">
                        <path d="M0,17 L0,12.25 C0,11.0073593 1.00735931,10 2.25,10 C3.49264069,10 4.5,11.0073593 4.5,12.25" id="Rectangle-7"/>
                        <path d="M13.6999969,11.5 L13.6999969,11 C13.6999969,9.8954305 14.5954274,9 15.6999969,9 L16.3000031,9 C17.4045726,9 18.3000031,9.8954305 18.3000031,11 L18.3000031,11.5" id="Rectangle-7-Copy-6"/>
                        <path d="M18.3000031,12 L18.3000031,12 C18.3000031,11.1715729 18.9715759,10.5 19.8000031,10.5 L20.6000061,10.5 C21.7045756,10.5 22.6000061,11.3954305 22.6000061,12.5 L22.5,18" id="Rectangle-7-Copy-9"/>
                        <path d="M9,12 L9,10.5 C9,9.3954305 9.8954305,8.5 11,8.5 L11.6999969,8.5 C12.8045664,8.5 13.6999969,9.3954305 13.6999969,10.5 L13.6999969,12" id="Rectangle-7-Copy-8"/>
                        <path d="M22.5,17.5 L22.5,17.5 C22.5,20.061157 21.4825843,22.5174157 19.6715729,24.3284271 L19.5,24.5" id="Rectangle-7-Copy-7"/>
                        <path d="M4.5,11.5 L4.5,2.25 C4.5,1.00735931 5.50735931,2.28269391e-16 6.75,0 L6.75,0 C7.99264069,-2.28269391e-16 9,1.00735931 9,2.25 L9,11" id="Rectangle-7-Copy"/>
                        <path d="M19.5,24.5 C18.8333333,25.5 17.5,26 15.5,26 L7.75,26 C3.46979319,26 2.300531e-15,22.5302068 1.77635684e-15,18.25 L0,17" id="Rectangle-13"/>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export const Pen = ({ height = 44, width = 44, className = '', stroke = Colors.iconStroke }: IIConProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 44 44" version="1.1">
            <title>Draw Copy</title>
            <desc>Created with Sketch.</desc>
            <defs/>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="Draw-Copy" stroke={stroke} strokeWidth="1.7">
                    <path d="M12.0197319,31.4105292 L12.7295275,27.3832002 C12.7473398,27.2821344 12.7958192,27.1889973 12.8683849,27.1164316 L27.2525835,12.732233 C28.2288942,11.7559223 29.8118066,11.7559223 30.7881174,12.732233 L32.2023309,14.1464466 C33.1786417,15.1227573 33.1786417,16.7056698 32.2023309,17.6819805 L17.8180472,32.0662642 C17.7455344,32.1387771 17.6524787,32.18724 17.5514944,32.2050836 L13.5262014,32.9163388 C12.8191836,33.0412664 12.1447585,32.569389 12.0198309,31.8623711 C11.993423,31.7129176 11.9933895,31.5599943 12.0197319,31.4105292 Z" id="icon_draw-copy"/>
                </g>
            </g>
        </svg>
    );
}

export const Highlighter = ({ height = 44, width = 44, className = '', stroke = Colors.iconStroke }: IIConProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 44 44" version="1.1">
            <title>highlighter copy</title>
            <desc>Created with Sketch.</desc>
            <defs/>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="highlighter-copy" stroke={stroke} strokeWidth="1.7">
                    <path d="M15.2902093,32.1671854 L16.3025708,31.2868708 C16.3935788,31.2077334 16.4981517,31.1457113 16.6112387,31.1038003 L20.7355442,29.5752962 C20.8030807,29.5502665 20.8644124,29.5109413 20.9153421,29.4600116 L33.1431206,17.232233 C34.1194313,16.2559223 34.1194313,14.6730099 33.1431206,13.6966991 L30.1786545,10.732233 C29.2023438,9.75592232 27.6194313,9.75592232 26.6431206,10.732233 L14.421508,22.9538457 C14.3666205,23.0087331 14.3252661,23.075646 14.3007197,23.1492852 L12.8968161,27.360996 C12.8579682,27.4775397 12.7979786,27.5859279 12.7198518,27.6807319 L9.26849351,31.8688301 C9.16312359,31.9966927 9.18135749,32.185765 9.30922007,32.2911349 C9.34941057,32.3242554 9.39753084,32.3463428 9.44884711,32.3552244 L12.6385601,32.9072863 C13.5887584,33.0717426 14.5625245,32.799955 15.2902093,32.1671854 Z M16.440209,30.7671915 L12.940209,27.2671915 M20.3813087,28.279949 L14.8813087,22.779949" id="icon_highlighter-copy"/>
                </g>
            </g>
        </svg>
    );
}

export const Eraser = ({ height = 44, width = 44, className = '', stroke = Colors.iconStroke }: IIConProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 44 44" version="1.1">
            <title>eraser copy</title>
            <desc>Created with Sketch.</desc>
            <defs/>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="eraser-copy" stroke={stroke} strokeWidth="1.7">
                    <path d="M14,30.9644661 L20.3431458,30.9644661 C20.8735787,30.9644661 21.3822866,30.7537524 21.7573593,30.3786797 L32.5502525,19.5857864 C33.3313011,18.8047379 33.3313011,17.5384079 32.5502525,16.7573593 L27.3786797,11.5857864 C26.5976311,10.8047379 25.3313011,10.8047379 24.5502525,11.5857864 L10.5857864,25.5502525 C9.80473785,26.3313011 9.80473785,27.5976311 10.5857864,28.3786797 L12.5857864,30.3786797 C12.9608592,30.7537524 13.469567,30.9644661 14,30.9644661 Z M28.4644661,23.6715729 L20.4644661,15.6715729" id="icon_eraser-copy-3"/>
                </g>
            </g>
        </svg>
    );
}

export const getIcon = (tool: Tools): ((props: IIConProps) => JSX.Element) => {
    switch (tool) {
        case Tools.HAND:
            return Hand;
        case Tools.PEN:
            return Pen;
        case Tools.HIGHLIGHTER:
            return Highlighter;
        case Tools.ERASER:
            return Eraser;
    }
}
