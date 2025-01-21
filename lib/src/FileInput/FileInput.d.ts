import { ReactNode } from 'react';
import { IElement } from '../Form/Element';
import { UIComponent } from '../ui-types';
export interface IFileInput extends UIComponent<IElement<HTMLInputElement>> {
    onChangeFiles?: (files: FileList | null) => void;
    accept?: string;
    multiple?: boolean;
    children?: ReactNode;
    wait?: boolean;
    className?: string;
}
declare const FileInput: ({ onChange, onChangeFiles, accept, multiple, wait, children, className, ...props }: IFileInput) => JSX.Element;
export default FileInput;
