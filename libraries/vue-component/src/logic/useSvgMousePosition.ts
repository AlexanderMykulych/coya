import type { Ref } from 'vue';

export function useMousePosition(svgRef: Ref<SVGSVGElement | null>) {
    const x = ref(0);
    const y = ref(0);

    onMounted(() => {
        const svg = svgRef.value;
        if (!svg)
            return;

        // Create an SVGPoint for future math
        const pt = svg.createSVGPoint();
        // Get point in global SVG space
        function cursorPoint(evt: MouseEvent) {
            pt.x = evt.clientX; pt.y = evt.clientY;
            return pt.matrixTransform(svg?.getScreenCTM()?.inverse());
        }

        svg.addEventListener('mousemove', (evt) => {
            const loc = cursorPoint(evt);
            x.value = loc.x;
            y.value = loc.y;
        }, false);
    });

    return {
        x,
        y,
    };
}
