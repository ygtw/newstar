<!--
//
// ===========================================================�i�{����T�Ϊ��v�ŧi�j====
//  ExoBUD MP(II) v4.1tc+ [Traditional Chinese Version]
//  Copyright(Pe) 1999-2003 Jinwoong Yu[ExoBUD], Kendrick Wong[kiddiken.net].
// =====================================================================================
//  �{����@��: �h�ö�(Jinwoong Yu)         �c�餤��Ƨ@��: �媽(Kendrick Wong/kiddiken)
//    �ӤH����: http://exobud.nayana.org          �ӤH����: http://kiddiken.net
//    �q�l�l��: exobud@hanmail.net                �q�l�l��: webmaster@kiddiken.net
//    ICQ �b��: 96138429                          MSN �b��: kiddiken@msn.com
//    �o����: 2003.01.10(�����������媩)        �o����: 2003.03.23(�c�餤�孺�Ӫ���)
// =====================================================================================
//
//    ���v�Ҧ��C
//    �дL�����z�]���v�G �L�ױz�糧�{�� ExoBUD MP(II) �@����ק�B�s�@(��½Ķ)���O�A�бz
//    *����*�O�d���q���v�ŧi�����e�A�]�A�{��(�έ��O)��@�̤Τ���Ƨ@�̪��W�r�M�����s���C
//
//    �p�G�z�Q�n�H�o���c�餤�媩���{������¦�A½Ķ����L�y���������A�Ρ��Φb���ں����W�A
//    ���}�o��z�ҭק�L�������A�бz�����H�ǰe�q�l�l�󪺤覡�A�x�D�ڭ̪��P�N�C
//
//    �Ф��n�N�{��(�έ��O)��@�̩Τ���Ƨ@�̪��W�r�令�z�ۤv���W�r�A
//    �M��H�t�@�{���W�٭��s�R�W��b�����W���}�o��δ������{���A�]���o�O�Y�����I�v�欰�C
//
//    �o�O���q�K�O�{���A�ҥH�Ф��n�ϥΦb�ӷ~�γ~�W�C
//    �t�~�A�z�礣�i�N���{��(�����γ���)�ƻs���L�x�s�C��(�Ҧp���Ф�)�W�@�c����Q�γ~�C
//
//    ���p�]���ϥΥ��{���ӥO�z�X����ƿ򥢩ηl���A�{����@�̤Τ���Ƨ@�̧����ι��t�d�C
//
// =====================================================================================

// ��z�ק糧�{������l�X�ɡA�Ъ`�N����ק�᪺�{���A�i��|�ɭP�@�ǥ��b���椤�����ε{��
// �L�k���`�B�@�F�t�~��n�d�N�bJavaScript�W�ҨϥΪ��ܼƦW�٩M�]�w�ȡA�j�p�g�O�����O���C

var objMmInfo = null;
var intMmCnt = 0;
var intSelMmCnt = 0;
var intActMmCnt = 0;
var cActIdx = 0;
var cActTit = "nAnT";
var strMmInfo = "ExoBUD �C���ɮ׸�T";

var blnfpl = false;
var blnEnabled = false;
var blnEOT = false;
var arrSelMm = null;
var arrActMm = null;
var intExobudStat = 0;
var tidTLab = null;
var tidErr = null;
var tidMsg = null;
var intErrCnt = 0;
var blnRept = false;

// �o�O�u�۰ʳs�򼽩�v���]�w�C�@��ӻ��A����@�����֧�����N�|�۰ʸ���U�@���C
// ���O�p�G�z�n���񪺴C��O���T�ɮ�(�Ҧp:MV)���ܡA�̦n�N�o�ӳ]�w�ȧאּ false �C
//    true = �۰ʳs�򼽩�
//   false = ���n�۰ʳs�򼽩�A���ϥΪ̦ۦ�D��U�@������
var blnAutoProc = true;

