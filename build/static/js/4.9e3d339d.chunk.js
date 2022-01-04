/*! For license information please see 4.9e3d339d.chunk.js.LICENSE.txt */
(this["webpackJsonpdashboard-react"]=this["webpackJsonpdashboard-react"]||[]).push([[4],{448:function(e,t,n){"use strict";var a=n(7),i=n.n(a);t.a=function(e){var t=e.children;return i.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},449:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var u=i.apply(null,a);u&&e.push(u)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},454:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=a?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7)),r=(a=n(449))&&a.__esModule?a:{default:a};function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=l(t).call(this,e))||"object"!==s(r)&&"function"!==typeof r?y(a):r).state={selected:n.parseValue(e.value,e.options)||{label:"undefined"===typeof e.placeholder?"Select...":e.placeholder,value:""},isOpen:!1},n.dropdownRef=(0,i.createRef)(),n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(y(n)),n.fireChangeEvent=n.fireChangeEvent.bind(y(n)),n}var n,a,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var t=this.parseValue(this.props.value,this.props.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:"undefined"===typeof this.props.placeholder?"Select...":this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"===typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var n;if("string"===typeof e)for(var a=0,i=t.length;a<i;a++)if("group"===t[a].type){var r=t[a].items.filter((function(t){return t.value===e}));r.length&&(n=r[0])}else"undefined"!==typeof t[a].value&&t[a].value===e&&(n=t[a]);return n||e}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(n),this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=e.value;"undefined"===typeof n&&(n=e.label||e);var a=e.label||e.value||e,u=n===this.state.selected.value||n===this.state.selected,s=(p(t={},"".concat(this.props.baseClassName,"-option"),!0),p(t,e.className,!!e.className),p(t,"is-selected",u),t),o=(0,r.default)(s);return i.default.createElement("div",{key:n,className:o,onMouseDown:this.setValue.bind(this,n,a),onClick:this.setValue.bind(this,n,a),role:"option","aria-selected":u?"true":"false"},a)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,a=t.baseClassName,r=n.map((function(t){if("group"===t.type){var n=i.default.createElement("div",{className:"".concat(a,"-title")},t.name),r=t.items.map((function(t){return e.renderOption(t)}));return i.default.createElement("div",{className:"".concat(a,"-group"),key:t.name,role:"listbox",tabIndex:"-1"},n,r)}return e.renderOption(t)}));return r.length?r:i.default.createElement("div",{className:"".concat(a,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"===typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,n,a,u,s=this.props,o=s.baseClassName,l=s.controlClassName,y=s.placeholderClassName,d=s.menuClassName,m=s.arrowClassName,c=s.arrowClosed,f=s.arrowOpen,T=s.className,b=this.props.disabled?"Dropdown-disabled":"",h="string"===typeof this.state.selected?this.state.selected:this.state.selected.label,v=(0,r.default)((p(e={},"".concat(o,"-root"),!0),p(e,T,!!T),p(e,"is-open",this.state.isOpen),e)),k=(0,r.default)((p(t={},"".concat(o,"-control"),!0),p(t,l,!!l),p(t,b,!!b),t)),E=(0,r.default)((p(n={},"".concat(o,"-placeholder"),!0),p(n,y,!!y),p(n,"is-selected",this.isValueSelected()),n)),O=(0,r.default)((p(a={},"".concat(o,"-menu"),!0),p(a,d,!!d),a)),g=(0,r.default)((p(u={},"".concat(o,"-arrow"),!0),p(u,m,!!m),u)),M=i.default.createElement("div",{className:E},h),w=this.state.isOpen?i.default.createElement("div",{className:O,"aria-expanded":"true"},this.buildMenu()):null;return i.default.createElement("div",{ref:this.dropdownRef,className:v},i.default.createElement("div",{className:k,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},M,i.default.createElement("div",{className:"".concat(o,"-arrow-wrapper")},f&&c?this.state.isOpen?f:c:i.default.createElement("span",{className:g}))),w)}}])&&o(n.prototype,a),u&&o(n,u),t}(i.Component);m.defaultProps={baseClassName:"Dropdown"};var c=m;t.default=c},455:function(e,t){e.exports={address:"0xD99D1c33F9fC3444f8101754aBC46c52416550D1",abi:[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_WETH",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amountTokenDesired",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"reserveA",type:"uint256"},{internalType:"uint256",name:"reserveB",type:"uint256"}],name:"quote",outputs:[{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETHSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermit",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityWithPermit",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapETHForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETHSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]}},456:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(8),u=n(15),s=n(7),p=n.n(s),o=n(454),l=n.n(o),y=n(48),d=(n(455),n(119)),m=n.n(d),c=n(448),f=n(124),T="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",b=(new y.a.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"),new y.a.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/"));t.default=function(e){var t=e.contract,n=e.dividendToken,a=e.connectWallet,o=e.label,d=e.defaultOption,h=e.options,v=e.setLabel,k=(e.address,e.setAddress),E=Object(s.useState)(""),O=Object(u.a)(E,2),g=O[0],M=O[1],w=Object(s.useState)(null),x=Object(u.a)(w,2),C=(x[0],x[1],Object(s.useState)(null)),N=Object(u.a)(C,2),D=(N[0],N[1],Object(s.useState)(null)),j=Object(u.a)(D,2),S=(j[0],j[1],new y.a.Contract(m.a.address,m.a.abi,b));function A(){return(A=Object(r.a)(i.a.mark((function e(n){var a,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length<42)){e.next=3;break}return alert("Please enter a valid token address!"),e.abrupt("return");case 3:if(e.prev=3,a=[T,n],u=!1,"0x0000000000000000000000000000000000000000"!=g){e.next=10;break}return e.abrupt("return",t.updateDividendTokenUser(n));case 10:return e.next=12,S.getAmountsOut(1,a,{gasLimit:1e12});case 12:(u=e.sent)&&(console.log("Updated",n),console.log("good",u),t.updateDividendTokenUser(n).then(function(){var e=Object(r.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.wait();case 2:return n=e.sent,console.log(n),e.abrupt("return",window.location.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("update token bep20",e)})));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),alert("This token does not have any liquidity!");case 19:case"end":return e.stop()}}),e,null,[[3,16]])})))).apply(this,arguments)}try{window.ethereum.on("chainChanged",(function(e){return a()})),window.ethereum.on("accountsChanged",(function(e){return a()}))}catch(B){console.log(B)}return Object(s.useEffect)((function(){k(""),a()}),[]),p.a.createElement(p.a.Fragment,null,p.a.createElement(c.a,null,"FAT Set Dividend Token"),p.a.createElement("div",{className:"grid gap-6 mb-8 grid-cols-1 text-center transition transform duration-800 ease"},p.a.createElement(f.Card,{className:"transition transform duration-800 ease"},p.a.createElement(f.CardBody,{className:"transition transform duration-800 ease"},null!==n?p.a.createElement("p",{className:"text-gray-600 text-2xl dark:text-gray-300 text-center mt-6 mb-4"},"Your current Dividend Token is:",p.a.createElement("br",null),p.a.createElement("span",{className:"text-blue-400 font-bold"}," ",n," ")," "):p.a.createElement(f.Button,{className:"mt-6 mb-6",onClick:a}," CONNECT YOUR WALLET "),p.a.createElement("div",{className:"flex-col justify-center flex-1 "},p.a.createElement("div",{className:" w-full focus-within:text-purple-500 mb-6"},p.a.createElement(f.Input,{className:"relative inline diviField text-gray-700 diviSet",placeholder:"0xB87ce21aA9c039EFc5Df92942Cb73C1378c55Bc6","aria-label":"Search",value:g,onChange:function(e){M(e.target.value),console.log(e.target.value)}})),p.a.createElement("div",{className:"w-full focus-within:text-purple-500 mt-6 mb-4 cursor-pointer"},p.a.createElement(l.a,{disabled:!n,controlClassName:"cursor-pointer",className:" transition transform duration-800 ease my-custom-class cursor-pointer text-gray-600 text-2xl dark:text-gray-300 text-center",placeholderClassName:"Dropdown-placeholder-".concat(o),options:h,onChange:function(e){M(e.value),v(e.label)},value:d,placeholder:"Select an option"})),p.a.createElement(f.Button,{disabled:!n,onClick:function(){return function(e){return A.apply(this,arguments)}(g)},"aria-label":"Notifications","aria-haspopup":"true"},"Set Dividend Token"))))))}}}]);
//# sourceMappingURL=4.9e3d339d.chunk.js.map