import Form,{
	useForm,
	FormElement
} from "./Form";
import Element,{
	IElement
} from "./Form/Element";
import Input from "./Input";
import TextArea from "./TextArea";
import Spinner from "./Spinner";
import File,{
	TFileData,
	TFileMime
} from "./File";
import Button from "./Button";
import UploadImages,{
	TUploadImageData,
	IUploadImages,
	TImageData
} from "./UploadImages";

const UI = {
	
};

export {
	Form,
	FormElement,
	Element,
	useForm,
	Input,
	TextArea,
	Spinner,
	File,
	Button,
	UploadImages
};
export type {
	TFileData,
	TFileMime,
	TUploadImageData,
	IUploadImages,
	TImageData,
	IElement
};
export default UI;