// �]�w���񭱪O�W����ܪ��ɶ����סA�w�]�O�H���`�覡(Elapse)��έ˼Ƥ覡(Lapse)��ܡG
//    true = �H���`�覡��ܮɶ����סA�Y�ʺA�a��ܦ��ؤw���񪺮ɶ�
//   false = �H�˼Ƥ覡��ܮɶ����סA�Y�ʺA�a��ܦ��سѾl���ɶ�
var blnElaps = true;

// �]�w����C�����ؤ���������ɶ�(Delay Time)�A���O�@��(msec)�C
// �C100�@��N��0.1��A�w�]�ȬO500�@��(�Y0.5��)�A�̤֤]�n�]��100�@��C
var intDelay = 500;

// wmpInit() �禡: �ϥ� wmp-obj v7.x �{���w�إ����ҳ]�w
function wmpInit(){
 var wmps = Exobud.settings;
 var wmpc = Exobud.ClosedCaption;

 wmps.autoStart = true;
 wmps.balance = 0;
 wmps.enableErrorDialogs = false;
 wmps.invokeURLs = false;
 wmps.mute = false;
 wmps.playCount = 1;
 wmps.rate = 1;
 wmps.volume = 100;
 if(blnUseSmi){wmpc.captioningID="capText"; capText.style.display="";}
 Exobud.enabled = true;
}

// mkMmPath() �禡: �ǳƫإ� Multi-object ���}�C
function mkMmPath(u,t,f,s){
 this.mmUrl = u;
 this.mmTit = t;
 this.mmDur = 0;
 this.selMm = f;
 this.actMm = f;
 if(blnUseSmi){this.mmSmi=s;}
}

// mkList() �禡: �إ� Multi-object ���}�C
function mkList(u,t,s,f){
 var cu = u;
 var ct = t;
 var cs = s;
 var cf = f;
 var idx = 0;

 if(objMmInfo == null){objMmInfo=new Array(); idx=0;}
 else {idx=objMmInfo.length;}
 if(u=="" || u==null){cu="mms://";}
 if(t=="" || t==null){ct="nAnT";}
 if(f=="f" || f=="F"){cf="f";}
 else {cf="t"; intSelMmCnt++;}

 if(blnUseSmi){
   objMmInfo[idx]=new mkMmPath(cu,ct,cf,cs);
 } else {
   objMmInfo[idx]=new mkMmPath(cu,ct,cf);
 }

 intActMmCnt = intSelMmCnt;
 intMmCnt = objMmInfo.length;
}

// mkSel() �禡: �إߤw������񶵥�(Selected Media)���}�C
function mkSel(){
 arrSelMm = null;
 intSelMmCnt = 0;
 var selidx = 0;

 if(intMmCnt<=0){intExobudStat=1; blnEnabled=false; return;} // �S�����󼽩�M�涵��

 arrSelMm = new Array();
 for(var i=0; i<intMmCnt; i++){
   if(objMmInfo[i].selMm =="t"){arrSelMm[selidx]=i;selidx++;}
 }
 intSelMmCnt=arrSelMm.length;

 if(intSelMmCnt<=0){blnEnabled=false; intExobudStat=2; arrSelMm=null; return;}
 else {blnEnabled=true; mkAct();}
}

// mkAct() �禡: �إߤw�ҥμ��񶵥�(Activated Media)���}�C
function mkAct(){
 arrActMm = null;
 intActMmCnt = 0;
 var selidx = 0;
 var actidx = 0;

 if(blnEnabled){
   arrActMm=new Array();
   for(var i=0; i<intSelMmCnt; i++){
     selidx=arrSelMm[i];
     if(objMmInfo[selidx].actMm=="t"){arrActMm[actidx]=selidx; actidx++;}
   }
   intActMmCnt=arrActMm.length;
 }
 else { return;}
 if(intActMmCnt<=0){blnEOT=true;arrActMm=null;}
 else {blnEOT=false;}
}

