const chapters = [
  ["Kata Benda dan は", ["です", "～は～です"], "Memperkenalkan diri dan menyatakan identitas."],
  ["Ini, Itu, dan Yang Itu", ["これ・それ・あれ", "この・その・あの"], "Menunjuk benda dan membedakan jarak."],
  ["Tempat dan ここ・そこ", ["ここ・そこ・あそこ", "どこ"], "Menanyakan dan menyatakan letak."],
  ["Waktu", ["～時", "～から～まで"], "Menyatakan waktu, awal, dan akhir."],
  ["Pergi, Datang, Pulang", ["行きます", "～に行きます"], "Berkegiatan dengan kata kerja dasar."],
  ["Objek dengan を", ["～を～ます", "～をします"], "Menyatakan objek dan tindakan."],
  ["Alat dan Cara", ["で", "～で～ます"], "Menanyakan alat, cara, dan sarana."],
  ["Pola なります", ["～は～が"], "Menyatakan kepemilikan dan keadaan."],
  ["Partikel が", ["～が～ます", "～が好きです"], "Memperkenalkan subjek yang diketahui."],
  ["Ada と Tidak Ada", ["あります", "います"], "Membedakan benda mati dan makhluk hidup."],
  ["Jumlah", ["～に～が～あります", "～つ"], "Menyatakan jumlah dan jumlah benda."],
  ["Perbandingan", ["～より", "～がいちばん"], "Membandingkan dua hal atau lebih."],
  ["Keinginan", ["～たいです", "～がほしいです"], "Mengungkapkan keinginan."],
  ["Kata Kerja Bentuk て", ["～てください", "～てもいいです"], "Memberi permintaan dan izin."],
  ["Rencana Sedang", ["～ています", "～ていません"], "Menyatakan aktivitas berlangsung atau hasil keadaan."],
  ["Kata Sifat", ["～いです", "～なです"], "Memasukkan kata sifat ke kalimat."],
  ["Ingin Melakukan", ["～に行きます", "～たいです"], "Menggabungkan tujuan dengan keinginan."],
  ["Bentuk Kamus dan 能", ["辞書形", "ことができます"], "Menyatakan kemampuan dan tindakan."],
  ["Pengalaman", ["～たことがあります", "～たことがありません"], "Menyatakan pengalaman masa lalu."],
  ["Bentuk Biasa", ["～と～ます", "～ますから"], "Mengubah kalimat sopan ke bentuk biasa."],
  ["Pendapat", ["～と思います", "～と言います"], "Menyampaikan pendapat dan perkataan."],
  ["Bentuk Nai", ["～ないでください", "～なければなりません"], "Larangan dan kewajiban."],
  ["Bentuk Kondisional と", ["～と", "～ば"], "Menyatakan syarat yang otomatis terjadi."],
  ["Memberi dan Menerima", ["あげます", "もらいます"], "Memahami arah pemberian."],
  ["Bentuk Te", ["～てから", "～てしまいます"], "Urutan tindakan dan penyelesaian."],
  ["Bentuk Kausalitas", ["～てください", "～てもらいます"], "Meminta bantuan secara lebih sopan."],
  ["Penggunaan ～ています", ["～てから", "～ています"], "Menjelaskan perubahan dan kebiasaan."],
  ["Bentuk かもしれません", ["～かもしれません", "～でしょう"], "Menyatakan kemungkinan dan perkiraan."],
  ["Pilihan dengan ～たり", ["～たり～たり", "～たことがあります"], "Menyebutkan beberapa contoh tindakan."],
  ["Bentuk Kondisional たら", ["～たら", "～たらいいです"], "Kondisi hipotetis dan saran."],
  ["Kemungkinan", ["～かもしれません", "～でしょう"], "Membedakan dugaan dan kemungkinan."],
  ["Saran", ["～ほうがいいです", "～ませんか"], "Memberi saran dan ajakan."],
  ["Niat dan Rencana", ["～つもりです", "～予定です"], "Menyatakan rencana."],
  ["Bentuk Pasif", ["～られる", "～は～に"], "Menyatakan kalimat pasif."],
  ["Kalimat Sebab Akibat", ["～ので", "～から"], "Menjelaskan alasan secara objektif atau subjektif."],
  ["Cara Melakukan", ["～方", "～のは"], "Menjelaskan cara penggunaan."],
  ["Menyampaikan Informasi", ["～そうです", "～そうです・kelihatannya"], "Isyarat kabar dan penampilan."],
  ["Perintah dan Larangan", ["～なさい", "～てはいけません"], "Perintah tegas dan larangan."],
  ["Mandat dan Aturan", ["～なくてはいけません", "～なくてもいいです"], "Kewajiban dan kewajiban yang dihapus."],
  ["Tujuan dan Penggunaan", ["～ようにします", "～ようになります"], "Tujuan dan perubahan kemampuan."],
  ["Memberi Penjelasan", ["～ために", "～によって"], "Tujuan, sebab, dan metode."],
  ["Menggunakan ～てくる", ["～てくる", "～ていく"], "Perubahan menuju masa depan atau arah tindakan."],
  ["Ungkapan Waktu", ["～間に", "～間"], "Durasi dan batas waktu."],
  ["Perbandingan Cara", ["～より～ほど", "～くらい"], "Tingkat perbandingan."],
  ["Waktu dan Kondisi", ["～たとたんに", "～うちに"], "Titik perubahan dan kesempatan."],
  ["Hasil dan Dugaan", ["～ようです", "～らしいです"], "Kesimpulan berdasarkan penampilan atau sumber."],
  ["Subjek Klausa", ["～の", "～こと"], "Nominalisasi kata kerja."],
  ["Pengandaian", ["～ばいいです", "～なら"], "Saran dan pengandaian situasional."],
  ["Ungkapan Panjang", ["～ところです", "～ばかりです"], "Tahap tindakan dan frekuensi."],
  ["Kesimpulan", ["～はずです", "～わけです"], "Harapan logis dan penjelasan."]
];

const bunpouCatalog = [
  [["N は N です","N は N です","Kata benda + は + kata benda + です","Menyatakan identitas atau keadaan.","私 は 学生 です。"],["N は N ではありません","N は N ではありません","N は N じゃありません","Menyatakan negasi sopan.","私は先生ではありません。"],["N は N ですか","N は N ですか","Kalimat + か","Menanyakan identitas.","田中さんは先生ですか。"]],
  [["これ・それ・あれ","これ / それ / あれ","Kata tunjuk + kata benda","Membedakan jarak pembicara dan lawan bicara.","これは本です。"],["この・その・あの","この N / その N / あの N","Kata tunjuk + benda","Menentukan posisi benda yang dibicarakan.","その本はいくらですか。"]],
  [["ここ・そこ・あそこ","ここ / そこ / あそこ","Kata tunjuk tempat","Menentukan tempat relatif terhadap pembicara.","ここは図書館です。"],["どこ","どこ","どこ + ですか","Menanyakan tempat.","駅はどこですか。"]],
  [["～時～分","～時 / ～分","Waktu + 助数詞","Menyatakan jam dan menit.","今、八時十分です。"],["～から～まで","Nから～まで","Asal sampai tujuan/waktu","Menyatakan rentang.","九時から五時まで勉強します。"]],
  [["Vますへ行きます","行きます・来ます・帰ります","Tempatへ移動の動詞","Menyatakan perpindahan.","学校へ行きます。"],["～に行きます","～ます・辞書形 + に","Tujuan + に + 行きます","Menyatakan tujuan kegiatan.","本を買いに行きます。"]],
  [["NをVます","N を Vます","Objek を kata kerja","Menandai objek langsung.","パンを食べます。"],["Nをします","N をします","Kegiatan をします","Menyatakan melakukan kegiatan.","日本語を勉強します。"]],
  [["で（手段）","NでVます","Alat/saranaで","Menunjukkan alat atau sarana.","電車で行きます。"],["どこで","どこでVます","Tempatで","Menanyakan tempat kegiatan.","図書館で勉強します。"]],
  [["～があります","N が あります","Benda が あります","Menyatakan keberadaan benda.","机に本があります。"],["～がいます","Orang・hewan が います","Makhluk hidup がいます","Menyatakan keberadaan makhluk hidup.","庭に猫がいます。"]],
  [["NがV","N が Vます","Ga sebagai subjek","Menandai subjek atau hal baru.","田中さんが来ます。"],["Nが～です","Nが形容詞です","Subjek が kata sifat","Menyatakan sifat atau kesukaan.","このりんごがおいしいです。"]],
  [["あります・います","あります / います","Benda／makhluk + があります／います","Membedakan keberadaan benda dan makhluk hidup.","部屋に机があります。"],["NにNがあります","Tempat に benda があります","Keberadaan dalam lokasi","Menunjukkan letak sesuatu.","駅の近くに銀行があります。"]],
  [["～つ・助数詞","～つ / ～枚 / ～人","Bilangan + satuan","Menghitung benda sesuai satuan.","りんごを三つ買います。"],["～時間","～時間","Durasi + 時間","Menyatakan lamanya waktu.","二時間勉強します。"]],
  [["～より～","NはNより～です","Pembanding は N より sifat","Menyatakan perbandingan.","東京は大阪より大きいです。"],["～の中で～がいちばん","Nの中で～がいちばん","Di antara～ paling","Menentukan yang paling.","果物の中でりんごがいちばん好きです。"]],
  [["～たいです","Vます + たいです","Keinginan melakukan","Mengungkapkan keinginan pembicara.","寿司を食べたいです。"],["～がほしいです","N がほしいです","Keinginan memiliki","Mengungkapkan keinginan memiliki benda.","新しい時計がほしいです。"]],
  [["～てください","Vてください","Permintaan sopan","Meminta seseorang melakukan sesuatu.","窓を開けてください。"],["～てもいいです","Vて + もいいです","Perizinan","Menanyakan atau memberikan izin.","ここで写真を撮ってもいいです。"]],
  [["～ています","Vて + います","Aktivitas sedang atau keadaan","Menyatakan proses atau keadaan berlanjut.","今、勉強しています。"],["～ています（経験）","Vて + います","Keadaan hasil tindakan","Menyatakan posisi atau status.","大阪に住んでいます。"]],
  [["い形容詞","～いです / ～くないです","Predikat kata sifat i","Menyatakan sifat benda.","今日は寒いです。"],["な形容詞","～です / ～ではありません","Predikat kata sifat na","Menyatakan sifat benda.","部屋は静かです。"]],
  [["～に行きます","Vます + に行きます","Tujuan + に","Menyatakan tujuan perpindahan.","友達に会いに行きます。"],["～たいです","Vたい","Keinginan","Menggabungkan tujuan dan keinginan.","日本へ旅行したいです。"]],
  [["辞書形","V辞書形","Bentuk kamus","Menyatakan kemampuan dan kemungkinan.","読む / 見る / 来る"],["ことができます","V辞書形 + ことができます","Kemampuan","Menyatakan dapat melakukan.","日本語を読むことができます。"]],
  [["～たことがあります","Vたことがあります","Pengalaman","Menyatakan pengalaman pernah terjadi.","富士山に登ったことがあります。"],["～たことがありません","Vたことがありません","Negasi pengalaman","Menyatakan tidak pernah.","寿司を食べたことがありません。"]],
  [["Bentuk biasa","普通形","Bentuk kamus／ない／た／なかった","Digunakan sebelum ～と思います","Menyusun pendapat.","明日は休むと思います。"],["～から","Bentuk biasa + から","Alasan","Menjelaskan sebab secara subjektif.","疲れたから休みます。"]],
  [["～と思います","Bentuk biasa + と思います","Pendapat","Menyampaikan pikiran pembicara.","雨だと思います。"],["～と言います","Nと/普通形と言います","Kutipan atau perkataan","Menyampaikan ujaran orang lain.","田中さんは来ると言います。"]],
  [["～ないでください","Vないでください","Larangan sopan","Meminta jangan melakukan.","ここで写真を撮らないでください。"],["～なければなりません","Vない→なければなりません","Kewajiban","Menegaskan keharusan.","毎日勉強しなければなりません。"]],
  [["～と","Kalimat と","Kondisi otomatis","Menyatakan akibat yang pasti.","春になると花が咲きます。"],["～ば","Vば / Aければ / Nなら","Pengandaian","Menghubungkan syarat dengan hasil.","安ければ買います。"]],
  [["あげます・もらいます","あげます／もらいます／くれます","Arah pemberian","Menentukan arah memberi dan menerima.","友達に本をあげます。"],["～てあげます","Vてあげます","Melakukan untuk orang lain","Menjelaskan tindakan pemberian.","荷物を持ってあげます。"]],
  [["～てから","Vてから","Urutan","Menyatakan setelah tindakan pertama.","勉強してから寝ます。"],["～てしまいます","Vてしまいます","Hasil selesai atau penyesalan","Menyatakan penyelesaian atau rasa menyesal.","宿題をしてしまいました。"]],
  [["～てもらいます","Vて + もらいます","Meminta jasa","Penerima melakukan tindakan untuk pembicara.","友達に直してもらいます。"],["～てあげます","Vてあげます","Memberi jasa","Pembicara melakukan untuk orang lain.","荷物を持ってあげます。"]],
  [["～ています（perubahan）","Vて + います","Kondisi berlanjut","Menyatakan kebiasaan atau keadaan.","この店は毎日開いています。"],["～てから","Vてから","Setelah menjadi","Menunjukkan urutan perubahan.","大阪に来てから一年目です。"]],
  [["～でしょう","普通形 + でしょう","Dugaan sopan","Menyatakan perkiraan.","明日は雨でしょう。"],["～かもしれません","普通形 + かもしれません","Kemungkinan","Menyatakan kemungkinan kurang pasti.","彼は来るかもしれません。"]],
  [["～たり～たりします","VたりVたりします","Beberapa contoh","Menyebutkan beberapa tindakan.","週末は映画を見たり買い物をしたりします。"],["～たり～たり～","AたりNたり","Contoh keadaan","Menyatakan beberapa sifat atau keadaan.","部屋は静かだったり暑かったりします。"]],
  [["～たら","Vたら / Aかったら / Nなら","Kondisi hipotetis","Menyatakan syarat yang belum tentu.","時間があったら電話します。"],["～たらいいです","～たらいいです","Saran","Memberi saran berdasarkan situasi.","早く寝たらいいです。"]],
  [["～かもしれません","N/A/普通形 + かもしれません","Kemungkinan","Menyatakan kemungkinan.","道は混むかもしれません。"],["～でしょう","～でしょう","Perkiraan","Menyatakan perkiraan sopan.","明日は晴れるでしょう。"]],
  [["～ほうがいいです","Vた/ないほうがいいです","Saran","Menyarankan pilihan terbaik.","薬を飲んだほうがいいです。"],["～ませんか","Vませんか","Ajakan","Mengajak atau menawarkan.","一緒に行きませんか。"]],
  [["～つもりです","V辞書形/ない形 + つもりです","Rencana","Menyatakan niat pembicara.","留学するつもりです。"],["～予定です","V辞書形予定です","Rencana jadwal","Menyatakan rencana terjadwal.","明日は試験を受ける予定です。"]],
  [["～られます","Vられる / Vれる","Bentuk pasif","Menandai subjek menerima tindakan.","先生に褒められました。"],["～は～に～","NはNにVられます","Subjek pasif","Menunjukkan objek menerima dampak.","私のカメラを友達に壊された。"]],
  [["～ので","Bentuk biasa + ので","Alasan objektif","Menjelaskan alasan secara halus.","雨なので休みます。"],["～から","Bentuk biasa + から","Alasan subjektif","Menjelaskan alasan personal.","忙しいから行きません。"]],
  [["～方","Vます stem + 方","Cara melakukan","Menjelaskan cara melakukan tindakan.","漢字の読み方を教えます。"],["～のは～です","N/Vのは","Nominalisasi","Menempatkan tindakan sebagai topik.","使うのは簡単です。"]],
  [["～そうです","Ukarata + そうです","Kelihatannya","Menilai penampilan.","おいしそうです。"],["～そうです（情報）","普通形 + そうです","Menurut kabar","Menyampaikan informasi yang didengar.","雨が降るそうです。"]],
  [["～なさい","Vます stem + なさい","Perintah sopan-tegas","Memberi perintah kepada bawahan.","宿題をしなさい。"],["～てはいけません","Vてはいけません","Larangan","Menentukan larangan.","ここで走ってはいけません。"]],
  [["～なくてもいいです","Vない→なくてもいいです","Tidak perlu","Menegaskan bahwa kewajiban dapat dihapus.","明日来なくてもいいです。"],["～なくてはいけません","Vなくてはいけません","Harus","Menegaskan kewajiban.","薬を飲まなくてはいけません。"]],
  [["～ようにします","辞書形/ない形 + ようにします","Usaha berkelanjutan","Menetapkan kebiasaan atau tujuan.","毎日練習するようにします。"],["～ようになります","辞書形/ない形 + ようになります","Perubahan kemampuan","Menyatakan perubahan menjadi mampu.","日本語が話せるようになります。"]],
  [["～ために","Nの/普通形 + ために","Tujuan","Menjelaskan tujuan atau manfaat.","健康のために走ります。"],["～によって","Nによって","Metode/sumber/perbedaan","Menjelaskan cara atau penyebab.","季節によって食べ物が違います。"]],
  [["～てくる","Vてくる","Perubahan menuju pembicara","Menyatakan perubahan muncul atau mendekat.","雨が降ってきました。"],["～ていく","Vていく","Perubahan menuju masa depan","Menyatakan proses berlanjut.","町がきれいになっていきます。"]],
  [["～間","～間","Durasi penuh","Menyatakan kegiatan selama periode.","授業の間に寝ません。"],["～間に","～間に","Dalam periode","Menunjukkan kegiatan terjadi dalam batas waktu.","休みの間に宿題をします。"]],
  [["～くらい","Nくらい / Vくらい","Perkiraan tingkat","Menyatakan perkiraan atau standar.","三時間くらいかかります。"],["～ほど","Nほど / Vほど","Sebanding tingkat","Membandingkan tingkat tinggi/rendah.","先週ほど暑くありません。"]],
  [["～たとたんに","Vたとたんに","Begitu... langsung","Menunjukkan perubahan segera.","ドアを開けたとたんに猫が出ました。"],["～うちに","V辞書形/ている/ないうちに","Sebelum kesempatan berakhir","Menyarankan bertindak dalam kesempatan.","明るいうちに帰ります。"]],
  [["～ようです","Bentuk biasa + ようです","Kesimpulan berdasarkan indera","Menarik kesimpulan dari keadaan.","雨が降っているようです。"],["～らしいです","N/A/普通形 + らしいです","Kesimpulan berdasarkan informasi","Menilai berdasarkan ciri atau kabar.","彼は忙しいらしいです。"]],
  [["～の","V普通形 + の","Nominalisasi","Mengubah kata kerja menjadi benda.","日本へ行くのが好きです。"],["～こと","V辞書形 + こと","Nominalisasi peraturan","Menunjukkan hal atau kewajiban.","毎朝運動することは大切です。"]],
  [["～なら","Nなら / V普通形なら","Kondisi situasional","Menanggapi kondisi lawan bicara.","東京なら新幹線が便利です。"],["～ばいいです","Vば / Aければ / Nなら","Saran","Memberi saran kondisi.","時間があれば電話してもいいです。"]],
  [["～ところです","Vている/た/辞書形 + ところです","Tahap tindakan","Membedakan sebelum, sedang, atau sesudah.","今、食べるところです。"],["～ばかりです","Vてばかりいます","Kecenderungan berulang","Menunjukkan hanya melakukan hal yang sama.","遊んでばかりいます。"]],
  [["～はずです","V普通形 + はずです","Harapan logis","Menyatakan kesimpulan wajar.","試験は明日のはずです。"],["～わけです","V普通形 + わけです","Penjelasan kesimpulan","Menjelaskan alasan yang terungkap.","だから休みだったわけです。"]]
];

