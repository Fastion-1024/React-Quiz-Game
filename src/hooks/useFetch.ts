import { useRef, useEffect, useReducer } from 'react';

// -- Interfaces & Types --
interface IState<T> {
    data?: T;
    error?: Error;
}

type Cache<T> = { [url: string]: T };

// discriminated union type
type Action<T> =
    | { type: 'loading' }
    | { type: 'fetched'; payload: T }
    | { type: 'error'; payload: Error };

const useFetch = <T = unknown>(url?: string, options?: RequestInit): IState<T> => {
    const cache = useRef<Cache<T>>({});

    // Used to prevent state update if the component is unmounted
    const cancelRequest = useRef<boolean>(false);

    const initialState: IState<T> = {
        error: undefined,
        data: undefined,
    };

    // Keep state logic separated
    const fetchReducer = (state: IState<T>, action: Action<T>): IState<T> => {
        switch (action.type) {
            case 'loading':
                return { ...initialState };

            case 'fetched':
                return { ...initialState, data: action.payload };

            case 'error':
                return { ...initialState, error: action.payload };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        // Do nothing if the url is null
        if (!url) return;

        // Create our async fetch function
        const fetchData = async () => {
            dispatch({ type: 'loading' });

            // If a cache exists for this url, return it
            if (cache.current[url]) {
                dispatch({ type: 'fetched', payload: cache.current[url] });
                return;
            }

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = (await response.json()) as T;
                cache.current[url] = data;
                if (cancelRequest.current) return;

                dispatch({ type: 'fetched', payload: data });
            } catch (error) {
                if (cancelRequest.current) return;

                dispatch({ type: 'error', payload: error as Error });
            }
        };

        // invoke fetch function after construction;
        void fetchData();
        /* 
            Use the cleanup function for avoiding a possible
            state update after the component unmounts
        */
        return () => {
            cancelRequest.current = true;
        };
    }, [url]);

    return state;
};

export default useFetch;