// chkAllSel() �禡: ��������Ҧ�������M�涵��
function chkAllSel(){
 for(var i=0; i<intMmCnt; i++){
   objMmInfo[i].selMm="t";
   objMmInfo[i].actMm="t";
 }
 mkSel();
}

// chkAllDesel() �禡: ������Ҧ�������M�涵��
function chkAllDesel(){
 for(var i=0; i<intMmCnt; i++){
   objMmInfo[i].selMm="f";
   objMmInfo[i].actMm="f";
 }
 mkSel();
}

// chkItemSel() �禡: ����Τ��������M�涵��
function chkItemSel(idx){
 if(objMmInfo[idx].selMm =="t"){
   objMmInfo[idx].selMm="f";objMmInfo[idx].actMm="f";
 } else {
   objMmInfo[idx].selMm="t";objMmInfo[idx].actMm="t";
 }
 mkSel();
}

// chkItemAct() �禡: �N�Y�Ӥw�ҥμ��񶵥�(Activated Media)�ᵲ
function chkItemAct(idx){
 objMmInfo[idx].actMm="f";
 mkAct();
}

// mkSelAct() �禡: �N�w������񶵥�(Selected Media)�[�J��w�ҥμ��񶵥�(Activated Media)
function mkSelAct(){
 var idx=0;
 for(var i=0; i<intSelMmCnt; i++){
   idx=arrSelMm[i];
   objMmInfo[idx].actMm="t";
 }
 mkAct();
}

// initExobud() �禡: ��l�� ExoBUD MP(II) �C�鼽��{��
function initExobud(){
 wmpInit();
 mkSel();
 blnfpl = false;

 if(!blnShowTitle){ document.exobudform.disp1.style.display = "none";}
 if(!blnShowTime){ document.exobudform.disp2.style.display = "none";}

 if(!blnShowVolCtrl) {
   document.exobudform.vmute.style.display = "none";
   document.exobudform.vdn.style.display = "none";
   document.exobudform.vup.style.display = "none";
 }
 if(!blnShowPlist){ document.exobudform.plist.style.display = "none";}

 if(blnRept){ document.exobudform.rept.style.background=btnOnColor;}
 else { document.exobudform.rept.style.background=btnOffColor;}

 if(blnRndPlay){ document.exobudform.pmode.value="��"; document.exobudform.pmode.style.background=btnOnColor;}
 else { document.exobudform.pmode.value="��"; document.exobudform.pmode.style.background=btnOffColor;}
 showTLab();
 document.exobudform.disp1.value = "    ���P���p�~ - ���ֲ���";
 if(blnStatusBar){ window.status=('    ���P���p�~ - ���ֲ���');}
 if(blnAutoStart){startExobud();}
}

// startExobud() �禡: �}�l���񦱥�
function startExobud(){
 var wmps = Exobud.playState;
 if(wmps==2){Exobud.controls.play(); return;}
 if(wmps==3){ return;}

 blnfpl=false;
 if(!blnEnabled){waitMsg();return;}
 if(blnEOT){mkSelAct();}
 if(intErrCnt>0){intErrCnt=0;tidErr=setTimeout('retryPlay(),1000');return;}
 if(blnRndPlay){rndPlay();}
 else {cActIdx=arrActMm[0]; selMmPlay(cActIdx);}
}

// selMmPlay() �禡: �B�z�C����D
function selMmPlay(idx){
 clearTimeout(tidErr);
 cActIdx=idx;
 var trknum=idx+1;
 var ctit =objMmInfo[idx].mmTit;
 if(ctit=="nAnT"){ctit="(�S���C����D)"}
 if(blnUseSmi){Exobud.ClosedCaption.SAMIFileName = objMmInfo[idx].mmSmi;}
 Exobud.URL = objMmInfo[idx].mmUrl;
 cActTit = "T" + trknum + ". " + ctit;
 document.exobudform.disp1.value = cActTit;
 if(blnStatusBar){ window.status=(cActTit);}
 chkItemAct(cActIdx);
}

