import * as React from 'react';

import { Thickness } from '../../models/Thickness';
import { ExtraColors, WhiteboardColors } from '../../constants/Colors';
import { hexToRgb } from '../../utils/ColorUtils';

import styles from './Whiteboard.module.css';

export interface IWhiteboardProps {
    isHighlighter: boolean;
    color?: WhiteboardColors;
    thickness?: Thickness;
}

const HIGHLIGHTER_OPACITY = 0.5;

class Whiteboard extends React.Component<IWhiteboardProps> {
    private whiteboardCanvas: HTMLCanvasElement | null = null;
    private canvasContext: CanvasRenderingContext2D | null = null;
    private canvasX: number = 0;
    private canvasY: number = 0;
    private isDown: boolean = false;

    private setWhiteBoardRef = (ref: HTMLCanvasElement): void => {
        this.whiteboardCanvas = ref;
    }

    private mouseUpHandler = (_event: MouseEvent): void => {
        if (this.canvasContext) {
            this.isDown = false;
            this.canvasContext.closePath();
        }
    }

    private mouseMoveHandler = (event: MouseEvent): void => {
        const { isHighlighter, color = ExtraColors.transparent } = this.props;
        
        if (this.canvasContext && this.whiteboardCanvas) {
            if (this.isDown !== false) {
                this.canvasX = event.pageX - this.whiteboardCanvas.offsetLeft;
                this.canvasY = event.pageY - this.whiteboardCanvas.offsetTop;
                this.canvasContext.lineTo(this.canvasX, this.canvasY);
                this.canvasContext.strokeStyle = isHighlighter ? hexToRgb(color, HIGHLIGHTER_OPACITY) : color;
                if (isHighlighter) {
                    console.log('hex: ' + color + ', rbga: ' + hexToRgb(color, HIGHLIGHTER_OPACITY));
                }
                this.canvasContext.stroke();
            }

            this.whiteboardCanvas.addEventListener('mouseup', this.mouseUpHandler);
        }
    }

    private mouseDownHandler = (event: MouseEvent): void => {
        this.isDown = true;
        if (this.canvasContext && this.whiteboardCanvas) {
            this.canvasContext.beginPath();
            this.canvasX = event.pageX - this.whiteboardCanvas.offsetLeft;
            this.canvasY = event.pageY - this.whiteboardCanvas.offsetTop;
            this.canvasContext.moveTo(this.canvasX, this.canvasY);

            this.whiteboardCanvas.addEventListener('mousemove', this.mouseMoveHandler);
        }
    }

    private setCanvas = (): void => {
        const { thickness = 0 } = this.props;
        if (this.whiteboardCanvas) {
            if (!this.canvasContext) {
                this.canvasContext = this.whiteboardCanvas.getContext('2d');
                this.whiteboardCanvas.height = window.innerHeight;
                this.whiteboardCanvas.width = window.innerWidth;
                if (this.canvasContext) {
                    this.canvasContext.fillStyle = ExtraColors.white;
                    this.canvasContext.fillRect(0, 0, this.whiteboardCanvas.height, this.whiteboardCanvas.width);
                }
            }
            if (this.canvasContext) {
                this.isDown = false;
                this.canvasContext.lineWidth = thickness;
                this.whiteboardCanvas.addEventListener('mousedown', this.mouseDownHandler);
            }
        }
    }

    public componentDidMount(): void {
        this.setCanvas();
    }

    public componentDidUpdate(): void {
        this.setCanvas();
    }

    public render(): React.ReactNode {
        return (
            <canvas ref={this.setWhiteBoardRef} className={styles['canvas']}>
                Sorry, your browser does not support HTML5 canvas.
            </canvas>
        );
    }
}

export default Whiteboard;
