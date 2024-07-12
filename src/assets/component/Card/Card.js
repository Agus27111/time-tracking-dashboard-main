"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const card_module_css_1 = __importDefault(require("./card.module.css"));
const Card = ({ title, curTime, prevTime, src, backgroundColor, className, }) => {
    return (react_1.default.createElement("div", { className: `${card_module_css_1.default.card} ${className}`, style: { backgroundColor } },
        src && react_1.default.createElement("img", { src: src, alt: "icon", className: card_module_css_1.default.icon }),
        react_1.default.createElement("div", { className: card_module_css_1.default.containerCard },
            react_1.default.createElement("div", { className: card_module_css_1.default.work },
                react_1.default.createElement("p", null,
                    react_1.default.createElement("strong", null, title)),
                react_1.default.createElement("h2", null,
                    curTime,
                    "Hrs")),
            react_1.default.createElement("div", { className: card_module_css_1.default.desc },
                react_1.default.createElement("img", { src: "/images/icon-ellipsis.svg", alt: "elipsis" }),
                react_1.default.createElement("p", null,
                    "Last Week - ",
                    prevTime,
                    "hrs")))));
};
exports.default = Card;
