大喵教育前端培训
================

## 阶段性测试 2018.11.16

### 大喵教育版权所有 | 出题人：谢然


01. 列出至少 7 个常用 Linux 命令及其基本使用方法
```
cp 复制
mv 移动/重命名
ls 列出文件列表
touch 创建文件
vi/vim 编辑器 i进入编辑模式，esc进入普通模式，:触发命令模式 :w写入 :q退出 :wq写入后退出
vimtutor vi教程
cd 更改工作目录
mkdir 创建文件夹
rm 删除文件   rm -r dir      recursive
rmdir 删除空文件夹
pwd 打印当前工作目录
cat 拼接文件并在控制台输出，往往用来显示文件内容
```

02. 什么是 html 实体？常见 html 实体有哪些？
```
<meta charset="UTF-8">
<meta charset="gb2312">
用表达html里的特殊字符的语法。具体语法是&xxx;
xxx可以是符号名字，也可以#Hxxxx符号的16进制unicode编号
还可以是 #65105; 中间是符号的十进制unicode编号

' &apos;
" &quot;
< &lt;
> &gt;
& &amp;
```

03. 计算机为什么使用二进制？
```
因为模拟信号不精确。
二进制是使用模拟信号表达的数字信号，屏蔽了误差
模拟信号衰减小，传输距离较远
数字信号衰减快，传输距离较近
```

04. 什么是 Unicode？如何表示，有什么作用？最通用的 Unicode 实现是？
```
Unicode就是对全球的每个符号进行统一编号的标准。
全世界每个符号都有唯一且不同于其它符号的编号。可以在同一个文件中表示所有国家的语言符号。

单字节： 0_______
双字节： 110_____ 10______
三字节： 1110____ 10______ 10______
四字节： 11110___ 10______ 10______ 10______

```

05. 什么是 GUI，什么是 CLI，什么是接口/界面？现实生活中有哪些例子？
```
GUI 图形化用户界面 用鼠标指哪打哪
CLI 命令行接口 使用输入命令的形式跟系统或软件进行交互的形式

现实例子：
GUI：仪表盘，
CLI：语言交流。

```

06. 在什么情况下 html 标签可以不需要闭合？
```
根据标准，可以推导出该标签已经结束，则此标签可以不显式闭合。
```

07. 在一些情况下某些非自闭合标签的结束标签可以省略的原因是什么？
```

```

08. 什么是费茨定律？它有哪些应用？
```
目标的可达的难易程度跟与目标的距离成反比，跟目标的大小成正比
具体的应用即为软件可以利用这个定律来提升用户体验，加快一些操作的速度
strokeit
滚轮切换标签
快捷键
```

09. 为什么英文很重要？
```
高质量一手资料绝大部分都是英文
编程语言都是英文的
各种编程环境的报错信息一定是英文的，且，没有人会翻译
```

10. 将二进制 `10010` 数转换为十进制数
```
18
```

11. 将十六进制数 `ABCDEF` 转换为十进制数
```
ABCDEF
10*16**5+11*16**4+12*16**3+13*16**2+14*16+15

11259375
```

12. 将十进制数 `435` 分别转换成二进制数和十六进制数
```
256 + 128 + 32 + 16 + 2 + 1
        110110011
        0001 1011 0011    1b3
```

13. 请说出你对命令行程序的理解，以及其与 GUI 程序的区别
```
使用命令的形式输入命令或启动程序
程序的结果往往也是以文字的形式给出

除了使用形式以外，与GUI程序没有本质区别。
```

14. 列出 HTML 中常见的全局属性
```
class
id
title
data-*
style
hidden
aria-*
role="
contenteditable
```

15. 什么是操作系统的路径（Path）？它的作用及应用场景是？
```
路径是操作系统设置的一个设置项，其内容是一个文件夹列表。
其作用是在命令行界面中输入命令时，会在路径列表中查找对应名称的程序来执行。

在windows下，可以利用它实现快速打开程序：
在运行窗口中输出的命令也会在路径列表中查找。
只需要主动的为路径列表添加一个文件夹条目，然后往该文件夹中放入快捷方式即可。
```

