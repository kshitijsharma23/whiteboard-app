import * as React from 'react';
import cx from 'classnames';

import commonStyles from '../../CommonStyles.module.css';
import styles from './ThicknessIcon.module.css';

interface IThicknessIconProps {
    isThicknessSelected: boolean;
    onClick: () => void;
}

const ThicknessIcon = (props: IThicknessIconProps): JSX.Element => {
    return (
        <div className={cx(commonStyles['flex'], commonStyles['align-items-center'], commonStyles['justify-content-center'], styles['thickness-container'])}>
            <button
                onClick={props.onClick}
                className={cx(styles['thickness'], {[styles['selected-thickness']]: props.isThicknessSelected}, commonStyles['padding_0'], commonStyles['cursor-pointer'], commonStyles['outline-none'], commonStyles['border-none'])}
            />
        </div>
    )
}

export default ThicknessIcon;
