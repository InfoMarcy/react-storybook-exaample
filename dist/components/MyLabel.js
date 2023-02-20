"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
const MyLabel = ({ allCaps = false, color = "primary", label = "No Label", size = "normal", fontColor, }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: `label ${size} text-${color}`, style: { color: fontColor }, children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
