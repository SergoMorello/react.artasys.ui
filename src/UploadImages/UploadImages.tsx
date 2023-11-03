import { useEffect, useState } from "react";
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
	imagesArray?: TImageData[];
};

export type TUploadImageData = TFileData & IUploadImages & {};

const UploadImages = ({imagesArray, onChange, onClick}: IUploadImages) => {
	const [customImages, setCustomImages] = useState<TUploadImageData[]>([]);
	const [images, setImages] = useState<TUploadImageData[]>([]);

	const handleChange = (image: TFileData) => {
		setImages((images) => [...images, {...image, onChange, onClick}]);
	};

	useEffect(() => {
		if (!imagesArray) return;
		setCustomImages(imagesArray);
	}, [imagesArray]);
	
	return(<div className={styles['container']}>
		{customImages.map((image, index) => <Image key={(image.name + index)} {...image} />)}
		{images.map((image, index) => <Image key={(image.name + index)} {...image} />)}
		<File onChange={handleChange} accept={['image/png']} className={styles['new']} multiple/>
	</div>);
};

export default UploadImages;