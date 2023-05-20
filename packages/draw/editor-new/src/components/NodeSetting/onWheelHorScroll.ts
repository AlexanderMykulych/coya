export const onWheelHorScroll = (event: WheelEvent) => {
    (event.currentTarget as HTMLElement)!.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
    });
};
