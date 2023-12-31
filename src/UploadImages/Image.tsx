import { useEffect, useRef, useState } from "react";
import Spinner from "../Spinner";
import type { TFileData } from "../File";
import styles from "./style.module.css";

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
};

const Image = ({onChange, onClick, onId, onRemove, ...props}: IImage) => {
	const { base64, src } = props;
	const [wait, setWait] = useState(true);
	const confirmRemove = useRef(false);
	const currentId = useRef<string | number | undefined>();
	const setId = (id: string | number) => {
		currentId.current = id;
		if (typeof onId !== 'function') return;
		onId(id);
	};

	const handleClick = () => {
		if (typeof onClick === 'function') {
			onClick({
				...props,
				setWait,
				setId,
				id: currentId.current
			});
		}
	};

	const handleLoad = () => {
		setWait(false);
	};

	const handleRemove = (e: React.MouseEvent<HTMLSpanElement>) => {
		if (!e.target) return;
		const element = (e.target as HTMLSpanElement);
		
		const remove = () => {
			if (!confirmRemove.current) return;
			confirmRemove.current = false;
			element.blur();
			if (typeof onRemove === 'function') {
				onRemove();
			}
		};
		remove();
		confirmRemove.current = true;
	};

	const handleCancelRemove = () => {
		confirmRemove.current = false;
	};

	useEffect(() => {
		if (typeof onChange !== 'function' || src) return;
		onChange({
			...props,
			setWait,
			setId,
			id: currentId.current
		});
	}, []);

	return(<span className={styles['image']} onClick={handleClick}>
		<span className={styles['close']} onClick={handleRemove} onBlur={handleCancelRemove} tabIndex={1}/>
		<img src={src ?? base64?.toString()} onLoad={handleLoad}/>
		{wait && <span className={styles['wait']}>
			<Spinner/>
		</span>}
	</span>);
};

export default Image;