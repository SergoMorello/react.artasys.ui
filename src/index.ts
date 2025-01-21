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
import Loading from "./Loading";
import FileInput from "./FileInput";
import File,{
	TFileData,
	TFileMime
} from "./File";
import Button, {
	ButtonProps
} from "./Button";
import UploadImages,{
	IUploadImages,
	TImageData,
	IImage
} from "./UploadImages";
import Checkbox from "./Checkbox";
import Progress from "./Progress";
import Select,{
	SelectOption,
	SelectOptgroup
} from "./Select";
import Dropdown,{
	DropdownItem
} from "./Dropdown";

import './brands/brands.css'

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
	Loading,
	File,
	Button,
	UploadImages,
	Checkbox,
	Progress,
	Select,
	SelectOption,
	SelectOptgroup,
	Dropdown,
	DropdownItem,
	FileInput,
};
export type {
	TFileData,
	TFileMime,
	IUploadImages,
	IImage,
	TImageData,
	IElement,
	ButtonProps
};
export default UI;