// wmpPlay() �禡: �ϥ� wmp-obj v7.x �{���w���񦱥�
function wmpPlay(){Exobud.controls.play();}

// wmpStop() �禡: ����񦱥ؤ���ܡu�N���v���A�T��
function wmpStop(){
 intErrCnt=0;
 clearTimeout(tidErr);
 clearInterval(tidTLab);
 document.exobudform.stopt.style.background=btnOnColor;
 document.exobudform.pauzt.style.background=btnOffColor;
 imgChange("scope",0);
 showTLab();
 mkSelAct();
 Exobud.controls.stop();
 Exobud.close();
 document.exobudform.disp1.value = "    �P���p�~ - ���ֲ� [�N��]";
 if(blnStatusBar){ window.status=('    �P���p�~ - ���ֲ� [�N��]');return true;}
}

// wmpPause() �禡: �ϥ� wmp-obj v7.x �{���w�Ȱ����񦱥�
function wmpPause(){Exobud.controls.pause();}

// wmpPP() �禡: �b�Ȱ�����M�~�򼽩񤧶��i�����
function wmpPP(){
 var wmps = Exobud.playState;
 var wmpc = Exobud.controls;
 clearInterval(tidTLab);
 clearTimeout(tidMsg);
 if(wmps==2){wmpc.play();}
 if(wmps==3){wmpc.pause(); document.exobudform.disp2.value="�Ȱ�"; tidMsg=setTimeout('rtnTLab()',1500);}
 return;
}

// rndPlay() �禡: �H������(Random Play)���B��覡
function rndPlay(){
 if(!blnEnabled){waitMsg();return;}
 intErrCnt=0;
 var idx=Math.floor(Math.random() * intActMmCnt);
 cActIdx=arrActMm[idx];
 selMmPlay(cActIdx);
}

// playAuto() �禡: ��w�ҥμ��񶵥ضi��u�۰ʳs�򼽩�v���B�z
// �o�O�ھڤW�� blnAutoProc ���]�w�ȦӨM�w���ʧ@�C
function playAuto(){
 if(blnRept){selMmPlay(cActIdx);return;}
 if(!blnAutoProc){wmpStop();return;}
 if(blnfpl){wmpStop();return;}
 if(!blnEnabled){wmpStop();return;}
 if(blnEOT){
   if(blnLoopTrk){startExobud();}
   else {wmpStop();}
 } else {
   if(blnRndPlay){rndPlay();}
   else {cActIdx=arrActMm[0]; selMmPlay(cActIdx);}
 }
}

// ����ϥΪ̦b����M��W���I�諸��@����
function selPlPlay(idx){
 blnfpl=true;
 selMmPlay(idx);
}

// playPrev() �禡: ����W�@���w�ҥμ��񶵥�
function playPrev(){
 var wmps = Exobud.playState;
 if(wmps==2 || wmps==3){Exobud.controls.stop();}
 blnfpl=false;
 if(!blnEnabled){waitMsg();return;}
 if(blnEOT){mkSelAct();}

 intErrCnt=0;
 if(blnRndPlay){rndPlay();}
 else {
   var idx=cActIdx;
   var blnFind=false;
   for(var i=0;i<intSelMmCnt;i++){ if(cActIdx==arrSelMm[i]){idx=i-1; blnFind=true;}}
   if(!blnFind){startExobud();return;}
   if(idx<0){idx=intSelMmCnt-1;cActIdx=arrSelMm[idx];}
   else {cActIdx=arrSelMm[idx];}
   selMmPlay(cActIdx);
 }
}

