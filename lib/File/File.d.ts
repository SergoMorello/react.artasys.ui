import { AllHTMLAttributes } from "react";
export type TFileMime = 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/gif';
export type TFileData = {
    name: string;
    type: TFileMime;
    size: number;
    mime: TFileMime;
    data: string;
    base64?: string | null | ArrayBuffer;
    children?: React.ReactNode;
};
interface TFile<T = any> extends Omit<AllHTMLAttributes<T>, 'onChange' | 'accept'> {
    onChange?: (data: TFileData) => void;
    multiple?: boolean;
    accept?: TFileMime[];
}
declare const File: ({ onChange, children, multiple, accept, ...props }: TFile) => JSX.Element;
export default File;
