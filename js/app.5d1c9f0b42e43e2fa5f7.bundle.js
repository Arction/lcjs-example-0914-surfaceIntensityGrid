(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const o=a(377),n=a(613),{lightningChart:r,LUT:i,PalettedFill:s,ColorShadingStyles:l,LegendBoxBuilders:d,UIElementBuilders:m,UIOrigins:g,UIDraggingModes:u,emptyFill:c,UILayoutBuilders:h,regularColorSteps:p,Themes:w}=o,{createWaterDropDataGenerator:y}=n,S=r({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Chart3D({theme:w[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Generating example data ...");Promise.all([y().setColumns(100).setRows(100).setWaterDrops([{rowNormalized:.5,columnNormalized:.5,amplitude:20}]).generate(),y().setColumns(100).setRows(100).setVolatility(10).setWaterDrops([{columnNormalized:.22,rowNormalized:.2,amplitude:80},{columnNormalized:.4,rowNormalized:.7,amplitude:70},{columnNormalized:.8,rowNormalized:.3,amplitude:100}]).generate()]).then((e=>{S.setTitle("Rendering data ..."),requestAnimationFrame((()=>{const t=performance.now(),a=e[0],o=e[1],n=S.addSurfaceGridSeries({dataOrder:"rows",columns:100,rows:100}).setIntensityInterpolation("bilinear").invalidateHeightMap(a).invalidateIntensityValues(o);requestAnimationFrame((()=>{const e=performance.now()-t;S.setTitle(`Intensity Surface Grid 100x100 (${10..toFixed(1)} thousand data points) | Ready in ${(e/1e3).toFixed(2)} s`);const a=S.addUIElement(h.Column).setPosition({x:100,y:100}).setOrigin(g.RightTop).setMargin({top:40,right:8}).setDraggingMode(u.notDraggable),o=e=>{n.setColorShadingStyle(e?new l.Phong:new l.Simple),r.setText("Color shading style: "+(e?"Phong":"Simple"))},r=a.addElement(m.CheckBox);r.addEventListener("switch",(e=>o(e.state))),o(!1);const w=n.getWireframeStyle(),y=e=>{if(e)n.setFillStyle(c).setWireframeStyle(x.setThickness(.1));else{const e=S.getTheme();n.setFillStyle(new s({lookUpProperty:"value",lut:new i({interpolate:!0,percentageValues:!0,steps:p(0,1,e.examples.intensityColorPalette)})})).setWireframeStyle(w)}C.setText(e?"Wireframe only":"Fill + Wireframe")},C=a.addElement(m.CheckBox);C.addEventListener("switch",(e=>y(e.state))),y(!1),S.addLegendBox(d.HorizontalLegendBox).add(S)}))}))}));let C=S.addLineSeries();const x=C.getStrokeStyle();C.dispose(),C=void 0}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);