<!--
//
// �� �i��ʺA���s���ɪ������ʧ@
//

toggleKey = new Object();
toggleKey[0] = "_off";
toggleKey[1] = "_on";
toggleKey[2] = "_ovr";
toggleKey[3] = "_out";
toggleKey[4] = "_mdn";
toggleKey[5] = "_mup";

function imgChange(id,act){
 if(document.images){ document.images[id].src = eval("img." + id + toggleKey[act] + ".src");}
}

// ��o�q�{���X���Ψ켽�񾹨ϥήɡG(exobud.js)
// �H�禡 imgChange('���s�ѧO�W��',0) �i�檺�ʧ@�Y�ϥ� "off" �����ɡF
// �H�禡 imgChange('���s�ѧO�W��',1) �i�檺�ʧ@�Y�ϥ� "on"  �����ɡC

if(document.images){
 img = new Object();

 // ��ܼ��񪬺A�� Scope �ʺA���� (�R������)
 img.scope_off = new Image();
 img.scope_off.src = "./img/scope_off.gif";
 img.scope_on = new Image();
 img.scope_on.src = "./img/scope_on.gif";
}

//-->