import { useState, useEffect } from "react";

const useImageCache = (src) => {
    const [cached, setCached] = useState(false);

    useEffect(() => {
        if (!src) return;

        const img = new Image();
        img.src = src;
        img.onload = () => {
            setCached(true);
        };
    }, [src]);

    return cached;
};

export default useImageCache;
