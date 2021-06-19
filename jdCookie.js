/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'shshshfpa=d063f011-a439-fd04-d681-c8b9ef34294f-1567048929;shshshfpb=yUBAbd8%2FkzFQKGHwfuwIxrQ%3D%3D;TrackID=1tgoCH2MRCB8gH1IVD0T6U3PlMaPh15HmTR6Qh1w4bWp7bFlyh3CRNUq2Vf5knN3RvbNmdx22JChOMhEI2erxmN0a_KPzpYYDY4-vZ35jTh4;webp=1;visitkey=25285678551610967;mba_muid=1620807894456567659570;whwswswws=;qd_uid=KOLE197K-DBUQHO3KNZFRLYKDPZDA;qd_fs=1620819420895;qd_ls=1620819420895;qd_ts=1620819420895;qd_sq=1;mobilev=html5;__jdv=122270672%7Cgithub.com%7C-%7Creferral%7C-%7C1622449690993;downloadAppPlugIn_downCloseDate=1622449698235_86400000;cid=9;sc_width=400;__wga=1622986632842.1622986632842.1622462201922.1604317806444.1.4;__jdc=122270672;__jda=122270672.1620807894456567659570.1620807894.1623040589.1623400699.13;wxa_level=1;retina=1;jxsid=16234007207635257523;autoOpenApp_downCloseDate_auto=1623400721877_10800000;shshshfp=c7e8bc4209af1cfcaf20a3376b244543;shshshsID=4481af95c073f62579ec983fff594116_1_1623400725632;3AB9D23F7A4B3C9B=EMZ3LYWTYQ27RAZ7HDZFROQWGOPD4MHE74DTB4EUBOKWFLQDJCVDDSHRYAIKUWFFB6QLLBCKUEFUMOUAR5WUQUNJQI;jcap_dvzw_fp=6GYwwB_0Hg-prBbMhyxKHdBJYxNGwCkbt1QnVINTP_RwiQnsWiXsyJ-yyR2BYujk-CtOhw==;TrackerID=mB3s-KDlVMLGDVZXG64OLenFXRCy_lF9G1wszGHGOAZUYrQiEpazRZnAPYYIUNnK8CvYZ8MsU2xWGhU9ZJZioRSqzwb6GOU7J3sz4QUMRypn8CGeJB7ASUX9a3mhOcAn-YzXwfFxhwDh0XO3FXckCA;pt_key=AAJgwyEsADBaxECecFd88vpSW5xyfm0mdTBvuOXlYJDODHCm1dKg2uPByfuztFDb4-UnZnup988;pt_pin=15907291311_p;pt_token=0r6egpf5;pwdt_id=15907291311_p;sfstoken=tk01md57c1cc3a8sMngxeDJjRVlDhUB3jfcBiQxywpb19M6WwP0Kwyi6gT2IJoU6oOu6czb2EQKAGnyhZikNtx48IHf3;wqmnx1=MDEyNjM2MnRoLm0vbWllPT0yNTlpLm5uIE41ZDhwSzdLIEcgZS43aWYzM2Y0ZkJLWUNGRigl;__jdb=122270672.5.1620807894456567659570|13.1623400699;mba_sid=1623400699100731125067735376.5'
]
// 判断环境变量里面是否有京东ck
if ( process.env.JD_COOKIE ) {
  if ( process.env.JD_COOKIE.indexOf( '&' ) > -1 ) {
    CookieJDs = process.env.JD_COOKIE.split( '&' );
  } else if ( process.env.JD_COOKIE.indexOf( '\n' ) > -1 ) {
    CookieJDs = process.env.JD_COOKIE.split( '\n' );
  } else {
    CookieJDs = [ process.env.JD_COOKIE ];
  }
}
if ( JSON.stringify( process.env ).indexOf( 'GITHUB' ) > -1 ) {
  console.log( `请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n` );
  !( async () => {
    await require( './sendNotify' ).sendNotify( '提醒', `请勿使用github action、滥用github资源会封我仓库以及账号` )
    await process.exit( 0 );
  } )()
}
CookieJDs = [ ...new Set( CookieJDs.filter( item => !!item ) ) ]
console.log( `\n====================共${ CookieJDs.length }个京东账号Cookie=========\n` );
console.log( `==================脚本执行- 北京时间(UTC+8)：${ new Date( new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000 ).toLocaleString() }=====================\n` )
if ( process.env.JD_DEBUG && process.env.JD_DEBUG === 'false' ) console.log = () => { };
for ( let i = 0; i < CookieJDs.length; i++ ) {
  if ( !CookieJDs[ i ].match( /pt_pin=(.+?);/ ) || !CookieJDs[ i ].match( /pt_key=(.+?);/ ) ) console.log( `\n提示:京东cookie 【${ CookieJDs[ i ] }】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n` );
  const index = ( i + 1 === 1 ) ? '' : ( i + 1 );
  exports[ 'CookieJD' + index ] = CookieJDs[ i ].trim();
}
