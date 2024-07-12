"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const App_module_css_1 = __importDefault(require("./App.module.css"));
const axios_1 = __importDefault(require("axios"));
const Card_1 = __importDefault(require("./assets/component/Card/Card"));
const TopCard_1 = __importDefault(require("./assets/component/TopCard/TopCard"));
function App() {
    const [dataAPI, setDataAPI] = (0, react_1.useState)([]);
    const colors = [
        "hsl(15, 100%, 70%)",
        "hsl(195, 74%, 62%)",
        "hsl(348, 100%, 68%)",
        " hsl(145, 58%, 55%)",
        "hsl(264, 64%, 52%)",
        " hsl(43, 84%, 65%)",
    ];
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get("/data.json")
            .then((response) => setDataAPI(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (react_1.default.createElement("main", { className: App_module_css_1.default.main },
        react_1.default.createElement("div", { className: App_module_css_1.default.topCard },
            react_1.default.createElement(TopCard_1.default, null)),
        dataAPI.map((item, index) => item.timeframes ? (react_1.default.createElement(Card_1.default, { key: item.id, title: item.title, curTime: item.timeframes.weekly.current, prevTime: item.timeframes.weekly.previous, src: item.src, backgroundColor: colors[index % colors.length], className: App_module_css_1.default[`card${index + 1}`] })) : null)));
}
exports.default = App;
