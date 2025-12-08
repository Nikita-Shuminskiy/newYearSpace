export type ContentWidth = "desktop-xl-only" | "desktop-only" | "tablet-only" | "mobile-only";

export const getContentWidth = (width: number): ContentWidth => {
    if (width >= 1980) {
        return 'desktop-xl-only';
    } else if (width <= 1979 && width >= 1280) {
        return 'desktop-only';
    } else if (width < 1280 && width >= 744) {
        return 'tablet-only';
    } else {
        return 'mobile-only';
    }
};




