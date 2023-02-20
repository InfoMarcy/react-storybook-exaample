"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Terciary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MyLabel_1 = require("../../components/MyLabel");
const meta = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: "select",
        },
        fontColor: { control: "color" },
    },
};
exports.default = meta;
const Template = (args) => (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, { ...args });
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: "normal",
    allCaps: false, // true: capitalizar toda la palabra
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: "normal",
    allCaps: true, // true: capitalizar toda la palabra
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: "normal",
    color: "secondary", // true: capitalizar toda la palabra
};
exports.Terciary = Template.bind({});
exports.Terciary.args = {
    size: "normal",
    color: "terciary", // true: capitalizar toda la palabra
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: "h1",
    fontColor: "#5517ac",
};
