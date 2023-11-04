import type { TFileData } from "../File";
export type TImageData = TFileData & {
    id?: string | number;
    setWait: (status: boolean) => void;
    setId: (id: string | number) => void;
};
export interface IImage extends TFileData {
    onChange?: (data: TImageData) => void;
    onId?: (id: string | number) => void;
    onRemove?: () => void;
    onClick?: (data: TImageData) => void;
    id?: string | number;
    src?: string;
}
declare const Image: ({ onChange, onClick, onId, onRemove, ...props }: IImage) => JSX.Element;
export default Image;