const kaiwaCatalog = [
  ["A: はじめまして。わたしは田中です。／B: 田中さんですか。わたしはサントスです。","A: Senang berkenalan. Saya Tanaka. / B: Anda Tanaka? Saya Santos.","Perkenalan dan pola です。"],
  ["A: これは何ですか。／B: カメラです。／A: 日本のカメラですか。","A: Ini apa? / B: Kamera. / A: Kamera buatan Jepang?","Pola これ・それ・あれ dan ですか。"],
  ["A: 駅はどこですか。／B: あそこです。","A: Stasiun ada di mana? / B: Di sana.","Kata tunjuk tempat dan どこ。"],
  ["A: 今何時ですか。／B: ちょうど九時です。","A: Sekarang pukul berapa? / B: Tepat pukul sembilan.","Jam dan menit."],
  ["A: 来週どこへ行きますか。／B: 京都へ行きます。","A: Minggu depan pergi ke mana? / B: Saya pergi ke Kyoto.","へ dan kata kerja perpindahan."],
  ["A: 朝ごはんを食べますか。／B: はい、パンを食べます。","A: Apakah Anda makan sarapan? / B: Ya, saya makan roti.","Partikel を dan kebiasaan."],
  ["A: 京都へ電車で行きますか。／B: はい、電車で行きます。","A: Pergi ke Kyoto dengan kereta? / B: Ya, dengan kereta.","で sebagai alat/sarana."],
  ["A: 部屋に何がありますか。／B: テーブルがあります。","A: Apa ada di kamar? / B: Ada meja.","あります dan 何。"],
  ["A: 誰が来ますか。／B: 山田さんが来ます。","A: Siapa yang datang? / B: Tuan Yamada datang.","が sebagai subjek."],
  ["A: 駅の近くに何がありますか。／B: 銀行があります。","A: Apa yang ada dekat stasiun? / B: Ada bank.","あります dan tempat."],
  ["A: りんごをいくつ買いますか。／B: 三つ買います。","A: Membeli berapa apel? / B: Membeli tiga.","助数詞 dan いくつ。"],
  ["A: 日本と韓国、どちらが近いですか。／B: 韓国のほうが近いです。","A: Mana yang lebih dekat, Jepang atau Korea? / B: Korea lebih dekat.","Pembandingan."],
  ["A: 何が欲しいですか。／B: 新しいカメラが欲しいです。","A: Mau apa? / B: Saya ingin kamera baru.","～がほしいです dan ～たいです。"],
  ["A: 写真を撮ってもいいですか。／B: はい、撮ってもいいですよ。","A: Boleh mengambil foto? / B: Ya, boleh.","～てもいいです。"],
  ["A: 今、何をしていますか。／B: 日本語を勉強しています。","A: Sekarang sedang apa? / B: Sedang belajar bahasa Jepang.","～ています。"],
  ["A: この町は静かですか。／B: はい、とても静かです。","A: Kota ini tenang? / B: Ya, sangat tenang.","Kata sifat i dan na."],
  ["A: 土曜日、何をしに行きますか。／B: 本を買いに行きます。","A: Sabtu pergi melakukan apa? / B: Pergi membeli buku.","～に行きます。"],
  ["A: 何ができますか。／B: 日本語を話すことができます。","A: Bisa melakukan apa? / B: Bisa berbicara bahasa Jepang.","ことができます。"],
  ["A: 日本へ行ったことがありますか。／B: はい、一度あります。","A: Pernah ke Jepang? / B: Ya, pernah sekali.","～たことがあります。"],
  ["A: 明日パーティーに行きますか。／B: 疲れたから行きません。","A: Besok pergi pesta? / B: Saya tidak pergi karena lelah.","Bentuk biasa dan から。"],
  ["A: 明日は雨でしょうか。／B: 雨だと思います。","A: Besok hujan? / B: Saya pikir hujan.","～と思います."],
  ["A: ここで電話をしてはいけませんか。／B: はい、してはいけません。","A: Tidak boleh menelepon di sini? / B: Ya, tidak boleh.","Larangan."],
  ["A: お金がなければ、どうしますか。／B: 家で勉強します。","A: Jika tidak ada uang, bagaimana? / B: Belajar di rumah.","～ば／～なら."],
  ["A: この本を貸してあげますか。／B: はい、ぜひください。","A: Mau saya pinjamkan buku ini? / B: Ya, tolong.","あげます／もらいます。"],
  ["A: 食べてから出かけますか。／B: はい、食べてから出かけます。","A: Pergi setelah makan? / B: Ya, setelah makan.","～てから."],
  ["A: 部屋を掃除してもらえますか。／B: 今掃除してあげます。","A: Bisa dibantu membersihkan kamar? / B: Sekarang saya bantu.","～てもらいます."],
  ["A: 最近、仕事は忙しいですか。／B: 毎日忙しくなっています。","A: Belakangan sibuk? / B: Setiap hari makin sibuk.","～ています."],
  ["A: 明日はどうでしょうか。／B: 雨かもしれません。","A: Besok bagaimana? / B: Mungkin hujan.","かもしれません."],
  ["A: 週末は何をしますか。／B: 買い物したり、本を読んだりします。","A: Akhir pekan melakukan apa? / B: Membeli barang atau membaca.","～たり."],
  ["A: 暇だったら遊びましょう。／B: はい、たら電話します。","A: Kalau senggang, ayo bermain. / B: Ya, saya telepon.","～たら."],
  ["A: 駅までどのくらいですか。／B: 電車で三十分くらいです。","A: Ke stasiun sekitar berapa lama? / B: Sekitar 30 menit.","くらい."],
  ["A: 体調が悪いなら休んだほうがいいです。／B: そうですね。","A: Kalau kurang sehat, lebih baik istirahat. / B: Betul.","ほうがいい."],
  ["A: 来月日本へ行くつもりですか。／B: はい、行く予定です。","A: Berencana ke Jepang bulan depan? / B: Ya, sudah direncanakan.","つもり／予定."],
  ["A: この本は誰に書かれましたか。／B: 有名な作家に書かれました。","A: Buku ini ditulis oleh siapa? / B: Ditulis oleh penulis terkenal.","Pasif."],
  ["A: 遅れたのはなぜですか。／B: 電車が遅れたので遅れました。","A: Kenapa terlambat? / B: Karena kereta terlambat.","ので."],
  ["A: 箸の使い方を教えてください。／B: こう持つのがいいです。","A: Tolong ajarkan cara memakai sumpit. / B: Lebih baik memegang begini.","使い方."],
  ["A: ニュースによると明日は雪です。／B: 雪が降るそうですね。","A: Menurut berita, besok salju. / B: Kabarnya salju turun.","そうです."],
  ["A: 宿題をしなさい。／B: はい、今します。","A: Kerjakan PR. / B: Ya, sekarang.","なさい."],
  ["A: 明日来なくてもいいですか。／B: はい、来なくてもいいです。","A: Besok tidak perlu datang? / B: Ya, tidak perlu.","～なくてもいいです."],
  ["A: 毎日練習するとどうなりますか。／B: 話せるようになります。","A: Jika berlatih setiap hari, apa terjadi? / B: Menjadi bisa berbicara.","ように／ようになる."],
  ["A: なぜ日本語を勉強しますか。／B: 日本へ行くために勉強します。","A: Kenapa belajar Jepang? / B: Untuk pergi ke Jepang.","ために."],
  ["A: 天気はどうなっていますか。／B: 雨が降ってきました。","A: Bagaimana cuaca? / B: Hujan mulai turun.","～てくる."],
  ["A: お菓子を作る時間はありますか。／B: 三時間くらいあります。","A: Ada waktu membuat kue? / B: Ada sekitar tiga jam.","間／間に."],
  ["A: この町は京都より静かですか。／B: はい、かなり静かです。","A: Kota ini lebih tenang daripada Kyoto? / B: Ya, cukup tenang.","程度比較."],
  ["A: 明るいうちに帰りますか。／B: はい、帰ったとたんに雨が降りました。","A: Pulang sebelum gelap? / B: Begitu pulang, hujan turun.","うちに／たとたん."],
  ["A: 田中さんは来ましたか。／B: 来ているようです。","A: Pak Tanaka sudah datang? / B: Tampaknya sudah datang.","ようです／らしいです."],
  ["A: 日本語を学ぶのは難しいですか。／B: 続けることが大切です。","A: Belajar Jepang sulit? / B: Melanjutkan itu penting.","Nominalisasi."],
  ["A: 東京へ行くなら、どこに泊まりますか。／B: 安ければホテルがいいです。","A: Kalau ke Tokyo, menginap di mana? / B: Kalau murah, hotel bagus.","なら／ば."],
  ["A: 今、何をしているところですか。／B: 出かけるところです。","A: Sedang tahap apa sekarang? / B: Baru akan pergi.","ところ／ばかり."],
  ["A: 試験はいつですか。／B: 明日のはずですが、確認しました。","A: Ujian kapan? / B: Seharusnya besok, sudah dikonfirmasi.","はず／わけ."]
];

const navItems = [
  ["dashboard","⌂","Dashboard"],["lessons","▤","Minna no Nihongo I"],["lessons-ii","▥","Minna no Nihongo II"],
  ["grammar","文","Bunpou"],["vocabulary","語","Kosakata"],["conjugation","動","Konjugasi Kata Kerja"],
  ["kanji","漢","Kanji"],["particles","助","Partikel"],["exercise","✓","Latihan Soal"],["quiz","?","Kuis"],["progress","◷","Progress Belajar"],
  ["dictionary","検索","Kamus"],["favorites","☆","Materi Tersimpan"],["audit","▦","Audit Materi"]
];

const vocabulary = [
  ["わたし","私","watashi","Saya","kata ganti","私は学生です。","Saya adalah siswa."],
  ["がくせい","学生","gakusei","Pelajar","kata benda","田中さんは学生です。","Tuan Tanaka adalah pelajar."],
  ["せんせい","先生","sensei","Guru","kata benda","先生は教室にいます。","Guru ada di kelas."],
  ["にほん","日本","Nihon","Jepang","kata benda","日本語を勉強します。","Saya belajar Bahasa Jepang."],
  ["たべる","食べる","taberu","Makan","kata kerja","朝ごはんを食べます。","Saya makan sarapan."],
  ["のむ","飲む","nomu","Minum","kata kerja","水を飲みます。","Saya minum air."],
  ["いく","行く","iku","Pergi","kata kerja","東京へ行きます。","Saya pergi ke Tokyo."],
  ["くる","来る","kuru","Datang","kata kerja","友達が来ます。","Teman datang."],
  ["かう","買う","kau","Membeli","kata kerja","本を買います。","Saya membeli buku."],
  ["みる","見る","miru","Melihat","kata kerja","映画を見ます。","Saya menonton film."],
  ["きく","聞く","kiku","Mendengar","kata kerja","音楽を聞きます。","Saya mendengarkan musik."],
  ["よむ","読む","yomu","Membaca","kata kerja","新聞を読みます。","Saya membaca koran."]
];

