export enum PredefCategory {
    Color = "color",
    Shape = "shape",
}

export const predefinedSetting = [{
    name: "test",
    label: "Test predef",
    category: PredefCategory.Color,
    config: {
        css: {
            stroke: "black",
            fill: "red",
        }
    }
}, {
    name: "test2",
    label: "Test predef2",
    category: PredefCategory.Color,
    config: {
        css: {
            stroke: "red",
            fill: "yellow",
        }
    }
}, {
    name: "test3",
    label: "Test predef3",
    category: PredefCategory.Color,
    config: {
        css: {
            stroke: "red",
            fill: "green",
        }
    }
}];