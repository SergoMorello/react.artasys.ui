import { TFileData } from "../File";
import { TImageData } from "./Image";
export interface IUploadImages {
    onChange?: (data: TImageData) => void;
    onClick?: (data: TImageData) => void;
    imagesArray?: TImageData[];
}
export type TUploadImageData = TFileData & IUploadImages & {};
declare const UploadImages: ({ imagesArray, onChange, onClick }: IUploadImages) => JSX.Element;
export default UploadImages;