const kotobaSeeds = [
  [["私","わたし","watashi","Saya","Kata ganti","私は学生です。","Saya adalah mahasiswa."],["先生","せんせい","sensei","Guru","Kata benda","先生は教室にいます。","Guru ada di kelas."],["学生","がくせい","gakusei","Mahasiswa","Kata benda","田中さんは学生です。","Tuan Tanaka adalah mahasiswa."]],
  [["これ","これ","kore","Ini","Kata benda","これは私の本です。","Ini buku saya."],["それ","それ","sore","Itu","Kata benda","それは何ですか。","Itu apa?"],["あれ","あれ","are","Itu (jauh)","Kata benda","あれは駅です。","Itu stasiun."]],
  [["ここ","ここ","koko","Di sini","Kata keterangan","ここは図書館です。","Di sini adalah perpustakaan."],["そこ","そこ","soko","Di situ","Kata keterangan","そこは入口です。","Di situ adalah pintu masuk."],["どこ","どこ","doko","Di mana","Kata tanya","駅はどこですか。","Stasiun ada di mana?"]],
  [["時","じ","ji","Jam","Kata benda","今、八時です。","Sekarang pukul delapan."],["分","ふん","fun","Menit","Kata benda","十分です。","Sepuluh menit."],["朝","あさ","asa","Pagi","Kata benda","朝ごはんを食べます。","Saya makan sarapan."]],
  [["行きます","いきます","ikimasu","Pergi","Kata kerja","東京へ行きます。","Saya pergi ke Tokyo."],["来ます","きます","kimasu","Datang","Kata kerja","友達が来ます。","Teman datang."],["帰ります","かえります","kaerimasu","Pulang","Kata kerja","家へ帰ります。","Saya pulang ke rumah."]],
  [["食べます","たべます","tabemasu","Makan","Kata kerja","パンを食べます。","Saya makan roti."],["飲みます","のみます","nomimasu","Minum","Kata kerja","水を飲みます。","Saya minum air."],["見る","みます","mimasu","Melihat","Kata kerja","映画を見ます。","Saya menonton film."]],
  [["切符","きっぷ","kippu","Tiket","Kata benda","切符を買います。","Saya membeli tiket."],["電車","でんしゃ","densha","Kereta listrik","Kata benda","電車で行きます。","Saya pergi dengan kereta."],["一緒に","いっしょに","isshoni","Bersama","Kata keterangan","友達と一緒に行きます。","Saya pergi bersama teman."]],
  [["おいしい","おいしい","oishii","Lezat","Kata sifat-i","この料理はおいしいです。","Masakan ini lezat."],["高い","たかい","takai","Mahai","Kata sifat-i","この時計は高いです。","Jam ini mahal."],["安い","やすい","yasui","Murah","Kata sifat-i","この本は安いです。","Buku ini murah."]],
  [["好き","すき","suki","Suka","Kata sifat-na","私は音楽が好きです。","Saya suka musik."],["きれい","きれい","kirei","Cantik/Bersih","Kata sifat-na","部屋がきれいです。","Kamar bersih."],["有名","ゆうめい","yuumei","Terkenal","Kata sifat-na","この店は有名です。","Toko ini terkenal."]],
  [["あります","あります","arimasu","Ada (benda)","Kata kerja","机に本があります。","Ada buku di atas meja."],["います","います","imasu","Ada (makhluk)","Kata kerja","部屋に猫がいます。","Ada kucing di kamar."],["庭","にわ","niwa","Halaman","Kata benda","庭に木があります。","Ada pohon di halaman."]],
  [["一人","ひとり","hitori","Satu orang","Kata benda","一人で行きます。","Saya pergi sendiri."],["二人","ふたり","futari","Dua orang","Kata benda","二人で食べます。","Kami makan berdua."],["枚","まい","mai","Lembar","Kata bantu bilangan","紙を三枚買います。","Saya membeli tiga lembar kertas."]],
  [["一番","いちばん","ichiban","Yang paling","Kata keterangan","富士山が一番高いです。","Gunung Fuji paling tinggi."],["より","より","yori","Lebih dari","Ungkapan","東京は大阪より大きいです。","Tokyo lebih besar daripada Osaka."],["どちら","どちら","dochira","Yang mana","Kata tanya","どちらが好きですか。","Yang mana yang Anda sukai?"]],
  [["欲しい","ほしい","hoshii","Ingin (memiliki)","Kata sifat-i","車が欲しいです。","Saya ingin mobil."],["食べたい","たべたい","tabetai","Ingin makan","Kata kerja","寿司を食べたいです。","Saya ingin makan sushi."],["飲みたい","のみたい","nomitai","Ingin minum","Kata kerja","お茶を飲みたいです。","Saya ingin minum teh."]],
  [["ください","ください","kudasai","Mohon","Ungkapan","これを見せてください。","Tolong tunjukkan ini."],["撮ります","とります","torimasu","Mengambil foto","Kata kerja","写真を撮ります。","Saya mengambil foto."],["貸します","かします","kashimasu","Meminjamkan","Kata kerja","本を貸します。","Saya meminjamkan buku."]],
  [["います","います","imasu","Sedang","Ungkapan","今、勉強しています。","Sekarang sedang belajar."],["待ちます","まちます","machimasu","Menunggu","Kata kerja","駅で友達を待ちます。","Saya menunggu teman di stasiun."],["住みます","すみます","sumimasu","Tinggal","Kata kerja","大阪に住んでいます。","Saya tinggal di Osaka."]],
  [["寒い","さむい","samui","Dingin","Kata sifat-i","今日は寒いです。","Hari ini dingin."],["静か","しずか","shizuka","Tenang","Kata sifat-na","この町は静かです。","Kota ini tenang."],["新しい","あたらしい","atarashii","Baru","Kata sifat-i","新しい時計です。","Ini jam baru."]],
  [["旅行","りょこう","ryokou","Perjalanan","Kata benda","旅行に行きます。","Saya pergi jalan-jalan."],["教えます","おしえます","oshiemasu","Mengajar","Kata kerja","日本語を教えます。","Saya mengajar Bahasa Jepang."],["教わります","おそわります","osowarimasu","Belajar dari","Kata kerja","先生に教わります。","Saya belajar dari guru."]],
  [["できます","できます","dekimasu","Dapat","Kata kerja","日本語ができます。","Saya bisa Bahasa Jepang."],["車","くるま","kuruma","Mobil","Kata benda","車を運転できます。","Saya bisa mengemudi mobil."],["運転します","うんてんします","unten shimasu","Mengemudi","Kata kerja","車を運転します。","Saya mengemudi mobil."]],
  [["経験","けいけん","keiken","Pengalaman","Kata benda","日本へ行ったことがあります。","Saya pernah pergi ke Jepang."],["一度","いちど","ichido","Sekali","Kata keterangan","一度行きました。","Saya pergi sekali."],["ありません","ありません","arimasen","Tidak ada","Kata kerja","経験がありません。","Saya tidak punya pengalaman."]],
  [["と思います","とおもいます","to omoimasu","Berpikir","Ungkapan","雨だと思います。","Saya pikir akan hujan."],["もし","もし","moshi","Jika","Ungkapan","もし分かりません。","Jika tidak tahu."],["から","から","kara","Karena","Ungkapan","忙しいから行きません。","Saya tidak pergi karena sibuk."]],
  [["と思います","とおもいます","to omoimasu","Merasa","Ungkapan","明日は休むと思います。","Saya rasa besok saya istirahat."],["と言います","といいます","to iimasu","Mengatakan","Ungkapan","田中さんと言います。","Namanya Tuan Tanaka."],["知らせます","しらせます","shirasemasu","Memberi tahu","Kata kerja","先生に知らせます。","Saya memberi tahu guru."]],
  [["ないで","ないで","naide","Tanpa melakukan","Ungkapan","靴を脱がないでください。","Tolong jangan melepas sepatu."],["なければ","なければ","nakereba","Harus","Ungkapan","出さなければなりません。","Harus mengumpulkannya."],["いけません","いけません","ikemasen","Tidak boleh","Ungkapan","ここで写真を撮ってはいけません。","Tidak boleh mengambil foto di sini."]],
  [["もし","もし","moshi","Jika","Kata keterangan","雨なら、行きません。","Jika hujan, saya tidak pergi."],["なら","なら","nara","Jika","Ungkapan","日本へ行くなら、早く行きます。","Jika pergi ke Jepang, pergilah lebih awal."],["ば","ば","ba","Jika","Ungkapan","安ければ買います。","Jika murah, saya beli."]],
  [["あげます","あげます","agemasu","Memberi","Kata kerja","友達に本をあげます。","Saya memberi buku kepada teman."],["もらいます","もらいます","moraimasu","Menerima","Kata kerja","先生にもらいます。","Saya menerimanya dari guru."],["くれます","くれます","kuremasu","Memberi kepada saya","Kata kerja","友達が本をくれます。","Teman memberi saya buku."]],
  [["てから","てから","te kara","Setelah","Ungkapan","勉強してから寝ます。","Saya tidur setelah belajar."],["しまいます","しまいます","shimaimasu","Sudah selesai","Ungkapan","宿題をしてしまいます。","Saya menyelesaikan PR."],["また","また","mata","Lagi","Kata keterangan","また会いましょう。","Mari bertemu lagi."]],
  [["てください","てください","te kudasai","Mohon lakukan","Ungkapan","窓を開けてください。","Tolong buka jendela."],["てもらいます","てもらいます","te moraimasu","Meminta dilakukan","Ungkapan","友達に直してもらいます。","Saya meminta teman memperbaikinya."],["てあげます","てあげます","te agemasu","Melakukan untuk","Ungkapan","荷物を持ってあげます。","Saya membawakan barang."]],
  [["形","かた","kata","Cara","Kata benda","使い方を教えます。","Saya mengajarkan cara menggunakan."],["そうです","そうです","sou desu","Kelihatannya","Ungkapan","おいしそうです。","Kelihatannya lezat."],["ようです","ようです","you desu","Sepertinya","Ungkapan","雨のようです。","Sepertinya hujan."]],
  [["たり","たり","tari","Melakukan beberapa hal","Ungkapan","読んだり、話したりします。","Saya membaca atau berbicara."],["時々","ときどき","tokidoki","Kadang-kadang","Kata keterangan","時々映画を見ます。","Kadang-kadang saya menonton film."],["よく","よく","yoku","Sering","Kata keterangan","よく散歩します。","Saya sering berjalan-jalan."]],
  [["たら","たら","tara","Jika","Ungkapan","暇だったら電話します。","Jika ada waktu, saya menelepon."],["もし","もし","moshi","Seandainya","Kata keterangan","もし雨が降ったら休みます。","Jika hujan, saya beristirahat."],["いいです","いいです","ii desu","Baik","Ungkapan","早く行ったらいいです。","Lebih baik pergi lebih awal."]],
  [["かもしれません","かもしれません","kamoshi remasen","Mungkin","Ungkapan","明日雨かもしれません。","Besok mungkin hujan."],["でしょう","でしょう","deshou","Mungkin/Kira","Ungkapan","彼は来るでしょう。","Dia mungkin akan datang."],["たぶん","たぶん","tabun","Kemungkinan besar","Kata keterangan","たぶん行きます。","Kemungkinan besar saya pergi."]],
  [["ほうがいいです","ほうがいいです","hou ga ii desu","Lebih baik","Ungkapan","薬を飲んだほうがいいです。","Lebih baik minum obat."],["ませんか","ませんか","masen ka","Tidak mau?","Ungkapan","一緒に行きませんか。","Mau pergi bersama?"],["しましょう","しましょう","shimashou","Mari","Ungkapan","休みましょう。","Mari istirahat."]],
  [["つもり","つもり","tsumori","Berencana","Ungkapan","留学するつもりです。","Saya berencana belajar di luar negeri."],["予定","よてい","yotei","Rencana","Kata benda","明日の予定は試験です。","Rencana besok adalah ujian."],["決めます","きめます","kimemasu","Memutuskan","Kata kerja","旅行に行くと決めました。","Saya memutuskan pergi perjalanan."]],
  [["られます","られます","raremasu","Pasif","Ungkapan","先生に褒められます。","Saya dipuji guru."],["作ります","つくります","tsukurimasu","Membuat","Kata kerja","料理を作ります。","Saya membuat masakan."],["書かれます","かかれます","kakaremasu","Ditulis","Ungkapan","この本は日本語で書かれます。","Buku ini ditulis dalam bahasa Jepang."]],
  [["ので","ので","node","Karena","Ungkapan","雨なので休みます。","Saya istirahat karena hujan."],["から","から","kara","Karena","Ungkapan","忙しいから行きません。","Saya tidak pergi karena sibuk."],["でも","でも","demo","Namun","Ungkapan","高いですが、買います。","Walaupun mahal, saya membelinya."]],
  [["方","かた","kata","Cara","Kata benda","この漢字の読み方を教えます。","Saya mengajarkan cara membaca kanji ini."],["使います","つかいます","tsukaimasu","Menggunakan","Kata kerja","辞書を使います。","Saya menggunakan kamus."],["練習します","れんしゅうします","renshuu shimasu","Berlatih","Kata kerja","毎日練習します。","Saya berlatih setiap hari."]],
  [["そうです","そうです","sou desu","Menurut kabar","Ungkapan","雨が降るそうです。","Kabarnya akan hujan."],["聞きます","ききます","kikimasu","Mendengar","Kata kerja","ニュースで聞きました。","Saya mendengarnya dari berita."],["伝えます","つたえます","tsutaemasu","Menyampaikan","Kata kerja","先生に伝えます。","Saya menyampaikannya kepada guru."]],
  [["なさい","なさい","nasai","Lakukan","Ungkapan","宿題をしなさい。","Kerjakanlah PR."],["いけません","いけません","ikemasen","Tidak boleh","Ungkapan","ここで走ってはいけません。","Tidak boleh berlari di sini."],["禁止","きんし","kinshi","Larangan","Kata benda","禁煙です。","Larangan merokok."]],
  [["なくても","なくても","nakute mo","Tidak perlu","Ungkapan","明日は来なくてもいいです。","Besok tidak harus datang."],["なくてはいけません","なくてはいけません","nakute wa ikemasen","Harus","Ungkapan","薬を飲まなくてはいけません。","Harus minum obat."],["普通","ふつう","futsuu","Biasanya","Kata keterangan","普通は朝勉強します。","Biasanya belajar di pagi hari."]],
  [["ようにします","ようにします","you ni shimasu","Berusaha agar","Ungkapan","毎日起きるようにします。","Saya berusaha bangun setiap hari."],["ようになります","ようになります","you ni narimasu","Menjadi dapat","Ungkapan","日本語が話せるようになります。","Menjadi dapat berbicara bahasa Jepang."],["練習","れんしゅう","renshuu","Latihan","Kata benda","毎日練習します。","Saya berlatih setiap hari."]],
  [["ために","ために","tame ni","Untuk/Agar","Ungkapan","健康のために走ります。","Saya berlari untuk kesehatan."],["によって","によって","ni yotte","Menurut","Ungkapan","人によって違います。","Berbeda menurut orang."],["目的","もくてき","mokuteki","Tujuan","Kata benda","目的を確認します。","Saya memastikan tujuan."]],
  [["てくる","てくる","te kuru","Mulai terjadi","Ungkapan","雨が降ってきます。","Hujan mulai turun."],["ていく","ていく","te iku","Terus berubah","Ungkapan","町が変わっていきます。","Kota terus berubah."],["最近","さいきん","saikin","Belakangan ini","Kata keterangan","最近忙しいです。","Belakangan ini sibuk."]],
  [["間","あいだ","aida","Selama","Kata benda","授業の間に寝ません。","Saya tidak tidur selama pelajaran."],["間に","あいだに","aida ni","Dalam periode","Ungkapan","休みの間に勉強します。","Saya belajar selama masa libur."],["間に合います","まにあいます","maniaimasu","Tepat waktu","Kata kerja","電車に間に合います。","Saya tepat waktu naik kereta."]],
  [["くらい","くらい","kurai","Sekitar","Ungkapan","三時間くらいかかります。","Memakan waktu sekitar tiga jam."],["ほど","ほど","hodo","Sebesar","Ungkapan","先週ほど暑くありません。","Tidak sepanas pekan lalu."],["比べます","くらべます","kurabemasu","Membandingkan","Kata kerja","値段を比べます。","Saya membandingkan harga."]],
  [["うちに","うちに","uchi ni","Sebelum waktu","Ungkapan","明るいうちに帰ります。","Saya pulang saat masih terang."],["たとたんに","たとたんに","ta totan ni","Begitu","Ungkapan","ドアを開けたとたんに寒いです。","Begitu pintu dibuka, dingin."],["後","あと","ato","Sesudah","Kata benda","仕事の後で勉強します。","Saya belajar setelah bekerja."]],
  [["ようです","ようです","you desu","Nampaknya","Ungkapan","外は暑いようです。","Nampaknya di luar panas."],["らしいです","らしいです","rashii desu","Sepertinya","Ungkapan","彼は忙しいらしいです。","Sepertinya dia sibuk."],["感じます","かんじます","kanjimasu","Merasa","Kata kerja","寒いと感じます。","Saya merasa dingin."]],
  [["の","の","no","Nominalisasi","Ungkapan","日本へ行くのが好きです。","Saya suka pergi ke Jepang."],["こと","こと","koto","Hal bahwa","Ungkapan","早く寝ることが大切です。","Tidur lebih awal itu penting."],["知らない","しらない","shiranai","Tidak tahu","Kata sifat-i","名前を知らないです。","Saya tidak tahu namanya."]],
  [["なら","なら","nara","Kalau","Ungkapan","東京に行くなら新幹線です。","Kalau ke Tokyo, naik shinkansen."],["ば","ば","ba","Jika","Ungkapan","安ければ買います。","Jika murah, saya beli."],["いいですか","いいですか","ii desu ka","Boleh?","Ungkapan","ここに座ってもいいですか。","Boleh duduk di sini?"]],
  [["ところです","ところです","tokoro desu","Sedang hampir","Ungkapan","今、食べるところです。","Saya baru akan makan."],["ばかり","ばかり","bakari","Hanya","Ungkapan","遊んでばかりいます。","Hanya bermain terus."],["続けます","つづけます","tsuzukemasu","Melanjutkan","Kata kerja","勉強を続けます。","Saya melanjutkan belajar."]],
  [["はずです","はずです","hazu desu","Seharusnya","Ungkapan","試験は明日のはずです。","Seharusnya ujian besok."],["わけです","わけです","wake desu","Jadi","Ungkapan","だから休みだったわけです。","Jadi itulah sebabnya libur."],["結局","けっきょく","kekkyoku","Pada akhirnya","Kata keterangan","結局行きませんでした。","Pada akhirnya saya tidak pergi."]]
];

let state = JSON.parse(localStorage.getItem("minnaState") || "{}");
state.completed = state.completed || [];
state.saved = state.saved || [];
state.quizHistory = state.quizHistory || [];
state.daily = state.daily || 1;
state.kotobaStatus = state.kotobaStatus || {};
state.kotobaImports = state.kotobaImports || {};

let currentLesson = null;
let quizIndex = 0;
let quizScore = 0;
let quizAnswers = [];

function saveState() { localStorage.setItem("minnaState", JSON.stringify(state)); }
function chapterName(i) { return chapters[i][0]; }
function isCompleted(i) { return state.completed.includes(i + 1); }

function navMarkup() {
  document.getElementById("mainNav").innerHTML = navItems.map((n,i) =>
    `<button class="nav-item" data-page="${n[0]}"><span class="nav-icon">${n[1]}</span><span>${n[2]}</span></button>`
  ).join("");
}

function setActive(page) {
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.page === page || (page === "lesson" && b.dataset.page === "lessons")));
}

function lessonTile(i) {
  const c = chapters[i];
  return `<button class="lesson-tile ${isCompleted(i) ? "done" : ""}" data-lesson="${i}">
    <span class="chapter">BAB ${i+1}</span><h3>${c[0]}</h3>
    <p>${c[2]}</p>
  </button>`;
}

function renderDashboard() {
  const completed = state.completed.length;
  const avg = state.quizHistory.length ? Math.round(state.quizHistory.reduce((a,b)=>a+b,0)/state.quizHistory.length) : 0;
  const next = completed >= 50 ? 49 : Math.min(completed,49);
  document.getElementById("app").innerHTML = `
    <div class="page-heading"><div><h1>おはようございます！</h1><p>Siap melanjutkan perjalanan belajar Bahasa Jepang hari ini?</p></div>
      <button class="primary-btn" data-page-go="lesson" data-lesson="${next}">Lanjut Belajar →</button></div>
    <div class="stats-grid">
      ${statCard("▤","Bab Selesai",completed,"/ 50 bab")}
      ${statCard("文","Bunpou Dikuasai",Math.min(completed*2,100),"+8 bulan ini")}
      ${statCard("✓","Rata-rata Nilai",`${avg || 0}%`,avg ? "Konsisten" : "Belum ada kuis")}
      ${statCard("◷","Target Harian",`${state.daily} / 2`,`Materi hari ini`)}
    </div>
    <div class="dashboard-grid">
      <div class="panel"><div class="panel-head"><h2>Progress Buku</h2><button data-page-go="progress">Lihat detail</button></div>
        <div class="course-progress">
          ${courseProgress("I","Minna no Nihongo I","Bab 1–25",Math.min(completed,25),25)}
          ${courseProgress("II","Minna no Nihongo II","Bab 26–50",Math.max(0,completed-25),25)}
        </div>
      </div>
      <div class="panel"><div class="panel-head"><h2>Belajar Selanjutnya</h2></div>
        <div class="lesson-card"><div class="lesson-number">${next+1}</div><div><strong>${chapterName(next)}</strong><span>Bab ${next+1} · Minna no Nihongo ${next<25?"I":"II"}</span></div>
        <button class="icon-btn" data-page-go="lesson" data-lesson="${next}">→</button></div>
      </div>
    </div>
    <div class="panel" style="margin-top:18px"><div class="panel-head"><h2>Materi Terakhir</h2><button data-page-go="lessons">Semua materi</button></div>
      <div class="lesson-grid">${[Math.max(0,next-2),Math.max(0,next-1),next,Math.min(49,next+1)].map(i=>lessonTile(i)).join("")}</div>
    </div>`;
}

function statCard(icon,title,value,note) {
  return `<div class="stat-card"><div class="stat-card-top"><span>${title}</span><span class="stat-icon">${icon}</span></div><strong>${value}</strong><small>${note}</small></div>`;
}
function courseProgress(badge,title,desc,value,total) {
  const pct=Math.round(value/total*100);
  return `<div class="course-row"><div class="course-badge">${badge}</div><div class="course-info"><strong>${title}</strong><span style="color:var(--muted);font-size:12px">${desc}</span><div class="progress-track" style="margin-top:8px"><div style="width:${pct}%"></div></div></div><div class="percent">${pct}%</div></div>`;
}

function renderLessons(start=0,end=25,title="Minna no Nihongo I") {
  document.getElementById("app").innerHTML = `<div class="page-heading"><div><h1>${title}</h1><p>Bab ${start+1}–${end}</p></div></div>
  <div class="filter-bar"><input id="lessonSearch" placeholder="Cari bab atau tata bahasa..."><select id="lessonStatus"><option value="all">Semua status</option><option value="done">Sudah selesai</option><option value="todo">Belum dipelajari</option></select></div>
  <div class="lesson-grid" id="lessonGrid">${renderLessonRange(start,end)}</div>`;
  bindLessonFilters(start,end);
}
function renderLessonRange(start,end) {
  return Array.from({length:end-start},(_,n)=>lessonTile(start+n)).join("");
}
function bindLessonFilters(start,end) {
  const search=document.getElementById("lessonSearch"),status=document.getElementById("lessonStatus"),grid=document.getElementById("lessonGrid");
  const filter=()=>{const q=search.value.toLowerCase();grid.innerHTML=Array.from({length:end-start},(_,n)=>start+n).filter(i=>{const text=(chapterName(i)+" "+chapters[i][2]+" "+chapters[i][1].join(" ")).toLowerCase();const okStatus=status.value==="all"||(status.value==="done"===isCompleted(i));return text.includes(q)&&okStatus}).map(i=>lessonTile(i)).join("")||`<p>Materi tidak ditemukan.</p>`};
  search.oninput=filter;status.onchange=filter;
}

function patternDetails(i) {
  const catalog=bunpouCatalog[i] || [];
  return catalog.map((b,p)=>{
    const example=b[4];
    return `<article class="pattern"><h3>${b[0]}</h3><div class="formula"><strong>Rumus:</strong> ${b[1]}</div>
      <div class="pattern-meta"><div><strong>Arti dan fungsi</strong>${b[3]}</div><div><strong>Cara membentuk</strong>${b[2]}</div></div>
      <div class="pattern-meta"><div><strong>Kondisi penggunaan</strong>Gunakan dalam situasi yang sesuai tingkat kesopanan pembicaraan. ${b[3]}</div><div><strong>Kesalahan umum</strong>Jangan menghilangkan partikel yang menentukan hubungan kata, dan jangan mencampur bentuk sopan dengan bentuk biasa dalam satu kalimat.</div></div>
      <div class="examples"><div class="example"><strong>Contoh kalimat</strong><strong>${example}</strong><span>Contoh ini menunjukkan fungsi pola: ${b[3]}</span><span>Contoh tambahan, romaji, dan terjemahan per pola perlu dilengkapi melalui materi yang telah ditinjau.</span></div></div>
      <div class="explanation"><strong>Perbedaan yang perlu diperhatikan:</strong> Bedakan pola ini dari pola lain yang memiliki bentuk mirip; perhatikan partikel, bentuk kata kerja, dan situasi formal atau informal.</div></article>`;
  }).join("");
}

