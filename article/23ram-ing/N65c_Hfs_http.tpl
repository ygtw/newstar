<html>

<head>
<meta name="X" content="X">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=big5">
<title>小均分享空間</title>
</head>

<body>

<html>
<head>
<title>小均分享空間 %folder%</title>
<style>\n%style%\n</style>
<link rel="shortcut icon" href="favicon.ico">
</head>
<body>
%login-link%
%loggedin%
%upload-link%
<div class=little>資料夾</div>
<div class=big>%folder%</div>
<div class=body>
%folder-comment%
%up%
%files%
</div>
<div class=little>
<a href="http://N65C.DSLCITY.NET">小均的分享空間</a>
<br>Servertime: %timestamp%
<br>Uptime: %uptime%
<br>Build-time: %build-time%
</div>
</body>
</html>

[style]
body, .button, .row, .big, .little, th, comment { font-family:tahoma, verdana, arial, helvetica, sans; font-weight:normal; font-size:9pt; }
body { margin:0; background-color:#BEBEBE ; padding:10px; }
p { margin:0 }
.big { font-size:12pt; font-weight:bold;  }
.little { font-size: 9pt; }
div.body {
  border-bottom: 4px solid #F5F5F5;
     border-top: 4px solid #F5F5F5;
    border-left: 1px dotted #F5F5F5;
   border-right: 1px dotted #F5F5F5;
  background:#E6E6E6;
  padding:15px;
  margin:15px;
}
A { text-decoration:none;  background-color:Transparent; color:#0055FF; }
A:visited { color:#5555FF; }
A:hover { background-color:#EEEEFF; }
img { border-style:none }
.right { text-align:right }
.row { font-size:12pt; background:#FFFFFF; border:1px solid #BBBBFF }
.comment { font-size:9pt; color:#888888; background:#EEEEEE; padding:3px; border:1px solid #DDDDDD; margin-top:2px; }
.column { color:#555555; font-size:12pt; font-weight:bold; padding-bottom:0; }
.button { padding:5px; padding-top:7px; border:2px solid black; background:white; font-size:9pt; font-weight:bold; }
.flag { font-weight:bold; font-size:9pt; background:white; color:red; text-align:center; border:1px solid red; }

[login-link]
<div style="float:right; padding:15px;"><a href="%encoded-folder%~login" class=button><img border=0 align=absbottom src="/~img27"> 登入</a></div>

[loggedin]
<div style="float:right; padding:15px;"><span class=button><img border=0 align=absbottom src="/~img27"> 
  使用者: %user%</span></div>

[upload-link]
<div style="float:right; padding:15px;"><a href="%encoded-folder%~upload" class=button><img border=0 align=absbottom src="/~img32"> 上傳</a></div>

[up]
<a class=big href="%parent-folder%"><img src="/~img14"> 上頁</a>

[nofiles]
<div class=big>無檔案</div>

[files]
<div class=little>%number-folders% 個資料夾,  %number-files% 個檔案 - 本資料夾檔案總共: %total-size%</div>
<table cellpadding=5>
<th><a href="%encoded-folder%?sort=n"><span class=column>名稱</span></a>
<th><a href="%encoded-folder%?sort=s"><span class=column>容量</span></a>
<th><a href="%encoded-folder%?sort=t"><span class=column>上傳時間</span></a>
<th class=column>點擊次數
%list%
</table>
<p class=right>
<a class=little href='%encoded-folder%~files.lst'>檔案網址表</a>

[file]
<tr><td class=row>%new% <a href="%item-url%"><img align=top src="/~img_file"> %item-name%</a>%comment%<td class="row right">%item-size%<td class="row right">%item-modified%<td class="row right">%item-dl-count%

[folder]
<tr><td class=row>%new% <a href="%item-url%"><img align=top src="/~img_folder"> <b>%item-name%</b></a>%comment%<td align=center class=row><i>資料夾</i><td class="row right">%item-modified%<td class="row right">%item-dl-count%

[link]
<tr><td class=row>%new% <a href="%item-url%"><img align=top src="/~img_link"> <b>%item-name%</b></a>%comment%<td colspan=3 align=center class=row><i>連結</i>

[comment]
<div class=comment>%item-comment%</div>

[folder-comment]
<div style='font-size:10pt; color:#888888; background:#EEEEEE; padding:3px; border:1px solid #DDDDDD; border-bottom:3px solid #DDDDDD; margin-top:2px;'>
%item-comment%</div>

[error-page]
<html><head><style>\n%style%\n</style></head><body>
%content%
<hr>
<div style="font-family:tahoma, verdana, arial, helvetica, sans; font-size:9pt;">
<a href="http://N65C.DSLCITY.NET">小均的分享空間</a>
<br>%timestamp%
</div>
</body>
</html>

[not found]
<h1>網頁錯誤或是找不到網頁 去別的地方吧!</h1>
<a href="/">點我回去</a>

[overload]
<h1>忙碌中抱歉~下次再來</h1>
Please, retry later.

[max contemporary downloads]
<h1>Download limit</h1>
On this server there is a limit on the number of <b>contemporary</b> downloads.
<br>This limit has been reached. Retry later.

[unauthorized]
<h1>無法登入ㄛ＞＜!</h1>
進入這裡需要帳號&密碼
<br>你的帳號或是密碼錯誤了..

[deny]
<h1>Unallowed</h1>
This resource is not accessible.

[ban]
<h1>You are banned.</h1>
%reason%

[upload]
<html>
<head>
<title>小均分享空間 %folder%</title>
<style>\n%style%\n</style>
</head>
<body>
%login-link%
%loggedin%
<div style="float:right; padding:15px;">
<script language="javascript">
var s1, s2;
if (window.parent.progress) s1 = '" target=_parent', s2 = '關閉';
else s1 = '+progress"', s2= '開啟';
document.write('<a href="%encoded-folder%~upload'+s1+' class=button onClick="if (frm.upbtn.disabled) return false;"><img border=0 align=absbottom src="/~img10"> '+s2+' 上傳狀態偵測</a>');
</script>
</div>
<div style="float:right; padding:15px;"><a href="%encoded-folder%" target=_parent class=button><img border=0 align=absbottom src="/~img21"> 離開上傳</a></div>
<div style="margin-top:60px" class=little>folder</div>
<div class=big>%folder%</div>
<div class=body>
<form name=frm action="%encoded-folder%" target=_parent method=post enctype="multipart/form-data" onSubmit="frm.upbtn.disabled=true; return true;">
%upload-files%
<input name=upbtn type=submit value="上傳檔案">
</form>
</div>
<div class=little>
<a href="http://N65C.DSLCITY.NET">小均的分享空間</a>
<br>Servertime: %timestamp%
<br>Uptime: %uptime%
<br>上傳資料夾剩餘空間: %diskfree%
</div>
</body>
</html>

[upload-file]
<input name=fileupload%idx% size=70 type=file><br>

[upload-results]
<html>
<head>
<title>HFS %folder%</title>
<style>\n%style%\n</style>
</head>
<body>
%loggedin%
<div style="margin-top:60px" class=little>資料夾</div>
<div class=big>%folder%</div>
<div class=body>
%uploaded-files%
<br><br>
<a href="%encoded-folder%" target=_parent class=big><img border=0 align=absbottom src="/~img14"> 
點我回去</a>
</div>
<div class=little>
<a href="http://N65C.DSLCITY.NETt">小均的分享空間</a>
<br>Servertime: %timestamp%
<br>Uptime: %uptime%
<br>上傳資料夾剩餘空間: %diskfree%
</div>
</body>
</html>

[upload-success]
<li>%item-name%: <b>成功！！</b> --- %item-size%  (Speed %speed% KB/s)

[upload-failed]
<li>%item-name%: <b>失敗＞＜</b> ---  %reason%

[upload+progress]
<html>
<head>
<frameset cols=200,*>
  <frame name=progress src="/~progress" scrolling=auto marginwidth=0>
  <frame src="%encoded-folder%~upload-no-progress" scrolling=auto>
</frameset>
</head>
<body>
</body>
</html>

[progress]
<html>
<head>
<meta http-equiv="Refresh" content="3;URL=/~progress">
<title>HFS - Progress status</title>
<style>
%style%
.filename { font-weight:bold; font-size:9pt; }
.bytes { font-size:9pt; }
.perc { font-size:14px; vertical-align:middle; }
.out_bar { width:100px; font-size:15px; background:black; border:black 1px solid; margin-right:5px; }
.in_bar { height:16px; background:white; color:white;  }
div.body { margin-left:0; margin-right:0; }
body { padding:2px; }
</style>
</head>
<body>
<div class=big>上傳狀態偵測</div>
每3秒刷新一次
<br><br><img src="/~img_graph190x40" style="border:white outset 2px;">
<div class=body>
%progress-files%
</div>
<div class=little>Uptime: %uptime%</div>
</body>
</html>

[progress-nofiles]
<div class=big>沒有東西正在上傳</div>

[progress-upload-file]
<span class=flag>&nbsp;up&nbsp;</span>
<span class=filename>%filename%</span>
<div class=bytes>
%done-bytes% / %total-bytes% bytes
<br>Speed: %speed-kb% KB/s
</div>
<div style="margin-top:5px; margin-bottom:20px;">
  <span class=out_bar><span class=in_bar style="width:%perc%px"></span></span> <span class=perc>%perc%%</span>
</div>

[progress-download-file]
<span class=flag>&nbsp;down&nbsp;</span>
<span class=filename>%filename%</span>
<div class=bytes>
%done-bytes% / %total-bytes% bytes
<br>Speed: %speed-kb% KB/s
</div>
<div style="margin-top:5px; margin-bottom:20px;">
  <span class=out_bar><span class=in_bar style="width:%perc%px"></span></span><span class=perc> %perc%%</span>
</div>

[newfile]
<span class=flag>&nbsp;NEW&nbsp;</span>
</body>

</html>