16. 什么是文本文件？什么是二进制文件？它们最明显的区别是？
```
文本文件一般指能够被文本编辑器打开和编辑的文件，其内容全都编码的是文字符号。
所有不是文本文件的文件往往都是二进制文件。
最明显的区别是能否直接被文本编辑器打开
以及内容是否对人可读。
```

17. 为什么说 html 与数学公式有诸多相似之处？
```
最主要的原因在于它们都是树状结构/自相适/递归结构。
html标签的包裹形式跟数学公式中的括号包裹形式一致。
从一段html中取出一段完整的内容，剩下的也依然是符合语法的html代码
数学公式也类似，取出一个子表达式，剩余的也依然是正确的表达式。

数学公式里的任意完全表达式可以替换为任意其它表达式
html中任意标签也可以完全替换为其它标签及其子标签。

```

18. 几种常见图片格式有什么区别和特点？
```
jpg 有损压缩，适合保存现实世界的照片
png 无损压缩，适合保存大片颜色相同的图片，支持256级透明
gif 无损，但保存时颜色会取样256种，导致失真。动图，支持两级透明
webp 有损压缩，支持透明，质量和压缩率都比jpg好，移动端已有很多网站在使用
psd ps专有格式，保存了图片创作过程中的几乎所有信息：图层，操作历史。图片比较大。
bmp 位图。bit map。颜色数据完全未经压缩直接存储在文件中。一般每三个字节保存一个颜色点。
```

19. `data-*` 属性一般是用来干嘛？
```
用来保存html的自定义属性。
之所有不用不带data-的方式保存，是为更符合标准，也为了是向未来兼容（现在写的代码在未来不会break）
  比如如果现在杜撰了一个属性foo
  如果未来foo属性被用来做为某用途，那么以前写的代码就可能break
```

20. 什么是 MIME Type？
```
媒体类型
以type/subtype来表达文件的类型的形式
它会决定很多软件（主要是浏览器）解析一个文件的方式。

html text/html
js   application/javascript
txt  text/plain
css  text/css
json   application/json
```

21. 哪些标签可以使用 target 属性？哪些标签可以使用 href 属性？
```
target:
  base
  a
  form
  area

href:
  base
  a
  area
  link
```

22. 把如下以十进制表示的字节序列按utf8的格式转码为Unicode编码序列。然后查出每个编码对应的具体符号：
```
230, 152, 159, 230, 156, 159, 49

11100110 10011000 10011111  ->  0110011000011111  -> 星
11100110 10011100 10011111  ->  0110011100011111  -> 期
00110001                    ->  00110001          -> '1'


礼拜一
793c ->  0111 1001 0011 1100
62dc -> 0110 0010 1101 1100
4e00 -> 0100 1110 0000 0000

11100111 10100100 10111100 -> e7 a4 bc
11100110 10001011 10011100 -> e6 8b 9c
11100100 10111000 10000000 -> e4 b8 80

    E7    A4    BC    E6    8B    9C    E4    B8    80


```

    
    230, 152, 159, 230, 156, 159, 49

23. group 类型的标签有哪些？
```
  colgroup
  optgroup
  hgroup
  fieldset
```

24. 什么是 SEO？
```
Search Engine Optimisition
指让网站的页面在搜索结果中尽量靠前

一般的手段有：
  https网站
  页面html结构更符合语义化的页面
  网站加载更快的页面
  特意给搜索引擎一些提示
```

25. 分别列出每种常见浏览器的内核名称（自己查）。
```

```

26. 列表类标签有哪些？分别如何使用？需要注意些什么？
```
ul，ol，dl

ul和ol只能有li做为子元素
dl标签的每个entry需要一个dt和一个或多个dd
```

27. 为什么查文档一般不推荐 W3School？
```
详见w3fools.com

内容
  不全
  不权威
  有错

```

28. 为什么不同类型的标签的 fallback 内容要以不同的形式提供？
```
<canvas>您的浏览器该升级了</canvas>
<iframe>您的浏览器该升级了</iframe>
上方两个标签在正常使用的时候里面就是不放内容的。


下方两个标签在正常使用时是要放内容的，而如果把fallback内容放在标签中间的话，就会引起歧义。
<script></script>
<noscript>您的浏览器该升级了</noscript>

<frameset></frameset>
<noframe>您的浏览器该升级了</noframe>

```

