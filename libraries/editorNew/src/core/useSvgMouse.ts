import { onScopeDispose, reactive, watch } from "vue";
import { getMousePosition } from "./getMousePosition";
import { SvgRef, MouseState } from "./types";


export function useSvgMouse(svg: SvgRef) {
    const mouse = reactive<MouseState>({
        position: {
            x: 0,
            y: 0
        },
        pressed: false,
        pressedPosition: {
            x: 0,
            y: 0
        },
        leave: true,
        palette: {
            pressed: false
        }
    });
    watch(() => svg.value, svgEl => {
        if (svgEl) {
            const onMouseMoveListener = (event: MouseEvent) => {
                const { x, y } = getMousePosition(svgEl, event);
                mouse.position.x = x;
                mouse.position.y = y;
                mouse.leave = false;
            };
            const onMouseDownListener = (event: MouseEvent) => {
                const { x, y } = getMousePosition(svgEl, event);
                mouse.pressed = true;
                mouse.pressedPosition.x = x;
                mouse.pressedPosition.y = y;
            };
            const onMouseUpListener = (_: MouseEvent) => {
                mouse.pressed = false;
                mouse.palette.pressed = false;
            };
            const onMouseLeaveListener = (_: MouseEvent) => {
                mouse.pressed = false;
                mouse.leave = true;
            };

            svgEl.addEventListener("mousemove", onMouseMoveListener);
            svgEl.addEventListener("mousedown", onMouseDownListener);
            svgEl.addEventListener("mouseup", onMouseUpListener);
            svgEl.addEventListener("mouseleave", onMouseLeaveListener);
            onScopeDispose(() => {
                svgEl.removeEventListener("mousemove", onMouseMoveListener);
                svgEl.removeEventListener("mousedown", onMouseDownListener);
                svgEl.removeEventListener("mouseup", onMouseUpListener);
                svgEl.removeEventListener("mouseleave", onMouseLeaveListener);
            });
        }
    }, { immediate: true });
    return mouse;
}
