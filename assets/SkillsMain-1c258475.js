import{I as s,a as u}from"./Desktop-9b3af726.js";import{l as x,d as h,f as k,t as g}from"./data-27151300.js";import{n}from"./BatteryHelper-76782b63.js";import{h as f,o as t,k as b,t as a}from"./index-490da62e.js";function v(e){const[l,i]=f(!1);return t("div",{class:"flex bg-slate-800 rounded-md items-center border-transparent",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[t("div",{class:"bg-yellow-500 rounded-md p-2",children:t(s.Icon,{path:e.skill.mdi,size:1,className:"text-black/80"})}),t("div",{class:"flex flex-col gap-0",children:[t("p",{class:"px-2 flex gap-1 items-center",children:e.skill.name}),l&&e.skill.stars&&e.showRating?t("div",{class:"flex flex-row px-2",children:[t(s.Icon,{path:n,size:.5,class:e.skill.stars>0?"text-amber-500":"text-gray-500"}),t(s.Icon,{path:n,size:.5,class:e.skill.stars>1?"text-amber-500":"text-gray-500"}),t(s.Icon,{path:n,size:.5,class:e.skill.stars>2?"text-amber-500":"text-gray-500"}),t(s.Icon,{path:n,size:.5,class:e.skill.stars>3?"text-amber-500":"text-gray-500"}),t(s.Icon,{path:n,size:.5,class:e.skill.stars>4?"text-amber-500":"text-gray-500"})]}):t(b,{})]})]})}function m(e){return t("button",{onClick:()=>{e.setVisible(!1),e.setSelected(e.name),setTimeout(()=>{e.setSkills(e.skills),e.setVisible(!0)},e.askills.length*110)},children:[t("p",{class:`${e.selected==e.name?"gradient-text":""} hover:-translate-y-1 transition`,children:e.name}),e.selected==e.name?t("div",{class:"flex mt-1 justify-center",children:t("div",{class:"bg-gradient h-1 rounded-full w-2/3"})}):t("div",{class:"h-2"})]})}function O(){const[e,l]=f(x),[i,c]=f(!0),[r,d]=f(a("app.skills.content.languages"));return t("div",{class:"bg-slate-900 h-full w-full md:rounded-b-md",children:t("div",{class:"p-10 gap-5 text-center text-white w-full flex flex-col pt-20 items-center justify-center",children:[t(u,{animationIn:"fadeInDown",animationInDuration:1e3,children:t("h1",{class:"text-4xl font-bold wavy-underline",children:a("app.skills.content.title")})}),t("div",{class:"flex flex-row gap-4 flex-wrap justify-center mb-5 mt-3",children:[t(m,{name:a("app.skills.content.languages"),selected:r,askills:e,skills:x,setSelected:d,setSkills:l,setVisible:c}),t(m,{name:a("app.skills.content.databases"),selected:r,askills:e,skills:h,setSelected:d,setSkills:l,setVisible:c}),t(m,{name:a("app.skills.content.frameworks"),selected:r,askills:e,skills:k,setSelected:d,setSkills:l,setVisible:c}),t(m,{name:a("app.skills.content.tools"),selected:r,askills:e,skills:g,setSelected:d,setSkills:l,setVisible:c})]}),t("div",{class:"flex flex-row gap-4 flex-wrap justify-center",children:e.map(o=>t("div",{children:t(u,{animationIn:"fadeIn",animationOut:"fadeOut",animationInDuration:1e3,animationOutDuration:300,animationInDelay:e.indexOf(o)*150,animationOutDelay:e.indexOf(o)*100,isVisible:i,children:t(v,{skill:o,showRating:!0})})},e.indexOf(o)))})]})})}export{O as default};