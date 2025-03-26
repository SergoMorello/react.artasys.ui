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
    showFiles?: boolean;
}

const FileInput = ({ onChange, onChangeFiles, accept, multiple, wait, children, className, icon, showFiles, ...props }: IFileInput) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const fileInputClasses = `
        ${styles['file-btn']}
        ${icon && !wait ? styles.icon : ''}
    `.trim();

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files) {
                const fileArray = Array.from(files);
                setSelectedFiles((prevFiles) => {
                    const existingNames = new Set(prevFiles.map((f) => f.name));
                    const newFiles = fileArray.filter((f) => !existingNames.has(f.name));
                    const updatedFiles = multiple ? [...prevFiles, ...newFiles] : fileArray;

                    if (fileInputRef.current) {
                        const dataTransfer = new DataTransfer();
                        updatedFiles.forEach((file) => dataTransfer.items.add(file));
                        fileInputRef.current.files = dataTransfer.files;
                        if (typeof onChangeFiles === 'function') {
                            onChangeFiles(dataTransfer.files);
                        }
                    }

                    return updatedFiles;
                });
            } else {
                setSelectedFiles([]);
                if (fileInputRef.current) {
                    fileInputRef.current.files = new DataTransfer().files;
                }
                if (typeof onChangeFiles === 'function') {
                    onChangeFiles(null);
                }
            }

            if (typeof onChange === 'function') {
                onChange(e);
            }
        }, [onChange, onChangeFiles, multiple]);

    const handleRemoveFile = useCallback((e: React.MouseEvent<HTMLSpanElement>, index: number) => {
            e.stopPropagation();
            e.preventDefault();
            setSelectedFiles((prevFiles) => {
                const newFiles = prevFiles.filter((_, i) => i !== index);
                if (fileInputRef.current) {
                    const dataTransfer = new DataTransfer();
                    newFiles.forEach((file) => dataTransfer.items.add(file));
                    fileInputRef.current.files = dataTransfer.files;
                    if (typeof onChangeFiles === 'function') {
                        onChangeFiles(dataTransfer.files);
                    }
                }
                return newFiles;
            });
        }, [onChangeFiles]);


    return(
        <Element {...props} wait={wait}>
            {(props) => 
               <div className={styles['ui-file-container']}>
                    <input type='file' ref={fileInputRef} onChange={handleChange} accept={accept} multiple={multiple} style={{ display: "none" }} {...props}/>
                    <div className={`ui-file-uploader ${styles['file-container']} ${fileInputClasses} ${className || ""}`}>
                        {!wait && (children || "Выбрать файл")}
                    </div>
                    <div className={styles['selected-files-container']}>
                            {showFiles && selectedFiles.length > 0 && (
                            <ul>
                                {selectedFiles.map((file, index) => (
                                    <li key={index + file.name}>
                                        <span className={styles['file-name-field']}>{file.name}</span>
                                        <div onClick={(e) => handleRemoveFile(e, index)} aria-label='Удалить файл'/>
                                    </li>
                                ))}
                            </ul>
                            )}
                    </div>
               </div>
            }
        </Element>
    );
};

export default FileInput;