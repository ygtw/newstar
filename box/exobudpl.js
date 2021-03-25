<!--
//
// ■ 設定播放清單內容
//
//   完整的設定格式: mkList("媒體檔案位置","媒體標題","字幕檔案位置","凍結旗標(f)");
//   一般的設定格式: mkList("媒體檔案位置","媒體標題");
// 預設不播放某項目: mkList("媒體檔案位置","媒體標題","", "f");
// 自動取得媒體資訊: mkList("媒體檔案位置");
//
// ※註1: 第二個設定值(媒體標題)一般的格式是「演出者 - 曲目標題」。
// ※註2: 第四個設定值(凍結旗標/Frozen Flag)是以 f 字元來表示預設不選取播放此媒體檔案。

// 設定播放清單項目時，請注意以下各項：
//
//    1. 如果您使用相對路徑(Relative Path)的方式來設定檔案位置，請最好在連結前面使用如 ./ 或 ../ 來示意目前
//       所在的資料夾。當您以絕對路徑(Absolute Path)的方式來設定連結時，除了 http:// 或 ftp:// 之外，您也可
//       使用如 mms:// 或 rtsp:// 這些串流處理媒體的通訊協定。
//
//    2. 如果您想要使用字幕功能，媒體項目的第一個設定值(媒體檔案位置)或第三個設定值(字幕檔案位置)其中一項，
//       必須使用絕對路徑的方式來設定連結，否則字幕功能只會在本機運作，而在遠端伺服器卻失效的。此外，與媒體
//       檔案相連的字幕檔案，最好要符合這兩個條件： 1.存放在相同的資料夾； 2.以相同的檔名來命名。例如：媒體
//       檔名為 xyz.wmv 就使用 xyz.smi 的字幕檔案。假如字幕檔名跟媒體檔名不一樣，您必須在播放清單項目設定中
//       加入第三個設定值(字幕檔案位置)，但毋須加入路徑。以下的設定範例說明了上述各點：
//
//         例1: mkList("http://mydomain.com/exobud/video/xyz.wmv","我的生活片段");
//              解說 - 字幕檔案 xyz.smi 存放在相同的資料夾，則毋須設定「字幕檔案位置」。
//         例2: mkList("http://mydomain.com/exobud/video/xyz.wmv","我的生活片段","abc.smi");
//              解說 - 字幕檔案存放在相同的資料夾，但檔名有別，須設定字幕檔名。
//         例3: mkList("./music/xyz.wma","演出者 - 歌名","http://others.net/lyric/xyz.smi");
//              解說 - 字幕檔案存放在不同的主機，必須使用絕對路徑的方式來設定「字幕檔案位置」。
//         例4: mkList("http://others.net/music/xyz.wma","演出者 - 歌名");
//              解說 - 媒體檔案與字幕檔案俱存放在不同的主機，同時又符合相同資料夾及檔名的條件。
//
//    3. 使用全英文小寫半形字元的檔案路徑永遠是最保險的做法，因為可以保證在大部份情況下都能夠正常讀取連結。
//       請盡量避免使用包含雙字節字元 (例如中文字或韓文字) 、特殊字元或半形空白的連結；如果可以的話，在設定
//       連結時，最好將這些文字轉換成『％控制碼』，例如將半形空白寫成 %20 。
//
//    4. 當您在設定媒體標題時，可能會遇上一些跟繁體中文 (Big5) 不同語系的文字，例如韓文或日文。如果您決定要
//       保留媒體原本的語文做為媒體標題，請先將這些文字轉換成像 &#12345; 的『＆控制碼』(即Unicode/萬國碼)，
//       然後才好寫到媒體標題的設定值裡去，否則這些外語文字是無法在播放面板或播放清單上正確顯示出來的。
//
//    5. 如果您使用以「自動取得媒體資訊」的方式來讀取媒體標題的資訊，即在播放清單項目裡只填寫媒體檔案位置，
//       媒體標題則預設顯示為「未指定媒體標題(等待自動取得媒體資訊)」。在準備開始播放該曲目時，程式才會讀取
//       媒體資訊，然後在播放面板及播放清單顯示出來。(當播放器所在的頁面重新整理後，便會回復到原來的狀態。)
//
//    6. 因為本程式是利用微軟的 Windows Media Player 做為後台播放程式，所以並不支援以 .ra .rm .rv .ram 這些
//       由 RealNetworks 制訂的媒體格式來播放音訊或視訊內容。請不要在播放清單項目中加入這些媒體檔案。另外，
//       本程式雖然支援微軟最新開發的「Windows Media 播放清單」檔案格式 (副檔名為 .wpl)，但是因為此格式尚未
//       開發成熟，而本程式對此格式的支援可能不夠完全，所以建議使用者應避免使用這種檔案來製作播放清單，除非
//       您是本程式的開發人員／面板製作者，或對程式運作已有深入了解。

