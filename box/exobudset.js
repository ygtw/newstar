<!--
//
// �� ����{�����򥻳]�w
//
// ���۰ʼ���H
//   �]�w���񾹸��J�����ɡA�O�_�۰ʼ���(Auto Start)�C���ɮסG
//      true = �۰ʼ��� (�@�미���|��ܳo�Ӥ覡)
//     false = ���n�۰ʼ���A���ݨϥΪ̱Ұʼ���
var blnAutoStart = false;

// ���H������H
//   �]�w���ت��w�]���񶶧ǡA�O�_�H��(�ü�/Random Playing)����C���ɮסG
//      true = �H������ (�@�미���|��ܳo�Ӥ覡)
//     false = �ھڧکұƦC�����ǡA�`�Ǽ���
var blnRndPlay = false;

// ����ܴC����D����H
//   �]�w���񭱪O�W�O�_�n��ܴC����D�G
//      true = ��ܴC����D
//     false = ���n��ܴC����D�A�N������ð_��
var blnShowTitle = true;

// ����ܮɶ����פ���H
//   �]�w���񭱪O�W�O�_�n��ܮɶ����סG
//      true = ��ܮɶ�����
//     false = ���n��ܮɶ����סA�N������ð_��
var blnShowTime = true;

// ���b���A�C��ܤ�r�T���H
//   �]�w�O�_�n�b�s���������A�C(Status Bar)�A��ܼ��񾹪��ثe�ʧ@�G
//      true = �b���A�C��ܼ��񾹤�r�T�� (�A�X�b���ôC����D/�ɶ����פ�������p�U�ϥ�)
//     false = ���n�b���A�C��ܼ��񾹤�r�T��
//   (�p�G�z�b�]�w����M�涵�خɡA�ϥΤF�� &#12345; ���y������X�z�A�����N�����]�� false)
var blnStatusBar = false;

// ����ܭ��q������s�H
//   �]�w���񭱪O�W�O�_�n��ܭ��q����(Volume Control-�]�A�R���Ҧ�)�����s�G
//      true = ��ܭ��q����A�e�\�ϥΪ̽ծխ��q
//     false = ����ܭ��q����A�N���s���ð_��
var blnShowVolCtrl = true;

// ����ܼ���M����s�H
//   �]�w���񭱪O�W�O�_�n��ܼ���M��(Playlist)���s�G
//      true = ��ܼ���M����s�A���ϥΪ��˵�����M�椺�e�άD�鈴��
//     false = ����ܼ���M����s�A�ϥΪ̵L�k�˵�����M�椺�e�άD�鈴��
var blnShowPlist = true;

// ���ϥΦr���\��A�}�Ҧr���ءH
//   �]�w�O�_�ϥ�SMIL�r���\��(Closed Captioning-���t�X���ɦW��"SMI"���¤�r�ɮרϥ�)�G
//      true = �ϥΦr���\��A�b�r���ؤ���ܦP�B�q���Τ�r�T��(�]�i�H�]�t�Ϥ�����T)
//     false = �����r���\��
var blnUseSmi = false;

// ���`������H
//   �]�w��Ҧ����ؼ��񧹲���A�O�_���s����Ҧ�����(�`������/Loop Tracks)�G
//      true = �ϥδ`������\�� (�@�미���|��ܳo�Ӥ覡)
//     false = ���ϥδ`������\��A��Ҧ����ؼ��񧹲��ᰱ���
var blnLoopTrk = true;

// ���u�X������ܴC���ɮ׸�T�H
//   �]�w�b�}�l����C�@�����خɡA�O�_�u�X������ܴC���ɮ׸�T(Media Info)�G
//      true = ��ܴC���ɮ׸�T (�л{�u�Ҽ{�M���A�]���s���̥i��|�P�칽�Ъ��A���\��u�A�X���ե�)
//     false = ����ܴC���ɮ׸�T
var blnShowMmInfo = false;

// �����񭱪O�W�A�ʺA���s���C��]�w��
//   �H�U��ӳ]�w�ȬO�Ψӫ��w���񭱪O�W�A�ʺA���s (�Ҧp: ���Ʀ���,�Ȱ�-�~��,�R��...)
//   �b���P���A�U (On/Off) ����ܪ��I���C��C�Ъ`�N�A�䤤 btnOffColor ���C��A�����P
//   �b���񭱪O�˦��� (exobud.css) ���ҳ]�w�A.buttons �˦� background-color ���@�ˡC
//   �z�i�H�ϥ�16�줸�C��X(#FFFFFF)�Τ�r�C��X(white)�ӳ]�w�o��ӭȡC
var btnOffColor = "white"; // �@��B�w�]���A�Υ��Q��������s (Button Off)
var btnOnColor = "silver"; // �w�Q����Τw�ܧ�w�]���A�����s (Button On)

//-->