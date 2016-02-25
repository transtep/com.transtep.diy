# com.transtep.diy

-

#### Preference 擴充 （config.xml）

|parameter|type|default|description|
|---------|----|-------|-----------|
|diy_style|string、array||css檔案選擇（相對路徑、絕對路徑）|
|diy_script|string、array||js檔案選擇（相對路徑、絕對路徑）|


-

### logo（圖片、時間，取代powered.by.transtep）

``` xml
<preference name="position" value="865,1800,208,109"/>
<preference name="z-index" value="1001" />
<preference name="diy_style" value="./css/style_logo.css"/>
<preference name="diy_script" value="./js/diy_logo.js"/>
```

### cashtip（投錢提示，取代com.transtep.display）

#### Preference 擴充 （config.xml）

|parameter|type|default|description|
|---------|----|-------|-----------|
|diy_pre|string |已投入$|顯示在投入金額的前面|
|diy_suf|string |元，請選擇商品。|顯示在投入金額的後面|
|diy_css|string ||文字的css|

``` xml
<preference name="position" value="0,532,1080,160"/><!-- ifarme 位置 大小 -->
<preference name="opacity" value="0.6" /><!-- ifarme 是否透明 -->
<preference name="display" value="false" /><!-- ifarme 是否顯示 -->
<preference name="z-index" value="4" /><!-- ifarme 先後順序 -->
<preference name="diy_style" value=""/><!-- 加載的 css 路徑 -->
<preference name="diy_script" value="./js/diy_cashtip.js"/><!-- 加載的 js 路徑 -->
<preference name="diy_pre" value="已投入$"/>
<preference name="diy_suf" value="元，請選擇商品。"/>
<preference name="diy_css" value="{'color':'yellow', 'backgroundColor':'#000', 'fontSize':'64px', 'textAlign':'right'}"/>
<feature name="vmc" value="feature.transtep.vmc"/>
```