// playNext() �禡: ����U�@���w�ҥμ��񶵥�
function playNext(){
 var wmps = Exobud.playState;
 if(wmps==2 || wmps==3){Exobud.controls.stop();}
 blnfpl=false;
 if(!blnEnabled){waitMsg();return;}
 if(blnEOT){mkSelAct();}

 intErrCnt=0;
 if(blnRndPlay){rndPlay();}
 else {
   var idx=cActIdx;
   var blnFind=false;
   for(var i=0;i<intSelMmCnt;i++){ if(cActIdx==arrSelMm[i]){idx=i+1; blnFind=true;}}
   if(!blnFind){startExobud();return;}
   if(idx>=intSelMmCnt){idx=0;cActIdx=arrSelMm[idx];}
   else {cActIdx=arrSelMm[idx];}
   selMmPlay(cActIdx);
 }
}

// retryPlay() �禡: �A�����ճs�u��C���ɮ�
function retryPlay(){
 selMmPlay(cActIdx);
}

// chkRept() �禡: �����O�_���Ƽ���ثe������(�w�ҥμ��񶵥�)
function chkRept(){
 var wmps = Exobud.playState;
 if(wmps==3){clearInterval(tidTLab);}
 if(blnRept){
   blnRept=false; document.exobudform.rept.style.background=btnOffColor; document.exobudform.disp2.value="�����Ƽ���";
 } else {
   blnRept=true; document.exobudform.rept.style.background=btnOnColor; document.exobudform.disp2.value="���Ƽ���";
 }
 tidMsg=setTimeout('rtnTLab()',1000);
}

// chgPMode() �禡: �����H�`��(Sequential)����H��(Random)���覡�Ӽ���C�鶵��
function chgPMode(){
 var wmps = Exobud.playState;
 if(wmps==3){clearInterval(tidTLab);}
 if(blnRndPlay){
   blnRndPlay=false;
   document.exobudform.pmode.value="��";
   document.exobudform.pmode.style.background=btnOffColor;
   document.exobudform.disp2.value="�`�Ǽ���";
 } else {
   blnRndPlay=true;
   document.exobudform.pmode.value="��";
   document.exobudform.pmode.style.background=btnOnColor;
   document.exobudform.disp2.value="�H������";
 }
 tidMsg=setTimeout('rtnTLab()',1000);
}

// evtOSChg() �禡: �H�u�X�����覡��ܴC���ɮ׸�T
function evtOSChg(f){
//   �H�U�O���A�� (f) ������:
//    0(���w�q)       8(�ഫ�C�餤)   9(�M��C�餤)  10(�s�u�C�餤)  11(���J�C�餤)
//   12(�}�ҴC�餤)  13(�C��w�}��)  20(���ݼ���)  21(���b�}�Ҥ������s��)

 if(f==8){capText.innerHTML="ExoBUD MP(II) �r����ܨt��(SMI)";}
 if(f==13){
   var strTitle = Exobud.currentMedia.getItemInfo("Title");
   if(strTitle.length <= 0){strTitle = "(���R�W�����D)"}
   var strAuthor = Exobud.currentMedia.getItemInfo("Author");
   if(strAuthor.length <= 0){strAuthor = "(���R�W���t�X��)"}
   var strCopy = Exobud.currentMedia.getItemInfo("Copyright");
   if(strCopy.length <= 0){strCopy = "(�S���ۧ@�v��T)"}
   var strType = Exobud.currentMedia.getItemInfo("MediaType");
   var strDur = Exobud.currentMedia.durationString;
   var strUrl = Exobud.URL;
   var trknum = cActIdx+1;
   var ctit = objMmInfo[cActIdx].mmTit;
   if(ctit=="nAnT"){
     objMmInfo[cActIdx].mmTit = strAuthor + " - " + strTitle;
     ctit = strAuthor + " - " + strTitle;
     cActTit = "T" + trknum + ". " + ctit;
     document.exobudform.disp1.value = cActTit;
   }

   strMmInfo  = "�@�@���D�G " + strTitle + " (�Φ�: " + strType +")" + "\n\n";
   strMmInfo += "�@�t�X�̡G " + strAuthor + "\n\n";
   strMmInfo += "�ɮצ�m�G " + strUrl + "\n\n";
   strMmInfo += "�@�ۧ@�v�G " + strCopy + "\n\n";
   strMmInfo += "�ɶ����סG " + strDur + "\n\n\n";
   strMmInfo += "�@�@ Brought to you by ExoBUD MP(II).\n";
   strMmInfo += "�@�@ Copyright(C) 1999-2003 Jinwoong Yu.\n";
   strMmInfo += "�@�@ ALL RIGHTS RESERVED.\n";
   if(blnShowMmInfo){alert(strMmInfo);}
 }
}

