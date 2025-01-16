export interface IProgress {
    value?: number | string;
    size?: 'small' | 'middle' | 'large';
    radius?: boolean;
}
declare const Progress: ({ value, size, radius }: IProgress) => JSX.Element;
export default Progress;
