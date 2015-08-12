#webp图片
##原由&价值
+ `JPEG`/`PNG`压缩到达极限，需要新的图片格式来突破压缩瓶颈。
+ 图片流量在客户端非常大，减少图片加载的时间可以加速页面加载，优化用户体验。
+ 减少图片大小可以减少`cdn`流量，从而减少相应的费用。

##什么是webp
`webp`是一个新的图片格式，由google推出，2010年发布。目前市场上有很多公司已经在用了：
+ [腾讯isux webp介绍](http://isux.tencent.com/introduction-of-webp.html)
+ [淘宝pc首页的图片已经采用webp](http://isux.tencent.com/introduction-of-webp.html)

###数据对比
我本机的图片格式对比页面
#### [demo页](http://10.1.201.195:3000/html/imageTest.html)
`jpg`/`png`的压缩采用的是`imagemagick`,`webp`压缩采用的是谷歌官方提供的`cwebp`。
####测试结论
demo页面得出的结论：
+ webp**有损压缩**相较`jpg`/`png`有损，相同的图片质量的情况下，大小缩小：15%-50%
+ 不建议使用带透明度的`png`压缩
+ 建议使用在有损压缩

#####总结：
`webp`格式适合**有损压缩**、**不透明**的图。

###兼容性
####[兼容性参考网站](http://caniuse.com/#search=webp)

Android 4.0+,chrome 9+完美兼容。

##使用方案（移动端）
+ 对于兼容`webp`图片的机型采用直接放置`webp`图片。
+ 对于不兼容`webp`图片的机型仍然采用`jpg`/`png`格式的图片。

###需要的支持
后端生成压缩图片时新增一种格式。
提供接口图片时，同时提供两种图片格式的链接。

+ `webp`转化的工具地址https://developers.google.com/speed/webp/docs/precompiled

+ `cli`详细的使用方式见这里：https://developers.google.com/speed/webp/docs/using

####命令行举例：

    cwebp -q 80 image.png -o image.webp
    # 意思为将image.png有损压缩80品质输出位image.webp中。

##相关参考：
+ [WebP 探寻之路](http://isux.tencent.com/introduction-of-webp.html)
+ [智图—源于QQ空间图片WebP化的思考](http://isux.tencent.com/zhitu.html)
