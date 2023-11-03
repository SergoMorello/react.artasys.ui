import type { TFileData } from "../File";
import { TUploadImageData } from "./UploadImages";
export type TImageData = TFileData & {
    setWait: (status: boolean) => void;
};
declare const Image: ({ onChange, onClick, ...props }: TUploadImageData) => JSX.Element;
export default Image;
