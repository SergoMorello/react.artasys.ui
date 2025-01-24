import { TImageData, IImage } from "./Image";
export interface IUploadImages {
    onChange?: (data: TImageData) => void;
    onChangeArray?: (data: IImage[]) => void;
    onClick?: (data: TImageData) => void;
    imagesArray?: TImageData[];
}
declare const UploadImages: ({ imagesArray, onChange, onChangeArray, onClick }: IUploadImages) => import("react/jsx-runtime").JSX.Element;
export default UploadImages;
