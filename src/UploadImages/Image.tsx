import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { TFileData } from "../File";
import styles from "./style.module.css";

import { TUploadImageData } from "./UploadImages";

export type TImageData = TFileData & {
	setWait: (status: boolean) => void;
};

const Image = ({onChange, onClick, ...props}: TUploadImageData) => {
	const { base64 } = props;
	const [wait, setWait] = useState(true);

	const handleClick = () => {
		if (typeof onClick === 'function') {
			onClick({
				...props,
				setWait
			});
		}
	};

	useEffect(() => {
		if (typeof onChange !== 'function') return;
		onChange({
			...props,
			setWait
		});
	}, []);

	return(<span className={styles['image']} onClick={handleClick}>
		<img src={base64 as string}/>
		{wait && <span className={styles['wait']}>
			<Spinner size="small" color="contrast"/>
		</span>}
	</span>);
};

export default Image;