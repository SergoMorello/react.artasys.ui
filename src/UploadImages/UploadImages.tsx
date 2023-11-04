import { useEffect, useState } from "react";
import File,{
	TFileData
} from "../File";
import styles from "./style.module.css";

import Image,{
	TImageData,
	IImage
} from "./Image";

export interface IUploadImages {
	onChange?: (data: TImageData) => void;
	onChangeArray?: (data: IImage[]) => void;
	onClick?: (data: TImageData) => void;
	imagesArray?: TImageData[];
};

const UploadImages = ({imagesArray, onChange, onChangeArray, onClick}: IUploadImages) => {
	const [images, setImages] = useState<IImage[]>([]);

	const handleChange = (image: TFileData) => {
		setImages((images) => [...images, {...image}]);
	};

	const handleChangeId = (image: IImage) => {
		return (id: string | number) => {
			setImages((images) => images.map((currentImage) => {
				if (image === currentImage) {
					currentImage.id = id;
				}
				return currentImage;
			}));
		}
	};

	const handleRemove = (image: IImage) => {
		return () => setImages((images) => images.filter((currentImage) => currentImage !== image));
	};

	useEffect(() => {
		if (typeof onChangeArray !== 'function') return;
		onChangeArray(images);
	}, [images]);

	useEffect(() => {
		if (!imagesArray) return;
		setImages(imagesArray);
	}, [imagesArray]);
	
	return(<div className={styles['container']}>
		{images.map((image, index) => <Image key={(image.name + index)} {...image} onChange={onChange} onClick={onClick} onRemove={handleRemove(image)} onId={handleChangeId(image)}/>)}
		<File onChange={handleChange} accept={['image/png']} className={styles['new']} multiple/>
	</div>);
};

export default UploadImages;