"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const topCard_module_css_1 = __importDefault(require("./topCard.module.css"));
const TopCard = () => {
    return (react_1.default.createElement("div", { className: topCard_module_css_1.default.container },
        react_1.default.createElement("div", { className: topCard_module_css_1.default.miniContainer },
            react_1.default.createElement("img", { src: "/images/image-jeremy.png", alt: "img-people" }),
            react_1.default.createElement("div", { className: topCard_module_css_1.default.bio },
                react_1.default.createElement("p", null, "Report for"),
                react_1.default.createElement("h2", null, "Jeremy Robson"))),
        react_1.default.createElement("div", { className: topCard_module_css_1.default.time },
            react_1.default.createElement("p", null,
                react_1.default.createElement("a", null, "Daily")),
            react_1.default.createElement("p", null,
                react_1.default.createElement("a", null, "Weakly")),
            react_1.default.createElement("p", null,
                react_1.default.createElement("a", null, "Monthly")))));
};
exports.default = TopCard;