// evtPSChg() �禡: ��������{�����ʧ@
function evtPSChg(f){
//   �H�U�O���A�� (f) ������:
//    0(���w�q)       1(�w�����)   2(�w�Ȱ�����)   3(���b����)   4(�V�e�j��)     5(�V��j��)
//    6(�w�ĳB�z��)   7(���ݤ�)       8(�w���񧹲�)   9(�ഫ���ؤ�)  10(�N�����A)

 switch(f){
   case 1:
     evtStop();
     break;
   case 2:
     evtPause();
     break;
   case 3:
     evtPlay();
     break;
   case 8:
     setTimeout('playAuto()', intDelay);
     break;
 }
}

// evtWmpBuff() �禡: ��C���ɮ׶i��w�ĳB�z(Buffering)���ʧ@
function evtWmpBuff(f){
 if(f){
   document.exobudform.disp2.value = "�w�ĳB�z��";
   var msg = "(�w�ĳB�z��) " + cActTit;
   document.exobudform.disp1.value = msg;
   if(blnStatusBar){ window.status=(msg);}
 } else {
   document.exobudform.disp1.value = cActTit; showTLab();
 }
}

// evtWmpError() �禡: ��L�k�s�u��C���ɮ׮ɡA��ܿ��~�T��
function evtWmpError(){
 intErrCnt++;
 Exobud.Error.clearErrorQueue();
 if(intErrCnt<=3){
   document.exobudform.disp2.value = "���ճs�u (" + intErrCnt + ")";
   var msg = "(���ղ� " + intErrCnt + " ���s�u) " + cActTit;
   document.exobudform.disp1.value = "<�L�k����> " + cActTit;
   if(blnStatusBar){ window.status=(msg);}
   tidErr=setTimeout('retryPlay()',1000);
 } else {
   clearTimeout(tidErr);
   intErrCnt=0;showTLab();
   var msg = "�w�����զA�s�u�C�{�b�N�|����U�@�����ءC";
   if(blnStatusBar){ window.status=(msg);}
   setTimeout('playAuto()',1000);}
}

// evtStop() �禡: �����
function evtStop(){
 clearTimeout(tidErr);
 clearInterval(tidTLab);
 showTLab();
 intErrCnt=0;
 document.exobudform.pauzt.style.background=btnOffColor;
 document.exobudform.playt.style.background=btnOffColor;
 imgChange("scope",0);
 document.exobudform.disp1.value = "ExoBUD MP(II) v4.1tc+ [���ݼ���U�@������]";
 if(blnStatusBar){ window.status=('ExoBUD MP(II) v4.1tc+ [���ݼ���U�@������]');return true;}
}

// evtPause() �禡: �Ȱ�����
function evtPause(){
 document.exobudform.pauzt.style.background=btnOnColor;
 document.exobudform.playt.style.background=btnOffColor;
 document.exobudform.stopt.style.background=btnOffColor;
 imgChange("scope",0);
 clearInterval(tidTLab);
 showTLab();
}

// evtPlay() �禡: �}�l����
function evtPlay(){
 document.exobudform.pauzt.style.background=btnOffColor;
 document.exobudform.playt.style.background=btnOnColor;
 document.exobudform.stopt.style.background=btnOffColor;
 imgChange("scope",1);
 tidTLab=setInterval('showTLab()',1000);
}

