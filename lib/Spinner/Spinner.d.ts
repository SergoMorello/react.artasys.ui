type TSpinner = {
    size?: 'small' | 'middle' | 'large';
    color?: 'default' | 'contrast';
};
declare const Spinner: ({ size, color }: TSpinner) => JSX.Element;
export default Spinner;
