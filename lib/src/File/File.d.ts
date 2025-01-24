import { AllHTMLAttributes } from "react";
import { UIComponent } from "../ui-types";
export type TFileMime = 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/gif';
export type TFileData = {
    name: string;
    type: TFileMime;
    size: number;
    mime: TFileMime;
    data: string;
    base64?: string | null | ArrayBuffer;
};
export interface TFile<T = any> extends UIComponent<Omit<AllHTMLAttributes<T>, 'onChange' | 'accept'>> {
    onChange?: (data: TFileData) => void;
    multiple?: boolean;
    accept?: TFileMime[];
}
declare const File: ({ onChange, children, multiple, accept, ...props }: TFile) => import("react/jsx-runtime").JSX.Element;
export default File;
