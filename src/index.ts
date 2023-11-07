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
	IUploadImages,
	TImageData,
	IImage
} from "./UploadImages";
import Checkbox from "./Checkbox";

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
	UploadImages,
	Checkbox
};
export type {
	TFileData,
	TFileMime,
	IUploadImages,
	IImage,
	TImageData,
	IElement
};
export default UI;