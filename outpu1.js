"use strict";var e=require("react"),r=require("styled-components");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=t(e);const o=t(r).default.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${e=>"small"===e.size?"7px 25px 8px":"medium"===e.size?"9px 30px 11px":"14px 30px 16px"};
  color: ${e=>e.primary?"#1b116e":"#ffffff"};
  background-color: ${e=>e.primary?"#6bedb5":"#1b116e"};
  opacity: ${e=>e.disabled?.5:1};
  &:hover {
    background-color: ${e=>e.primary?"#55bd90":"#6bedb5"};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${e=>"small"===e.size?"5px 23px 6px":"medium"===e.size?"7px 28px 9px":"12px 28px 14px"};
  }
`;module.exports=e=>{var{text:r,primary:t,disabled:p,size:n,onClick:a}=e,l=function(e,r){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)r.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(t[i[o]]=e[i[o]])}return t}(e,["text","primary","disabled","size","onClick"]);return i.default.createElement(o,Object.assign({type:"button",onClick:a,primary:t,disabled:p,size:n},l),r)};
