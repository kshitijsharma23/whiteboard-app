import * as React from 'react';
import cx from 'classnames';

import { Thickness } from '../../models/Thickness';

import commonStyles from '../../CommonStyles.module.css';
import styles from './ThicknessSelector.module.css';

interface IThicknessSelectorProps {
    selectedThickness?: Thickness;
    onClick: (thickness: Thickness) => void;
}

class ThicknessSelector extends React.Component<IThicknessSelectorProps> {
    private changeThickness = (thickness: Thickness) => (): void => {
        if (thickness !== this.props.selectedThickness) {
            this.props.onClick(thickness);
        }
    }

    public render(): React.ReactNode {
        const { selectedThickness } = this.props;
        const thicknessStyles: Record<Thickness | string, string> = {
            [Thickness.LIGHT]: styles['thickness-light'],
            [Thickness.REGULAR]: styles['thickness-regular'],
            [Thickness.BOLD]: styles['thickness-bold'],
        };

        if (!selectedThickness) {
            return null;
        }

        return (
            <div className={cx(commonStyles['position-absolute'] ,styles['wrapper'])}>
                <div className={cx(commonStyles['flex'], commonStyles['align-items-center'], commonStyles['justify-content-center'], commonStyles['position-relative'], commonStyles['justify-content-evenly'], commonStyles['card'], styles['container'])}>
                    {Object.values(Thickness).map((thickness) => {
                        const isThicknessSelected = thickness === selectedThickness;
                        if (typeof thickness !== 'number') {
                            return null;
                        }
                        return (
                            <div key={thickness} className={cx(commonStyles['flex'], commonStyles['align-items-center'], commonStyles['justify-content-center'], styles['thickness-container'])}>
                                <button
                                    onClick={this.changeThickness(thickness)}
                                    className={cx(thicknessStyles[thickness], styles['thickness'], {[styles['selected-thickness']]: isThicknessSelected}, commonStyles['padding_0'], commonStyles['cursor-pointer'], commonStyles['outline-none'], commonStyles['border-none'])}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            
        );
    }
}

export default ThicknessSelector;
