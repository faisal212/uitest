"use strict";var e=require("react"),r=require("styled-components");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),l=t(r);const o=l.default.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`,d=l.default.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#e4e3ea":"#080808"};
  padding-bottom: 6px;
`,n=l.default.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`,s=l.default.p`
  margin: 0px;
  color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`;module.exports=e=>{var{id:r,label:t,error:l,message:c,success:u,disabled:i,placeholder:p,onChange:f}=e,b=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t}(e,["id","label","error","message","success","disabled","placeholder","onChange"]);return a.default.createElement(a.default.Fragment,null,a.default.createElement(d,null,a.default.createElement(s,{disabled:i,error:l},t)),a.default.createElement(o,Object.assign({id:r,type:"text",onChange:f,disabled:i,error:l,success:u,placeholder:p},b)),a.default.createElement(n,null,a.default.createElement(s,{error:l},c)))};