// ════════════════════════════════════════════════════
//            以下為樣本播放清單的內容，請在設定您的正式播放清單完畢後，將此部份刪除或註解起來。 
// ════════════════════════════════════════════════════

// 以上所有開頭為 http:// 的串流音樂檔案連結，都是由韓國的一些網路音樂分享社區免費提供的。
// 當您播放這些曲目的時候，並不一定保證上列的串流音樂檔案連結，全部都能夠正常連線，亦不排除檔案位置已變更。

// ════════════════════════════════════════════════════
//          您可以在下面空白的地方 ( 設定內容必須寫在 //--> 標記之前 )，開始設定您的正式播放清單。
// ════════════════════════════════════════════════════

// [T1] 
mkList("http://w13.loxa.com.tw/fxm20144/sunset.wma","[Wma] 黃昏曉");
// [T1] 
mkList("http://aqswdefrgt.myweb.hinet.net/songremix.wma","[Wma] Pianoboy - The truth that you leave");
// [T1] 
mkList("http://aqswdefrgt.myweb.hinet.net/105days.wma","[Wma] Pianoboy - 第105天");
// [T1] 
mkList("http://w13.loxa.com.tw/fxm20144/Canon(O2Version).wma","[Wma] 卡農Canon (O2 Version)");
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
mkList("http://fhcrc.twbbs.org/~lf23015888/music/The%20Blood%20Pledge.mp3","[MP3] Lineage 登入");
// [T14] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/0.mid","[Midi] 天堂龍之谷");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Night of Kismet.mp3","[MP3] Lineage 新手村莊");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/A New Hope.mp3","[MP3] Lineage 說話之島");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Recluse.mp3","[MP3] Lineage 普通陸地");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Desperate Moment.mp3","[MP3] Lineage 地下監獄");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/The Thing.mp3","[MP3] Lineage 決戰");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Your Wish.mp3","[MP3] Lineage 你的夢");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Moonlight.mp3","[MP3] Lineage 世界樹");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/All Our Wants.mp3","[MP3] Lineage 奇岩");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/IF….mp3","[MP3] Lineage 如果...");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Under Siege.mp3","[MP3] Lineage 血盟戰爭");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/The Man of Honor.mp3","[MP3] Lineage 那位英雄");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/The Other Side  .mp3","[MP3] Lineage 地下監獄II");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Beat Down.mp3","[MP3] Lineage 沙漠");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Absolute Force.mp3","[MP3] Lineage 黑騎主題曲");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Stargaze.mp3","[MP3] Lineage 旅館");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/What's that.mp3","[MP3] Lineage 迷惘");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Vagabonds.mp3","[MP3] Lineage 特殊角色樂");
// [T1] 
mkList("http://fhcrc.twbbs.org/~lf23015888/music/Eternally.mp3","[MP3] Lineage 登出");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/44.mid","[Midi] 周杰倫 - 楓 (笛)");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/45.mid","[Midi] 周杰倫 - 楓");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/46.mid","[Midi] 周杰倫 - 龍捲風");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/47.mid","[Midi] 周杰倫 - 夜曲 (笛)");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/48.mid","[Midi] 周杰倫 - 一路向北");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/49.mid","[Midi] 光良 - 都是你");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/50.mid","[Midi] 林俊傑 - 曹操");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/51.mid","[Midi] 周傳雄 - 再見北極雪");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/42.mid","[Midi] 機動戰艦 主題曲");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/41.mid","[Midi] F.I.R - 千年之戀");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/40.midi","[Midi] MISS1");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/36.mid","[Midi] 林依晨 - 孤單北半球");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/37.mid","[Midi] 林依晨 - 孤單北半球2");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/38.mid","[Midi] 台灣人壽阿龍主題曲");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/NEWSTAR.mid","[Midi] 周杰倫 - 星晴");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/32.mid","[Midi] 周傳雄 - 有沒有一首歌會讓你想起我");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/33.mid","[Midi] 周杰倫 - 七里香");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/34.mid","[Midi] 周杰倫 - 藉口");
// [T1] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/35.mid","[Midi] 周杰倫 - 園遊會");
// [T2] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/windows_95_theme.mid","[Midi] Windows95 - 廣告主題曲");
// [T3] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/2.mid","[Midi] 許茹芸 - 淚海");
// [T4] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/3.mid","[Midi] 李建復 - 龍的傳人");
// [T5] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/4.mid","[Midi] 周傳雄 - 哈薩雅琪");
// [T6] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/5.mid","[Midi] 周傳雄 - 黃昏");
// [T7] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/6.mid","[Midi] 周傳雄 - 忘記");
// [T8] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/7.mid","[Midi] 周杰倫 - 東風破");
// [T9] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/1.mid","[Midi] 周杰倫&溫嵐 - 屋頂");
// [T10] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/8.mid","[Midi] 周杰倫 - 軌跡");
// [T11] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/9.mid","[Midi] 周杰倫 - 他的睫毛");
// [T12] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/11.mid","[Midi] 周杰倫 - 簡單愛");
// [T14] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/12.mid","[卡通Midi] 七龍珠 - 最初主題曲");
// [T15] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/17.mid","[卡通Midi] 小紅豆 - 最初主題曲");
// [T16] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/13.mid","[卡通Midi] 灌籃高手 - 第二主題曲");
// [T17] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/18.mid","[卡通Midi] 小紅豆 - 片尾曲");
// [T18] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/14.mid","[卡通Midi] 庫洛魔法使 - 最初主題曲");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/52.mid","[卡通Midi] 庫洛魔法使 - 主題曲2");
// [T19] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/19.mid","[卡通Midi] 天空之城 - 主題曲");
// [T21] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/20.mid","[卡通Midi] 新世紀福音戰士 - 最初主題曲");
// [T20] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/15.mid","[遊戲Midi] 超級瑪莉 - 主題曲");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/53.mid","[遊戲Midi] 熱血進行曲 主題曲");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/54.mid","[遊戲Midi] 熱血高校 遊戲曲1");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/57.mid","[遊戲Midi] 熱血高校 主題曲");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/55.mid","[遊戲Midi] 熱血高校 遊戲曲2");
// [T1] 
mkList("http://w9.loxa.edu.tw/lf2301588820/my/NiceMidi/56.mid","[遊戲Midi] 熱血高校 魔王曲");
// [T22] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/16.mid","[遊戲Midi] 七寶尋謀 - 主題曲");
// [T23] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/21.mid","[卡通Midi] 神奇寶貝 - 最初主題曲");
// [T24] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/22.mid","[Midi] 張善為 - 失心瘋 ");
// [T25] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/23.mid","[Midi] 張善為 - 失心瘋");
// [T26] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/friends.mid","[Midi] 周華健 - 朋友");
// [T27] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/24.mid","[Midi] 劉德華&小黑&吳宗憲 - 笨小孩");
// [T28] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/Ths_your_love1999.mid","[Midi] 謝霆鋒 - 謝謝你的愛1999");
// [T29] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/25.mid","[Midi] 王力宏 - 唯一");
// [T30] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/26.mid","[Midi] 許紹洋 - 花香");
// [T31] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/27.mid","[Midi] 張韶涵 - 寓言");
// [T32] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/28.mid","[Midi] 許紹洋 - 花香");
// [T33] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/29.mid","[Midi] 王心凌 - 愛你");
// [T34] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/ourlove.mid","[Midi] F.I.R - 我們的愛");
// [T35] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/30.mid","[Midi] 范瑋琪 - 可不可以不勇敢");
// [T36] 
mkList("http://w9.loxa.com.tw/lf2301588820/my/NiceMidi/31.mid","[Midi] 范瑋琪 - 最初的夢想");

//-->