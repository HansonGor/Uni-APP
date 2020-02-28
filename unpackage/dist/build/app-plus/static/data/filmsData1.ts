export interface FilmsData {
	author: string;
	filmsOneLeadingRole: string;
	films: any[];
	note: string;
}

const filmsData1: FilmsData = {
	author: 'Hanson',
	filmsOneLeadingRole: '周星驰',
	films: [
		{
			filmId: '001',
			filmName: '喜剧之王',
			filmImg: 'http://imgwx4.2345.com/dypcimg/img/5/17/sup52915_223x310.jpg',
			filmRole: '尹天仇',
			filmGrade: '9.95',
			filmYear: '1999',
			filmVideo: 'http://www.jfxyeva.com/japlay/pl10871/2-1.html'
		},
		{
			filmId: '002',
			filmName: '九品芝麻官',
			filmImg: 'https://pic6.iqiyipic.com/image/20190808/d9/4d/v_50002644_m_601_m10_180_236.jpg',
			filmRole: '包龙星',
			filmGrade: '9.1',
			filmYear: '1994',
			filmVideo:
				'http://m.iqiyi.com/v_19rrjd3p2s.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '003',
			filmName: '整蛊专家',
			filmImg: 'https://pic1.iqiyipic.com/image/20190808/35/d7/v_50044982_m_601_m9_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '9.5',
			filmYear: '1991',
			filmVideo: 'http://m.iqiyi.com/v_19rrjd6ol0.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '004',
			filmName: '鹿鼎记',
			filmImg: 'https://pic9.iqiyipic.com/image/20180217/60/d9/v_109370864_m_601_m3_180_236.jpg',
			filmRole: '韦小宝',
			filmGrade: '9.1',
			filmYear: '1992',
			filmVideo: 'http://www.iqiyi.com/h5act/iqiyi_mini_program_share.html?type=0&path=%2Fpages%2Fdetail%2Findex%3FpID%3D616879336%26channelId%3D0135_10010001005&appKey=aX76eD4iKPKpp17PpqwTaXQfk8XjxdrK&social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '005',
			filmName: '逃学威龙',
			filmImg: 'https://pic2.iqiyipic.com/image/20190809/0a/b9/v_110379903_m_601_m6_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '9.7',
			filmYear: '1991',
			filmVideo:
				'http://m.iqiyi.com/v_19rrlula2w.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '006',
			filmName: '鹿鼎记2',
			filmImg: 'https://pic1.iqiyipic.com/image/20180218/fc/d8/v_110366322_m_601_m3_180_236.jpg',
			filmRole: '韦小宝',
			filmGrade: '9.2',
			filmYear: '1992',
			filmVideo: 'https://www.baidu.com/'
		},
		{
			filmId: '007',
			filmName: '食神',
			filmImg: 'https://pic2.iqiyipic.com/image/20180220/65/55/v_112793370_m_601_m2_180_236.jpg',
			filmRole: '',
			filmGrade: '9.0',
			filmYear: '1996',
			filmVideo: 'https://m.v.qq.com/play.html?cid=w580ju91x12sp5m&vid=r0031k25yhj&ptag=iqiyi%23v.play.adaptor%231&social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '008',
			filmName: '国产凌凌漆',
			filmImg: 'https://pic3.iqiyipic.com/image/20190808/d9/5c/v_50044533_m_601_m10_180_236.jpg',
			filmRole: '',
			filmGrade: '9.3',
			filmYear: '1994',
			filmVideo:
				'http://m.iqiyi.com/v_19rrlula2w.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '009',
			filmName: '功夫',
			filmImg: 'https://pic6.iqiyipic.com/image/20190808/30/51/v_50116213_m_601_m8_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '9.9',
			filmYear: '2004',
			filmVideo: 'http://m.iqiyi.com/v_19rrifh6l4.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '010',
			filmName: '唐伯虎点秋香',
			filmImg: 'https://pic3.iqiyipic.com/image/20190808/22/f6/v_50001673_m_601_m8_180_236.jpg',
			filmRole: '唐伯虎',
			filmGrade: '9.3',
			filmYear: '1994',
			filmVideo:
				'http://m.iqiyi.com/v_19rrlula2w.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '011',
			filmName: '逃学威龙2',
			filmImg: 'https://pic1.iqiyipic.com/image/20190809/01/a4/v_110379900_m_601_m7_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '10.1',
			filmYear: '1992',
			filmVideo:
				'http://m.iqiyi.com/v_19rrlul93s.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '012',
			filmName: '赌侠二：上海滩情圣',
			filmImg: 'https://pic0.iqiyipic.com/image/20190810/d1/38/v_119143602_m_601_m4_180_236.jpg',
			filmRole: '阿星',
			filmGrade: '8.5',
			filmYear: '1991',
			filmVideo: 'https://m.youku.com/video/id_XMzQxNjg1NDczNg==.html?source=&social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '013',
			filmName: '少林足球',
			filmImg: 'https://pic6.iqiyipic.com/image/20190808/87/e8/v_62644746_m_601_m4_180_236.jpg',
			filmRole: '',
			filmGrade: '9.2',
			filmYear: '2001',
			filmVideo: 'https://m.v.qq.com/play.html?cid=w580ju91x12sp5m&vid=r0031k25yhj&ptag=iqiyi%23v.play.adaptor%231&social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '014',
			filmName: '武状元苏乞儿',
			filmImg: 'https://pic5.iqiyipic.com/image/20190808/ce/0c/v_50089303_m_601_m6_180_236.jpg',
			filmRole: '苏灿',
			filmGrade: '9.0',
			filmYear: '1992',
			filmVideo: 'http://m.iqiyi.com/v_19rrjd6ol0.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '015',
			filmName: '千王之王2000',
			filmImg: 'https://pic7.iqiyipic.com/image/20190808/3c/db/v_62644743_m_601_m5_180_236.jpg',
			filmRole: '黄师虎',
			filmGrade: '8.6',
			filmYear: '2000',
			filmVideo: ' http://m.iqiyi.com/v_19rv854kbg.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '016',
			filmName: '回魂夜',
			filmImg: 'https://pic4.iqiyipic.com/image/20191106/7e/25/v_50013068_m_601_m6_180_236.jpg',
			filmRole: 'Leon',
			filmGrade: '8.5',
			filmYear: '1995',
			filmVideo: 'https://m.v.qq.com/play.html?cid=w580ju91x12sp5m&vid=r0031k25yhj&ptag=iqiyi%23v.play.adaptor%231&social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '017',
			filmName: '破坏之王',
			filmImg: 'https://pic3.iqiyipic.com/image/20200115/41/b6/v_143446448_m_601_m4_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.5',
			filmYear: '1994',
			filmVideo:
				'http://m.iqiyi.com/v_19rrlula2w.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '018',
			filmName: '济公',
			filmImg: 'https://pic0.iqiyipic.com/image/20191115/68/08/v_62936571_m_601_m5_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '9.0',
			filmYear: '1993',
			filmVideo: ' http://m.iqiyi.com/v_19rv854kbg.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '019',
			filmName: '无敌幸运星',
			filmImg: 'https://pic1.iqiyipic.com/image/20190808/28/74/v_50072435_m_601_m6_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '9.0',
			filmYear: '1990',
			filmVideo: 'http://m.iqiyi.com/v_19rrmq8v0w.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '020',
			filmName: '逃学威龙3',
			filmImg: 'https://pic9.iqiyipic.com/image/20190808/df/de/v_50044517_m_601_m12_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '9.7',
			filmYear: '1993',
			filmVideo: 'http://m.iqiyi.com/v_19rrjd6ol0.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '021',
			filmName: '大内密探零零发',
			filmImg: 'https://pic5.iqiyipic.com/image/20190808/61/79/v_50235791_m_601_m7_180_236.jpg',
			filmRole: '零零发',
			filmGrade: '9.7',
			filmYear: '1996',
			filmVideo:
				'http://m.iqiyi.com/v_19rrk61zlg.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '022',
			filmName: '龙的传人',
			filmImg: 'https://pic6.iqiyipic.com/image/20190808/9b/aa/v_50073819_m_601_m7_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.5',
			filmYear: '1991',
			filmVideo:
				'http://m.iqiyi.com/v_19rrjcekzc.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '023',
			filmName: '大话西游之月光宝盒',
			filmImg: 'https://pic4.iqiyipic.com/image/20190808/7b/58/v_50185338_m_601_m8_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '10.1',
			filmYear: '1995',
			filmVideo: 'http://m.iqiyi.com/v_19rrmq8v0w.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '024',
			filmName: '大话西游之大圣娶亲',
			filmImg: 'https://pic3.iqiyipic.com/image/20190809/5b/f4/v_109655860_m_601_m6_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '10.1',
			filmYear: '1995',
			filmVideo:
				'http://m.iqiyi.com/v_19rrkqj6kg.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '025',
			filmName: '一本漫画闯天涯',
			filmImg: 'https://pic4.iqiyipic.com/image/20190809/ab/41/v_110357198_m_601_m5_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.6',
			filmYear: '1995',
			filmVideo: 'http://m.iqiyi.com/v_19rrmq8v0w.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '026',
			filmName: '霹雳先锋',
			filmImg: 'https://pic0.iqiyipic.com/image/20190808/7e/54/v_50355775_m_601_m9_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.5',
			filmYear: '1988',
			filmVideo: 'http://m.iqiyi.com/v_19rriflzt3.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '027',
			filmName: '行运一条龙',
			filmImg: 'https://pic1.iqiyipic.com/image/20190809/29/79/v_110561464_m_601_m4_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.9',
			filmYear: '1999',
			filmVideo:
				'http://m.iqiyi.com/v_19rrlknwro.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '028',
			filmName: '一本漫画闯天涯2',
			filmImg: 'https://pic1.iqiyipic.com/image/20190810/b1/1d/v_112847021_m_601_m3_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.9',
			filmYear: '1998',
			filmVideo: 'http://m.iqiyi.com/v_19rrc2k5pw.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '029',
			filmName: '92家有喜事',
			filmImg: 'https://pic0.iqiyipic.com/image/20190808/ba/ee/v_50003609_m_601_m8_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.8',
			filmYear: '1992',
			filmVideo: 'https://m.youku.com/video/id_XMzQxNjg1NDczNg==.html?source=&social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '030',
			filmName: '情圣',
			// "filmImg": "https://pic3.iqiyipic.com/image/20190809/10/11/v_62815842_m_601_m4_180_236.jpg",
			// "filmImg": "https://bkimg.cdn.bcebos.com/pic/838ba61ea8d3fd1f0a33cbd53c4e251f95ca5f22?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
			filmImg: 'http://120.24.170.202:24/image/情圣.jpg',
			filmRole: '周星星',
			filmGrade: '8.5',
			filmYear: '1991',
			filmVideo: 'https://www.baidu.com/'
		},
		{
			filmId: '031',
			filmName: '审死官',
			filmImg: 'https://pic9.iqiyipic.com/image/20200214/d2/49/v_50064083_m_601_m5_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '9.0',
			filmYear: '1992',
			filmVideo:
				'http://m.iqiyi.com/v_19rrjd3r7k.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '032',
			filmName: '望夫成龙',
			filmImg: 'https://pic8.iqiyipic.com/image/20190808/ef/ee/v_62644744_m_601_m4_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.5',
			filmYear: '1990',
			filmVideo: 'http://m.iqiyi.com/v_19rrho3hos.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '033',
			filmName: '风雨同路',
			filmImg: 'https://pic1.iqiyipic.com/image/20190808/73/e2/v_50269631_m_601_m8_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.5',
			filmYear: '1990',
			filmVideo: 'http://m.iqiyi.com/v_19rrc2k5pw.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '034',
			filmName: '最佳女婿',
			filmImg: 'https://pic6.iqiyipic.com/image/20190808/dd/e4/v_50275079_m_601_m6_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.5',
			filmYear: '1988',
			filmVideo: 'http://m.iqiyi.com/v_19rrmq8v0w.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		},
		{
			filmId: '035',
			filmName: '赌侠',
			filmImg: 'https://pic1.iqiyipic.com/image/20190808/2b/c6/v_50003475_m_601_m10_180_236.jpg',
			filmRole: '周星星',
			filmGrade: '8.5',
			filmYear: '1990',
			filmVideo:
				'http://m.iqiyi.com/v_19rrluyprs.html?social_platform=link&p1=2_22_221&_frd=670kEIoKru%2FUSKoHc7YDZo2AcrGG2yU301RNNgT1tTBECsy%2FuiYSE9Mq4BCAvPLl9%2BkcbMPpHPvF2JiC2FGUFHZBwkq9fEcJNqexOWgGS28%3D'
		}
	],
	note: '此行动是为了收藏我心目中最爱看的电影主演——星爷的电影，因此收录星爷经典的电影。另影片评分存在一些主观因素。'
};

export default filmsData1;
