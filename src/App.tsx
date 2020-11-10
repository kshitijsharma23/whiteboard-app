import React from 'react';

import { Tools } from './models/Tools';
import { Thickness } from './models/Thickness';
import { ToolOptions, DrawingToolOptions } from './models/ToolOptions';
import { PaletteColors, ExtraColors, WhiteboardColors } from './constants/Colors';

import Sidebar from './components/Sidebar/Sidebar';
import Whiteboard, { IWhiteboardProps } from './components/Whiteboard/Whiteboard';
import SelectedToolOptions from './components/SelectedToolOptions/SelectedToolOptions';

import styles from './App.module.css';

interface IAppState {
    selectedTool: Tools;
    pen: DrawingToolOptions;
    highlighter: DrawingToolOptions;
    eraser: ToolOptions;
    showSelectedTool: boolean;
}

class App extends React.Component<{}, IAppState> {
    private INITIAL_DRAWING_TOOL_STATE: DrawingToolOptions = {
        thickness: Thickness.LIGHT,
        color: PaletteColors.black
    }

    private INITIAL_ERASER_STATE: ToolOptions = {
        thickness: Thickness.LIGHT
    }

    public constructor(props: any) {
        super(props);
        this.state = {
            selectedTool: Tools.HAND,
            pen: this.INITIAL_DRAWING_TOOL_STATE,
            highlighter: this.INITIAL_DRAWING_TOOL_STATE,
            eraser: this.INITIAL_ERASER_STATE,
            showSelectedTool: false
        };
    }

    private changeAndToggleTool = (tool: Tools): void => {
        this.setState((prevState) => {
            const { showSelectedTool, selectedTool } = prevState;
            const isToolChanged = tool !== selectedTool;
            return ({
                selectedTool: tool,
                showSelectedTool: isToolChanged ? true : !showSelectedTool
            });
        });
    }

    private getWhiteboardProps = (): IWhiteboardProps => {
        const { pen, highlighter, eraser, selectedTool } = this.state;
        const isHighlighter = selectedTool === Tools.HIGHLIGHTER;
        let thickness: Thickness | undefined;
        let color: WhiteboardColors | undefined;
        switch (selectedTool) {
            case Tools.PEN:
                thickness = pen.thickness;
                color = pen.color;
                break;
            case Tools.HIGHLIGHTER:
                thickness = highlighter.thickness;
                color = highlighter.color;
                break;
            case Tools.ERASER:
                thickness = eraser.thickness;
                color = ExtraColors.white;
                break;
            case Tools.HAND:
                thickness = undefined;
                color = undefined;
                break;
        }
        return { isHighlighter, thickness, color };
    }

    private changeThickness = (thickness: Thickness): void => {
        let { pen, highlighter, eraser, selectedTool } = this.state;
        switch (selectedTool) {
            case Tools.PEN:
                pen = {
                    ...pen,
                    thickness
                }
                break;
            case Tools.HIGHLIGHTER:
                highlighter = {
                    ...highlighter,
                    thickness
                }
                break;
            case Tools.ERASER:
                eraser = {
                    ...eraser,
                    thickness
                }
                break;
        }
        this.setState({
            pen,
            highlighter,
            eraser
        });
    }

    private changePaletteColor = (color: PaletteColors): void => {
        let { pen, highlighter, selectedTool } = this.state;
        switch (selectedTool) {
            case Tools.PEN:
                pen = {
                    ...pen,
                    color
                }
                break;
            case Tools.HIGHLIGHTER:
                highlighter = {
                    ...highlighter,
                    color
                }
                break;
        }
        this.setState({
            pen,
            highlighter
        });
    }

    public render (): React.ReactNode {
        const { selectedTool, showSelectedTool, pen, highlighter, eraser } = this.state;
        const isHighlighter = selectedTool === Tools.HIGHLIGHTER;
        const { thickness, color } = this.getWhiteboardProps();
        return (
            <div className={styles['App']}>
                <Sidebar selectedTool={this.state.selectedTool} changeTool={this.changeAndToggleTool} />
                {showSelectedTool ? (
                    <SelectedToolOptions
                        selectedTool={selectedTool}
                        pen={pen}
                        highlighter={highlighter}
                        eraser={eraser}
                        changeThickness={this.changeThickness}
                        changePaletteColor={this.changePaletteColor}
                    />
                ) : null}
                <Whiteboard isHighlighter={isHighlighter} color={color} thickness={thickness} />
            </div>
        );
    }
}

export default App;
