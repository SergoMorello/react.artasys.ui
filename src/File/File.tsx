import {
	useEffect,
	useRef,
	MouseEvent,
	AllHTMLAttributes
} from "react";

export type TFileMime = 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/gif';

export type TFileData = {
	name: string;
	type: TFileMime;
	size: number;
	mime: TFileMime;
	data: string;
	base64?: string | null | ArrayBuffer;
};

interface TFile<T = any> extends Omit<AllHTMLAttributes<T>, 'onChange' | 'accept'> {
	onChange?: (data: TFileData) => void;
	multiple?: boolean;
	accept?: TFileMime[];
};

const File = ({onChange, children, multiple, accept, ...props}: TFile) => {
	const selector = useRef<HTMLInputElement>();

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement
		if (target.files) {
			for(const file of target.files) {
				const reader = new FileReader();
				reader.onload = (evt) => {
					const data = evt.target?.result?.toString().split(';base64,');
					const mime = (data?.[0].replace('data:', '') ?? '') as TFileMime;
					const contentData = data?.[1] ?? '';
					if (typeof onChange === 'function') {
						selector.current!.value = '';
						onChange({
							name: file.name,
							type: file.type as TFileMime,
							size: file.size,
							mime: mime,
							data: contentData,
							base64: evt.target?.result
						})
					}
				};
				reader.readAsDataURL(file);
			}
		}
	};

	const handleDialog = (e: MouseEvent<HTMLDivElement>) => {
		selector.current!.click();
		e.preventDefault();
	};

	const mount = () => {
		const fileSelector = document.createElement('input');
		fileSelector.setAttribute('type', 'file');
		fileSelector.onchange = handleChange;
		if (accept && accept.length > 0) {
			fileSelector.setAttribute('accept', accept.join(','));
		}
		
		if (multiple) {
			fileSelector.setAttribute('multiple', 'multiple');
		}
		return fileSelector;
	};

	useEffect(() => {
		selector.current = mount();
		return () => {
			selector.current?.remove();
		}
	}, []);
	return(<div {...props} onClick={handleDialog}>
		{children}
	</div>)
};

export default File;