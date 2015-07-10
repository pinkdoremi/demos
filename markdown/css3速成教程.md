#css3基础教程
css3网上有许多的教程。比如慕课网[10天精通css3](http://www.imooc.com/view/33)。

书籍推荐：《图解css3》

资料，用法和文档的查询推荐[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)。

兼容性的查询推荐[CanIUse](www.caniuse.com)。

##css3边框
###边框
####`border:border-width border-color border-style`
+ 边框颜色:`border-color`
+ 边框图片:`border-image`

    使用图片作为边框，可用于移动端上显示1像素线。
+ 边框样式:`border-style`

    可以为`dashed dotted solid double groove ridge
inset outset`

###圆角`border-radius`
如题意，如果想把一个**矩形**的元素变成一个一个**圆形**或者**椭圆**或者**圆角矩形**
或者**蛋形**可以用这个

    border-radius:左上半径 右上半径 右下半径 左下半径;
    border-radius:2px 2px 2px 2px;
这个值也可以这么写：

    border-radius:四个角;
    border-radius:2px;
还可以这么写：

    border-radius:左上和右下 右上和左下;
或者这样：

    border-top-left-radius: 20px;
    border-top-left-radius: 20px 40px;/*x轴半径 y轴半径*/
    border-top-right-radius: 20px;
    border-top-right-radius: 20px 40px;/*x轴半径 y轴半径*/
    border-bottom-left-radius: 20px;
    border-bottom-left-radius: 20px 40px;/*x轴半径 y轴半径*/
    border-bottom-right-radius: 20px;
    border-bottom-right-radius: 20px 40px;/*x轴半径 y轴半径*/
他的值除了一个`px`,`em`等之类外还可以是一个百分数。百分数以`Width/Height`作为标准。
###阴影
####`box-shadow:左右偏移 上下偏移 [模糊半径] [拓展半径] 颜色 [inset](如果有则是内阴影) `
阴影可以重复叠加多个,可以用来画彩虹：

    box-shadow:3px 3px #06c,2px 2px #86c;
但是阴影的模糊半径的效果非常消耗性能，在移动端特别是安卓未开启硬件加速的情况下会非常卡顿。

##颜色
###Opacity模式
`opacity`是表示透明度的属性,他的值可以是`0-1`的值,`0`表示纯透明,`1`表示不透明。
###RGBA
带透明度的rgb颜色

    rgba(r,g,b,a);
其中
+ `R`红色值 `0-255`
+ `G`绿色值 `0-255`
+ `B`蓝色值 `0-255`
+ `Aalpha`透明值 `0-1`

eg.`color:rgba(12,12,12,0.5)`表示透明度为`0.5`的字体颜色。
###HSL&HSLA
用的不多，一般UI会直接给RGBA的色值，但是如果是前端自己开发网页可以用这个调颜色，
这个颜色比较符合常识。

    hsl(h,s,l) | hsla(h,s,l,a)
其中
+ `H`表示色调 度数
+ `S`表示饱和度 0-100%
+ `L`表示亮度 0-100%
+ `A`表示不透明度 0-1

##css3文本
###text-shadow
霓虹灯效果必备。
####`text-shadow:颜色 x偏移 y偏移 模糊半径`
也可以是多个值。
##渐变
老语法：`-webkit-gradient(<type>,<point>[,<radius>]?,<point>[,<radius>]?[,<stop>]*)`
新语法：`-webkit-linear-gradient([<point>||<angle>,]?<stop>,<stop>[,<stop>]*)`
##线性渐变
    background-image:-webkit-linear-gradient(to bottom,orange,green)
    background-image:-webkit-linear-gradient(180deg,orange,green)
    background-image:-webkit-linear-gradient({
        to left,
        #000 0%,
        #111 10%,
        #222 30%,
        #333 60%,
        #444 90%,
        #555 100%
    });
    /*后面再跟上不加前缀的写一遍*/
##径向渐变
    background-image:-webkit-radial-gradient(circle,orange,green)
    background-image:-webkit-radial-gradient(ellipse,orange,green)
    background-image:-webkit-radial-gradient(50px 150px at 200px 150px,orange,green);
    /*后面再跟上不加前缀的写一遍*/
渐变都可以多个叠加，可以让一个div既有一个线性渐变又有一个径向渐变。渐变是节约贷款的非常有效的方式，也是用div徒手画图案的非常重要的一个技能。
##css3选择器
css3产出了非常多的选择器。但是他们的性能都不是怎么好。

|选择器用法|示例|解释|
|-|
|element1~element2 | p~ul | 选择前面有p元素的每个ul元素。|
|[attribute^=value] | a[src^="https"] | 选择其 src 属性值以 "https" 开头的每个a元素。|
|[attribute$=value] | a[src$=".pdf"] | 选择其 src 属性以 ".pdf" 结尾的所有a元素。|
|[attribute*=value] | a[src*="abc"] | 选择其 src 属性中包含 "abc" 子串的每个a元素。|
|:first-of-type | p:first-of-type | 选择属于其父元素的首个p元素的每个p元素。|
|:last-of-type | p:last-of-type | 选择属于其父元素的最后p元素的每个p元素。|
|:only-of-type | p:only-of-type | 选择属于其父元素唯一的p元素的每个p元素。|
|:only-child | p:only-child | 选择属于其父元素的唯一子元素的每个p元素。|
|:nth-child(n) | p:nth-child(2) | 选择属于其父元素的第二个子元素的每个p元素。|
|:nth-last-child(n) | p:nth-last-child(2) | 同上，从最后一个子元素开始计数。|
|:nth-of-type(n) | p:nth-of-type(2) | 选择属于其父元素第二个p元素的每个p元素。|
|:nth-last-of-type(n) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。|
|:last-child | p:last-child | 选择属于其父元素最后一个子元素每个p元素。|
|:root | :root | 选择文档的根元素。|
|:empty | p:empty | 选择没有子元素的每个p元素（包括文本节点）。|
|:target | #news:target | 选择当前活动的 #news 元素。|
|:enabled | input:enabled | 选择每个启用的input元素。|
|:disabled | input:disabled | 选择每个禁用的input元素|
|:checked | input:checked | 选择每个被选中的input元素。|
|:not(selector) | :not(p) | 选择非p元素的每个元素。|
|::selection | ::selection | 选择被用户选取的元素部分。|
##变换`transform`
变换分为几种：
###位移`translate()`

    translateX(x) = translate(x)//水平位移
    translateY(y)//上下位移
    translate(x,y)//平面内位移
    translateZ(z)//z轴位移
    translate3d(x,y,z)3d位移
###旋转`rotate()`

    //值为angle
    rotate()平面内旋转，其实是围着Z轴旋转。 = rotateZ()
    rotateX()其实是围着X轴旋转.
    rotateY()其实是围着Y轴旋转.
    rotate3d(x,y,z,a)//前面的xyz是矢量值,[x,y,z]是一个向量，表示一个旋转轴。a为角度。
###缩放`scale()`

    //值为0-1
    scaleX(x) = scale(x)//横向缩放
    scaleY(y)//纵向缩放
    scale(x,y)//横纵缩放
    scaleZ(z)//z轴缩放
    scale3d(x,y,z)3d缩放

scale还可以用来做翻转

    scaleX(-1)水平翻转
    scaleY(-1)垂直翻转
###斜切`skew()`

    skewX(angle) = skew(angle) //上下边是水平的
    skewY(angle);//左右边是水平的
    skew(angle,angle);//上下左右都不是水平的
skew没有3d的。
###矩阵`matrix()`
结合以上4种变化为一体的,要求矩阵学的好，会计算。
本来transform后面会跟很多属性的，如果有矩阵跟一个就够了。

    matrix(<number>, <number>, <number>, <number>, <number>, <number>)//2D变换
    matrix3d(<number>, <number>, <number>, <number>, <number>, <number>, <number>, <number>, <number>)//3D变换
###中心点`transform-origin`
表示变形的原点

    transform-origin:x y z
它对于translate无效。对rotate(绕着哪一点旋转) skew(以哪里为不动点倾斜) scale(放大原点，中心向四周还是向左放大向右放大)有效。
###中心点`transform-style`
表示变形的原点

    transform-origin:flat | preserve-3d;
flat表示所有子元素都在2D平面呈现。
preserve-3d表示都在3D平面。
###视距`perspective`
用户和Z平面的距离，一般在父级元素上。200-300px左右看起来就挺有立体感的。主要的目的就是产生近大远小的透视效果。

    perspective:200px;
###原点角度`perspective-origin`
表示观察者观察的角度。

    perspective-origin:top left;
###背面可见`backface-visibility`
表示背面是否可见。

    backface-visibility:visible | hidden;
默认visible可见的。
##动画
使用css做动画，主要通过两个属性：
###过渡`transition`
transition有一下几个属性
+ `transition-duration`过渡时间
+ `transition-timing-function`过渡的
    值可以是单一过渡函数`ease`,`ease-out`,`ease-in`,'ease-in-out','linear'

    或者任意[贝塞尔曲线](http://cubic-bezier.com)

    或者`step()`函数，eg.step(1,start);

    前面表示帧数，

    后面可选，end表示动画的结束在最后一步，start表示动画的开始是第一步。
+ `transition-delay` 过渡前的等待时间
+ `transition-property`需要过渡的属性 可以是`all`,`none`
支持过渡的属性：

|Property Name|Type|
|-|-|
|background-color|as color|
|background-position|as repeatable list of simple list of length, percentage, or calc|
|border-bottom-color|as color|
|border-bottom-width|as length|
|border-left-color|as color|
|border-left-width|as length|
|border-right-color|as color|
|border-right-width|as length|
|border-spacing|as simple list of length|
|border-top-color|as color|
|border-top-width|as length|
|bottom|as length, percentage, or calc|
|clip|as rectangle|
|color|as color|
|font-size|as length|
|font-weight|as font weight|
|height|as length, percentage, or calc|
|left|as length, percentage, or calc|
|letter-spacing|as length|
|line-height|as either number or length|
|margin-bottom|as length|
|margin-left|as length|
|margin-right|as length|
|margin-top|as length|
|max-height|as length, percentage, or calc|
|max-width|as length, percentage, or calc|
|min-height|as length, percentage, or calc|
|min-width|as length, percentage, or calc|
|opacity|as number|
|outline-color|as color|
|outline-width|as length|
|padding-bottom|as length|
|padding-left|as length|
|padding-right|as length|
|padding-top|as length|
|right|as length, percentage, or calc|
|text-indent|as length, percentage, or calc|
|text-shadow|as shadow list|
|top|as length, percentage, or calc|
|vertical-align|as length|
|visibility|as visibility|
|width|as length, percentage, or calc|
|word-spacing|as length|
|z-index|as integer|

`transition`也可以连起来写：

    transition:all 0.1s ease 0.2s;

###动画`animation`
动画的几个属性和过渡相似：
+ `animation-duration`:持续时长
+ `animation-timing-function`:动画曲线。
+ `animation-delay`:动画延迟开始的时间。
不同的地方：
+ `animation-name`:keyframes的名字。
+ `animation-iteration-count`:指定动画播放的循环次数。
+ `animation-direction`:动画帧的播放方向。
+ `animation-play-state`:动画帧的播放状态。
+ `animation-fill-mode`:设置动画的时间外属性。
####`@keyframes`
规定这个动画的某个时间点应该是怎样的状态。

    @keyframes IDENT{
        from{/*或者是0%*/
            /*css*/
        }
        percentage{
            /*css*/
        }
        to{/*或者是100%*/
            /*css*/
        }
    }

####`animation-iteration-count`
表示动画播放的次数，可以是infinite无限次。
####`animation-direction`
+ `normal`默认值。向前播放。
+ `alternat`：偶数次向前播放，奇数次向后播放。

####`animation-play-state`
+ `running`运行
+ `paused`暂停动画，动画会回到最开始设置的状态。

####`animation-fill-mode`
+ `none`
+ `forwards`动画结束后停留在关键帧的最后的位置
+ `backwords`元素运用动画样式时迅速应用关键帧的初始帧，明显的就是delay期间。
+ `both`同时具有`forwards`&`backwords`的效果

##flexbox伸缩布局
目前只有最老版本的flexbox是兼容性最好的，还要加前缀。
###容器设置：display

    display:box | inline-box;

在这个容器内部的元素可以通过设置：
    box-flex:NUMBER

来决定这个元素所占的比例。
###方向box-orient
控制子元素排列方向
    box-orient:horizontal | vertical
            水平排列 | 垂直排列

###主轴对齐box-pack
在主轴方向上对额外空间进行管理。
    box-pack:start | end | center | justify

+ `start` 子元素向起始方向靠齐
+ `end` 子元素向结束方向靠齐
+ `center` 子元素在主轴方向居中
+ `justify` 平均分布

###侧轴对齐box-align
在侧轴方向上对额外空间进行管理。
    box-pack:start | end | center | stretch

+ `start` 子元素向起始方向靠齐
+ `end` 子元素向结束方向靠齐
+ `center` 子元素在侧轴方向居中
+ `stretch` 侧轴方向填满

水平排列 | 垂直排列
##媒体查询
根据不同的设备，不同的屏幕，选择不同的样式。

下面介绍几个关键关键词的用法：
###max-width 屏幕宽度小于或等于xxx时生效
    @media screen and (max-width:450){

    }

###min-width 屏幕宽度大于或等于xxx时生效
    @media screen and (min-width:450){

    }
###设备像素比
    @media screen and (-webkit-min-device-pixel-ratio: 2) {

    }

###多个特征一起用
###min-width 屏幕宽度大于或等于xxx时生效
    @media screen and (min-width:450) and (max-width:450){

    }
