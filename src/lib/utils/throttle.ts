export function throttle<T extends (...args: any[]) => void>(fn: T, limit: number): T {
	let inThrottle: boolean;
	let lastFn: number;
	let lastTime: number;
	return function(this: any, ...args: any[]) {
		const context = this;
		const now = Date.now();
		if (!inThrottle) {
			fn.apply(context, args);
			lastTime = now;
			inThrottle = true;
		} else {
			clearTimeout(lastFn);
			lastFn = window.setTimeout(() => {
				if ((now - lastTime) >= limit) {
					fn.apply(context, args);
					lastTime = now;
				}
			}, limit - (now - lastTime));
		}
	} as T;
}
