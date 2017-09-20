var data = [];
var dataStr = '1、汪林新作一幅荷花<br>\
<br>\
汪林新作一幅荷花  <br>\
<br>\
<br>\
2、画家<br>\
<br>\
画家<br>\
<br>\
<br>\
3、禅<br>\
<br>\
禅<br>\
<br>\
<br>\
4、花果四则<br>\
<br>\
花果四则<br>\
<br>\
<br>\
5、周元亮国画山水作品<br>\
<br>\
周元亮国画山水作品<br>\
<br>\
<br>\
6、近期小品练习<br>\
<br>\
近期小品练习<br>\
<br>\
<br>\
7、来自越南插画家的插画作品<br>\
<br>\
来自越南插画家的插画作品<br>\
<br>\
<br>\
8、吸烟的老人<br>\
<br>\
 吸烟的老人<br>\
<br>\
<br>\
9、插画<br>\
<br>\
插画<br>\
<br>\
<br>\
10、一组服装插画作品欣赏<br>\
<br>\
一组服装插画作品欣赏<br>\
<br>\
<br>\
11、秋叶女儿情<br>\
<br>\
秋叶女儿情<br>\
<br>\
<br>\
12、余稺国画花鸟作品<br>\
<br>\
余稺国画花鸟作品<br>\
<br>\
<br>\
13、莫也人物油画作品<br>\
<br>\
莫也人物油画作品<br>\
<br>\
<br>\
14、东京小镇街头建筑水彩插画设计欣赏<br>\
<br>\
东京小镇街头建筑水彩插画设计欣赏<br>\
<br>\
<br>\
15、超级精细的美女铅笔画欣赏<br>\
<br>\
超级精细的美女铅笔画欣赏<br>\
';

var d=dataStr.split('<br><br><br>');

for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');

    data.push({
        img:c[0].replace('、',' ')+'.jpg',
        caption:c[0].split('、')[1],
        desc:c[1]
    });
}
