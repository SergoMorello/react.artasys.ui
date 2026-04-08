import {
	type DependencyList,
	type EffectCallback,
	useLayoutEffect as useReactLayoutEffect
} from "react";

const globalPrefix = 'ui-';

export const Style = (styleOrArray: string | string[], styles: Record<string, unknown>, prefix?: string): string => {
	const currentPrefix = globalPrefix + (prefix ? prefix + '-' : '');
	if (Array.isArray(styleOrArray)) {
		return styleOrArray.map(() => Style(styleOrArray, styles, currentPrefix)).join(' ');
	}else{
		return `${styles[styleOrArray]} ${currentPrefix}${styleOrArray}`;
	}
};

export const useLayoutEffect = (effect: EffectCallback, deps?: DependencyList) => {
	return typeof window === 'undefined' ? undefined : useReactLayoutEffect(effect, deps);
};