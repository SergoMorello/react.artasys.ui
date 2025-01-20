import { AllHTMLAttributes } from 'react';
export interface LoadingProps extends Omit<AllHTMLAttributes<HTMLDivElement>, 'color'> {
    color?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary';
}
declare const Loading: ({ color, ...props }: LoadingProps) => JSX.Element;
export default Loading;