// showTLab() �禡: ��ܮɶ�����
function showTLab(){
 var ps = Exobud.playState;
 if(ps==2 || ps==3){
   var cp=Exobud.controls.currentPosition;
   var cps=Exobud.controls.currentPositionString;
   var dur=Exobud.currentMedia.duration;
   var durs=Exobud.currentMedia.durationString;
   if(blnElaps){
     document.exobudform.disp2.value = cps + " | " + durs;
     var msg = cActTit + " (" + cps + " | " + durs + ")";
     if(ps==2){msg = "(�Ȱ�) " + msg;}
     if(blnStatusBar){ window.status=(msg);return true;}
   } else {
     var laps = dur-cp;
     var strLaps = wmpTime(laps);
     document.exobudform.disp2.value = strLaps + " | " + durs;
     var msg = cActTit + " (" + strLaps + " | " + durs + ")";
     if(ps==2){msg = "(�Ȱ�) " + msg;}
     if(blnStatusBar){ window.status=(msg);return true;}
   }

 } else {
   document.exobudform.disp2.value = "00:00 | 00:00";
 }
}

// chgTimeFmt() �禡: �ܧ�ɶ����ת���ܤ覡
function chgTimeFmt(){
 var wmps = Exobud.playState;
 if(wmps==3){clearInterval(tidTLab);}
 if(blnElaps){
   blnElaps=false; document.exobudform.disp2.value="�˼Ƥ覡";
 } else {
   blnElaps=true; document.exobudform.disp2.value="���`�覡";
 }
 tidMsg=setTimeout('rtnTLab()',1000);
}

// rtnTLab() �禡: �Ǧ^�ɶ�����
function rtnTLab(){
 clearTimeout(tidMsg);
 var wmps = Exobud.playState;
 if(wmps==3){tidTLab=setInterval('showTLab()',1000);}
 else {showTLab();}
}

// wmpTime() �禡: �p��ɶ�����
function wmpTime(dur){
 var hh, min, sec, timeLabel;
 hh=Math.floor(dur/3600);
 min=Math.floor(dur/60)%60;
 sec=Math.floor(dur%60);
 if(isNaN(min)){ return "00:00";}
 if(isNaN(hh) || hh==0){timeLabel="";}
 else {
   if(hh>9){timeLabel = hh.toString() + ":";}
   else {timeLabel = "0" + hh.toString() + ":";}
 }
 if(min>9){timeLabel = timeLabel + min.toString() + ":";}
 else {timeLabel = timeLabel + "0" + min.toString() + ":";}
 if(sec>9){timeLabel = timeLabel + sec.toString();}
 else {timeLabel = timeLabel + "0" + sec.toString();}
 return timeLabel;
}

// wmpVolUp(), wmpVolDn(), wmpMute() �o�X�ӳ��O�Ψӽծխ��q���禡�C(���G�H)
// vmax �N��̤j���q(100), vmin �N��̤p���q(0), vdep �N��ծխ��q�����j(��ĳ�]��5��20����)
// �z�u�i�H�b vmin, vmax, vdep �]��0��100��������ƼƭȡAvmin �M vdep �ƭȤ��i�H�j�L vmax�C

var vmax = 100;
var vmin = 0;
var vdep = 10;

// wmpVolUp() �禡: �W�[���q(Volume Up)
function wmpVolUp(){
 var wmps = Exobud.playState;
 if(wmps==3){clearInterval(tidTLab);}
 var ps = Exobud.settings;
 if(ps.mute){
   ps.mute=false;
   document.exobudform.disp2.value="���q��_";
   document.exobudform.vmute.style.background=btnOffColor;
 } else {
   if(ps.volume >= (vmax-vdep)){ps.volume = vmax;}
   else {ps.volume = ps.volume + vdep;}
   document.exobudform.disp2.value = "���q: " + ps.volume + "%";
 }
 tidMsg=setTimeout('rtnTLab()',1000);
}