29. 分别写出在 head 中设定页面编码，设定 icon，引入样式表的标签
```
<meta charset="UTF8"/>
<link rel="icon shortcut" href="xxx.ico"/>
<link rel="stylesheet" href="xx.css"/>
```

30. 什么叫做可访问性，html 中为此做了什么工作？
```
accessibility，指网站或软件能否在各种情况（设备，网络）下使用
以及网站或软件能否被不同人群使用（不同语种，残障人士，老人小孩，文盲）
```

31. 请确认以下标签分别属性什么类别（Content Category）？
```

```

    
    p, meta, h1, fieldset, option, input, area

32. 写出以下几个符号的 ascii 码：`a，A，0，CR，LF，空格，NBSP`。
```
a 97
A 65
0 48
CR 10
LF 13
space 32
nbsp 160
```

33. 写出如下结构中div元素的所有后代/祖先/子/父/兄弟元素
```
后代：ul li a
祖先：main，section
父：main
兄弟：h2 aside

```

    ```html
    <section>
      <h1><span></span></h1>
      <main>
        <h2></h2>
        <div>
          <ul>
            <li><a href=""><img src="" alt=""></a></li>
          </ul>
        </div>
        <aside>
          <h3></h3>
        </aside>
      </main>
    </section>
    ```

34. 用什么方法扩大一个 checkbox 的可点击区域？
```
用一个label标签与它绑定
```

35. 什么是 BOM 头？
```
Byte Order Marker 字节序标记
它一般是UTF格式的文本文件的文件头
用来表明文件的字节序
目前只有windows的词本程序会默认添加，其它编辑器都不会默认添加。

```

36. 常见的替换元素有哪些？它们与非替换元素最大的区别什么？
```
input, img, select, iframe, button, progress

最大的区别在于，它们都没有后代元素
以及它们往往有内在尺寸
```

37. 让 CSS 在 HTML 页面上生效有哪几种方法，分别写出来。
```html
<style></style>
<link rel="stylesheet" href="a.css" media="screen/print/all">

<div style="color:red;"></div>
```

38. 如何让页面打印时应用不同的CSS效果？
```html
<link rel="stylesheet" href="a.css" media="print">
```

39. 假设 index.html 的路径为 http://user.coding.me/task/index.html ，如下引用的a.css和b.css路径分别为？
```
http://user.coding.me/a.css

http://user.coding.me/b.css

```

    ```html
    <!-- index.html的内容 -->
    <style>
        @import "../a.css";
    </style>
    ```
    ```css
    /* a.css的内容 */
    @import "b.css";
    ```

40. 将如下 markdown 转换成 html
```html
  markdown 编译器 compiler



  <h2>四季变换</h2>

  <p>一年有四季，
    四季有其对应的节气</p>

  <ul>
    <li>春
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </li>
    <li>夏
      <ul>
        <li><strong>小米</strong>发布会</li>
        <li>小米发布会</li>
      </ul>
    </li>
    <li>秋</li>
    <li>冬
      <ul>
        <li>下雪了
          <ul>
            <li>打雪仗了</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <blockquote>知识就是力量，法国就是培根。</blockquote>

  <a href="http://baike.baidu.com/item/%E6%98%A5/6983693">春</a>

  <img alt="春" src="https://www.google.com.hk/images/nav_logo242_hr.png">
  
  <script>var a = 8;</script>
  <script src="a.js"></script>

  <style>div {color: red;}</style>
  <style src="a.css"></style>

  <link rel="stylesheet" href="a.css">

  <link rel="icon" href="aaa.ico">

  <link rel="next-page" href="/post/5?page=8">
  <link rel="prev-page" href="/post/5?page=6">

  <link rel="stylesheet" href="a.css">

```

    ```md
    ## 四季变换

    一年有四季，
    四季有其对应的节气

    * 春
        - 立春
        - 惊蛰
        - 元宵
    * 夏
        - **小米**发布会
        - 华为发布会
    * 秋
        - 开学了
        - 军训了
    * 冬
        - 下雪了
            + 打雪仗了
        - 来暖气了
        - 开空调了

    > 知识就是力量，法国就是培根。

    [春](http://baike.baidu.com/item/%E6%98%A5/6983693)
    ![春](https://www.google.com.hk/images/nav_logo242_hr.png)
    ```

