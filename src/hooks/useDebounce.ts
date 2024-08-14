import { useEffect, useState } from "react";

export const useDebounce = (value: string, ms = 500) => {
    const [debounceVal, setDebounceVal] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebounceVal(value), ms);
        return () => clearTimeout(timer);
    }, [ms, value]);

    return debounceVal;
}