function renderLesson(i) {
  currentLesson=i;
  const c=chapters[i];
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Bab ${i+1}: ${c[0]}</h1><p>Minna no Nihongo ${i<25?"I":"II"}</p></div><button class="secondary-btn" id="saveLesson">${state.saved.includes(i+1)?"★ Tersimpan":"☆ Simpan materi"}</button></div>
  <div class="panel" style="margin-bottom:14px"><div class="panel-head"><h2>Tujuan Pembelajaran</h2></div><p style="margin:0;line-height:1.7">${c[2]} Setelah bab ini, pengguna diharapkan mampu mengenali rumus, menerapkan pola dalam percakapan, dan menjelaskan kesalahan umum.</p></div>
  ${patternDetails(i)}
  <div class="panel" style="margin-bottom:14px"><div class="panel-head"><h2>Kaiwa — Percakapan Bab ${i+1}</h2></div><div class="kaiwa-lines"><div class="kaiwa-line"><strong>Dialog</strong><div>${(kaiwaCatalog[i]||["Percakapan akan ditinjau.","Konfirmasi materi Bab "+(i+1)+".","Menyesuaikan konteks dan tingkat bab."])[0].replaceAll("／","<br>")}</div></div><div class="kaiwa-line"><strong>Terjemahan</strong><div>${(kaiwaCatalog[i]||[])[1]||"Tinjau terjemahan terhadap materi bab."}</div></div><div class="kaiwa-line"><strong>Penjelasan</strong><div>${(kaiwaCatalog[i]||[])[2]||"Dialog menggunakan pola dan kosakata yang sesuai Bab "+(i+1)+"."}</div></div></div></div>
  <div class="panel"><div class="panel-head"><h2>Latihan Singkat Bab ${i+1}</h2></div><p>Menyatakan: “Saya belajar Bahasa Jepang setiap hari.”</p><div class="filter-bar"><input id="translationInput" placeholder="Contoh: 私は毎日日本語を勉強します。"><button class="primary-btn" id="checkTranslation">Periksa</button></div><div id="translationResult"></div></div>
  <div style="display:flex;justify-content:flex-end;margin-top:16px"><button class="primary-btn" id="completeLesson">Tandai Selesai & lanjutkan</button></div>`;
  document.getElementById("saveLesson").onclick=toggleSave;
  document.getElementById("checkTranslation").onclick=checkTranslation;
  document.getElementById("completeLesson").onclick=completeLesson;
}
function toggleSave() {
  if(!currentLesson && currentLesson!==0)return;
  const n=currentLesson+1;
  state.saved=state.saved.includes(n)?state.saved.filter(x=>x!==n):[...state.saved,n];saveState();
  document.getElementById("saveLesson").textContent=state.saved.includes(n)?"★ Tersimpan":"☆ Simpan materi";toast(state.saved.includes(n)?"Materi ditambahkan ke favorit":"Materi dihapus dari favorit");
}
function checkTranslation() {
  const v=document.getElementById("translationInput").value.trim();
  document.getElementById("translationResult").innerHTML=v.includes("毎日")&&v.includes("日本語")&&v.includes("勉強")?`<div class="explanation">Jawaban benar: Pola ini menggunakan は untuk topik, 毎日 untuk keterangan waktu, を untuk objek, dan します untuk predikat.</div>`:`<div class="explanation">Belum tepat. Jawaban yang baik: <strong>私は毎日日本語を勉強します。</strong></div>`;
}
function completeLesson() {
  const n=currentLesson+1;
  if(!state.completed.includes(n)){state.completed.push(n);state.daily=Math.min(2,state.daily+1);}
  saveState();toast(`Bab ${n} ditandai selesai`);
  if(n<50)renderLesson(n);else renderDashboard();
}

function renderGrammar() {
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Bunpou</h1><p>Pola tata bahasa Minna no Nihongo Bab 1–50</p></div></div>
  <div class="filter-bar"><input id="grammarSearch" placeholder="Cari pola, mis. てもいいです"><select id="grammarBook"><option value="all">Semua buku</option><option value="1">Shokyuu I</option><option value="2">Shokyuu II</option></select></div>
  <div id="grammarList">${renderGrammarRange()}</div>`;
  const search=document.getElementById("grammarSearch"),book=document.getElementById("grammarBook");
  const filter=()=>{const q=search.value.toLowerCase();let list=chapters.map((c,i)=>({c,i})).filter(x=>book.value==="all"||(book.value==="1"?x.i<25:x.i>=25)).filter(x=>(x.c[0]+" "+x.c[1].join(" ")).toLowerCase().includes(q));
  document.getElementById("grammarList").innerHTML=list.map(x=>`<button class="lesson-card" data-lesson="${x.i}" style="width:100%;text-align:left"><div class="lesson-number">${x.i+1}</div><div><strong>Bab ${x.i+1}: ${x.c[0]}</strong><span>${x.c[1].join(" · ")}</span></div></button>`).join("")||"Tidak ada pola ditemukan.";
  };search.oninput=filter;book.onchange=filter;
}
function renderGrammarRange(){return chapters.map((c,i)=>`<button class="lesson-card" data-lesson="${i}" style="width:100%;text-align:left"><div class="lesson-number">${i+1}</div><div><strong>Bab ${i+1}: ${c[0]}</strong><span>${c[1].join(" · ")}</span></div></button>`).join("")}

function renderVocabulary() {
  renderKotobaChapter(0);
}
function renderWords(){return vocabulary.map(w=>`<div class="word-card"><strong>${w[0]} <small style="font-size:12px;color:var(--muted)">${w[1]}</small></strong><span>${w[2]} · ${w[3]} · ${w[4]}</span><span><b>Contoh:</b> ${w[5]}<br>${w[6]}</span></div>`).join("")}

const kotobaSupplement = [
  ["水","みず","mizu","Air","Kata benda","毎日水を飲みます。","Saya minum air setiap hari."],
  ["新聞","しんぶん","shinbun","Surat kabar","Kata benda","朝新聞を読みます。","Saya membaca surat kabar pagi hari."],
  ["電話","でんわ","denwa","Telepon","Kata benda","友達に電話します。","Saya menelepon teman."],
  ["会社","かいしゃ","kaisha","Perusahaan","Kata benda","会社で働きます。","Saya bekerja di perusahaan."],
  ["学校","がっこう","gakkou","Sekolah","Kata benda","学校へ行きます。","Saya pergi ke sekolah."],
  ["友達","ともだち","tomodachi","Teman","Kata benda","友達と勉強します。","Saya belajar bersama teman."],
  ["買います","かいます","kaimasu","Membeli","Kata kerja","本を買います。","Saya membeli buku."],
  ["読みます","よみます","yomimasu","Membaca","Kata kerja","新聞を読みます。","Saya membaca surat kabar."],
  ["聞きます","ききます","kikimasu","Mendengar","Kata kerja","先生の話を聞きます。","Saya mendengarkan penjelasan guru."],
  ["話します","はなします","hanashimasu","Berbicara","Kata kerja","日本語で話します。","Saya berbicara dalam bahasa Jepang."],
  ["勉強します","べんきょうします","benkyou shimasu","Belajar","Kata kerja","毎日勉強します。","Saya belajar setiap hari."],
  ["働きます","はたらきます","hatarakimasu","Bekerja","Kata kerja","銀行で働きます。","Saya bekerja di bank."],
  ["休みます","やすみます","yasumimasu","Beristirahat","Kata kerja","土曜日に休みます。","Saya beristirahat pada hari Sabtu."],
  ["始まります","はじまります","hajimarimasu","Mulai","Kata kerja","授業が九時に始まります。","Pelajaran mulai pukul sembilan."],
  ["終わります","おわります","owarimasu","Selesai","Kata kerja","仕事が六時に終わります。","Pekerjaan selesai pukul enam."],
  ["便利","べんり","benri","Praktis","Kata sifat-na","この町は便利です。","Kota ini praktis."],
  ["元気","げんき","genki","Sehat/bersemangat","Kata sifat-na","おかげさまで元気です。","Alhamdulillah saya sehat."],
  ["簡単","かんたん","kantan","Sederhana","Kata sifat-na","この問題は簡単です。","Soal ini sederhana."],
  ["忙しい","いそがしい","isogashii","Sibuk","Kata sifat-i","今日は忙しいです。","Hari ini saya sibuk."],
  ["楽しい","たのしい","tanoshii","Menyenangkan","Kata sifat-i","旅行は楽しいです。","Perjalanan menyenangkan."],
  ["よく","よく","yoku","Sering/baik","Kata keterangan","よく図書館へ行きます。","Saya sering pergi ke perpustakaan."],
  ["毎日","まいにち","mainichi","Setiap hari","Kata keterangan","毎日日本語を勉強します。","Saya belajar bahasa Jepang setiap hari."],
  ["いつ","いつ","itsu","Kapan","Kata tanya","日本へいつ行きますか。","Kapan Anda pergi ke Jepang?"],
  ["どれ","どれ","dore","Yang mana","Kata tanya","どれがあなたの本ですか。","Buku milik Anda yang mana?"],
  ["そして","そして","soshite","Dan/lalu","Kata sambung","朝食べて、そして出かけます。","Saya sarapan lalu pergi."],
  ["でも","でも","demo","Namun","Kata sambung","高いですが、買います。","Mahal, namun saya membelinya."],
  ["すみません","すみません","sumimasen","Maaf/permisi","Ungkapan sehari-hari","すみません、駅はどこですか。","Maaf, stasiun ada di mana?"],
  ["お願いします","おねがいします","onegai shimasu","Mohon","Ungkapan sehari-hari","もう一度お願いします。","Mohon sekali lagi."],
  ["銀行","ぎんこう","ginkou","Bank","Kata benda","銀行は駅の近くです。","Bank ada dekat stasiun."],
  ["郵便局","ゆうびんきょく","yuubinkyoku","Pos","Kata benda","郵便局で切手を買います。","Saya membeli perangko di kantor pos."],
  ["図書館","としょかん","toshokan","Perpustakaan","Kata benda","図書館で本を読みます。","Saya membaca buku di perpustakaan."],
  ["病院","びょういん","byouin","Rumah sakit","Kata benda","病院へ行きます。","Saya pergi ke rumah sakit."],
  ["駅","えき","eki","Stasiun","Kata benda","駅はどこですか。","Stasiun ada di mana?"],
  ["教室","きょうしつ","kyoushitsu","Kelas","Kata benda","教室に先生がいます。","Guru ada di kelas."],
  ["部屋","へや","heya","Kamar","Kata benda","部屋はきれいです。","Kamar bersih."],
  ["机","つくえ","tsukue","Meja","Kata benda","机の上に本があります。","Ada buku di atas meja."],
  ["椅子","いす","isu","Kursi","Kata benda","椅子に座ります。","Saya duduk di kursi."],
  ["時計","とけい","tokei","Jam","Kata benda","時計を見ます。","Saya melihat jam."],
  ["傘","かさ","kasa","Payung","Kata benda","傘を持って行きます。","Saya pergi membawa payung."],
  ["靴","くつ","kutsu","Sepatu","Kata benda","靴を脱ぎます。","Saya melepas sepatu."],
  ["服","ふく","fuku","Pakaian","Kata benda","新しい服を買います。","Saya membeli pakaian baru."],
  ["財布","さいふ","saifu","Dompet","Kata benda","財布にお金があります。","Ada uang di dompet."],
  ["鍵","かぎ","kagi","Kunci","Kata benda","鍵を探します。","Saya mencari kunci."],
  ["料理","りょうり","ryouri","Masakan","Kata benda","料理を作ります。","Saya membuat masakan."],
  ["朝ご飯","あさごはん","asagohan","Sarapan","Kata benda","朝ご飯を食べます。","Saya makan sarapan."],
  ["昼ご飯","ひるごはん","hirugohan","Makan siang","Kata benda","昼ご飯を一緒に食べます。","Kita makan siang bersama."],
  ["晩ご飯","ばんごはん","bangohan","Makan malam","Kata benda","晩ご飯を作ります。","Saya membuat makan malam."],
  ["出かけます","でかけます","dekakemasu","Pergi keluar","Kata kerja","友達と出かけます。","Saya pergi keluar bersama teman."],
  ["会います","あいます","aimasu","Bertemu","Kata kerja","駅で友達に会います。","Saya bertemu teman di stasiun."],
  ["貸します","かします","kashimasu","Meminjamkan","Kata kerja","友達に本を貸します。","Saya meminjamkan buku kepada teman."],
  ["借ります","かります","karimasu","Meminjam","Kata kerja","図書館で本を借ります。","Saya meminjam buku dari perpustakaan."],
  ["開けます","あけます","akemasu","Membuka","Kata kerja","窓を開けます。","Saya membuka jendela."],
  ["閉めます","しめます","shimemasu","Menutup","Kata kerja","ドアを閉めます。","Saya menutup pintu."],
  ["書きます","かきます","kakimasu","Menulis","Kata kerja","手紙を書きます。","Saya menulis surat."],
  ["泳ぎます","およぎます","oyogimasu","Berenang","Kata kerja","夏に海で泳ぎます。","Saya berenang di laut pada musim panas."],
  ["走ります","はしります","hashirimasu","Berlari","Kata kerja","公園を走ります。","Saya berlari di taman."],
  ["待ちます","まちます","machimasu","Menunggu","Kata kerja","駅で友達を待ちます。","Saya menunggu teman di stasiun."],
  ["座ります","すわります","suwarimasu","Duduk","Kata kerja","椅子に座ります。","Saya duduk di kursi."],
  ["立ちます","たちます","tachimasu","Berdiri","Kata kerja","そこに立ちます。","Saya berdiri di sana."],
  ["分かります","わかります","wakarimasu","Mengerti","Kata kerja","この説明が分かります。","Saya mengerti penjelasan ini."],
  ["あります","あります","arimasu","Ada","Kata kerja","机の上に時計があります。","Ada jam di atas meja."],
  ["います","います","imasu","Ada","Kata kerja","庭に猫がいます。","Ada kucing di taman."],
  ["有名","ゆうめい","yuumei","Terkenal","Kata sifat-na","この店は有名です。","Toko ini terkenal."],
  ["広い","ひろい","hiroi","Luas","Kata sifat-i","部屋が広いです。","Kamarnya luas."],
  ["狭い","せまい","semai","Sempit","Kata sifat-i","道が狭いです。","Jalan sempit."],
  ["近い","ちかい","chikai","Dekat","Kata sifat-i","駅が近いです。","Stasiun dekat."],
  ["遠い","とおい","tooi","Jauh","Kata sifat-i","空港が遠いです。","Bandara jauh."],
  ["弱い","よわい","yowai","Lemah","Kata sifat-i","風が弱いです。","Anginnya lemah."],
  ["強い","つよい","tsuyoi","Kuat","Kata sifat-i","風が強いです。","Anginnya kuat."],
  ["少し","すこし","sukoshi","Sedikit","Kata keterangan","少し待ってください。","Tolong tunggu sedikit."],
  ["少ない","すくない","sukunai","Sedikit","Kata sifat-i","時間が少ないです。","Waktu sedikit."],
  ["沢山","たくさん","takusan","Banyak","Kata keterangan","人が沢山います。","Ada banyak orang."],
  ["もう","もう","mou","Sudah/lagi","Kata keterangan","もう食べました。","Sudah makan."],
  ["まだ","まだ","mada","Belum","Kata keterangan","まだ終わりません。","Belum selesai."],
  ["ちょうど","ちょうど","choudo","Tepat","Kata keterangan","ちょうど九時です。","Tepat pukul sembilan."],
  ["なぜ","なぜ","naze","Mengapa","Kata tanya","なぜ学校へ行きませんか。","Mengapa tidak pergi ke sekolah?"],
  ["いくら","いくら","ikura","Berapa harga","Kata tanya","この本はいくらですか。","Buku ini berapa harganya?"],
  ["それから","それから","sorekara","Sesudah itu","Kata sambung","食べて、それから出かけます。","Setelah makan, lalu pergi keluar."],
  ["まず","まず","mazu","Pertama-tama","Kata sambung","まず名前を書いてください。","Pertama-tama tuliskan nama."],
  ["大丈夫","だいじょうぶ","daijoubu","Tidak apa-apa","Ungkapan sehari-hari","はい、大丈夫です。","Ya, tidak apa-apa."]
];

function getKotobaWords(index) {
  const imported = state.kotobaImports[index];
  const parseRows = value => (value || "").split(";").filter(Boolean).map(item => {
    const [kanji,hiragana,romaji,arti,jenis] = item.split("|");
    return [kanji,hiragana,romaji,arti,jenis,"","","","","","",""];
  });
  const katakanaRows = (window.KATAKANA_PER_BAB?.[index] || []).map(headword => {
    const item = (window.KAMUS_KATAKANA || []).find(entry => entry.startsWith(`${headword}|`));
    if (!item) return null;
    const [kanaWord,hiragana,romaji,arti,jenis,example,exampleRomaji,translation] = item.split("|");
    const isVerb = jenis === "Kata kerja";
    return [kanaWord,hiragana,romaji,arti,jenis,example,exampleRomaji,translation,isVerb?kanaWord.replace(/します$/u,"する"):"",kanaWord,isVerb?"Fukisoku":"","Kosakata Katakana pendamping."];
  }).filter(Boolean);
  const sourceRows = [
    ...parseRows(window.KOTOBA_PENDAMPING?.[index]),
    ...parseRows(window.KOTOBA_TAMBAHAN?.[index]),
    ...parseRows(window.KOTOBA_PENGAYAAN?.[index])
  ];
  const originalRows = (kotobaSeeds[index] || []).map(w =>
    [w[0],w[1],w[2],w[3],w[4],w[5],"",w[6],"","","",""]
  );
  const unique = new Map();
  [...sourceRows,...originalRows,...katakanaRows,...(imported||[])].forEach(w => unique.set(`${w[0]}|${w[1]}`,w));
  return [...unique.values()];
}

let kotobaChapter = 0;
let flashcardIndex = 0;
let flashcardFlipped = false;
let flashcardAnswerCorrect = false;
let kotobaExerciseIndex = 0;
let kotobaExerciseScore = 0;
let currentKotobaQuestion = null;
let flashcardQueue = [];

