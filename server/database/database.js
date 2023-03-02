import mysql from "mysql2";

export const db = mysql.createPool({
  host: "flow-project.cwaf0zkq6eam.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "flowproject",
  database: "flow",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
});
// let data = `$$$^임시 파일
// aac^MPEG-2, 어디밴스드 오디오 코딩 파일
// ac3^AC3, 오디오 파일
// ace^ACE Archiver 압축 파일
// acf^마이크로소프트 에이전트, HTTP 문자 파일
// acl^코렐 드로우 6, 키보드 가속기 파일
// acm^윈도우 시스템 디렉토리 파일
// acm^Fallout 1,2, Baulder's Gate, 인터플레이 압축 사운드 파일
// acm^Dynamic Link Library (DLL)
// acs^마이크로소프트 에이전트, 문자 구조의 저장 파일
// ads^GNAT, Ada source text specification
// ahq^AudioHQ 플러그인 모튤
// ai^어도비 일러스트레이터 파일
// ai^코렐 트레이스 드로잉
// aif^Audio Interchange File, 실리콘그래픽스와 매킨토시의 응용프로그램에서 사용되는 사운드파일 형식
// aiff^Audio Interchange File, 실리콘그래픽스와 매킨토시의 응용프로그램에서 사용되는 사운드파일 형식
// ais^이미지 순서 파일
// ACDSee^이미지 순서 파일
// albm^HP Photosmart, 사진 출력용 앨범 파일
// alz^이스트소프트 -알집, 압축 파일
// app^Centura Team Developer, Normal mode 애플리케이션 파일
// app^심포니, 애드인 애플리케이션
// app^마이크로소프트 비주얼 폭스프로, 생성된 애플리케이션 또는 활성화된 문서
// app^dBase, 애플리케이션 생성기 객체
// app^DR-DOS, 실행 애플리케이션
// app^폭스프로, 생성된 애플리케이션
// apr^ArcView 프로젝트 파일
// apr^Employee Appraiser 퍼포먼스 리뷰 파일
// apr^로터스 어프로치 97 뷰 파일
// arc^LH ARC (old version) 압축 아카이브
// arc^SQUASH 압축 아카이브
// arj^Robert Jung ARJ 압축 아카이브
// art^AOL, Johnson-Grace 압축 파일
// asd^마이크로소프트, Word 자동 백업 파일
// asf^마이크로소프트 Advanced Streaming Format 파일
// asm^어셈블러 파일, 컴파일되지 않은 어셈블리어 파일
// asp^Active Server Page 파일 (마이크로소프 ASP 스크립트를 포함하고 있는 HTML 파일)
// asv^자동저장 파일 (Auto Save File)
// asx^Cheyenne 백업 스크립트
// asx^마이크로소프트 Advanced Streaming Redirector 파일
// asx^비디오 파일
// att^AT&T 그룹 4 비트맵
// au^Sun/NeXT/DEC/UNIX 등에서 쓰이는 사운드 파일
// avi^윈도우즈 무비를 위한 마이크로소프트 오디오 및 비디오 파일
// awd^FaxView, 문서 이미지
// bak^백업파일
// bas^비주얼 베이직 모듈 파일
// bat^MS-DOS 일괄처리 파일
// bgdb^영산정보통신 배움닷컴용 GVA, 인증기능을 가진 강의 파일 (배움닷컴에서만 서비스받을 수 있음)
// bin^바이너리 파일
// bkf^마이크로소프트 백업 파일
// bmf^Corel, 갤러리 파일
// bmp^윈도우 또는 OS/2의 비트맵 그래픽 파일
// bnk^Electronic Arts 사운드 효과 뱅크 파일
// bnk^애드립의 악기 뱅크 파일
// btr^Btrieve 5.1, 데이터베이스 파일
// c^C 언어 소스 코드
// cab^마이크로소프트 캐비넷 파일 (소프트웨어 배포를 위해 압축된 프로그램 파일들)
// cad^소프트데스크 드라픽스 캐드 파일
// cal^윈도우 캘린더 파일
// cam^카시오(Casio) 카메라 파일
// cap^이야기97용 갈무리 파일
// cat^dBase, 카탈로그 파일
// cbl^RM-COBOL, 원시코드 파일
// cc^C++ 언어 소스 코드
// cca^cc:mail 아카이브 파일
// cct^Macromedia Director, 쇽웨이브 캐스트 파일
// cda^CD 오디오 트랙
// cdb^Pocket Access 데이터 베이스
// cdf^마이크로소프트 채널 정의 형식 파일
// cdr^코렐 드로우 파일
// cdr^오디오 CD (공 CD) 데이터 파일
// cdt^코렐 드로우 템플릿 파일
// cdx^코렐 드로우 압축 파일
// cer^보안 인증서
// cfg^구성 파일
// cfm^ColdFusion, 템플릿
// cfm^비주얼 dBASE, 윈도우 커스토머 폼
// cfm^코렐. 폰트마스터 파일
// cgi^CGI 스크립트 파일
// cgm^컴퓨터 그래픽 메타파일
// chk^도스에서 CHKDSK를 써서 복원된 파일
// chm^Compiled HTML 파일
// class^자바 클래스 파일
// clp^윈도우 클립보드 파일
// cls^비주얼베이직 클래스 모듈
// cmd^Windows NT (OS의 .BAT 파일과 비슷함) 및 OS/2의 명령 파일
// cnt^Windows 또는 기타 시스템, 도움말 색인 등의 목적으로 사용되는 콘텐츠 파일
// cnv^Word for Windows, 데이터 변환 지원 파일
// cnv^WordPerfect for Windows, 임시 파일
// cnv^WS_FTP Pro, 변환 파일
// cob^COBOL 소스 코드
// com^MS-DOS용 실행 파일
// cpl^윈도우 제어판 파일
// cpp^비주얼 C/C++ 소스 파일
// cpx^Corel Presentation Exchange, 압축된 도면 파일
// crc^RZSplit, 분할된 파일에 관한 정보
// crw^Canon, Raw Format
// csd^드림투리얼리티, 통합 문서 포맷 파일 (Compact Shared Document)
// css^Cascading Style Sheet file (MIME)
// csv^Comma-separated values file
// ctb^Autodesk, AutoCAD 색상에 따른 플롯 스타일 표
// cue^마이크로소프트 Cue Cards 데이터
// cur^윈도우 커서
// cxb^코믹구루, 만화 이미지 파일
// cxx^C++ 소스코드 파일
// dat^데이터 파일, 어떤 종류의 MPEG에서는 확장자가 DAT로 되어 있는 경우도 있음
// dbf^dBase 파일
// dbf^Oracle 8.1.x 테이블공간 파일
// dbi^Borland, 데이터베이스 탐색 정보
// dbk^dBase 데이터베이스 백업
// dbx^Outlook Express 5, 메일 저장 파일
// dcr^쇽웨이브 파일
// dcu^델파이 컴파일드 유니트
// dft^BullsEye 스타일 시트
// dft^Metalix, cncKad2002 Drafting Tool
// dgn^Microstation95 CAD 도면
// dib^장치 독립적인 비트맵 (Device-independent bitmap)
// dir^매크로미디어 디렉터 파일
// dir^ProComm Plus 다이얼링 디렉토리
// dll^Dynamic Link Library
// dlg^C++, 다이얼로그 스크립트
// dmp^화면이나 메모리의 덤프 파일
// doc^마이크로소프트 워드 파일
// dot^마이크로소프트 서식 파일
// dpr^델파이 프로젝트 파일
// drv^드라이버 파일
// drw^Micrografx 벡터 그래픽 파일
// drw^로터스 프리랜스 이미지
// drw^Pro/E 드로잉
// dsc^Description 파일
// dsc^오라클, 디스카드 파일
// dsf^Micrografx Designer v7.x
// dsf^Delusion, 디지털 사운드 파일
// dsn^ODBC 데이터 소스
// dsp^마이크로소프트 디벨롭퍼 스튜디오, 프로젝트 파일
// dsp^시그너춰, 디스플레이 매개변수들
// dsp^닥터 할로, 그래픽 디스플레이 드라이버
// dst^C++/Delphi 데스크탑 설정치
// dst^타지마 (Tajima) 컴퓨터자수기 파일
// dsw^Borland C++ 4.5, 데스크탑 설정치
// dsw^마이크로소프트 디벨롭퍼 스튜디오, 작업공간 파일
// dtd^SGML의 문서형식정의(DFD) 파일
// dun^마이크로소프트 윈도우 95/98, 다이얼업 네트워킹 파일
// dwf^Autodesk, 벡터 그래픽
// dwf^마이크로소프트 WHIP autoCAD reader, 도면 웹 파일
// dwg^오토캐드 파일
// dwt^드림위버 템플릿 파일
// dxf^도면 교환 (Drawing Interchange (eXchange)) 형식, 바이너리 DWG 형식의 텍스트 표현
// dxr^디렉터 무비 파일 (편집불가)
// ear^자바 엔터프라이즈 애플리케이션 패키징 유니트
// ebs^WindowsXP 스캐너 파일
// ebs^Rational, Rose 98 스크립트 소스
// efx^Everex EFax, 팩스 문서
// efx^Efax Reader, 팩스 문서
// emf^Enhanced Windows Metafile
// eml^마이크로소프트 아웃룩 익스프레스, 메일 메시지 파일 (MIME RFC 822)
// enc^Lotus 1-2-3 -uuencode, Encoded file -UUENCODEd 파일
// enc^Encore, 음악 파일
// env^WOPR, Enveloper Macro
// env^Microsoft WordPerfect for Windows, 환경 파일
// eps^캡슐화된 포스트스크립트 이미지
// er1^ERWin 파일
// erx^ERWin 파일
// esp^포스트스크립트 프린터를 위해 설계된 정보를 담고 있는 파일들
// etf^Enriched Text File
// evt^이벤트 로그 (마이크로소프트 윈도우NT, 2000)
// exe^실행 파일
// exp^저장된 대화 (ICQ에서)
// ext^WS_FTP PRO, ASCII 이진전송 파일
// f^FORTRAN 파일
// f^FREEZE 압축파일 아카이브
// fcd^가상 CD-ROM 파일
// fcd^FastCAD/EasyCAD 출력 파일
// ffa^마이크로소프트 find fast 파일
// fla^플래시 무비 파일
// fli^오토데스크의 FLIC 애니메이션
// flm^오토캐드, 필름 롤
// flx^DataFlex, 컴파일된 바이너리 파일
// fmg^FreeMarkets 그래픽 브라우저
// fnt^이야기97용 글꼴 파일
// fon^시스템 글꼴 파일
// for^FORTRAN 소스코드
// frm^폼(form) 파일
// fxr^WinFax 수신문서 (TIFF 형식)
// g^APPLAUSE, 데이터 차트
// g723^가공하지 않은 CCITT G.723 3 또는 5 비트 ADPCM 형식의 데이터
// gal^이야기, 갈무리 파일
// gdb^영산정보통신 GVA 및 GVA2000, 압축된 강의 파일
// gdb^InterBase 데이터베이스 파일
// gid^윈도우95 글로벌 인덱스
// gif^컴퓨서브 그래픽 파일
// gsp^Gnuzip, Zip 파일
// gul^훈민정음 파일
// gz^유닉스 gzip 압축 파일
// h^C 프로그램 헤더 파일
// h30^한글 워디안, 한글97 문서를 한글 워디안으로 불러왔을 때 생기는 백업 파일
// hdr^한그림97, 그림 파일
// hdr^Pc-File+, 데이터베이스 헤더 파일
// hdr^Egret, 데이터 파일
// hdr^ProComm Plus, 메시지 헤더 텍스트
// hdr^1st Reader, 메시지 헤더 텍스트
// hem^AnyEQ 수식 매크로 파일
// hft^아래아한글 글꼴 파일
// hgl^HP Graphics Language, 도면 파일
// hhp^ProComm Plus, 원격 사용자들을 위한 도움말 정보
// hlp^도움말 파일
// hma^한컴 글맵시 파일
// hml^HWPML(Hangul Word Processor Markup Language) 파일
// hnt^힌트 파일. 게임 등에서 자주 사용된다.
// hp^THOR 데이터베이스, 제1 해시 파일
// hp^HP/GL, HP 프린터 또는 플로터 출력용 프린트 파일
// hpt^한컴 슬라이드 파일
// hsm^한컴 이지샘 파일
// hst^(일반적으로) 히스토리 파일
// hta^97 글맵시 파일
// hta^시스템 레지스트리를 갱신하게 위해 바이러스에 의해 사용되는 HTML 파일
// htm^하이퍼텍스트 문서
// html^하이퍼텍스트 문서
// htx^확장 HTML, 템플릿 파일
// hwd^Hollywood, 프레젠테이션
// hwp^아래아한글 파일
// hwt^아래아한글 서식 파일
// icm^Image Color Matching 프로필
// icn^아이콘 소스코드
// ico^아이콘 파일
// idx^Outlook Express 4, 메일 저장 파일
// iff^Interchange file, (Amiga ILBM)
// iff^Image (Sun TAAC/SDSC Image Tool)
// igs^CAD 오버레이 파일
// img^GEM, 이미지 파일
// img^Ventura Publisher, 비트맵 그래픽 파일
// inc^Include 파일 (어셈블러 언어 또는 Active Server)
// indd^Adobe, Indesign
// inf^설치정보 파일
// ini^초기화 파일, 환경설정 파일
// ipx^Interactive Pictures Corporation, AV 파일
// iso^ISO 9660 CD-ROM 파일시스템 표준에 기반을 둔, CD-ROM 상의 파일 목록
// isu^InstallShield, 언인스톨 스크립트
// j6i^Ricoh 디지털 카메라 파일
// jar^자바 아카이브 (애플릿이나 관련 파일들을 위한 압축 파일)
// java^자바 소스코드
// jnb^Sigma Plot 5, Workbook 파일
// jpe^JPEG 이미지
// jpeg^JPEG 비트맵 그래픽 파일
// jpg^JPEG 비트맵 그래픽 파일
// js^자바스크립트 소스 파일
// lan^NetWare, Loadable module (LAN DLL)
// lbm^비트맵 (DeluxePaint)
// lbm^Linear Bitmap graphics (XLib)
// lcd^CDSpace, CD 이미지 파일
// ldif^주소록 교환 형식
// lgc^윈도우 애플리케이션 로그 파일
// lha^LZH 파일의 또다른 확장자명
// lib^라이브러리
// lnk^윈도우 바로가기 파일
// lod^로드 파일
// log^로그 파일
// lzh^LH ARC 압축 파일
// lwd^LotusWorks, 텍스트 문서 파일
// m3u^MPEG URL (MIME 오디오 파일) (MP3 재생 목록)
// mac^이미지 (MacPaint)
// mak^비주얼 베이직 또는 비주얼 C++ 프로젝트 파일
// max^Kinetix 3D Studio Max, 3D 장면
// max^Paperport, 문서 파일
// max^OrCad, 레이아웃 파일
// max^MAX, 소스코드
// mbx^Outlook Express 4, 메일 저장 파일
// mcc^MathCad, 구성 파일
// mcd^MathCad, 문서 파일
// mcf^MathCad, 글꼴 파일
// mcp^Metrowerks CodeWarrior 프로젝트 파일
// mcp^Capsule 애플리케이션 스크립트
// mcp^Mathcad 프린터 드라이버
// mcr^DataCad, 키보드 매크로 파일
// mdb^마이크로소프트 액세스 데이터베이스
// mdf^마이크로소프트, MS-SQL Master 데이터베이스 파일
// mdi^마이크로소프트, 오피스 문서 이미지 파일
// mdl^CA-Compete!, 스프레드시트
// mdl^Digital Trakker, 음악 모듈
// mdl^3D Design Plus, 모델
// mdl^Quake, 모델 파일
// mdl^Rational Rose, 모델 파일 요소
// mht^마이크로소프트, MHTML 문서
// mhtm^MHTML 문서 (MIME)
// mhtml^MHTML 문서 (MIME)
// mi^Cocreate ME10 데이터 파일
// mi^잡다한(Miscellaneous) 파일들의 일반적인 총칭
// mid^미디 음악 파일
// mix^Power C, 오브젝트 파일
// mix^마이크로소프트 PhotoDraw 2000, 그림 파일
// mix^마이크로소프트 Picture-It!, 그림 파일
// mix^Command & Conquer, 패키지 파일
// mix^Westwood Studios, 리소스 아카이브
// mmp^MindMapor, MindManager 파일
// mmp^Bravado, MMP 출력 비디오
// model^CATIA, 도면 파일
// mov^QuickTime for Windows 무비 파일
// mp2^MPEG Audio Layer 2 파일 (MIME 비디오 파일)
// mp3^MPEG Audio Layer 3 로 압축된 음악 파일
// mp4^MPEG-4 비디오 파일
// mpeg^MPEG 동영상 파일
// mpf^MP3 Folders, 폴더 파일
// mpg^MPEG 동영상 파일
// mpp^마이크로소프트 프로젝트, 프로젝트 파일
// mpp^CAD 도면 파일
// mpt^마이크로소프트 프로젝트, 템플릿 파일
// mrc^서지 데이터 (Machine-Readable Cataloging records)
// mrk^Informative Graphics, 마크업 파일
// msc^마이크로소프트 윈도우 2000, Common Console Document
// msg^마이크로소프트, 전자우편 메시지
// msi^마이크로소프트 윈도우 인스톨러 패키지
// mus^Oak Road Systems, WHISTLE 데이터 파일
// nas^NASTRAN 파일
// nfo^Folio, Infobase 파일
// nil^Norton, 아이콘 라이브러리 파일
// nls^Uniscape, 현지화를 위해 사용된 국어 지원 파일
// nod^Netobject Fusion, 파일
// nrg^Nero, ISO 9660 이미지 (CD-ROM 데이터용 순수 ISO 9660 이미지와 동일)
// nxl^한컴 넥셀 파일
// obd^마이크로소프트 오피스, 바인더
// obz^마이크로소프트 오피스, 바인더 마법사
// ocx^마이크로소프트 OLE custom control
// oft^마이크로소프트 아웃룩, 서식 파일
// ogg^Vorbis, Vorbis 오디오 파일
// olb^마이크로소프트 OLE, 오브젝트 라이브러리
// old^백업 파일 들의 일반적인 총칭
// or3^로터스 오거나이저 97 파일
// ost^마이크로소프트 아웃룩, 오프라인 파일
// ovl^오버레이 파일
// ovr^오버레이 파일
// p7m^S/MIME, 암호화와 서명, 불명료한 서명이나 일반적인 서명된 문서
// pab^마이크로소프트, 개인 주소록
// pam^Tonline, Ob4hbci 스마트 업데이트 파일
// pak^PAK, 압축 아카이브 파일
// pas^볼랜드 파스칼, 소스코드 파일
// pbk^파일마이크로소프트 폰북
// pbr^파워빌더 자원 파일
// pcd^코닥 Photo-CD 이미지
// pcl^HP 프린터 제어 언어 파일
// pco^Pro*COBOL, 원시파일
// pct^매킨토시 PICT drawing
// pcx^ZSoft PC 페인트브로쉬 비트맵 파일
// pdf^어도비 애크로뱃 문서 형식 (Portable Document Format)
// pdx^ProCite, 데이터베이스 색인 파일
// pg^2D Graphic
// pgd^PGPdisk, 볼륨 파일
// pgp^Pretty Good Privacy, 암호화된 파일
// php^PHP 스크립트가 들어있는 HTML 페이지
// php3^PHP 스크립트가 들어있는 HTML 페이지
// phtml^PHP 스크립트가 들어있는 HTML 페이지
// pic^PC Paint 비트맵
// pic^Lotus picture
// pic^매킨토시 PICT drawing
// pict^매킨토시 PICT 이미지 파일
// pif^프로그램 정보 파일(Program Information File)
// pjt^마이크로소프트 비주얼 폭스프로(Visual FoxPro), 프로젝트 테이블 메모 파일
// pkg^P-CAD, 데이터베이스
// pl^Perl 프로그램
// pls^윈앰프, MPEG 재생목록 파일
// plt^HPGL Plotter, 도면 파일
// plt^AutoCAD, 플롯 도면
// plt^(일반적으로) 팔레트 파일
// pm4^페이지메이커 4.0 문서 파일
// pmp^Sony 디지털 카메라 파일
// png^Portable Network Graphics 비트맵 그래픽 파일
// pot^마이크로소프트 파워포인트 서식 파일
// ppd^Adobe Acrobat v.4.0, 포스트스크립트 프린터 정의 파일 규격
// pps^마이크로소프트 파워포인트 슬라이드 쇼
// pps^Personal Producer 스토리 보드
// ppt^마이크로소프트 파워포인트 파일
// ppv^Windows CE, 포켓 파워포인트 파일
// prf^마이크로소프트 윈도우, 시스템 파일
// prf^매크로미디어 디렉터, 설정 파일
// prf^Improces-Fastgraph, Pixel Run 형식 그래픽
// prf^dBase IV, 프린터 드라이버
// prf^Profiler, 출력 파일
// prl^Perl 스크립트
// prn^프린트 테이블 (빈칸으로 구분된 텍스트)
// prn^데이터 캐드, 윈도우 프린터 파일
// prn^시그너처, 프린터 드라이버
// prn^로터스123 심포니, 텍스트 파일
// prt^CADKEY, 부품 파일
// prz^로터스 프리랜스97, 그래픽 파일
// ps^포스트스크립트 형식의 출력용 파일
// psd^어도비 포토샵 비트맵 파일
// psp^페인트샵 프로 이미지 파일
// pst^마이크로소프트 아웃룩, 개인 폴더 파일
// pub^Ventura Publisher, Publication 파일
// pub^Microsoft Publisher, 문서 파일
// pub^PGP, 공개키 링 파일
// pwi^Windows CE, 포켓 워드 파일
// pwl^윈도우95/98 패스워드 목록 파일
// pxl^Windows CE, 포켓 엑셀 파일
// pxr^Pixar, Pixar 이미지 형식
// pxt^마이크로소프트, 포켓 엑셀 템플릿
// qic^마이크로소프트, 백업 파일 (Quarter Inch Cassette)
// qrp^Centura, 보고서 작성자 파일
// qtx^QuickTime, 이미지 파일
// ra^리얼오디오 소리 파일
// ram^리얼오디오 메타 파일
// rar^RAR 압축 파일
// raw^Raw File Format (비트맵)
// rbf^Rbase, 데이터 파일
// rbk^한컴 슬라이드 서식
// rc^마이크로소프트 C/C++, 리소스 스크립트
// rc^Borland C++, 리소스 스크립트
// rc^emacs, 구성 파일
// rcp^Recomposer's MIDI 시퀀서 음악 파일
// rdo^Xerox, Document Assembler Metafile
// reg^윈도우 레지스트리 파일
// res^마이크로소프트 Visual C++, 리소스 파일
// rle^Run-Length Encoded bitmap
// rm^리얼오디오 비디오 파일
// rmi^MIDI 음악 파일
// rol^FM 음악 Adlib 음악파일 (Roland)
// rom^카트리지 기반의 홈 비디오 게임 에뮬레이터 파일
// rpm^레드햇 리눅스의 패키지 매니저 파일
// rpt^크리스탈 리포트 파일 (및 마이크로소프트 비주얼베이직의 서브셋)
// rtf^Rich Text Format 문서
// s^유닉스, 어셈블러 원시 코드 파일
// s3m^Scream Tracker v 3.0, 16 채널 음악 파일
// sat^ACIS, Solid 모델
// sav^저장된 게임 파일 (일반 명칭)
// sbd^Storyboard Editor, 스토리보드 데이터 파일
// sbd^Superbase, 데이터 정의 파일
// sbl^Shockwave 플래시 오브젝트
// scc^마이크로소프트, 소스 세이프 파일
// scr^화면보호기 파일
// sd2^SAS 데이터베이스 (윈도우95/NT OS/2, 매킨토시)
// sea^자체적으로 압축이 풀리는 아카이브 파일 (매킨토시 파일들을 위해 Stuffit에서 사용됨)
// sfx^RAR 자체-풀림 아카이브
// sgm^Standard Generalized Markup Language 파일
// shtml^Server Side Includes (SSI)가 포함되어 있는 HTML 파일
// sh3^하바드 그래픽스 프레젠테이션 파일
// sib^Sibelius, 음악 파일
// sit^Stuffit, 압축된 매킨토시 아카이브 파일
// smi^로터스 CC:Mail, 스마트 아이콘
// snd^NeXT, 사운드 파일
// snd^매킨토시, 사운드 리소스 파일
// sng^롤랜드, 음악 데이터 파일
// snm^넷스케이프, 메일 폴더 인덱스
// snp^Computer Eyes, 출력 비디오 파일
// spi^Siemens Scanner, 그래픽 파일
// spi^Phillips Scanner, 그래픽 파일
// spl^Macromedia, 플래쉬용 무비 파일
// step^ISO-10303 STEP 제품 데이터
// stp^어도비, Acrobat Exchange 플러그인
// stp^ISO-10303 STEP 제품 데이터
// stp^DART Pro, DART Pro 98 시스템 설정치
// sty^아래아한글 스타일 파일
// sub^Divx 서브타이틀
// sur^AutoData Systems, Survey Plus 2000 Survey File
// svg^W3C, 스케일러블 벡터 그래픽스 파일 (인터넷 멀티미디어 파일 교환용)
// swa^Macromedia Director, 쇽웨이브 오디오 파일
// swf^쇽웨이브 플래시 객체
// swp^DOS, 스왑파일
// syd^QEMM, 기동 파일 백업
// sys^시스템 파일
// tar^테이프 아카이브
// tbl^Pagemaker TableEditor, 그래픽 형식
// tbl^OS/2, 표 형식의 값들
// tel^이야기97용 전화걸기 정보 파일
// tga^Targa 비트맵
// tgz^유닉스 Gzip/테이프 아카이브
// thm^비디오 썸네일 파일
// tif^Tag Image File Format 비트맵 파일
// tiff^Tag Image File Format 비트맵 파일
// tlb^마이크로소프트 OLE type 라이브러리 파일
// tlb^버블 에디터 참고 테이블
// tlb^VAX 텍스트 라이브러리
// tlb^비주얼 C++ Type 라이브러리
// tmp^윈도우 임시 파일
// trm^윈도우 터미널 파일
// trx^I-Cite, 익스포트 파일
// tsd^trueSpace 4, 데모 파일
// tsk^Pocket PC, 스킨 파일 (테마)
// tsm^OS/2용 Turbo Assembler, 설명서 파일
// ttc^트루타입 컬렉션 파일
// ttf^트루타입 글꼴
// txt^아스키 텍스트
// tzz^탑정보통신 밤톨이 압축파일 (분할 압축시 두번째 파일부터는 002, 003 ... 등 숫자가 사용됨)
// ukx^Epic Games, Inc., Unreal Tournament 2003 Animation
// urh^훈넷 슬라이더, 이미지 주소 파일
// url^인터넷 바로가기 파일
// uu^UU-encode된 파일
// uue^UU-encode된 파일
// vbg^비주얼베이직, 그룹 프로젝트
// vbp^비주얼베이직, 프로젝트
// vbr^비주얼베이직, Remote automated registration 파일
// vbs^비주얼베이직, 스크립트 파일
// vbw^비주얼베이직, Workspace 파일
// vbx^비주얼베이직, custom control 파일
// vcd^Virtual CD-ROM
// vcf^넷스케이프, 가상 카드 파일
// vct^마이크로소프트 폭스프로(FoxPro) 클래스 라이브러리
// vcx^마이크로소프트 폭스프로(FoxPro) 클래스 라이브러리
// vob^Digital Video Disk, 현재 DVD에서 사용되는 암호화된 비디오 및 오디오 파일들
// voc^크리에이티브 랩스 사운드 블라스터 오디오 파일
// voc^Quartet 오디오 파일
// vqe^야마하 사운드 VQ Locator 파일
// vqf^야마하 사운드 VQ 파일 (새로운 표준이 될 가능성이 있는 후보)
// vql^야마하 사운드 VQ Locator 파일
// vrml^VRML 파일
// vsd^비지오 드로잉 파일
// vss^비지오 스텐실 파일
// vue^dBase IV 뷰 파일
// vue^마이크로소프트 폭스프로 뷰 파일
// vxd^마이크로소프트 가상 장치 드라이버
// w44^dBase 임시 파일
// wab^Outlook 주소록
// wav^윈도우 웨이브 파일
// wcm^WordPerfect 매크로
// wej^나모 웹에디터, 프로젝트 파일
// wfx^윈도우 팩스 파일
// wi^코렐, Wavelet 압축 비트맵 파일
// wks^Microsoft Works, 문서
// wma^마이크로소프트 Windows Media 오디오 파일 (ASF 형식으로 변경 가능)
// wmf^윈도우 메타 파일
// wmv^마이크로소프트, 윈도우 미디어 파일
// wp4^WordPerfect 4 문서
// wp5^WordPerfect 5 문서
// wp6^WordPerfect 6 문서
// wpd^WordPerfect 문서
// wpg^WordPerfect 그래픽
// wps^Microsoft Works, 텍스트 문서
// wpt^WordPerfect 템플릿
// wrl^가상현실 모델
// wq1^쿼트로프로/DOS용 스프레드시트
// wq2^쿼트로프로/버전5 스프레드시트
// wsd^WordStar, 문서파일
// wsf^Windows 스크립트 파일
// wsp^Fortran PowerStation, WorkSpace file
// wsz^WinAmp, 스킨파일
// xcf^GIMP, 이미지 파일
// xdw^제록스 DocuWorks 문서
// xlc^마이크로소프트 엑셀 차트
// xlm^마이크로소프트 매크로 파일
// xls^마이크로소프트 엑셀 파일
// xlt^마이크로소프트 엑셀 서식 파일
// xml^eXtensible Markup Language 파일
// xy^XYWrite, 텍스트 파일
// y^Amiga, Yabba 압축 아카이브
// yal^Arts & Letters 클립아트 라이브러리
// zip^Zip 압축 파일
// zoo^Zoo, 초창기의 압축 파일 형식
// 123^로터스 1-2-3 파일
// 2bp^설명없음`;
// const values = data.split("\n").map((d) => d.split("^"));
// console.log(values);
// db.query(
//   "INSERT INTO ExtensionReference (name,description) VALUES ?",
//   [values],
//   (error, results, fileds) => {
//     if (error) throw error;
//     console.log(results);
//   }
// );
