<!--
//
// �� �]�w����M�椺�e
//
//   ���㪺�]�w�榡: mkList("�C���ɮצ�m","�C����D","�r���ɮצ�m","�ᵲ�X��(f)");
//   �@�몺�]�w�榡: mkList("�C���ɮצ�m","�C����D");
// �w�]������Y����: mkList("�C���ɮצ�m","�C����D","", "f");
// �۰ʨ��o�C���T: mkList("�C���ɮצ�m");
//
// ����1: �ĤG�ӳ]�w��(�C����D)�@�몺�榡�O�u�t�X�� - ���ؼ��D�v�C
// ����2: �ĥ|�ӳ]�w��(�ᵲ�X��/Frozen Flag)�O�H f �r���Ӫ�ܹw�]��������񦹴C���ɮסC

// �]�w����M�涵�خɡA�Ъ`�N�H�U�U���G
//
//    1. �p�G�z�ϥά۹���|(Relative Path)���覡�ӳ]�w�ɮצ�m�A�г̦n�b�s���e���ϥΦp ./ �� ../ �ӥܷN�ثe
//       �Ҧb����Ƨ��C��z�H������|(Absolute Path)���覡�ӳ]�w�s���ɡA���F http:// �� ftp:// ���~�A�z�]�i
//       �ϥΦp mms:// �� rtsp:// �o�Ǧ�y�B�z�C�骺�q�T��w�C
//
//    2. �p�G�z�Q�n�ϥΦr���\��A�C�鶵�ت��Ĥ@�ӳ]�w��(�C���ɮצ�m)�βĤT�ӳ]�w��(�r���ɮצ�m)�䤤�@���A
//       �����ϥε�����|���覡�ӳ]�w�s���A�_�h�r���\��u�|�b�����B�@�A�Ӧb���ݦ��A���o���Ī��C���~�A�P�C��
//       �ɮ׬۳s���r���ɮסA�̦n�n�ŦX�o��ӱ���G 1.�s��b�ۦP����Ƨ��F 2.�H�ۦP���ɦW�өR�W�C�Ҧp�G�C��
//       �ɦW�� xyz.wmv �N�ϥ� xyz.smi ���r���ɮסC���p�r���ɦW��C���ɦW���@�ˡA�z�����b����M�涵�س]�w��
//       �[�J�ĤT�ӳ]�w��(�r���ɮצ�m)�A���𶷥[�J���|�C�H�U���]�w�d�һ����F�W�z�U�I�G
//
//         ��1: mkList("http://mydomain.com/exobud/video/xyz.wmv","�ڪ��ͬ����q");
//              �ѻ� - �r���ɮ� xyz.smi �s��b�ۦP����Ƨ��A�h�𶷳]�w�u�r���ɮצ�m�v�C
//         ��2: mkList("http://mydomain.com/exobud/video/xyz.wmv","�ڪ��ͬ����q","abc.smi");
//              �ѻ� - �r���ɮצs��b�ۦP����Ƨ��A���ɦW���O�A���]�w�r���ɦW�C
//         ��3: mkList("./music/xyz.wma","�t�X�� - �q�W","http://others.net/lyric/xyz.smi");
//              �ѻ� - �r���ɮצs��b���P���D���A�����ϥε�����|���覡�ӳ]�w�u�r���ɮצ�m�v�C
//         ��4: mkList("http://others.net/music/xyz.wma","�t�X�� - �q�W");
//              �ѻ� - �C���ɮ׻P�r���ɮ׭Ѧs��b���P���D���A�P�ɤS�ŦX�ۦP��Ƨ����ɦW������C
//
//    3. �ϥΥ��^��p�g�b�Φr�����ɮ׸��|�û��O�̫O�I�����k�A�]���i�H�O�Ҧb�j�������p�U��������`Ū���s���C
//       �кɶq�קK�ϥΥ]�t���r�`�r�� (�Ҧp����r������r) �B�S��r���Υb�Ϊťժ��s���F�p�G�i�H���ܡA�b�]�w
//       �s���ɡA�̦n�N�o�Ǥ�r�ഫ���y�H����X�z�A�Ҧp�N�b�Ϊťռg�� %20 �C
//
//    4. ��z�b�]�w�C����D�ɡA�i��|�J�W�@�Ǹ��c�餤�� (Big5) ���P�y�t����r�A�Ҧp����Τ��C�p�G�z�M�w�n
//       �O�d�C��쥻���y�尵���C����D�A�Х��N�o�Ǥ�r�ഫ���� &#12345; ���y������X�z(�YUnicode/�U��X)�A
//       �M��~�n�g��C����D���]�w�ȸ̥h�A�_�h�o�ǥ~�y��r�O�L�k�b���񭱪O�μ���M��W���T��ܥX�Ӫ��C
//
//    5. �p�G�z�ϥΥH�u�۰ʨ��o�C���T�v���覡��Ū���C����D����T�A�Y�b����M�涵�ظ̥u��g�C���ɮצ�m�A
//       �C����D�h�w�]��ܬ��u�����w�C����D(���ݦ۰ʨ��o�C���T)�v�C�b�ǳƶ}�l����Ӧ��خɡA�{���~�|Ū��
//       �C���T�A�M��b���񭱪O�μ���M����ܥX�ӡC(���񾹩Ҧb���������s��z��A�K�|�^�_���Ӫ����A�C)
//
//    6. �]�����{���O�Q�ηL�n�� Windows Media Player ������x����{���A�ҥH�ä��䴩�H .ra .rm .rv .ram �o��
//       �� RealNetworks ��q���C��榡�Ӽ��񭵰T�ε��T���e�C�Ф��n�b����M�涵�ؤ��[�J�o�ǴC���ɮסC�t�~�A
//       ���{�����M�䴩�L�n�̷s�}�o���uWindows Media ����M��v�ɮ׮榡 (���ɦW�� .wpl)�A���O�]�����榡�|��
//       �}�o�����A�ӥ��{���惡�榡���䴩�i�ण�������A�ҥH��ĳ�ϥΪ����קK�ϥγo���ɮרӻs�@����M��A���D
//       �z�O���{�����}�o�H�������O�s�@�̡A�ι�{���B�@�w���`�J�F�ѡC