function renderKotobaChapter(index) {
  kotobaChapter = index;
  flashcardIndex = 0;
  flashcardFlipped = false;
  flashcardAnswerCorrect = false;
  const words = getKotobaWords(index);
  flashcardQueue = [...words];
  const types = [...new Set(words.map(w => w[4]))];
  document.getElementById("app").innerHTML = `
    <div class="page-heading"><div><h1>Kotoba — Bab ${index+1}</h1><p>${chapterName(index)} · Minna no Nihongo ${index<25?"I":"II"}</p></div>
      <button class="secondary-btn" data-view-bunpou="${index}">Lihat Bunpou Bab ${index+1}</button></div>
    <div class="chapter-strip">${chapters.map((c,i)=>`<button class="chapter-chip ${i===index?"active":""}" data-kotoba-chapter="${i}">Bab ${i+1}</button>`).join("")}</div>
    <div class="source-note">${words.length} kosakata pendamping orisinal untuk topik Bab ${index+1}; bukan transkripsi atau daftar resmi Minna no Nihongo. Data tambahan yang ditempel akan digabungkan dengan daftar ini.</div>
    <div class="kotoba-layout">
      <section>
        <div class="kotoba-tools"><input id="kotobaSearch" placeholder="Cari hiragana, kanji, romaji, atau arti..."><select id="kotobaType"><option value="all">Semua jenis</option>${types.map(t=>`<option>${t}</option>`).join("")}</select><button class="secondary-btn" id="toggleKotobaImport">Tambah kosakata</button><button class="primary-btn" id="kotobaExerciseBtn">Latihan Bab</button></div>
        <section class="panel kotoba-import-panel" id="kotobaImportPanel" hidden style="margin-bottom:12px"><div class="panel-head"><h2>Tempel kosakata yang sudah diverifikasi</h2><button class="secondary-btn" id="closeKotobaImport">Tutup</button></div><p>Masukkan satu kosakata per baris, pisahkan kolom dengan tanda | atau tab. Wajib: Jepang, Hiragana, Romaji, Arti, Jenis. Kolom contoh Jepang, romaji contoh, dan terjemahan boleh ditambahkan.</p><textarea id="kotobaImportText" rows="5" placeholder="日本|にほん|Nihon|Jepang|Kata benda|私は日本へ行きます。|Watashi wa Nihon e ikimasu.|Saya pergi ke Jepang."></textarea><div style="display:flex;justify-content:flex-end;margin-top:8px"><button class="primary-btn" id="saveKotobaImport">Tambahkan ke bab ini</button></div></section>
        <div class="kotoba-table-wrap"><table class="kotoba-table"><thead><tr><th>No.</th><th>Bahasa Jepang (Kanji/Kana)</th><th>Hiragana</th><th>Romaji</th><th>Arti</th><th>Jenis</th></tr></thead><tbody id="kotobaTableBody"></tbody></table></div>
        <div class="panel" style="margin-top:14px"><div class="panel-head"><h2>Pola gabungan Bab ${index+1}</h2></div><p><strong>Contoh:</strong> ${words[0]?.[5] || "Contoh gabungan belum tersedia."}</p><p style="color:var(--muted)">Bunpou: <strong>${chapters[index][1].join(" · ")}</strong></p></div>
      </section>
      <aside><div class="panel-head"><h2>Flashcard</h2><button class="secondary-btn" id="shuffleFlashcards" style="height:32px;padding:0 10px">Acak</button><span id="flashcardCount"></span></div><div id="flashcardArea"></div></aside>
    </div>`;
  bindKotobaTable();
  renderFlashcard();
  document.getElementById("kotobaExerciseBtn").onclick = renderKotobaExercise;
  document.getElementById("toggleKotobaImport").onclick=()=>{document.getElementById("kotobaImportPanel").hidden=false;document.getElementById("kotobaImportText").focus();};
  document.getElementById("closeKotobaImport").onclick=()=>{document.getElementById("kotobaImportPanel").hidden=true;};
  document.getElementById("saveKotobaImport").onclick=importKotobaText;
  document.getElementById("shuffleFlashcards").onclick = () => { flashcardQueue.sort(()=>Math.random()-0.5); flashcardIndex=0; flashcardFlipped=false; flashcardAnswerCorrect=false; renderFlashcard(); };
}

function bindKotobaTable() {
  const search = document.getElementById("kotobaSearch");
  const type = document.getElementById("kotobaType");
  const update = () => {
    const q = search.value.toLowerCase();
    const selected = type.value;
    const words = getKotobaWords(kotobaChapter).map((word,index)=>({word,index})).filter(({word}) =>
      (selected === "all" || word[4] === selected) &&
      word.join(" ").toLowerCase().includes(q)
    );
    document.getElementById("kotobaTableBody").innerHTML = words.map(({word:w,index},n) =>
      `<tr data-kotoba-detail="${index}"><td>${n+1}</td><td class="jp-cell">${w[0]}</td><td>${w[1]}</td><td>${w[2]}</td><td>${w[3]}</td><td><span class="type-tag">${w[4]}</span></td></tr>`
    ).join("") || `<tr><td colspan="6">Kosakata tidak ditemukan.</td></tr>`;
  };
  search.oninput = update;
  type.onchange = update;
  update();
}

function importKotobaText() {
  const text=document.getElementById("kotobaImportText").value.trim();
  const lines=text.split(/\r?\n/).map(line=>line.trim()).filter(Boolean);
  const rows=[];
  const invalid=[];
  lines.forEach((line,index)=>{
    if(index===0&&/^(bahasa jepang|kanji|jepang)(\||\t)/i.test(line))return;
    const columns=line.split(line.includes("|")?"|":"\t").map(value=>value.trim());
    if(columns.length<5||columns.slice(0,5).some(value=>!value)){
      invalid.push(index+1);
      return;
    }
    rows.push([columns[0],columns[1],columns[2],columns[3],columns[4],columns[5]||"",columns[6]||"",columns[7]||"",columns[8]||"",columns[9]||"",columns[10]||"",columns[11]||""]);
  });
  if(invalid.length){toast(`Baris ${invalid.join(", ")} belum lengkap. Periksa lima kolom wajib.`);return;}
  if(!rows.length){toast("Belum ada kosakata yang dapat ditambahkan.");return;}
  state.kotobaImports[kotobaChapter]=[...(state.kotobaImports[kotobaChapter]||[]),...rows];
  saveState();
  renderKotobaChapter(kotobaChapter);
  toast(`${rows.length} kosakata ditambahkan ke Bab ${kotobaChapter+1}`);
}

function showKotobaDetail(wordIndex) {
  const w = getKotobaWords(kotobaChapter)[wordIndex];
  if (!w) return;
  const isVerb = w[4] === "Kata kerja";
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="kotobaModal">
      <div class="modal">
        <div class="modal-head"><div><span class="type-tag">${w[4]}</span><h2>${w[0]}</h2></div><button class="modal-close" id="closeKotobaModal">×</button></div>
        <div class="detail-grid">
          <div class="detail-item"><span>Hiragana</span><strong>${w[1]}</strong></div>
          <div class="detail-item"><span>Romaji</span><strong>${w[2]}</strong></div>
          <div class="detail-item"><span>Arti Bahasa Indonesia</span><strong>${w[3]}</strong></div>
          <div class="detail-item"><span>Bentuk kamus / kelompok</span><strong>${isVerb ? `${w[8]||"Belum diisi"} · ${w[10]||"kelompok belum diisi"}` : "Tidak berlaku"}</strong></div>
          ${w[9]?`<div class="detail-item"><span>Katakana</span><strong>${w[9]}</strong></div>`:""}
        </div>
        <div class="pattern"><h3>Contoh kalimat</h3><div class="example"><strong>${w[5]||"Contoh belum diisi"}</strong><span>Romaji: ${w[6]||"Belum diisi"}</span><span>Terjemahan: ${w[7]||"Belum diisi"}</span></div></div>
        <div class="explanation"><strong>Penggunaan:</strong> ${w[11]||`Kata ini digunakan sebagai ${w[4].toLowerCase()} sesuai konteks kalimat Bab ${kotobaChapter+1}.`}</div>
      </div>
    </div>`);
  document.getElementById("closeKotobaModal").onclick = () => document.getElementById("kotobaModal").remove();
  document.getElementById("kotobaModal").onclick = e => { if (e.target.id === "kotobaModal") e.currentTarget.remove(); };
}

function renderFlashcard() {
  const words = flashcardQueue.length ? flashcardQueue : getKotobaWords(kotobaChapter);
  if (!words.length) {
    document.getElementById("flashcardCount").textContent = "0 kosakata";
    document.getElementById("flashcardArea").innerHTML = `<div class="explanation">Flashcard belum tersedia sampai data kosakata bab ini diimpor.</div>`;
    return;
  }
  const cardIndex = flashcardIndex % words.length;
  const w = words[cardIndex];
  document.getElementById("flashcardCount").textContent = `${cardIndex+1} / ${words.length}`;
  document.getElementById("flashcardArea").innerHTML = `
    <div class="flashcard ${flashcardFlipped?"answered":""}" id="flashcard">
      <div class="flashcard-front"><strong class="front">${w[0]}</strong><span class="flashcard-reading">${w[1]}</span><span class="flashcard-romaji">${w[2]}</span></div>
      ${flashcardFlipped?`<div class="flashcard-feedback ${flashcardAnswerCorrect?"correct":"wrong"}"><strong>${flashcardAnswerCorrect?"Benar!":"Belum tepat."}</strong><br>Arti yang benar: <b>${w[3]}</b><br><span class="japanese">${w[1]}</span> · ${w[2]}${w[5]?`<br><small>Contoh: ${w[5]}${w[7]?` — ${w[7]}`:""}</small>`:""}</div>`:""}
    </div>
    ${flashcardFlipped?"":`<label class="flashcard-prompt" for="flashcardAnswer">Apa arti kata ini dalam Bahasa Indonesia?</label><div class="flashcard-answer"><input id="flashcardAnswer" type="text" autocomplete="off" placeholder="Ketik artinya dalam Bahasa Indonesia"><button class="primary-btn" id="checkFlashcard">Periksa jawaban</button></div>`}
    ${flashcardFlipped?`<button class="primary-btn flashcard-next" id="nextFlashcard">Kartu berikutnya</button>`:""}`;
  document.getElementById("checkFlashcard")?.addEventListener("click",checkFlashcardAnswer);
  document.getElementById("flashcardAnswer")?.addEventListener("keydown",event=>{if(event.key==="Enter")checkFlashcardAnswer();});
  document.getElementById("nextFlashcard")?.addEventListener("click",()=>{
    if(!flashcardAnswerCorrect){
      const missed=flashcardQueue.splice(cardIndex,1)[0];
      flashcardQueue.push(missed);
    }else{
      flashcardIndex++;
    }
    flashcardFlipped=false;
    flashcardAnswerCorrect=false;
    renderFlashcard();
  });
}

function checkFlashcardAnswer(){
  const words=flashcardQueue.length?flashcardQueue:getKotobaWords(kotobaChapter);
  if(!words.length||flashcardFlipped)return;
  const input=document.getElementById("flashcardAnswer");
  const answer=(input?.value||"").trim();
  if(!answer){toast("Ketik arti dalam Bahasa Indonesia terlebih dahulu.");input?.focus();return;}
  const cardIndex=flashcardIndex%words.length;
  const word=words[cardIndex];
  const normalize=value=>String(value||"").toLocaleLowerCase().replace(/[.,!?;:]/gu,"").replace(/\s+/gu," ").trim();
  flashcardAnswerCorrect=word[3].split(/[\/;]/u).some(meaning=>normalize(meaning)===normalize(answer));
  flashcardFlipped=true;
  state.kotobaStatus[`${kotobaChapter+1}:${word[2]}`]=flashcardAnswerCorrect?"hafal":"belum";
  saveState();
  renderFlashcard();
}

function renderKotobaExercise() {
  kotobaExerciseIndex = 0;
  kotobaExerciseScore = 0;
  currentKotobaQuestion = null;
  if (!getKotobaWords(kotobaChapter).length) {
    document.getElementById("app").innerHTML = `<div class="page-heading"><div><h1>Latihan Kotoba Bab ${kotobaChapter+1}</h1><p>Latihan memerlukan daftar kosakata bab yang sudah diverifikasi.</p></div><button class="secondary-btn" id="backToKotoba">← Kembali</button></div><div class="panel"><div class="source-note">Impor data CSV untuk bab ini terlebih dahulu agar soal dibuat dari kosakata sumber, bukan kata acak.</div></div>`;
    document.getElementById("backToKotoba").onclick = () => renderKotobaChapter(kotobaChapter);
    return;
  }
  showKotobaExerciseQuestion();
}

function showKotobaExerciseQuestion() {
  const words = getKotobaWords(kotobaChapter);
  if (kotobaExerciseIndex >= 10) {
    document.getElementById("app").innerHTML = `<div class="page-heading"><div><h1>Hasil Latihan Kotoba Bab ${kotobaChapter+1}</h1><p>Latihan kosakata selesai. Kamu menjawab ${kotobaExerciseScore} dari 10 soal dengan benar.</p></div></div><div class="panel" style="text-align:center;padding:40px"><h2>${kotobaExerciseScore} / 10 benar</h2><p style="color:var(--muted)">Nilai: ${kotobaExerciseScore*10}%</p><button class="primary-btn" id="retryKotobaExercise">Ulangi latihan</button></div>`;
    document.getElementById("retryKotobaExercise").onclick = renderKotobaExercise;
    return;
  }
  let wordIndex=kotobaExerciseIndex%words.length;
  let w=words[wordIndex];
  const type=kotobaExerciseIndex%5;
  if(type===4){
    const exampleIndex=words.findIndex((item,index)=>index>=wordIndex&&item[5]&&item[7]);
    const wrappedIndex=exampleIndex<0?words.findIndex(item=>item[5]&&item[7]):exampleIndex;
    if(wrappedIndex>=0){wordIndex=wrappedIndex;w=words[wordIndex];}
  }
  let availableType=type===4&&(!w[5]||!w[7])?3:type;
  const kinds=["Arti kosakata","Pilih kosakata Jepang","Arti kanji","Bacaan hiragana","Terjemahan kalimat"];
  const makeOptions=(correct,pool)=>{
    const normalizeLabel=label=>String(label||"").replace(/\s+/gu," ").trim().toLocaleLowerCase();
    const seen=new Set([normalizeLabel(correct.label)]);
    const distinct=pool.filter(item=>{
      if(!item||!item.value||item.value===correct.value)return false;
      const label=normalizeLabel(item.label);
      if(!label||seen.has(label))return false;
      seen.add(label);
      return true;
    });
    const shuffled=distinct.sort(()=>Math.random()-0.5).slice(0,3);
    return [correct,...shuffled].sort(()=>Math.random()-0.5);
  };
  const buildQuestion=questionType=>{
    let correct;
    let pool;
    let prompt;
    if(questionType===0||questionType===2){
      correct={value:`meaning:${wordIndex}`,label:w[3]};
      pool=words.map((item,index)=>({value:`meaning:${index}`,label:item[3]}));
      prompt=questionType===0
        ?`Apa arti kosakata berikut? <span class="japanese">${w[0]}</span> <small>(${w[1]})</small>`
        :`Pilih arti yang tepat untuk kanji/kosakata <span class="japanese">${w[0]}</span>.`;
    }else if(questionType===1){
      correct={value:`word:${wordIndex}`,label:`${w[0]}（${w[1]}）`};
      pool=words.map((item,index)=>({value:`word:${index}`,label:`${item[0]}（${item[1]}）`}));
      prompt=`Kosakata Jepang manakah yang berarti “${w[3]}”?`;
    }else if(questionType===3){
      correct={value:`reading:${wordIndex}`,label:w[1]};
      pool=words.map((item,index)=>({value:`reading:${index}`,label:item[1]}));
      prompt=`Pilih bacaan Hiragana yang benar untuk <span class="japanese">${w[0]}</span> (“${w[3]}”).`;
    }else{
      correct={value:`translation:${wordIndex}`,label:w[7]};
      pool=words.map((item,index)=>({value:`translation:${index}`,label:item[7]})).filter(item=>item.label);
      prompt=`Apa arti kalimat berikut dalam Bahasa Indonesia?<br><span class="japanese">${w[5]}</span>`;
    }
    const options=makeOptions(correct,pool);
    return {type:questionType,prompt,options,correctValue:correct.value};
  };
  const candidates=[availableType,...[3,1,0,2].filter(candidate=>candidate!==availableType)]
    .map(buildQuestion);
  let question=candidates.find(candidate=>candidate.options.length===4);
  if(!question)question=candidates.reduce((best,candidate)=>candidate.options.length>best.options.length?candidate:best);
  availableType=question.type;
  const {prompt,options}=question;
  currentKotobaQuestion={word:w,correctValue:question.correctValue,type:availableType};
  if(options.length<2||!options.some(option=>option.value===currentKotobaQuestion.correctValue)){
    document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Latihan Kotoba Bab ${kotobaChapter+1}</h1><p>Belum cukup data untuk membuat pilihan jawaban yang masuk akal.</p></div><button class="secondary-btn" id="backToKotoba">← Kembali</button></div>`;
    document.getElementById("backToKotoba").onclick=()=>renderKotobaChapter(kotobaChapter);
    return;
  }
  document.getElementById("app").innerHTML = `
    <div class="page-heading"><div><h1>Latihan Kotoba Bab ${kotobaChapter+1}</h1><p>Soal ${kotobaExerciseIndex+1} dari 10 · ${kinds[availableType]}</p></div><button class="secondary-btn" id="backToKotoba">← Kembali</button></div>
    <div class="quiz-card"><p class="question-instruction">Pilih satu jawaban yang paling tepat.</p><h2>${prompt}</h2>
      <div class="quiz-options">${options.map((option,index)=>`<button class="quiz-option kotoba-option" data-kotoba-answer="${option.value}"><span class="answer-letter">${String.fromCharCode(65+index)}</span><span>${option.label}</span></button>`).join("")}</div>
      <div id="kotobaExerciseResult"></div></div>`;
  document.getElementById("backToKotoba").onclick = () => renderKotobaChapter(kotobaChapter);
}

