import{d as g,e as N,V as y,a as e,f as c,q as o,m as v,$ as l,g as m,h as d,i as b,l as p,n as w,o as C,p as S}from"./entry.client--S8bOp_A.js";import{R as $}from"./Toc-DyGMFrpl-Cf84Y--J.js";import{C as z,a as A,x as V}from"./SchemaView-OqVwN4ss-CfJYENio.js";import"./circular-CMUzw2Qb-BJl89CgX.js";const q=S(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function D(){const{input:h,type:x,versions:u,version:t,options:r}=g(),j=N(q,{input:h,type:x}),{data:a}=y(j),n=a.schema.components?.schemas??[],f=Object.entries(u).length>1,i=r?.showVersionSelect==="always"||f&&r?.showVersionSelect!=="hide";return n.length?e.jsxs("div",{className:"grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between","data-pagefind-filter":"section:openapi","data-pagefind-meta":"section:openapi",children:[e.jsxs(c,{children:[e.jsxs("title",{children:["Schemas ",i?t:""]}),e.jsx("meta",{name:"description",content:"List of schemas used by the API."})]}),e.jsxs("div",{className:"pt-(--padding-content-top) pb-(--padding-content-bottom)",children:[e.jsxs(o,{className:"w-full",children:[e.jsxs("div",{className:"flex flex-col gap-y-4 sm:flex-row justify-around items-start sm:items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(v,{children:a.schema.title}),e.jsxs(l,{level:1,id:"schemas",registerNavigationAnchor:!0,className:"mb-0",children:["Schemas",i&&e.jsxs("span",{className:"text-xl text-muted-foreground ms-1.5",children:["(",t,")"]})]})]}),a.schema.description&&e.jsxs(m,{className:"flex items-center gap-1 text-sm font-medium text-muted-foreground group",children:[e.jsx("span",{children:"API information"}),e.jsx(z,{className:"group-data-[state=open]:hidden translate-y-px",size:14}),e.jsx(A,{className:"group-data-[state=closed]:hidden translate-y-px",size:13})]})]}),a.schema.description&&e.jsx(d,{className:"CollapsibleContent",children:e.jsx("div",{className:"mt-4 max-w-full border rounded-sm bg-muted/25",children:e.jsx(b,{className:"max-w-full prose-img:max-w-prose border-border p-3 lg:p-5",content:a.schema.description})})})]}),e.jsx("hr",{className:"my-8"}),e.jsx("div",{className:"flex flex-col gap-y-5",children:n.map(s=>e.jsxs(o,{className:"group",defaultOpen:!0,children:[e.jsxs(l,{registerNavigationAnchor:!0,level:2,className:"flex items-center gap-1 justify-between w-fit",id:p(s.name),children:[s.name," ",e.jsx(m,{asChild:!0,children:e.jsx(w,{variant:"ghost",size:"icon",className:"size-6",children:e.jsx(C,{size:16,className:"group-data-[state=open]:rotate-90 transition cursor-pointer"})})})]}),e.jsx(d,{className:"mt-4 CollapsibleContent",children:e.jsx(V,{schema:s.schema})})]},s.name))})]}),e.jsx($,{entries:n.map(s=>({id:p(s.name),value:s.name,depth:1}))})]}):e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsxs("title",{children:["Schemas ",i?t:""]}),e.jsx("meta",{name:"description",content:"List of schemas used by the API."})]}),"No schemas found"]})}export{D as SchemaList};
//# sourceMappingURL=SchemaList-DtQZ98Lm-Cxpmqgv5.js.map
