import { useState } from "react";
import File,{
	TFileData
} from "../File";
import styles from "./style.module.css";

import Image,{
	TImageData
} from "./Image";

export interface IUploadImages {
	onChange?: (data: TImageData) => void;
	onClick?: (data: TImageData) => void;
};

export type TUploadImageData = TFileData & IUploadImages & {};

const UploadImages = ({onChange, onClick}: IUploadImages) => {
	const [images, setImages] = useState<TUploadImageData[]>([]);

	const handleChange = (image: TFileData) => {
		setImages((images) => [...images, {...image, onChange, onClick}]);
	};
	
	return(<div className={styles['container']}>
		{images.map((image, index) => <Image key={(image.name + index)} {...image} />)}
		<File onChange={handleChange} accept={['image/png']} className={styles['new']} multiple/>
	</div>);
};

export default UploadImages;