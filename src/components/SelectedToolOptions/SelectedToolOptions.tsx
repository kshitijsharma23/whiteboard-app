import * as React from 'react';
import cx from 'classnames';

import { Tools } from '../../models/Tools';
import { ToolOptions, DrawingToolOptions } from '../../models/ToolOptions';

import ThicknessSelector from '../ThicknessSelector/ThicknessSelector';
import ColorPalette from '../ColorPalette/ColorPalette'
import ThicknessIcon from '../ThicknessIcon/ThicknessIcon';

import commonStyles from '../../CommonStyles.module.css';
import styles from './SelectedToolOptions.module.css';
import { PaletteColors } from '../../constants/Colors';
import { Thickness } from '../../models/Thickness';

interface ISelectedToolOptionsProps {
    selectedTool: Tools;
    pen: DrawingToolOptions;
    highlighter: DrawingToolOptions;
    eraser: ToolOptions;
    changeThickness: (thickness: Thickness) => void;
    changePaletteColor: (color: PaletteColors) => void;
}

interface ISelectedToolOptionsState {
    thicknessSelected: boolean;
}

class SelectedToolOptions extends React.Component<ISelectedToolOptionsProps, ISelectedToolOptionsState> {
    constructor(props: ISelectedToolOptionsProps) {
        super(props);
        this.state = {
            thicknessSelected: false
        }
    }

    private toggleThicknessSelected = (): void => {
        this.setState((prevState) => {
            const { thicknessSelected } = prevState;
            return ({
                thicknessSelected: !thicknessSelected
            });
        })
    }

    private getSelectedColor = (): PaletteColors | undefined => {
        const { selectedTool, pen, highlighter } = this.props;
        if (selectedTool === Tools.PEN) {
            return pen.color;
        } else if (selectedTool === Tools.HIGHLIGHTER) {
            return highlighter.color;
        }
        return undefined;
    }

    private getToolThickness = (): Thickness | undefined => {
        const { selectedTool, pen, highlighter, eraser } = this.props;
        switch (selectedTool) {
            case Tools.PEN:
                return pen.thickness;
            case Tools.HIGHLIGHTER:
                return highlighter.thickness;
            case Tools.ERASER:
                return eraser.thickness;
            case Tools.HAND:
                return undefined;
        }
    }

    public componentDidUpdate(prevProps: ISelectedToolOptionsProps): void {
        if (this.props.selectedTool !== prevProps.selectedTool) {
            this.setState({ thicknessSelected: false });
        }
    }

    public render(): React.ReactNode {
        const { selectedTool } = this.props;
        const { thicknessSelected } = this.state;
        if (selectedTool === Tools.HAND) {
            return null;
        }
        return (
            <React.Fragment>
                <div className={cx(commonStyles['position-absolute'], commonStyles['card'], styles['container'])}>
                    <ThicknessIcon onClick={this.toggleThicknessSelected} isThicknessSelected={thicknessSelected} />
                    {<ColorPalette selectedColor={this.getSelectedColor()} onClick={this.props.changePaletteColor} />}
                </div>
                {thicknessSelected ? (
                    <ThicknessSelector selectedThickness={this.getToolThickness()} onClick={this.props.changeThickness} />
                ) : null}
            </React.Fragment>
        )
    }
}

export default SelectedToolOptions;
