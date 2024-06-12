"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87389],{258011:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-7f7f1278","path":"/devices/HS2WD-E.html","title":"HEIMAN HS2WD-E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HEIMAN HS2WD-E control via MQTT","description":"Integrate your HEIMAN HS2WD-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Triggering the alarm","slug":"triggering-the-alarm","link":"#triggering-the-alarm","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Warning (composite)","slug":"warning-composite","link":"#warning-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1718209746000},"filePathRelative":"devices/HS2WD-E.md"}')},283737:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(166252);const n=(0,i._)("h1",{id:"heiman-hs2wd-e",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#heiman-hs2wd-e","aria-hidden":"true"},"#"),(0,i.Uk)(" HEIMAN HS2WD-E")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"HS2WD-E")],-1),a=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Smart siren")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, warning, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HS2WD-E.png",alt:"HEIMAN HS2WD-E"})])],-1),u=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Push the included pin in the small hole on the case of the device and hold for ~5 seconds until the LED starts flashing.</p><h3 id="triggering-the-alarm" tabindex="-1"><a class="header-anchor" href="#triggering-the-alarm" aria-hidden="true">#</a> Triggering the alarm</h3><p>The alarm can be trigged by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> message <code>{&quot;warning&quot;: {&quot;duration&quot;: 10, &quot;mode&quot;: &quot;emergency&quot;, &quot;strobe&quot;: false}}</code>.</p><p>Where:</p><ul><li><code>duration</code>: the number of seconds the alarm will be on (max is 1800 seconds)</li><li><code>mode</code>: <code>stop</code> or <code>emergency</code></li><li><code>strobe</code>: <code>true</code> or <code>false</code> will let the strobe flash once during the alarm</li></ul>',7),h=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite" aria-hidden="true">#</a> Warning (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),g={},m=(0,o(983744).Z)(g,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[d,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[a,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=HEIMAN"},{default:(0,i.w5)((()=>[(0,i.Uk)("HEIMAN")])),_:1})])]),r,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);