function renderConjugation() {
  const examples=["食べます","飲みます","行きます","書きます","話します","待ちます","買います","帰ります","起きます","寝ます","勉強します","来ます"];
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Konjugasi Kata Kerja</h1><p>Contoh perubahan bentuk untuk tiga kelompok kata kerja.</p></div></div>
  <div class="filter-bar"><input id="verbSearch" value="食べます" placeholder="Masukkan bentuk kamus atau ます, mis. 飲みます"><button class="primary-btn" id="verbBtn">Cari</button></div>
  <div class="panel" style="margin-bottom:14px"><div class="panel-head"><h2>Contoh kata kerja</h2><span style="color:var(--muted);font-size:12px">${examples.length} pilihan</span></div><div class="verb-presets">${examples.map(v=>`<button class="chapter-chip" data-verb-preset="${v}">${v}</button>`).join("")}</div></div>
  <p style="color:var(--muted)">Pencarian mengenali contoh kata kerja umum dan menerapkan aturan konjugasi berdasarkan kelompok. Kata kerja tidak beraturan atau pengecualian dapat ditinjau sebelum dihafalkan.</p>
  <div id="verbResult"></div>`;
  document.getElementById("verbBtn").onclick=()=>showVerb(document.getElementById("verbSearch").value.trim());
  document.getElementById("verbSearch").onkeydown=e=>{if(e.key==="Enter")showVerb(e.target.value.trim())};
  document.querySelectorAll("[data-verb-preset]").forEach(button=>button.onclick=()=>{document.getElementById("verbSearch").value=button.dataset.verbPreset;showVerb(button.dataset.verbPreset);});
  showVerb("食べます");
}
const godanRows={う:"わ",く:"か",ぐ:"が",す:"さ",つ:"た",ぬ:"な",ぶ:"ば",む:"ま",る:"ら"};
const godanExceptions=new Set(["帰る","入る","走る","知る","切る","要る","滑る","減る","喋る","握る"]);
const verbMeaningHints={食べる:"makan",飲む:"minum",行く:"pergi",来る:"datang",する:"melakukan",見る:"melihat/menonton",読む:"membaca",書く:"menulis",話す:"berbicara",買う:"membeli",待つ:"menunggu",帰る:"pulang",起きる:"bangun",寝る:"tidur",勉強する:"belajar"};
const ichidanStemEndings=new Set("いきぎしじちぢにひびぴみりえけげせぜてでねへべぺめれ".split(""));
const masuDictionaryOverrides={"話します":"話す","出します":"出す","消します":"消す","押します":"押す","貸します":"貸す","直します":"直す","申します":"申す","返します":"返す"};

function normalizeVerb(input){
  let value=input.replace(/\s+/g,"");
  if(value.endsWith("ました")) value=value.slice(0,-3)+"ます";
  if(value.endsWith("ません")) value=value.slice(0,-3)+"ます";
  if(value==="来ます")return "来る";
  if(value==="あります")return "ある";
  if(value==="います")return "いる";
  if(value.endsWith("ます")){
    if(value==="します")return "する";
    if(value==="きます")return "来る";
    if(masuDictionaryOverrides[value])return masuDictionaryOverrides[value];
    const stem=value.slice(0,-2);
    if(value.endsWith("します"))return value.slice(0,-3)+"する";
    if(["食べます","見ます","起きます","寝ます","います","借ります","浴びます","できます"].includes(value))return stem+"る";
    const endingToU={い:"う",き:"く",ぎ:"ぐ",し:"す",ち:"つ",に:"ぬ",び:"ぶ",み:"む",り:"る"};
    const last=stem.slice(-1);
    if(last==="え"||"けげせぜてでねへべぺめれ".includes(last))return stem+"る";
    if(!endingToU[last])throw new Error("Bentuk kata kerja belum dikenali.");
    const base=stem.slice(0,-1)+endingToU[last];
    if(godanExceptions.has(base))return base;
    return base;
  }
  if(value.endsWith("でした")||value.endsWith("ませんでした"))throw new Error("Masukkan bentuk kamus atau bentuk ます.");
  if(value==="来ます")return "来る";
  if(value.endsWith("する"))return value;
  if(value.endsWith("くる"))return value.slice(0,-2)+"来る";
  if(!/[うくぐすつぬぶむる]$/.test(value))throw new Error("Kata kerja tidak dikenali. Masukkan bentuk kamus atau ます.");
  return value;
}

function conjugateVerb(input){
  const dict=normalizeVerb(input);
  if(dict==="する"||dict.endsWith("する")){
    const stem=dict.slice(0,-2);
    return {dict,group:"Kelompok III (不規則)",masu:stem+"します",nai:stem+"しない",te:stem+"して",ta:stem+"した",potential:stem+"できる",volitional:stem+"しよう",imperative:stem+"しろ",negativeCommand:stem+"するな",passive:stem+"される",causative:stem+"させる",meaning:verbMeaningHints[dict]||"melakukan"};
  }
  if(dict==="来る"||dict.endsWith("来る")){
    const stem=dict.slice(0,-2);
    return {dict,group:"Kelompok III (不規則)",masu:stem+"来ます",nai:stem+"来ない",te:stem+"来て",ta:stem+"来た",potential:stem+"来られる",volitional:stem+"来よう",imperative:stem+"来い",negativeCommand:stem+"来るな",passive:stem+"来られる",causative:stem+"来させる",meaning:"datang"};
  }
  if(dict==="ある")return {dict,group:"Kelompok I (khusus)",masu:"あります",nai:"ない",te:"あって",ta:"あった",potential:"あり得る",volitional:"あろう",imperative:"あれ",negativeCommand:"あるな",passive:"—",causative:"—",meaning:"ada (benda)"};
  const ending=dict.slice(-1);
  const stem=dict.slice(0,-1);
  const isIchidan=ending==="る"&&!godanExceptions.has(dict)&&ichidanStemEndings.has(stem.slice(-1));
  if(isIchidan){
    return {dict,group:"Kelompok II (一段)",masu:stem+"ます",nai:stem+"ない",te:stem+"て",ta:stem+"た",potential:stem+"られる",volitional:stem+"よう",imperative:stem+"ろ",negativeCommand:dict+"な",passive:stem+"られる",causative:stem+"させる",meaning:verbMeaningHints[dict]||"—"};
  }
  const row=godanRows[ending];
  if(!row)throw new Error("Akhiran kata kerja tidak dikenali.");
  const teTa={う:["って","った"],つ:["って","った"],る:["って","った"],む:["んで","んだ"],ぶ:["んで","んだ"],ぬ:["んで","んだ"],く:["いて","いた"],ぐ:["いで","いだ"],す:["して","した"]};
  const te= dict==="行く"?"行って":stem+teTa[ending][0];
  const ta= dict==="行く"?"行った":stem+teTa[ending][1];
  return {dict,group:"Kelompok I (五段)",masu:stem+({う:"い",く:"き",ぐ:"ぎ",す:"し",つ:"ち",ぬ:"に",ぶ:"び",む:"み",る:"り"}[ending])+"ます",nai:stem+row+"ない",te,ta,potential:stem+({う:"え",く:"け",ぐ:"げ",す:"せ",つ:"て",ぬ:"ね",ぶ:"べ",む:"め",る:"れ"}[ending])+"る",volitional:stem+({う:"お",く:"こ",ぐ:"ご",す:"そ",つ:"と",ぬ:"の",ぶ:"ぼ",む:"も",る:"ろ"}[ending])+"う",imperative:stem+({う:"え",く:"け",ぐ:"げ",す:"せ",つ:"て",ぬ:"ね",ぶ:"べ",む:"め",る:"れ"}[ending]),negativeCommand:dict+"な",passive:stem+row+"れる",causative:stem+row+"せる",meaning:verbMeaningHints[dict]||"—"};
}

function showVerb(v){
  let forms;
  try { forms=conjugateVerb(v); }
  catch(error){document.getElementById("verbResult").innerHTML=`<div class="explanation">${error.message}</div>`;return;}
  document.getElementById("verbResult").innerHTML=`<div class="pattern"><h3>${forms.dict} — ${forms.meaning}</h3><p>Kelompok: <strong>${forms.group}</strong></p><table class="progress-table"><thead><tr><th>Bentuk</th><th>Konjugasi</th><th>Catatan</th></tr></thead><tbody>${Object.entries({Masu:forms.masu,"Bentuk kamus":forms.dict,Nai:forms.nai,Te:forms.te,Ta:forms.ta,Potensial:forms.potential,Volitional:forms.volitional,Perintah:forms.imperative,"Larangan":forms.negativeCommand,Pasif:forms.passive,Kausatif:forms.causative}).map(([k,value])=>`<tr><td><strong>${k}</strong></td><td style="font-family:'Noto Sans JP';font-size:17px">${value}</td><td>${k==="Te"?"Menghubungkan tindakan atau membentuk permintaan/izin.":k==="Nai"?"Bentuk negatif biasa.":k==="Potensial"?"Menyatakan kemampuan; ichidan dapat memakai bentuk alternatif yang lebih pendek dalam percakapan.":"Ikuti konteks dan tingkat kesopanan yang sesuai."}</td></tr>`).join("")}</tbody></table><div class="explanation"><strong>Catatan:</strong> Bentuk potensial 来る dan pasif ichidan memiliki bentuk sama secara permukaan; arti ditentukan konteks. Pengecualian godan berakhiran る disimpan sebagai daftar umum.</div></div>`;
}

const quizSets=[
 {q:"「私は学生です」の partikel は berfungsi sebagai apa?",opts:["Objek","Topik","Tempat","Tujuan"],answer:1,why:"は menandai topik atau hal yang dibicarakan."},
 {q:"Bentuk ～てください digunakan untuk?",opts:["Larangan","Permintaan","Kemungkinan","Pengalaman"],answer:1,why:"～てください adalah permintaan sopan untuk melakukan sesuatu."},
 {q:"Kalimat mana yang menyatakan izin?",opts:["ここで食べてはいけません","ここで食べてもいいです","ここで食べませんか","ここで食べます"],answer:1,why:"～てもいいです menyatakan bahwa sesuatu diperbolehkan."},
 {q:"Pilihan partikel yang tepat: 日本___行きます",opts:["を","が","へ","と"],answer:2,why:"へ atau に dapat digunakan untuk arah; pilihan yang paling umum di sini adalah へ."},
 {q:"Bentuk te dari 飲む adalah?",opts:["飲みて","飲んて","飲んで","飲むて"],answer:2,why:"飲む adalah godan berakhiran む, sehingga bentuk te menjadi ～んで."},
 {q:"Partikel yang menandai tempat berlangsungnya aktivitas adalah?",opts:["に","で","を","の"],answer:1,why:"で menandai tempat suatu kegiatan dilakukan: 図書館で勉強します。"},
 {q:"Bentuk nai dari 食べる adalah?",opts:["食べない","食ばない","食べませんる","食べなく"],answer:0,why:"Kata kerja ichidan menghapus る dan menambahkan ない."},
 {q:"Pilih kalimat yang berarti 'Ada kucing di kamar'.",opts:["部屋に猫があります","部屋に猫がいます","部屋で猫をいます","部屋は猫です"],answer:1,why:"います dipakai untuk makhluk hidup, dengan lokasi + に dan subjek + が."},
 {q:"Arti ～たことがあります adalah?",opts:["Sedang melakukan","Pernah mengalami","Harus melakukan","Boleh melakukan"],answer:1,why:"Pola ini menyatakan pengalaman yang pernah terjadi."},
 {q:"Kalimat yang benar untuk 'Saya pergi dengan bus' adalah?",opts:["バスに行きます","バスを行きます","バスで行きます","バスが行きます"],answer:2,why:"で menandai sarana transportasi."},
 {q:"Bentuk kamus dari 読みます adalah?",opts:["読む","読る","読ます","読いて"],answer:0,why:"Godan berakhiran みます kembali ke bunyi u: 読む."},
 {q:"Fungsi も dalam 私も学生です adalah?",opts:["Tetapi","Juga","Dari","Hanya"],answer:1,why:"も menggantikan penanda topik untuk menambahkan makna 'juga'."},
 {q:"Pilih ungkapan yang benar untuk meminta seseorang menunggu.",opts:["待ってください","待ってもいいです","待たないでください","待ちたいです"],answer:0,why:"Vてください adalah permintaan sopan: 待つ → 待ってください."},
 {q:"Kata sifat-na yang benar sebelum kata benda menggunakan bentuk?",opts:["静かな町","静かい町","静か町","静かに町"],answer:0,why:"Kata sifat-na memakai な sebelum kata benda."},
 {q:"Arti から dalam 九時から adalah?",opts:["Sampai","Dari/mulai","Dengan","Karena itu"],answer:1,why:"から menunjukkan titik awal waktu atau tempat."},
 {q:"Partikel を dalam 水を飲みます menandai?",opts:["Topik","Tujuan","Objek langsung","Tempat aktivitas"],answer:2,why:"を menandai objek langsung dari kata kerja 飲みます."},
 {q:"Bentuk lampau sopan dari 行きます adalah?",opts:["行きました","行きますた","行ったです","行くました"],answer:0,why:"Bentuk lampau sopan kata kerja ます memakai akhiran ました."},
 ...[
  ["Kotoba","Apa arti 学校 (がっこう)?",["Rumah sakit","Sekolah","Perpustakaan","Kantor"],1,"学校 berarti sekolah."],
  ["Kotoba","Apa arti 病院 (びょういん)?",["Rumah sakit","Bank","Stasiun","Kedutaan"],0,"病院 berarti rumah sakit."],
  ["Kotoba","Kata Jepang untuk 'perpustakaan' adalah?",["図書館","郵便局","食堂","教室"],0,"図書館 (としょかん) berarti perpustakaan."],
  ["Kotoba","Apa arti 友達 (ともだち)?",["Keluarga","Teman","Guru","Tetangga"],1,"友達 berarti teman."],
  ["Kotoba","Kata Jepang untuk 'negara' adalah?",["国","町","村","島"],0,"国 (くに) berarti negara."],
  ["Kotoba","Apa arti 来週 (らいしゅう)?",["Minggu lalu","Minggu ini","Minggu depan","Setiap minggu"],2,"来週 berarti minggu depan."],
  ["Bunpou","Pilih bentuk yang benar: kata sifat-i 暑い dalam bentuk negatif sopan.",["暑くないです","暑いではありません","暑くありませんです","暑いじゃないです"],0,"Untuk bentuk negatif kata sifat-i, ganti い dengan くないです."],
  ["Bunpou","Pola ～たことがあります digunakan untuk menyatakan?",["Rencana","Pengalaman pernah melakukan","Kewajiban","Larangan"],1,"Pola ini menyatakan pengalaman yang pernah terjadi."],
  ["Bunpou","Bentuk kamus + ことができます menyatakan?",["Kemampuan","Sebab","Larangan","Perbandingan"],0,"V辞書形 + ことができます berarti dapat melakukan sesuatu."],
  ["Bunpou","Lengkapi: 日本語を勉強し___から、テレビを見ます。",["て","た","ない","ます"],0,"Vてから menyatakan urutan: setelah belajar bahasa Jepang, menonton televisi."],
  ["Bunpou","Pola ～ながら menghubungkan tindakan yang bagaimana?",["Terjadi bersamaan oleh pelaku yang sama","Saling bertentangan","Terjadi berurutan pada hari berbeda","Menjadi alasan"],0,"Vます-stem + ながら menyatakan dua tindakan bersamaan dengan subjek yang sama."],
  ["Bunpou","Bentuk ～そうです yang mengikuti kalimat biasa biasanya berarti?",["Menurut kabar","Kelihatannya","Harus","Meskipun"],0,"普通形 + そうです menyampaikan informasi yang didengar; bentuknya berbeda dari kata sifat + そうです."],
  ["Partikel","Partikel untuk menandai tujuan waktu tertentu, seperti pukul enam, adalah?",["を","に","で","と"],1,"に menandai waktu tertentu: 六時に起きます."],
  ["Partikel","Partikel untuk alat transportasi pada バス___行きます adalah?",["を","に","で","が"],2,"で menandai sarana: バスで行きます."],
  ["Partikel","Pilih partikel untuk lokasi keberadaan: 机の上___本があります。",["で","を","に","へ"],2,"に menandai lokasi keberadaan benda."],
  ["Partikel","Dalam 友達と映画を見ます, と berarti?",["Dari","Bersama/dengan","Sampai","Tetapi"],1,"と menandai teman atau pihak yang melakukan kegiatan bersama."],
  ["Partikel","Pilih: 私___学生です。妹も学生です。",["は","を","で","へ"],0,"は menandai topik: saya adalah pelajar."],
  ["Partikel","Partikel まで pada 五時まで bekerja menandai?",["Titik awal","Batas akhir","Alat","Pelaku"],1,"まで menandai batas akhir waktu atau tempat."],
  ["Konjugasi","Bentuk て dari 書く adalah?",["書いて","書きて","書んで","書いてる"],0,"Kata kerja godan berakhiran く menjadi いて, dengan pengecualian 行く."],
  ["Konjugasi","Bentuk negatif biasa dari 見る adalah?",["見ない","見らない","見ませんる","見なく"],0,"見る adalah ichidan: buang る dan tambah ない."],
  ["Konjugasi","Bentuk lampau biasa dari 話す adalah?",["話した","話って","話いた","話んだ"],0,"Godan berakhiran す menjadi して pada bentuk て dan した pada bentuk lampau."],
  ["Konjugasi","Bentuk ます dari 遊ぶ adalah?",["遊びます","遊ばます","遊べます","遊んます"],0,"Godan berakhiran ぶ berubah ke baris い: 遊びます."],
  ["Konjugasi","Bentuk kamus dari 起きます adalah?",["起きる","起く","起きす","起きまする"],0,"起きます adalah ichidan dan bentuk kamusnya 起きる."],
  ["Konjugasi","Bentuk て dari 行く yang benar adalah?",["行いて","行って","行んで","行きて"],1,"行く adalah pengecualian: bentuk て dan た-nya 行って・行った."],
  ["Kanji","Kanji 日 pada 日本 biasanya dibaca?",["にち / に / ひ (bergantung kata)","ほん","じん","がく"],0,"日 memiliki beberapa bacaan; misalnya にほん dalam 日本 dan ひ untuk matahari/hari."],
  ["Kanji","Kanji 学 bermakna?",["Belajar","Air","Pintu","Kecil"],0,"学 bermakna belajar, seperti 学生 dan 学校."],
  ["Kanji","Kanji 駅 berarti?",["Bandara","Stasiun","Kapal","Toko"],1,"駅 berarti stasiun."],
  ["Kanji","Bacaan kun-yomi umum untuk 山 adalah?",["やま","かわ","た","しま"],0,"山 dibaca やま sebagai kata mandiri, misalnya 富士山 dibaca ふじさん."],
  ["Kanji","Gabungan 日本語 berarti?",["Bahasa Jepang","Orang Jepang","Hari Minggu","Buku Jepang"],0,"日本語 dibaca にほんご dan berarti bahasa Jepang."],
  ["Kanji","Kanji 水 berarti?",["Api","Air","Tanah","Pohon"],1,"水 berarti air; bacaan mandirinya みず."],
  ["Kotoba","Apa arti 図書館 (としょかん)?",["Museum","Perpustakaan","Kantor pos","Kantor"],1,"図書館 berarti perpustakaan."],
  ["Kotoba","Apa arti 住所 (じゅうしょ)?",["Alamat","Nomor telepon","Nama","Usia"],0,"住所 berarti alamat."],
  ["Kotoba","Kata Jepang untuk 'hujan' adalah?",["雪","風","雨","雲"],2,"雨 dibaca あめ dan berarti hujan."],
  ["Kotoba","Apa arti 料理 (りょうり)?",["Perjalanan","Masakan/memasak","Pekerjaan","Pelajaran"],1,"料理 berarti masakan atau kegiatan memasak."],
  ["Bunpou","Partikel を pada NをVます menandai?",["Topik","Objek langsung","Tempat keberadaan","Alat"],1,"を menandai objek langsung dari kata kerja transitif."],
  ["Bunpou","Bentuk な sebelum kata benda dipakai oleh?",["Kata sifat-i","Kata sifat-na","Kata kerja godan","Kata keterangan waktu"],1,"Kata sifat-na memakai な ketika menerangkan kata benda, misalnya 静かな町."],
  ["Bunpou","Pola ～なければなりません menyatakan?",["Izin","Pengalaman","Kewajiban","Ajakan"],2,"～なければなりません berarti harus melakukan sesuatu."],
  ["Bunpou","Pola ～てはいけません menyatakan?",["Larangan","Keinginan","Perkiraan","Perbandingan"],0,"Vてはいけません melarang suatu tindakan."],
  ["Partikel","Partikel へ dalam 学校へ行きます menunjukkan?",["Objek","Arah tujuan","Tempat kegiatan","Pemilik"],1,"へ menandai arah perpindahan menuju sekolah."],
  ["Partikel","Partikel の dalam 私の本 menunjukkan?",["Alasan","Kepemilikan/hubungan","Objek","Batas waktu"],1,"私の本 berarti buku milik saya."],
  ["Partikel","Dalam りんごやバナナなど, や menandai?",["Daftar contoh tidak lengkap","Daftar lengkap","Tempat","Waktu"],0,"や menyebut sebagian contoh dan mengisyaratkan ada contoh lain."],
  ["Partikel","何時から何時まで menandai rentang apa?",["Pelaku","Alat","Waktu mulai sampai selesai","Pilihan"],2,"から menandai awal dan まで menandai akhir rentang."],
  ["Konjugasi","Bentuk て dari 買う adalah?",["買いて","買って","買んで","買て"],1,"Godan berakhiran う berubah menjadi って pada bentuk て."],
  ["Konjugasi","Bentuk nai dari 読む adalah?",["読まない","読みない","読ばない","読めない"],0,"Godan berakhiran む berpindah ke baris あ: 読まない."],
  ["Konjugasi","Bentuk ます dari 待つ adalah?",["待ちます","待つます","待たます","待ってます"],0,"Godan berakhiran つ berpindah ke baris い: 待ちます."],
  ["Konjugasi","Bentuk potensial dari 食べる adalah?",["食べられる","食べれるる","食ばれる","食べさせる"],0,"Bentuk potensial ichidan yang lengkap adalah 食べられる."],
  ["Kanji","Kanji 川 berarti?",["Sungai","Gunung","Sawah","Pohon"],0,"川 berarti sungai dan lazim dibaca かわ."],
  ["Kanji","Kanji 先 dalam 先生 memiliki arti dasar berkaitan dengan?",["Sebelumnya/lebih dahulu","Besar","Kecil","Membeli"],0,"先生 dibaca せんせい; 先 memiliki makna lebih dahulu atau sebelumnya."],
  ["Kanji","Kanji 電 pada 電車 dan 電話 berkaitan dengan?",["Air","Listrik","Api","Buku"],1,"電 berkaitan dengan listrik; 電車 adalah kereta listrik dan 電話 adalah telepon."],
  ["Kanji","Kanji 木 berarti?",["Pohon","Bulan","Api","Buku"],0,"木 berarti pohon, dibaca き sebagai kata mandiri."]
 ].map(([category,q,opts,answer,why])=>({category,q,opts,answer,why}))
];
let activeQuizSets=quizSets;
let activeQuizTitle="Kuis Bunpou";

function renderQuiz() {
  activeQuizSets=quizSets;
  activeQuizTitle="Kuis Campuran";
  quizIndex=0;quizScore=0;quizAnswers=[];
  showQuiz();
}
function showQuiz(){
  if(quizIndex>=activeQuizSets.length){
    const pct=Math.round(quizScore/activeQuizSets.length*100);state.quizHistory.push(pct);saveState();
    document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Hasil ${activeQuizTitle}</h1><p>Skor tersimpan ke riwayat belajar.</p></div></div><div class="panel" style="text-align:center;padding:50px"><div class="brand-mark" style="margin:auto;width:64px;height:64px;font-size:25px">${pct}%</div><h2>${quizScore} dari ${activeQuizSets.length} benar</h2><p style="color:var(--muted)">Ulangi atau pilih latihan lain untuk memperkuat pemahaman.</p><button class="primary-btn" id="retryQuiz">Ulangi</button><button class="secondary-btn" id="backExercise" style="margin-left:8px">Pilih Latihan</button></div>`;
    document.getElementById("retryQuiz").onclick=()=>activeQuizTitle==="Kuis Campuran"?renderQuiz():activeQuizTitle==="Latihan Campuran"?startExerciseQuiz(quizSets,"Latihan Campuran"):renderExerciseCategory(activeQuizTitle.replace("Latihan ",""));
    document.getElementById("backExercise").onclick=renderExercise;return;
  }
  const q=activeQuizSets[quizIndex];
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>${activeQuizTitle}</h1><p>Soal ${quizIndex+1} dari ${activeQuizSets.length}${q.category?` · ${q.category}`:""}</p></div><button class="secondary-btn" id="exitQuiz">Keluar</button></div><div class="quiz-card"><h2>${q.q}</h2><div class="quiz-options">${q.opts.map((o,i)=>`<button class="quiz-option" data-option="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}</div><div id="quizExplanation"></div><div class="quiz-footer"><span>Skor: ${quizScore}</span><button class="primary-btn" id="nextQuiz" disabled>Soal Berikutnya</button></div></div>`;
  document.querySelectorAll(".quiz-option").forEach(btn=>btn.onclick=()=>answerQuiz(+btn.dataset.option));
  document.getElementById("exitQuiz").onclick=renderExercise;
  document.getElementById("nextQuiz").onclick=()=>{quizIndex++;showQuiz();}
}
function answerQuiz(ans){
  const q=activeQuizSets[quizIndex];
  document.querySelectorAll(".quiz-option").forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add("correct");if(i===ans&&ans!==q.answer)b.classList.add("wrong")});
  if(ans===q.answer)quizScore++;
  quizAnswers.push(ans===q.answer);
  document.getElementById("quizExplanation").innerHTML=`<div class="explanation"><strong>${ans===q.answer?"Benar!":"Kurang tepat."}</strong> ${q.why}</div>`;
  document.getElementById("nextQuiz").disabled=false;
}

