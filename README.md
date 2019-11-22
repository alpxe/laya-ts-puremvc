# laya-ts-puremvc
laya ts  multi puremvc

来自:[puremvc-typescript-multicore-framework](https://github.com/PureMVC/puremvc-typescript-multicore-framework)

去掉 .js 与 .min.js 中 的define
以下需要删除:
*****************************************
```
头部:
if( typeof define === "function" )
{
	define( "puremvc", [], function()
	{
	    
尾部: 
        return puremvc;
	});
}
```
*****************************************

1. 将 .js文件放到 bin/libs/ 中, 
   将 .min.js文件放到 bin/libs/min/ 中
   将 .d.ts文件 放到libs/中 (根目录中的libs文件夹)
   
2. 在 bin/index.html文件中>>>
```
<!--用户自定义顺序文件添加到这里-->
<!--jsfile--Custom-->
<script type="text/javascript" src="libs/puremvc-typescript-multicore-1.1.js"></script>
<!--jsfile--Custom-->
```
  
