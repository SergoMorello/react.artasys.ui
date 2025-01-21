import { Meta, StoryFn } from "@storybook/react";
import FileInput, { IFileInput } from "../src/FileInput/FileInput"; // Укажите правильный путь к компоненту

export default {
  title: "Components/FileInput", // Название группы историй
  component: FileInput, // Компонент, для которого создаётся история
  argTypes: {
    onChangeFiles: { action: "filesSelected" }, // Логирование выбора файлов
    accept: {
      control: "text", // Поле для ввода accept
      description: "Разрешенные типы файлов (например, image/*)",
    },
    multiple: {
      control: "boolean", // Переключатель для multiple
      description: "Разрешить выбор нескольких файлов",
    },
    wait: {
      control: "boolean", // Переключатель для wait
      description: "Показывать индикатор загрузки",
    },
    children: {
      control: "text", // Поле для ввода children
      description: "Кастомное содержимое для кнопки",
    },
  },
} as Meta<typeof FileInput>;

// Шаблон для истории
const Template: StoryFn<IFileInput> = (args) => <FileInput {...args} />;

// Базовая история
export const Default = Template.bind({});
Default.args = {
  children: "Выбрать файл", // Текст по умолчанию
};

// История с выбором нескольких файлов
export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multiple: true,
  children: "Выбрать файлы",
};

// История с ограничением по типам файлов
export const AcceptImages = Template.bind({});
AcceptImages.args = {
  accept: "image/*",
  children: "Выбрать изображение",
};

// История с индикатором загрузки
export const WithLoading = Template.bind({});
WithLoading.args = {
  wait: true,
  children: "Загрузить файл",
};

// История с кастомным содержимым
export const CustomChildren = Template.bind({});
CustomChildren.args = {
  children: <span style={{ color: "blue" }}>📁 Загрузить файл</span>,
};