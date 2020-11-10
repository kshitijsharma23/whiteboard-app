import * as React from 'react';
import cx from 'classnames';

import { Tools } from '../../models/Tools';
import { Colors } from '../../constants/Colors';
import { getIcon } from '../Icons/Icons';

import commonStyles from '../../CommonStyles.module.css';
import styles from './Sidebar.module.css';

interface ISidebarProps {
    selectedTool: Tools;
    changeTool: (tool: Tools) => void;
}

class Sidebar extends React.Component<ISidebarProps> {
    private onButtonClick = (tool: Tools) => (): void => {
        this.props.changeTool(tool);
    }

    public render(): React.ReactNode {
        return (
            <div className={cx(styles['container'], commonStyles['card'], commonStyles['border-radius-2'])}>
                {Object.values(Tools).map((tool) => {
                    const ToolIcon = getIcon(tool);
                    const isToolSelected = tool === this.props.selectedTool;
                    return (
                        <button
                            key={tool}
                            className={cx(commonStyles['flex'], commonStyles['align-items-center'], commonStyles['justify-content-center'], commonStyles['padding_0'], commonStyles['cursor-pointer'], commonStyles['outline-none'], commonStyles['border-none'], styles['tool-button'], {[styles['selected-icon']]: isToolSelected})}
                            onClick={this.onButtonClick(tool)}
                        >
                            <ToolIcon stroke={isToolSelected ? Colors.white : undefined} />
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default Sidebar;
