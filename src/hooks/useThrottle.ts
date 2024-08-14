import { useCallback, useRef } from "react";

export const useThrottle = (callback: (...args: unknown[]) => void, delay: number) => {
    const lastCall = useRef<number>(0);

    return useCallback((...args: unknown[]) => {
        const now = new Date().getTime();
        if (now - lastCall.current >= delay) {
            lastCall.current = now;
            callback(...args);
        }
    }, [callback, delay]);
}


