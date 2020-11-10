import { Thickness } from './Thickness';

import { PaletteColors } from '../constants/Colors';

export interface ToolOptions {
    thickness: Thickness;
}

export interface DrawingToolOptions extends ToolOptions {
    color: PaletteColors;
}