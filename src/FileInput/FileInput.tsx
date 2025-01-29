import { ChangeEvent, ReactNode, useCallback, useRef, useState } from 'react';
import Element, { IElement } from '../Form/Element';
import { UIComponent } from '../ui-types';
import styles from './style.module.scss';

export interface IFileInput extends UIComponent<IElement<HTMLInputElement>> {
    onChangeFiles?: (files: FileList | null) => void;
    accept?: string;
    multiple?: boolean;
    children?: ReactNode;
    wait?: boolean;
    className?: string;
    icon?: boolean;
}

const FileInput = ({ onChange, onChangeFiles, accept, multiple, wait, children, className, icon, ...props }: IFileInput) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fileInputClasses = `
        ${styles['file-btn']}
        ${icon && !wait ? styles.icon : ''}
    `.trim();

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (typeof onChange === "function") {
            onChange(e);
        }

        if (typeof onChangeFiles === "function") {
            onChangeFiles(files);
        }
    }, [onChange, onChangeFiles])


    return(
        <Element {...props} wait={wait}>
            {(props) => 
                <>
                    <input type='file' ref={fileInputRef} onChange={handleChange} accept={accept} multiple={multiple} style={{ display: "none" }} {...props}/>
                    <div className={`ui-file-uploader ${fileInputClasses} ${className || ""}`}>{!wait && (children || "Выбрать файл")}</div>
                </>
            }
        </Element>
    );
};

export default FileInput;