// ��������������������������������������������������������������������������������������������������������
//            �H�U���˥�����M�檺���e�A�Цb�]�w�z����������M�槹����A�N�������R���ε��Ѱ_�ӡC 
// ��������������������������������������������������������������������������������������������������������

// �H�W�Ҧ��}�Y�� http:// ����y�����ɮ׳s���A���O�����ꪺ�@�Ǻ������֤��ɪ��ϧK�O���Ѫ��C
// ��z����o�Ǧ��ت��ɭԡA�ä��@�w�O�ҤW�C����y�����ɮ׳s���A������������`�s�u�A�礣�ư��ɮצ�m�w�ܧ�C

// ��������������������������������������������������������������������������������������������������������
//          �z�i�H�b�U���ťժ��a�� ( �]�w���e�����g�b //--> �аO���e )�A�}�l�]�w�z����������M��C
// ��������������������������������������������������������������������������������������������������������

// [T1] 
mkList("http://w13.loxa.com.tw/fxm20144/sunset.wma","[Wma] ������");
// [T1] 
mkList("http://aqswdefrgt.myweb.hinet.net/songremix.wma","[Wma] Pianoboy - The truth that you leave");
// [T1] 
mkList("http://aqswdefrgt.myweb.hinet.net/105days.wma","[Wma] Pianoboy - ��105��");
// [T1] 
mkList("http://w13.loxa.com.tw/fxm20144/Canon(O2Version).wma","[Wma] �d�ACanon (O2 Version)");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Missing you.mp3","[MP3] Missing you(O2 Version)");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Carol.wma","[Wma] Carol(O2 Version)");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Permanent.wma","[Wma] Permanent(O2 Version)");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Duel(O2Version).wma","[Wma] Duel(O2Version)");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Lovable Times.wma","[Wma] Lovable Times(O2 Version)");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/The%20Blood%20Pledge.mp3","[MP3] Lineage �n�J");
// [T14] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/0.mid","[Midi] �Ѱ��s����");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Night of Kismet.mp3","[MP3] Lineage �s�����");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/A New Hope.mp3","[MP3] Lineage ���ܤ��q");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Recluse.mp3","[MP3] Lineage ���q���a");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Desperate Moment.mp3","[MP3] Lineage �a�U�ʺ�");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/The Thing.mp3","[MP3] Lineage �M��");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Your Wish.mp3","[MP3] Lineage �A����");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Moonlight.mp3","[MP3] Lineage �@�ɾ�");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/All Our Wants.mp3","[MP3] Lineage �_��");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/IF�K.mp3","[MP3] Lineage �p�G...");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Under Siege.mp3","[MP3] Lineage ����Ԫ�");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/The Man of Honor.mp3","[MP3] Lineage ����^��");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/The Other Side  .mp3","[MP3] Lineage �a�U�ʺ�II");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Beat Down.mp3","[MP3] Lineage �F�z");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Absolute Force.mp3","[MP3] Lineage ���M�D�D��");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Stargaze.mp3","[MP3] Lineage ���]");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/What's that.mp3","[MP3] Lineage �g��");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Vagabonds.mp3","[MP3] Lineage �S�����");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Eternally.mp3","[MP3] Lineage �n�X");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/44.mid","[Midi] �P�N�� - �� (��)");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/45.mid","[Midi] �P�N�� - ��");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/46.mid","[Midi] �P�N�� - �s����");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/47.mid","[Midi] �P�N�� - �]�� (��)");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/48.mid","[Midi] �P�N�� - �@���V�_");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/49.mid","[Midi] ���} - ���O�A");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/50.mid","[Midi] �L�T�� - ���");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/51.mid","[Midi] �P�Ƕ� - �A���_����");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/42.mid","[Midi] ���ʾ�ĥ �D�D��");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/41.mid","[Midi] F.I.R - �d�~����");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/40.midi","[Midi] MISS1");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/36.mid","[Midi] �L�̱� - �t��_�b�y");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/37.mid","[Midi] �L�̱� - �t��_�b�y2");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/38.mid","[Midi] �x�W�H�ت��s�D�D��");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/NEWSTAR.mid","[Midi] �P�N�� - �P��");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/32.mid","[Midi] �P�Ƕ� - ���S���@���q�|���A�Q�_��");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/33.mid","[Midi] �P�N�� - �C����");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/34.mid","[Midi] �P�N�� - �Ǥf");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/35.mid","[Midi] �P�N�� - ��C�|");
// [T2] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/windows_95_theme.mid","[Midi] Windows95 - �s�i�D�D��");
// [T3] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/2.mid","[Midi] �\���� - �\��");
// [T4] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/3.mid","[Midi] ���ش_ - �s���ǤH");
// [T5] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/4.mid","[Midi] �P�Ƕ� - ���Ķ��X");
// [T6] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/5.mid","[Midi] �P�Ƕ� - ����");
// [T7] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/6.mid","[Midi] �P�Ƕ� - �ѰO");
// [T8] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/7.mid","[Midi] �P�N�� - �F���}");
// [T9] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/1.mid","[Midi] �P�N��&�ŴP - �γ�");
// [T10] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/8.mid","[Midi] �P�N�� - �y��");
// [T11] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/9.mid","[Midi] �P�N�� - �L������");
// [T12] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/11.mid","[Midi] �P�N�� - ²��R");
// [T14] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/12.mid","[�d�qMidi] �C�s�] - �̪�D�D��");
// [T15] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/17.mid","[�d�qMidi] �p���� - �̪�D�D��");
// [T16] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/13.mid","[�d�qMidi] ���x���� - �ĤG�D�D��");
// [T17] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/18.mid","[�d�qMidi] �p���� - ������");
// [T18] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/14.mid","[�d�qMidi] �w���]�k�� - �̪�D�D��");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/52.mid","[�d�qMidi] �w���]�k�� - �D�D��2");
// [T19] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/19.mid","[�d�qMidi] �ѪŤ��� - �D�D��");
// [T21] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/20.mid","[�d�qMidi] �s�@���֭��Ԥh - �̪�D�D��");
// [T20] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/15.mid","[�C��Midi] �W�ź��� - �D�D��");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/53.mid","[�C��Midi] ����i�榱 �D�D��");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/54.mid","[�C��Midi] ���尪�� �C����1");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/57.mid","[�C��Midi] ���尪�� �D�D��");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/55.mid","[�C��Midi] ���尪�� �C����2");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/56.mid","[�C��Midi] ���尪�� �]����");
// [T22] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/16.mid","[�C��Midi] �C�_�M�� - �D�D��");
// [T23] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/21.mid","[�d�qMidi] ���_�_�� - �̪�D�D��");
// [T24] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/22.mid","[Midi] �i���� - ���ߺ� ");
// [T25] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/23.mid","[Midi] �i���� - ���ߺ�");
// [T26] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/friends.mid","[Midi] �P�ذ� - �B��");
// [T27] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/24.mid","[Midi] �B�w��&�p��&�d�v�� - �¤p��");
// [T28] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/Ths_your_love1999.mid","[Midi] �¾^�W - ���§A���R1999");
// [T29] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/25.mid","[Midi] ���O�� - �ߤ@");
// [T30] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/26.mid","[Midi] �\�Ьv - �᭻");
// [T31] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/27.mid","[Midi] �i��[ - �J��");
// [T32] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/28.mid","[Midi] �\�Ьv - �᭻");
// [T33] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/29.mid","[Midi] ���߭� - �R�A");
// [T34] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/ourlove.mid","[Midi] F.I.R - �ڭ̪��R");
// [T35] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/30.mid","[Midi] �S޳�X - �i���i�H���i��");
// [T36] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/31.mid","[Midi] �S޳�X - �̪쪺�ڷQ");

//-->