/**
 * Pending lifecycle hook.
 *
 * This hook is called when requests have not yet been completed.
 */
export const onPending = () => {};

/**
 * Fallback render lifecycle hook.
 *
 * This hook is called when the fallback UI has been rendered. Requests have
 * not yet been fully resolved in this state.
 */
export const onFallback = () => {};

/**
 * Resolved asynchronous lifecycle hook.
 *
 * This hook is called when all asynchronous requests have been resolved.
 */
export const onResolved = () => {};

/**
 * This hook is called when the application encounters an error boundary.
 */
export const onError = () => {};