function renderProgress(){
  const learned=Object.values(state.kotobaStatus).filter(v=>v==="hafal").length;
  const avg=state.quizHistory.length?Math.round(state.quizHistory.reduce((a,b)=>a+b,0)/state.quizHistory.length):0;
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Progress Belajar</h1><p>Pantau bab, kuis, kosakata, dan target mingguan.</p></div></div>
  <div class="stats-grid">${statCard("▤","Bab Selesai",state.completed.length,"/ 50 bab")}${statCard("☆","Materi Tersimpan",state.saved.length,"materi")}${statCard("✓","Rata-rata Kuis",`${avg}%`,`${state.quizHistory.length} percobaan`) }${statCard("語","Kosakata Hafal",learned,"ditandai hafal")}</div>
  <div class="panel" style="margin-bottom:16px"><div class="panel-head"><h2>Riwayat nilai kuis</h2></div>${state.quizHistory.length?`<div class="word-grid">${state.quizHistory.slice(-6).reverse().map((score,i)=>`<div class="word-card"><strong>${score}%</strong><span>Percobaan ${state.quizHistory.length-i}</span></div>`).join("")}</div>`:"<p style='color:var(--muted)'>Belum ada hasil kuis. Selesaikan kuis untuk melihat riwayat.</p>"}</div>
  <div class="panel"><table class="progress-table"><thead><tr><th>Bab</th><th>Materi</th><th>Kotoba</th><th>Status bab</th></tr></thead><tbody>${chapters.map((c,i)=>{const words=getKotobaWords(i);const known=words.filter(w=>state.kotobaStatus[`${i+1}:${w[2]}`]==="hafal").length;return `<tr><td>${i+1}</td><td>${c[0]}</td><td>${known} / ${words.length} hafal</td><td>${isCompleted(i)?'<span style="color:var(--green)">✓ Selesai</span>':'Belum dipelajari'}</td></tr>`}).join("")}</tbody></table></div>`;
}
function renderFavorites(){
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Materi Tersimpan</h1><p>Kumpulan materi favorit Anda.</p></div></div>${state.saved.length?`<div class="lesson-grid">${state.saved.map(n=>lessonTile(n-1)).join("")}</div>`:`<div class="panel" style="text-align:center;padding:45px"><h2>Belum ada materi tersimpan</h2><p style="color:var(--muted)">Buka bab pembelajaran lalu pilih tombol Simpan Materi.</p><button class="primary-btn" data-page-go="lessons">Lihat Materi</button></div>`}`;
}
function renderKanji(){
  const kanji=[
    ["日","ひ・にち・じつ","matahari; hari","日本、日本語、日曜日"],["本","ほん・もと","buku; asal","本、日本、山本"],["人","ひと・じん・にん","orang","人、日本人、三人"],["月","つき・げつ・がつ","bulan","月曜日、一月"],["火","ひ・か","api","火曜日、火山"],["水","みず・すい","air","水曜日、水道"],["木","き・もく","pohon","木曜日、木村"],["金","かね・きん","emas; uang","金曜日、お金"],["土","つち・ど","tanah","土曜日、土地"],["生","い・う・せい","hidup; lahir","学生、先生、生活"],
    ["学","まな・がく","belajar","学生、学校、大学"],["校","こう","sekolah","学校、高校"],["先","さき・せん","sebelumnya; depan","先生、先週"],["年","とし・ねん","tahun","一年、今年、来年"],["時","とき・じ","waktu; jam","時間、何時"],["分","わ・ふん・ぶん","bagian; menit","十分、分かる"],["半","なか・はん","setengah","半年、三時半"],["今","いま・こん","sekarang","今日、今週、今月"],["週","しゅう","pekan","先週、毎週"],["毎","ごと・まい","setiap","毎日、毎週"],
    ["語","かた・ご","bahasa; kata","日本語、英語"],["国","くに・こく","negara","外国、国際"],["名","な・めい","nama","名前、有名"],["前","まえ・ぜん","depan; sebelum","名前、午前"],["後","あと・うし・ご","belakang; sesudah","午後、後ろ"],["東","ひがし・とう","timur","東京、東口"],["西","にし・せい","barat","西口、関西"],["南","みなみ・なん","selatan","南口、南米"],["北","きた・ほく","utara","北口、北海道"],["口","くち・こう","mulut; pintu","入口、出口"],
    ["大","おお・だい","besar","大学、大切"],["小","ちい・しょう","kecil","小学校、小さい"],["高","たか・こう","tinggi; mahal","高校、高い"],["安","やす・あん","murah; aman","安い、安心"],["新","あたら・しん","baru","新しい、新聞"],["古","ふる・こ","lama; tua","古い、古本"],["長","なが・ちょう","panjang; ketua","長い、社長"],["白","しろ・はく","putih","白い、白紙"],["黒","くろ・こく","hitam","黒い、黒板"],["赤","あか・せき","merah","赤い、赤ちゃん"],
    ["青","あお・せい","biru","青い、青年"],["山","やま・さん","gunung","富士山、山田"],["川","かわ・せん","sungai","川、川口"],["田","た・でん","sawah","田中、山田"],["車","くるま・しゃ","mobil","電車、自動車"],["電","でん","listrik","電話、電車"],["駅","えき","stasiun","駅前、東京駅"],["社","やしろ・しゃ","perusahaan; kuil","会社、社員"],["会","あ・かい","bertemu; asosiasi","会社、会議"],["員","いん","anggota/pegawai","会社員、店員"],
    ["食","た・しょく","makan","食べる、食事"],["飲","の・いん","minum","飲む、飲み物"],["見","み・けん","melihat","見る、見学"],["聞","き・ぶん","mendengar","聞く、新聞"],["読","よ・どく","membaca","読む、読書"],["書","か・しょ","menulis","書く、辞書"],["話","はな・わ","berbicara","話す、電話"],["買","か・ばい","membeli","買う、買い物"],["行","い・こう","pergi","行く、銀行"],["来","く・らい","datang","来る、来週"],
    ["入","はい・にゅう","masuk","入口、入学"],["出","で・しゅつ","keluar","出口、出発"],["休","やす・きゅう","istirahat","休み、休日"],["見","み・けん","melihat","見る、見学"],["語","かた・ご","bahasa; kata","日本語、英語"],["友","とも・ゆう","teman","友達、親友"],["父","ちち・ふ","ayah","父親、お父さん"],["母","はは・ぼ","ibu","母親、お母さん"],["子","こ・し","anak","子ども、女子"],["女","おんな・じょ","perempuan","女の人、女子"],
    ["男","おとこ・だん","laki-laki","男の人、男子"],["手","て・しゅ","tangan","手紙、上手"],["足","あし・そく","kaki; cukup","足、足りる"],["目","め・もく","mata","目、目的"],["耳","みみ・じ","telinga","耳、耳鼻科"],["口","くち・こう","mulut","口、入口"],["力","ちから・りょく","tenaga","力、努力"],["気","き","perasaan; udara","天気、元気"],["雨","あめ・う","hujan","雨、雨天"],["空","そら・くう","langit; kosong","空、空港"],
    ["花","はな・か","bunga","花、花見"],["魚","さかな・ぎょ","ikan","魚、金魚"],["犬","いぬ・けん","anjing","犬、子犬"],["猫","ねこ・びょう","kucing","猫、子猫"],["牛","うし・ぎゅう","sapi","牛肉、牛乳"],["馬","うま・ば","kuda","馬、馬車"],["鳥","とり・ちょう","burung","鳥、白鳥"],["米","こめ・べい","beras; Amerika","米、米国"],["肉","にく","daging","牛肉、鶏肉"],["茶","ちゃ・さ","teh","お茶、茶色"],
    ["店","みせ・てん","toko","店、喫茶店"],["道","みち・どう","jalan","道、道路"],["駅","えき","stasiun","駅、駅前"],["国","くに・こく","negara","国、外国"],["村","むら・そん","desa","村、村人"],["町","まち・ちょう","kota","町、町長"],["白","しろ・はく","putih","白い、白紙"],["黒","くろ・こく","hitam","黒い、黒板"],["赤","あか・せき","merah","赤い、赤ちゃん"],["青","あお・せい","biru","青い、青年"],
    ["多","おお・た","banyak","多い、多分"],["少","すく・しょう","sedikit","少ない、少し"],["早","はや・そう","awal; cepat","早い、早朝"],["明","あか・めい","terang; besok","明るい、明日"],["持","も・じ","membawa; memiliki","持つ、気持ち"],["立","た・りつ","berdiri","立つ、立派"],["住","す・じゅう","tinggal","住む、住所"],["使","つか・し","menggunakan","使う、大使館"],["作","つく・さく","membuat","作る、作文"],["思","おも・し","berpikir","思う、思い出す"]
  ];
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Kanji Dasar</h1><p>Daftar kanji pendamping dengan bacaan, arti, kata gabungan, dan pencarian.</p></div></div><div class="filter-bar"><input id="kanjiSearch" placeholder="Cari kanji, bacaan, arti, atau contoh..."></div><div class="word-grid" id="kanjiGrid"></div>`;
  const uniqueKanji=[...new Map(kanji.map(entry=>[entry[0],entry])).values()];
  const render=()=>{const q=document.getElementById("kanjiSearch").value.toLowerCase();document.getElementById("kanjiGrid").innerHTML=uniqueKanji.filter(k=>`${k.join(" ")}`.toLowerCase().includes(q)).map(k=>`<article class="word-card"><strong style="font-size:30px">${k[0]}</strong><span>${k[1]} · ${k[2]}</span><span><b>Kata gabungan:</b> ${k[3]}</span></article>`).join("")||"Kanji tidak ditemukan.";};
  document.getElementById("kanjiSearch").oninput=render;render();
}
function renderParticles(){
  const particles=[
    ["は","wa","Menandai topik kalimat","私は学生です。","私=topik; は=penanda topik","Menandai topik, bukan objek."],
    ["が","ga","Menandai subjek atau fokus","田中さんが来ます。","田中さん=subjek baru","が menekankan subjek; は membandingkan/topik."],
    ["を","o","Menandai objek langsung","パンを食べます。","パン=objek; を=penanda objek","Tidak menyatakan arah."],
    ["に","ni","Waktu, tujuan, tempat keberadaan","六時に来ます。","六時=waktu kedatangan","Untuk arah tujuan gerak dapat dipakai へ."],
    ["で","de","Tempat kegiatan, alat, sarana","電車で行きます。","電車=alat","じょう・jalan tempat kegiatan, bukan letak."],
    ["へ","e","Arah pergerakan","駅へ行きます。","駅=arah","Lebih menekankan arah daripada titik tujuan."],
    ["と","to","Teman atau menyebut pasangan","友達と行きます。","友達=pasangan","Juga digunakan untuk pengandaian Ｓと hasil."],
    ["も","mo","Juga/seluruh pilihan","私も学生です。","も=penambahan","Bisa mengganti は/が/を."],
    ["の","no","Menjelaskan kepemilikan atau hubungan","田中さんの本です。","田中さん=penentu; 本=benda","Juga nominalisasi atau hubungan."],
    ["から","kara","Mulai atau sebab","九時から勉強します。","9時=titik awal","も untuk rentang dapat digunakan bersama."],
    ["まで","made","Batas akhir","五時まで働きます。","5時=batas akhir","Bersama から membentuk rentang."],
    ["より","yori","Perbandingan","東京は大阪より大きいです。","大阪=acuan lebih kecil","Pola NはNよりA."],
    ["や","ya","Menyebut beberapa contoh benda secara tidak lengkap","机の上に本やノートがあります。","本・ノート=contoh; masih mungkin ada benda lain","と biasanya memberi daftar lengkap; や memberi contoh."],
    ["か","ka","Membentuk pertanyaan atau pilihan","コーヒーかお茶をください。","コーヒーかお茶=pilihan","Di akhir kalimat menjadi penanda pertanyaan; di antara nomina berarti atau."],
    ["ね","ne","Meminta persetujuan atau berbagi informasi","今日は暑いですね。","Pembicara mengajak lawan bicara menyetujui","ね mencari kesepahaman; よ menyampaikan informasi baru."],
    ["よ","yo","Menekankan atau memberi informasi kepada lawan bicara","この店はおいしいですよ。","Pembicara memberi informasi","Jangan berlebihan dalam situasi resmi; ね lebih mengundang persetujuan."],
    ["だけ","dake","Hanya; sebatas jumlah atau pilihan","水だけ飲みました。","水=yang dibatasi","Berbeda dengan しか yang memerlukan predikat negatif."],
    ["しか","shika","Hanya; menekankan jumlah terbatas dengan bentuk negatif","千円しかありません。","千円=jumlah terbatas; ありません=negatif wajib","Tidak dapat dipakai dengan predikat positif untuk arti hanya."],
    ["でも","demo","Misalnya; atau untuk menawarkan pilihan ringan","お茶でも飲みませんか。","でも memberi contoh pilihan yang tidak membatasi","Bisa berarti tetapi jika menghubungkan dua kalimat."],
    ["など","nado","Dan sebagainya; menyebut contoh","りんごやバナナなどを買いました。","など menunjukkan contoh lain yang tidak disebut","Dapat mengikuti daftar atau nomina."],
    ["について","ni tsuite","Mengenai atau tentang suatu topik","日本の文化について話します。","日本の文化=topik pembicaraan","Lebih khusus menandai topik bahasan daripada の biasa."],
    ["によって","ni yotte","Bergantung pada; oleh; melalui (sesuai konteks)","国によって習慣が違います。","国=dasar variasi","Arti berubah menurut pola: penyebab, pelaku pasif, atau perbedaan."],
    ["として","to shite","Dalam kapasitas atau peran sebagai","教師として働いています。","教師=peran","Berbeda dari に: menandai peran, bukan tujuan atau waktu."],
    ["までに","made ni","Batas waktu sebelum atau paling lambat","金曜日までにレポートを出してください。","金曜日=batas akhir untuk menyelesaikan","まで menyatakan durasi sampai batas; までに menekankan tenggat."],
    ["ので","node","Menyatakan alasan dengan nuansa lebih halus","雨なので、出かけません。","雨=alasan; tidak pergi=hasil","Dibanding から, ので cenderung lebih halus dan objektif."],
    ["のに","noni","Meskipun; hasil berlawanan dengan dugaan","勉強したのに、試験に落ちました。","Belajar tetapi hasilnya tidak sesuai harapan","Menyatakan pertentangan; bukan penanda tujuan."],
    ["ば","ba","Menyatakan syarat umum atau hasil yang bergantung pada kondisi","時間があれば、手伝います。","Ada waktu=syarat","と cocok untuk hasil otomatis; たら lebih fleksibel untuk kondisi tertentu."],
    ["たら","tara","Syarat atau urutan setelah suatu keadaan terjadi","駅に着いたら、電話してください。","Setelah tiba di stasiun, teleponlah","Lebih fleksibel daripada と untuk permintaan dan rencana."],
    ["と","to","Menghubungkan syarat yang berakibat otomatis atau kebiasaan","春になると、花が咲きます。","Musim semi=syarat; bunga mekar=hasil alami","Hindari memakai と untuk perintah atau permintaan setelahnya."],
    ["ほど","hodo","Menunjukkan tingkat atau perbandingan","今日は昨日ほど寒くありません。","Tidak sedingin kemarin","Umum dalam pola negatif: tidak se… daripada/acuan."],
    ["ばかり","bakari","Baru saja atau terus-menerus hanya melakukan sesuatu","弟はゲームばかりしています。","ゲーム=hal yang terus dilakukan","Makna bergantung konteks; jangan disamakan dengan だけ yang netral."],
    ["については","ni tsuite wa","Menetapkan topik khusus untuk dibahas","この問題については、後で話します。","この問題=topik khusus","は memberi kontras atau penegasan pada topik."],
    ["って","tte","Bentuk percakapan untuk kutipan atau topik","田中さん、来ないって。","って mengutip kabar informal","Dalam tulisan formal gunakan と atau という."],
    ["かな","kana","Menyatakan pertanyaan atau keraguan pada diri sendiri","明日は晴れるかな。","Pembicara bertanya-tanya","Nuansa percakapan dan kasual; bukan pengganti ですか."],
    ["こそ","koso","Menekankan bahwa justru hal itu yang dimaksud","今年こそ日本へ行きたいです。","今年=penekanan 'tahun ini juga/justru tahun ini'","Lebih kuat daripada は atau も; sering menekankan tekad."]
  ];
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Partikel & Ungkapan Tata Bahasa</h1><p>${particles.length} partikel dan ungkapan dengan fungsi, contoh, analisis, dan perbandingan.</p></div></div><div class="filter-bar"><input id="particleSearch" placeholder="Cari partikel, fungsi, atau contoh..."><select id="particleGroup"><option value="all">Semua topik</option><option value="dasar">Partikel dasar</option><option value="lanjutan">Partikel & pola lanjutan</option></select></div><div id="particleResults"></div>`;
  const render=()=>{const q=document.getElementById("particleSearch").value.toLowerCase();const group=document.getElementById("particleGroup").value;const filtered=particles.filter((p,i)=>(group==="all"||(group==="dasar"?i<12:i>=12))&&p.join(" ").toLowerCase().includes(q));document.getElementById("particleResults").innerHTML=filtered.map(p=>`<article class="pattern"><h3>～${p[0]}～</h3><div class="formula"><strong>Fungsi / rumus:</strong> ${p[2]} · Bacaan: ${p[1]}</div><div class="pattern-meta"><div><strong>Contoh</strong><span class="japanese">${p[3]}</span></div><div><strong>Analisis</strong>${p[4]}</div></div><div class="explanation"><strong>Perbedaan dan catatan:</strong> ${p[5]}</div></article>`).join("")||"<p>Tidak ditemukan.</p>";};
  document.getElementById("particleSearch").oninput=render;document.getElementById("particleGroup").onchange=render;render();
}

