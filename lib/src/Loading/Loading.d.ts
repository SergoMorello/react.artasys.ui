import { AllHTMLAttributes } from 'react';
import { UIComponent } from '../ui-types';
export interface LoadingProps extends UIComponent<Omit<AllHTMLAttributes<HTMLDivElement>, 'color'>> {
    color?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary';
}
declare const Loading: ({ color, ...props }: LoadingProps) => JSX.Element;
export default Loading;
