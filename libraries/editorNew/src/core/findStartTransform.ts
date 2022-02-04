import type { Architecture } from 'coya-core';
import { findTransform } from './findTransform';
import type { DiagramRectangle } from './types';

export const findStartTransform = (arch: Architecture, svg: SVGSVGElement): DiagramRectangle => {
    return findTransform(arch, svg);
};