function renderAudit(){
  const cards=chapters.map((c,i)=>{
    const words=getKotobaWords(i);
    const kotoba=words.length;
    const katakana=words.filter(w=>/[ァ-ヶー]/u.test(w[0])).length;
    const bunpou=(bunpouCatalog[i]||[]).length;
    const kaiwa=Boolean(kaiwaCatalog[i]?.[0]&&kaiwaCatalog[i]?.[1]);
    return `<div class="audit-card"><strong>Bab ${i+1}</strong><span>${kotoba} kosakata pendamping (${katakana} Katakana)</span><span>${bunpou} pola Bunpou, ${bunpou} contoh Jepang</span><span>Kaiwa: ${kaiwa?"tersedia":"belum tersedia"}</span><span>Verifikasi sumber buku: belum dilakukan</span></div>`;
  }).join("");
  const totalWords=chapters.reduce((sum,_,i)=>sum+getKotobaWords(i).length,0);
  const totalPatterns=bunpouCatalog.reduce((sum,patterns)=>sum+patterns.length,0);
  const totalKaiwa=kaiwaCatalog.filter(entry=>entry?.[0]&&entry?.[1]).length;
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Audit Materi 50 Bab</h1><p>Jumlah materi yang tersedia saat ini; audit ini tidak menyatakan kelengkapan resmi buku.</p></div></div><div class="source-note">Ringkasan kosakata dan contoh adalah materi pendamping orisinal, bukan transkripsi atau daftar lengkap resmi Minna no Nihongo. Setiap pola saat ini memiliki satu contoh Jepang; romaji dan terjemahan contoh per pola belum tersedia. Verifikasi terhadap edisi buku belum dilakukan.</div><div class="stats-grid"><div class="stat-card"><div class="stat-card-top"><span>Kotoba</span></div><strong>${totalWords}</strong><small>entri gabungan Bab 1–50</small></div><div class="stat-card"><div class="stat-card-top"><span>Bunpou</span></div><strong>${totalPatterns}</strong><small>pola dengan contoh Jepang</small></div><div class="stat-card"><div class="stat-card-top"><span>Kaiwa</span></div><strong>${totalKaiwa} / 50</strong><small>bab dengan dialog dan terjemahan</small></div><div class="stat-card"><div class="stat-card-top"><span>Kuis umum</span></div><strong>${quizSets.length}</strong><small>soal dalam bank kuis</small></div></div><div class="audit-grid">${cards}</div>`;
}

function renderDictionary(){
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Kamus Jepang–Indonesia</h1><p>Kosakata Bab 1–50 dan kosakata umum, termasuk kata serapan yang ditulis dengan Katakana.</p></div></div><div class="filter-bar"><input id="dictSearch" placeholder="Cari Kanji, Kana, romaji, atau arti..."><select id="dictType"><option value="all">Semua jenis kata</option></select><select id="dictScript" aria-label="Filter jenis tulisan"><option value="all">Semua tulisan</option><option value="katakana">Katakana</option><option value="hiragana">Hiragana saja</option><option value="kanji">Mengandung Kanji</option></select></div><p id="dictCount" style="color:var(--muted)"></p><div class="kotoba-table-wrap"><table class="kotoba-table"><thead><tr><th>No.</th><th>Kanji / Kana (kata Jepang)</th><th>Bacaan Hiragana</th><th>Romaji</th><th>Arti</th><th>Jenis</th></tr></thead><tbody id="dictResults"></tbody></table></div>`;
  const entries=getDictionaryEntries();
  const types=[...new Set(entries.map(e=>e.word[4]))].sort();
  document.getElementById("dictType").innerHTML+=types.map(t=>`<option>${t}</option>`).join("");
  const update=()=>{
    const q=document.getElementById("dictSearch").value.toLowerCase();
    const type=document.getElementById("dictType").value;
    const script=document.getElementById("dictScript").value;
    const filtered=entries.filter(e=>{
      const meaning=e.word[3].toLowerCase();
      const meaningMatch=q.includes(" ")?meaning.includes(q):meaning.split(/[^\p{L}\p{N}]+/u).some(token=>q.length>=4?token===q:token.startsWith(q));
      const searchMatch=e.word.slice(0,3).join(" ").toLowerCase().includes(q)||meaningMatch;
      const headword=e.word[0];
      const scriptMatch=script==="all"||(script==="katakana"?/[ァ-ヶー]/u.test(headword):script==="kanji"?/[\u3400-\u9fff]/u.test(headword):!/[ァ-ヶー\u3400-\u9fff]/u.test(headword)&&/[ぁ-ゖ]/u.test(headword));
      return (type==="all"||e.word[4]===type)&&scriptMatch&&searchMatch;
    });
    document.getElementById("dictCount").textContent=`Menampilkan ${filtered.length} dari ${entries.length} entri.`;
    document.getElementById("dictResults").innerHTML=filtered.map((e,n)=>`<tr data-dictionary-entry="${e.id}"><td>${n+1}</td><td class="jp-cell">${e.word[0]}</td><td>${e.word[1]}</td><td>${e.word[2]}</td><td>${e.word[3]}</td><td><span class="type-tag">${e.word[4]}</span></td></tr>`).join("")||`<tr><td colspan="6">Kata tidak ditemukan.</td></tr>`;
  };
  document.getElementById("dictSearch").oninput=update;document.getElementById("dictType").onchange=update;document.getElementById("dictScript").onchange=update;
  document.getElementById("dictResults").onclick=e=>{const row=e.target.closest("[data-dictionary-entry]");if(row){const item=entries.find(x=>x.id===row.dataset.dictionaryEntry);if(item)showDictionaryDetail(item.word,item.chapter);}};
  update();
}

function getDictionaryEntries(){
  const items=[];
  chapters.forEach((_,chapter)=>getKotobaWords(chapter).forEach((word,index)=>items.push({id:`${chapter}:${index}`,chapter,word})));
  vocabulary.forEach((w,index)=>items.push({id:`extra:${index}`,chapter:null,word:[w[1],w[0],w[2],w[3],w[4],w[5],"",w[6],"","","",""]}));
  (window.KAMUS_DASAR||[]).forEach((item,index)=>{
    const [kanji,kana,romaji,meaning,type,example,exampleRomaji,translation]=item.split("|");
    items.push({id:`kamus:${index}`,chapter:null,word:[kanji,kana,romaji,meaning,type,example,exampleRomaji,translation,"","","",""]});
  });
  (window.KAMUS_KATAKANA||[]).forEach((item,index)=>{
    const [headword,kana,romaji,meaning,type,example,exampleRomaji,translation]=item.split("|");
    items.push({id:`katakana:${index}`,chapter:null,word:[headword,kana,romaji,meaning,type,example,exampleRomaji,translation,"","","",""]});
  });
  const seen=new Set();
  return items.filter(e=>{const key=`${e.word[0]}|${e.word[1]}`;if(seen.has(key))return false;seen.add(key);return true;});
}

function showDictionaryDetail(w,chapter){
  const existing=document.getElementById("kotobaModal");if(existing)existing.remove();
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="kotobaModal"><div class="modal"><div class="modal-head"><div><span class="type-tag">${w[4]}</span><h2>${w[0]}</h2></div><button class="modal-close" id="closeKotobaModal">×</button></div><div class="detail-grid"><div class="detail-item"><span>Hiragana</span><strong>${w[1]}</strong></div><div class="detail-item"><span>Romaji</span><strong>${w[2]}</strong></div><div class="detail-item"><span>Arti</span><strong>${w[3]}</strong></div><div class="detail-item"><span>Sumber materi</span><strong>${chapter===null?"Kamus umum":"Bab "+(chapter+1)+": "+chapterName(chapter)}</strong></div></div><div class="pattern"><h3>Contoh</h3><div class="example"><strong>${w[5]||"Contoh kalimat belum tersedia untuk entri ini."}</strong><span>Romaji: ${w[6]||"—"}</span><span>Terjemahan: ${w[7]||"—"}</span></div></div><div class="explanation">Data kamus pendamping ini bersifat orisinal, bukan daftar resmi seluruh kosakata Minna no Nihongo.</div></div></div>`);
  document.getElementById("closeKotobaModal").onclick=()=>document.getElementById("kotobaModal").remove();
  document.getElementById("kotobaModal").onclick=e=>{if(e.target.id==="kotobaModal")e.currentTarget.remove();};
}
function renderExercise(){
  const categories=["Kotoba","Bunpou","Partikel","Konjugasi","Kanji"];
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Latihan Soal</h1><p>Pilih bidang latihan; setiap soal memiliki pembahasan setelah dijawab.</p></div></div><div class="lesson-grid">${categories.map(category=>{const count=quizSets.filter(q=>q.category===category).length;return `<button class="lesson-tile" data-exercise-category="${category}"><span class="chapter">${category}</span><h3>Latihan ${category}</h3><p>${count} soal tersedia dengan pembahasan.</p></button>`;}).join("")}<button class="lesson-tile" data-exercise-category="Campuran"><span class="chapter">Semua topik</span><h3>Latihan Campuran</h3><p>${quizSets.length} soal dari semua bidang.</p></button></div>`;
  document.querySelectorAll("[data-exercise-category]").forEach(button=>button.onclick=()=>button.dataset.exerciseCategory==="Campuran"?startExerciseQuiz(quizSets,"Latihan Campuran"):renderExerciseCategory(button.dataset.exerciseCategory));
}
function startExerciseQuiz(questions,title){
  activeQuizSets=questions;
  activeQuizTitle=title;
  quizIndex=0;quizScore=0;quizAnswers=[];
  showQuiz();
}
function renderExerciseCategory(category){
  const questions=quizSets.filter(q=>q.category===category);
  if(!questions.length){toast(`Belum ada soal kategori ${category}`);return renderExercise();}
  startExerciseQuiz(questions,`Latihan ${category}`);
}
function renderComparisons(){
  const pairs=[
    ["は vs が","は menandai topik; が menandai subjek atau fokus informasi.","私が先生です。 (Saya yang guru.)","私は先生です。 (Saya adalah guru.)"],
    ["に vs で","に untuk waktu/tujuan/keberadaan; で untuk tempat melakukan kegiatan.","学校に行きます。","図書館で勉強します。"],
    ["～てください vs ～てもいいです","てください meminta; てもいいです memberi atau meminta izin.","開けてください。","開けてもいいですか。"],
    ["～たいです vs ～ほしいです","たい untuk keinginan melakukan; ほしい untuk keinginan memiliki.","日本へ行きたいです。","新しい本がほしいです。"]
  ];
  document.getElementById("app").innerHTML=`<div class="page-heading"><div><h1>Perbandingan Bunpou</h1><p>Pola yang sering membingungkan pemula.</p></div></div>${pairs.map(p=>`<article class="pattern"><h3>${p[0]}</h3><div class="pattern-meta"><div><strong>Perbedaan</strong>${p[1]}</div><div><strong>Contoh 1</strong>${p[2]}<br><strong>Contoh 2</strong>${p[3]}</div></div></article>`).join("")}`;
}

function toast(message){
  const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),2200);
}
function navigate(page){
  setActive(page);
  const app=document.getElementById("app");
  if(page==="dashboard")renderDashboard();
  else if(page==="lessons")renderLessons(0,25,"Minna no Nihongo I");
  else if(page==="lessons-ii")renderLessons(25,50,"Minna no Nihongo II");
  else if(page==="grammar")renderGrammar();
  else if(page==="vocabulary")renderVocabulary();
  else if(page==="conjugation")renderConjugation();
  else if(page==="kanji")renderKanji();
  else if(page==="particles")renderParticles();
  else if(page==="audit")renderAudit();
  else if(page==="exercise")renderExercise();
  else if(page==="quiz")renderQuiz();
  else if(page==="progress")renderProgress();
  else if(page==="dictionary")renderDictionary();
  else if(page==="favorites")renderFavorites();
  else if(page==="comparisons")renderComparisons();
  document.getElementById("sidebar").classList.remove("open");document.getElementById("overlay").classList.remove("show");
  window.scrollTo({top:0,behavior:"smooth"});
}

document.addEventListener("click",e=>{
  const kotobaChapterBtn=e.target.closest("[data-kotoba-chapter]");
  if(kotobaChapterBtn){renderKotobaChapter(+kotobaChapterBtn.dataset.kotobaChapter);return;}
  const kotobaDetail=e.target.closest("[data-kotoba-detail]");
  if(kotobaDetail){showKotobaDetail(+kotobaDetail.dataset.kotobaDetail);return;}
  const bunpou=e.target.closest("[data-view-bunpou]");
  if(bunpou){renderLesson(+bunpou.dataset.viewBunpou);setActive("lesson");return;}
  const cardStatus=e.target.closest("[data-card-status]");
  if(cardStatus){
    const words=flashcardQueue.length?flashcardQueue:getKotobaWords(kotobaChapter);
    const w=words[flashcardIndex % words.length];
    const key=`${kotobaChapter+1}:${w[2]}`;
    state.kotobaStatus[key]=cardStatus.dataset.cardStatus;
    saveState();
    if(cardStatus.dataset.cardStatus==="belum"||cardStatus.dataset.cardStatus==="sedang"){
      const repeated=words.splice(flashcardIndex % words.length,1)[0];
      words.push(repeated);
    }else{
      flashcardIndex++;
    }
    flashcardFlipped=false;
    renderFlashcard();
    toast(cardStatus.dataset.cardStatus==="hafal"?"Kosakata ditandai sudah hafal":"Status flashcard disimpan");
    return;
  }
  const kotobaAnswer=e.target.closest("[data-kotoba-answer]");
  if(kotobaAnswer){
    const answer=kotobaAnswer.dataset.kotobaAnswer;
    document.querySelectorAll("[data-kotoba-answer]").forEach(b=>b.disabled=true);
    const result=document.getElementById("kotobaExerciseResult");
    const current=currentKotobaQuestion;
    const correct=answer===current?.correctValue;
    if(correct) kotobaExerciseScore++;
    kotobaAnswer.classList.add(correct?"correct":"wrong");
    const correctOption=[...document.querySelectorAll("[data-kotoba-answer]")].find(button=>button.dataset.kotobaAnswer===current?.correctValue);
    correctOption?.classList.add("correct");
    const word=current?.word;
    const explanation=current?.type===3
      ?`Bacaan <b>${word[0]}</b> adalah <b>${word[1]}</b> (${word[2]}). Artinya: ${word[3]}.`
      :current?.type===4
        ?`<b>${word[5]}</b>${word[6]?`<br>Romaji: ${word[6]}`:""}<br>Artinya: <b>${word[7]}</b>`
        :`<b>${word[0]}</b>（${word[1]}）dibaca <b>${word[2]}</b> dan berarti <b>${word[3]}</b>.${word[5]?`<br>Contoh: <span class="japanese">${word[5]}</span>${word[6]?`<br>Romaji: ${word[6]}`:""}${word[7]?`<br>Arti: ${word[7]}`:""}`:""}`;
    result.innerHTML=`<div class="explanation"><strong>${correct?"Jawaban benar!":"Jawaban belum tepat."}</strong><br>${explanation}</div><button class="primary-btn" style="margin-top:12px" id="nextKotobaExercise">Soal berikutnya</button>`;
    document.getElementById("nextKotobaExercise").onclick=()=>{kotobaExerciseIndex++;showKotobaExerciseQuestion();};
    return;
  }
  const lesson=e.target.closest("[data-lesson]");
  if(lesson){renderLesson(+lesson.dataset.lesson);setActive("lesson");return;}
  const nav=e.target.closest("[data-page]");
  if(nav){navigate(nav.dataset.page);return;}
  const go=e.target.closest("[data-page-go]");
  if(go){const n=go.dataset.lesson;if(n!==undefined){renderLesson(+n);setActive("lessons")}else navigate(go.dataset.pageGo);}
});
document.getElementById("menuBtn").onclick=()=>{document.getElementById("sidebar").classList.add("open");document.getElementById("overlay").classList.add("show")};
document.getElementById("sidebarClose").onclick=document.getElementById("overlay").onclick=()=>{document.getElementById("sidebar").classList.remove("open");document.getElementById("overlay").classList.remove("show")};
document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("dark");
document.getElementById("globalSearch").onkeydown=e=>{
  if(e.key==="Enter"){const q=e.target.value.trim().toLowerCase();if(!q)return;const i=chapters.findIndex(c=>(c[0]+" "+c[1].join(" ")).toLowerCase().includes(q));if(i>=0)renderLesson(i);else toast("Materi tidak ditemukan");}
};
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();document.getElementById("globalSearch").focus()}});

navMarkup();
document.getElementById("sidebarTarget").textContent=`${state.daily} / 2 materi`;
document.getElementById("sidebarTargetBar").style.width=`${state.daily/2*100}%`;
navigate("dashboard");
