(()=>{var e={948:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const n=require("axios");var o=a.n(n),r=a(689),s=a.n(r);const i=function(e){const[t,a]=(0,r.useState)(!1),[n,i]=(0,r.useState)(""),[c,l]=(0,r.useState)(""),[d,m]=(0,r.useState)(""),[p,u]=(0,r.useState)(""),[b,g]=(0,r.useState)(""),[y,f]=(0,r.useState)();return s().createElement("div",{className:"card"},s().createElement("div",{className:"our-card-top"},t&&s().createElement("div",{className:"our-custom-input"},s().createElement("div",{className:"our-custom-input-interior"},s().createElement("input",{onChange:e=>f(e.target.files[0]),className:"form-control form-control-sm",type:"file"}))),s().createElement("img",{src:e.photo?`/uploaded-photos/${e.photo}`:"/noimage.png",className:"card-img-top",alt:`${e.brand} named ${e.name}`})),s().createElement("div",{className:"card-body"},!t&&s().createElement(s().Fragment,null,s().createElement("h4",null,e.name),s().createElement("p",{className:"text-muted small"},e.brand),s().createElement("p",{className:"text-muted small"},e.conversionType),s().createElement("p",{className:"text-muted small"},e.bid),s().createElement("p",{className:"text-muted small"},e.target),!e.readOnly&&s().createElement(s().Fragment,null,s().createElement("button",{onClick:()=>{a(!0),i(e.name),l(e.brand),l(e.conversiontype),l(e.bid),l(e.target),f("")},className:"btn btn-sm btn-primary"},"Edit")," ",s().createElement("button",{onClick:async()=>{o().delete(`/campaign/${e.id}`),e.setCampaigns((t=>t.filter((t=>t._id!=e.id))))},className:"btn btn-sm btn-outline-danger"},"Delete"))),t&&s().createElement("form",{onSubmit:async function(t){t.preventDefault(),a(!1),e.setCampaigns((t=>t.map((function(t){return t._id==e.id?{...t,name:n,brand:c,conversionType:d,bid:p,target:b}:t}))));const r=new FormData;y&&r.append("photo",y),r.append("_id",e.id),r.append("name",n),r.append("brand",c),r.append("conversiontype",d),r.append("bid",p),r.append("target",b);const s=await o().post("/update-campaign",r,{headers:{"Content-Type":"multipart/form-data"}});s.data&&e.setCampaigns((t=>t.map((function(t){return t._id==e.id?{...t,photo:s.data}:t}))))}},s().createElement("div",{className:"mb-1"},s().createElement("input",{autoFocus:!0,onChange:e=>i(e.target.value),type:"text",className:"form-control form-control-sm",value:n})),s().createElement("div",{className:"mb-2"},s().createElement("input",{onChange:e=>l(e.target.value),type:"text",className:"form-control form-control-sm",value:c})),s().createElement("div",{className:"mb-2"},s().createElement("input",{onChange:e=>m(e.target.value),type:"text",className:"form-control form-control-sm",value:d})),s().createElement("div",{className:"mb-2"},s().createElement("input",{onChange:e=>u(e.target.value),type:"text",className:"form-control form-control-sm",value:p})),s().createElement("div",{className:"mb-2"},s().createElement("input",{onChange:e=>g(e.target.value),type:"text",className:"form-control form-control-sm",value:b})),s().createElement("button",{className:"btn btn-sm btn-success"},"Save")," ",s().createElement("button",{onClick:()=>a(!1),className:"btn btn-sm btn-outline-secondary"},"Cancel"))))}},860:e=>{"use strict";e.exports=require("express")},470:e=>{"use strict";e.exports=require("fs-extra")},13:e=>{"use strict";e.exports=require("mongodb")},738:e=>{"use strict";e.exports=require("multer")},689:e=>{"use strict";e.exports=require("react")},684:e=>{"use strict";e.exports=require("react-dom/server")},109:e=>{"use strict";e.exports=require("sanitize-html")},441:e=>{"use strict";e.exports=require("sharp")},17:e=>{"use strict";e.exports=require("path")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const{MongoClient:e,ObjectId:t}=a(13),n=a(860),o=a(738)(),r=a(109),s=a(470),i=a(441);let c;const l=a(17),d=a(689),m=a(684),p=a(948).Z;s.ensureDirSync(l.join("public","uploaded-photos"));const u=n();function b(e,t,a){"string"!=typeof e.body.name&&(e.body.name=""),"string"!=typeof e.body.brand&&(e.body.brand=""),"string"!=typeof e.body.conversionType&&(e.body.conversionType=""),"string"!=typeof e.body.bid&&(e.body.bid=""),"string"!=typeof e.body.target&&(e.body.target=""),"string"!=typeof e.body._id&&(e.body._id=""),e.cleanData={name:r(e.body.name.trim(),{allowedTags:[],allowedAttributes:{}}),brand:r(e.body.brand.trim(),{allowedTags:[],allowedAttributes:{}}),conversionType:r(e.body.conversionType.trim(),{allowedTags:[],allowedAttributes:{}}),bid:r(e.body.bid.trim(),{allowedTags:[],allowedAttributes:{}}),target:r(e.body.target.trim(),{allowedTags:[],allowedAttributes:{}})},a()}u.set("view engine","ejs"),u.set("views","./views"),u.use(n.static("public")),u.use(n.json()),u.use(n.urlencoded({extended:!1})),u.get("/fetch",(async(e,t)=>{const a=await c.collection("campaigns").find().toArray(),n=m.renderToString(d.createElement("div",{className:"container"},!a.length&&d.createElement("p",null,"Não há campanhas cadastradas no momento."),d.createElement("div",{className:"campaign-grid mb-3"},a.map((e=>d.createElement(p,{key:e._id,name:e.name,brand:e.brand,conversionType:e.conversionType,bid:e.bid,target:e.target,photo:e.photo,id:e._id,readOnly:!0}))))));t.render("home",{generatedHTML:n})})),u.get("/advertiser",((e,t)=>{t.render("advertiser")})),u.get("/api/campaigns",(async(e,t)=>{const a=await c.collection("campaigns").find().toArray();t.json(a)})),u.post("/create-campaign",o.single("photo"),b,(async(e,a)=>{if(e.file){const t=`${Date.now()}.jpg`;await i(e.file.buffer).resize(844,456).jpeg({quality:50}).toFile(l.join("public","uploaded-photos",t)),e.cleanData.photo=t}console.log(e.body);const n=await c.collection("campaigns").insertOne(e.cleanData),o=await c.collection("campaigns").findOne({_id:new t(n.insertedId)});a.send(o)})),u.delete("/campaign/:id",(async(e,a)=>{"string"!=typeof e.params.id&&(e.params.id="");const n=await c.collection("campaigns").findOne({_id:new t(e.params.id)});n.photo&&s.remove(l.join("public","uploaded-photos",n.photo)),c.collection("campaigns").deleteOne({_id:new t(e.params.id)}),a.send("Apagado com sucesso!")})),u.post("/update-campaign",o.single("photo",b,(async(e,a)=>{if(e.file){const n=`${Date.now()}.jpg`;await i(e.file.buffer).resize(844,456).jpeg({quality:50}).toFile(l.join("public","uploaded-photos",n)),e.cleanData.photo=n;const o=await c.collection("campaigns").findOneAndUpdate({_id:new t(e.body._id)},{$set:e.cleanData});o.value.photo&&s.remove(l.join("public","uploaded-photos",o.value.photo)),a.send(n)}else c.collection("campaigns").findOneAndUpdate({_id:new t(e.body._id)},{$set:e.cleanData}),a.send(!1)}))),async function(){const t=new e("mongodb://admin:admin@localhost:27017/AdNetworkDB?&authSource=admin");await t.connect(),c=t.db()}(),u.listen(3e3)})()})();