41. 什么是模拟信号？什么是数字信号？它们的区别是？
```
模拟信号：把设备上的物理量直接读出来使用，即为模拟信号
数字信号：把介质上的物理量读出来，理解成是01，即数字信号。

区别：
  误差，模拟信号有不可避免的误差，数字信号由可以消除误差

```

42. 如下表单提交后将跳转到什么地址
```
https://www.baidu.com/s?a=bb&b=123&b=456&c=a5&select=03
```

    ```html
    <form action="https://www.baidu.com/s" target="_blank">
      <input type="text" value="bb" name="a">
      <input type="checkbox" name="b" id="b" value="123" checked>
      <input type="checkbox" name="b" id="b" value="456" checked>
      <input type="checkbox" name="b" id="b" value="789">
      <input type="radio" name="c" id="c" value="a2">
      <input type="radio" name="c" id="c" value="a5" checked>
      <input type="radio" name="c" id="c" value="a4">
      <select name="select">
        <option value="01">0001</option>
        <option value="02">0002</option>
        <option value="03" selected>0003</option>
        <option value="04">0004</option>
        <option value="05">0005</option>
      </select>
      <button>提交</button>
    </form>
    ```

43. 列出 input 的 type 有哪些值，以及为各个值时分别需要怎么使用。
```
type
  text
  password
  checkbox   name
  radio   name
  file  accept   multiple
  button  value
  submit  value
  reset  value

  range min max
  number
  email   multiple
  date
  datetime-locale
  url
  color

```

44. 想要让一个文本输入框在页面打开后自动获得光标要怎么办？
```
<input type="text" autofocus>
```

45. 如何在文本框里放置提示性文字？
```
<input type="text" placeholder="xx">

```

46. option 标签的主体内容太长影响用户体验，你会如何解决？
```
减少option标签的内容
将完整内容放在option标签的title属性中。

```

47. 想要在 textarea 标签中默认显示一段 html 代码最安全的做法是什么？
```
将内容通过html转义后放入textarea标签中间
```

48. 如何禁用一组输入框？
```
fieldset标签，disabled属性
```

49. 如下表格渲染出来后是什么效果？不要直接将代码贴入jsbin中看效果
```

```

    ```html
    <table border=1>
      <caption>美国队长</caption>
      <col>
      <col bgcolor=red>
      <col>
      <colgroup bgcolor=pink>
        <col>
        <col>
        <col bgcolor=brown>
      </colgroup>
      <thead>
        <tr>
          <th>01</th>
          <th>02</th>
          <th>03</th>
          <th>04</th>
          <th>05</th>
          <th>06</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abc</td>
          <td colspan=3 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td colspan=2 rowspan=3>abc</td>
        </tr>
        <tr bgcolor=lightgreen>
          <td colspan=2 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
        </tr>
      </tbody>
    </table>
    ```

50. HTML 的 `aria-*` 与 `role` 属性的作用是？
```
是用来增强页面可访问性的特有属性

缘由：
  网页变的复杂后，会需要由很原始的标签来模拟常见视觉元素，而原始标签本身并不具备此语义，软件又无法通过其样式推导其当前所表达的是什么视觉元素，所以需要role属性来表明其当前表达的视觉元素是什么 
  通过aria-*=*来表达该ui元素的状态等信息。
```

51. 写出如下标签或属性值的英文全称
```
html hyper text markup language
div division
p paragraph
a anchor
em emphasis
tr table row
th table head
td table data
col column
ul unordered list
ol ordered list
li list item
dl description/definition  list
dt d   title
dd d   description
pre preformatted
nav navigation
```


    标签：html,div,p,a,em,tr,th,td,col,ul,ol,li,dl,dt,dd,pre,nav

    属性：coord,rect,poly,href,src
    属性：coordinate,rectangle,polygon,hyper reference,source

52. 中英互翻
```

```

    
    geek，nerd，hacker，edge，bleeding/cutting edge 前沿/尖端/可能存在风险的技术，HTML 实体，coordinate，polygon，bit，byte，alternative，属性，
    obsolate 已废弃
    ，二进制 binary，十进制decimal，十六进制hexdecimal，octal八xx的
    
    ，deprecate不推荐使用
    
    ，loop，行，列，horizontal，语义化，可访问性，