// wmpVolDn() �禡: ��֭��q(Volume Down)
function wmpVolDn(){
 var wmps = Exobud.playState;
 if(wmps==3){clearInterval(tidTLab);}
 var ps = Exobud.settings;
 if(ps.mute){
   ps.mute=false;
   document.exobudform.disp2.value="���q��_";
   document.exobudform.vmute.style.background=btnOffColor;
 } else {
   if(ps.volume <= vdep){ps.volume = vmin;}
   else {ps.volume = ps.volume - vdep;}
   document.exobudform.disp2.value = "���q: " + ps.volume + "%";
 }
 tidMsg=setTimeout('rtnTLab()',1000);
}

// wmpMute() �禡: �R���Ҧ�(Mute)
function wmpMute(){
 var wmps = Exobud.playState;
 if(wmps==3){clearInterval(tidTLab);}
 var ps = Exobud.settings;
 if(!ps.mute){
   ps.mute=true;
   document.exobudform.disp2.value="�}���R���Ҧ�";
   document.exobudform.vmute.style.background=btnOnColor;
 } else {
   ps.mute=false;
   document.exobudform.disp2.value="�����R���Ҧ�";
   document.exobudform.vmute.style.background=btnOffColor;
 }
 tidMsg=setTimeout('rtnTLab()',1000);
}

// waitMsg() �禡: ��ܦ]����M��ťզӵL�k���񪺰T��
function waitMsg(){
 capText.innerHTML="ExoBUD MP(II) �r����ܨt��(SMI)";
 if(intExobudStat==1){ document.exobudform.disp1.value = "�L�k���� �� ����M��W�S���]�w���󦱥ءC";}
 if(intExobudStat==2){ document.exobudform.disp1.value = "�L�k���� �� �z�S���������M��W����@�����ءC";}
 if(blnStatusBar){
   if(intExobudStat==1){ window.status=('�L�k���� �� ����M��W�S���]�w���󦱥ءC'); return true;}
   if(intExobudStat==2){ window.status=('�L�k���� �� �z�S���������M��W����@�����ءC'); return true;}
 }
}

// openPlist() �禡: �H�u�X������ܼ���M�椺�e
function openPlist(){
 window.open("box-menu.htm","mplist","width=400,height=400,scrollbars=no,resizable=yes,copyhistory=no");
}

// chkWmpState() �禡: ����{���ʧ@�ܧ�ɡA�Ǧ^ playState �����A��
function chkWmpState(){
//   �H�U�O���A�Ȫ�����:
//    0(���w�q)       1(�w�����)   2(�w�Ȱ�����)   3(���b����)   4(�V�e�j��)     5(�V��j��)
//    6(�w�ĳB�z��)   7(���ݤ�)       8(�w���񧹲�)   9(�ഫ���ؤ�)  10(�N�����A)
 return Exobud.playState;
}

// chkWmpOState() �禡: ����{���}�ҴC���ɮ׷ǳƼ���ɡA�Ǧ^ openState �����A��
function chkWmpOState(){
//   �H�U�O���A�Ȫ�����:
//    0(���w�q)       8(�ഫ�C�餤)   9(�M��C�餤)  10(�s�u�C�餤)  11(���J�C�餤)
//   12(�}�ҴC�餤)  13(�C��w�}��)  20(���ݼ���)  21(���b�}�Ҥ������s��)
 return Exobud.openState;
}

// chkOnline() �禡: �ˬd�ϥΪ̪��s�u���A (���@�w�C�ڭ��O���|�ϥ�)
function chkOnline(){
// �Ǧ^��: true(�w�s�u����ں���) false(�S���s�u����ں���)
 return Exobud.isOnline;
}

// vizExobud() �禡: �I��s�� ExoBUD MP ���񾹭�@�̪��x�����[����] (���@�w�C�ڭ��O���|�ϥ�)
function vizExobud(){
// �ϥνd��: <span onClick="vizExobud()" style="cursor:hand" title="��X �P���p�~ :: ����]">
 window.open("http://n65c.mytw.net","vizExobud");
}

//-->