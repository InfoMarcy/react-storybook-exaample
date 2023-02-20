import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
    },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false, // true: capitalizar toda la palabra
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true, // true: capitalizar toda la palabra
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary", // true: capitalizar toda la palabra
};

export const Terciary = Template.bind({});
Terciary.args = {
  size: "normal",
  color: "terciary", // true: capitalizar toda la palabra
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  fontColor: "#5517ac",
};
