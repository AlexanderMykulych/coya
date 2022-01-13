export type ArrowDescriptor = [
    /** start point */
    /* sx: */ number,
    /* sy: */ number,
    /** control point for start point */
    /* c1x: */ number,
    /* c1y: */ number,
    /** control point for end point */
    /* c2x: */ number,
    /* c2y: */ number,
    /** end point */
    /* ex: */ number,
    /* ey: */ number,
    /** angle of end point */
    /* ae: */ number,
    /** angle of start point */
    /* as: */ number
];

export type ArrowOptions = Partial<{
    padStart: number;
    padEnd: number;
    controlPointStretch: number;
}>;
