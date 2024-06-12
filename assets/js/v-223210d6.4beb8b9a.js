"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1055],{745791:(e,n,i)=>{i.r(n),i.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-223210d6","path":"/devices/5AA-SS-ZA-H0.html","title":"Leedarson 5AA-SS-ZA-H0 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Leedarson 5AA-SS-ZA-H0 control via MQTT","description":"Integrate your Leedarson 5AA-SS-ZA-H0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-04-29T17:11:59.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1718209746000},"filePathRelative":"devices/5AA-SS-ZA-H0.md"}')},181163:(e,n,i)=>{i.r(n),i.d(n,{default:()=>m});var t=i(166252);const l=(0,t._)("h1",{id:"leedarson-5aa-ss-za-h0",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#leedarson-5aa-ss-za-h0","aria-hidden":"true"},"#"),(0,t.Uk)(" Leedarson 5AA-SS-ZA-H0")],-1),a=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th")])],-1),c=(0,t._)("tr",null,[(0,t._)("td",null,"Model"),(0,t._)("td",null,"5AA-SS-ZA-H0")],-1),o=(0,t._)("td",null,"Vendor",-1),u=(0,t._)("tr",null,[(0,t._)("td",null,"Description"),(0,t._)("td",null,"Motion sensor")],-1),d=(0,t._)("tr",null,[(0,t._)("td",null,"Exposes"),(0,t._)("td",null,"occupancy, illuminance, illuminance_lux, linkquality")],-1),s=(0,t._)("tr",null,[(0,t._)("td",null,"Picture"),(0,t._)("td",null,[(0,t._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/5AA-SS-ZA-H0.png",alt:"Leedarson 5AA-SS-ZA-H0"})])],-1),r=(0,t._)("h2",{id:"options",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,t.Uk)(" Options")],-1),h=(0,t.uE)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),p={},m=(0,i(983744).Z)(p,[["render",function(e,n){const i=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.kq)(" !!!! "),(0,t.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,t.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,t.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,t.kq)(" !!!! "),l,(0,t._)("table",null,[a,(0,t._)("tbody",null,[c,(0,t._)("tr",null,[o,(0,t._)("td",null,[(0,t.Wm)(i,{to:"/supported-devices/#v=Leedarson"},{default:(0,t.w5)((()=>[(0,t.Uk)("Leedarson")])),_:1})])]),u,d,s])]),(0,t.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,t.kq)(" Notes END: Do not edit below this line "),r,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[(0,t.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);