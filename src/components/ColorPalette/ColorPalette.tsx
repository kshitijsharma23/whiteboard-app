import * as React from 'react';
import cx from 'classnames';

import { PaletteColors } from '../../constants/Colors';

import commonStyles from '../../CommonStyles.module.css';
import styles from './ColorPalette.module.css';

interface IColorPaletteProps {
    selectedColor?: PaletteColors;
    onClick: (color: PaletteColors) => void;
}

class ColorPalette extends React.Component<IColorPaletteProps> {
    private changeColor = (color: PaletteColors) => (): void => {
        if (color !== this.props.selectedColor) {
            this.props.onClick(color);
        }
    }

    public render(): React.ReactNode {
        const { selectedColor } = this.props;
        if (!selectedColor) {
            return null;
        }
        return (
            <div>
                {Object.values(PaletteColors).map((color) => {
                    const isColorSelected = color === selectedColor;
                    return (
                        <div key={color}>
                            <button
                                onClick={this.changeColor(color)}
                                className={cx(styles['color'], {[styles['selected-color']]: isColorSelected}, commonStyles['padding_0'], commonStyles['cursor-pointer'], commonStyles['outline-none'], commonStyles['border-none'])}
                                style={{backgroundColor: color}}
                            />
                        </div>
                        
                    );
                })}
            </div>
        )
    }
}

export default ColorPalette;
