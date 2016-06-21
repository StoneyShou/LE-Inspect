function LEI() {
	this.ver = '0.1';
    // this.specialServer = 'efimd';

    // //this.baseURL = 'http://lpdevnew/training/LEI/';
    // if (typeof(lpMTagConfig)!='undefined' && lpMTagConfig.lpServer == this.specialServer) {
    //     this.baseURL = 'http://'+ this.specialServer +'/emtdebug/';
    // }
    // else {
    //     this.baseURL = 'http://lpdevnew/training/emtdebuglib/';
    // }
    
    // -- Change to use internal CSS
    // this.cssUrl = this.baseURL + 'LEI.css';
    this.css = '#LEIMainTable {\
		    background-color: #323336;\
		    padding: 0px;\
		    margin: 0px;\
		    border:none;\
			}\
			\
			#LEImainDiv table{\
				width:100%;\
			}\
			#LEIMainTitleTable{\
		    background-color: #323336;\
		    padding: 0px;\
		    margin: 0px;\
		    border:none;\
			}\
			\
			#LEIMainTable img{\
			    display: inline;\
			}\
			\
			#LEIMainTable td{\
			    padding: 0px 5px 0px 5px;\
			    margin: 0px;\
			    vertical-align:middle;\
			}\
			\
			#emtDebugTopLeft {\
			    background: transparent url(http://lpdevnew/training/emtdebuglib/images/topBarStart.png) no-repeat scroll left top;\
			    width: 6px;\
			}\
			\
			#emtDebugLogo {\
			    background: #323336 url("https://z1-a.le.liveperson.net/assets/img/100x100-sprite.png") -118px -12px no-repeat;\
			    width: 85px;\
			}\
			\
			#LEIMainTitle {\
			    background: #323336;\
			    color: #fff !important;\
			    cursor: move;\
			    font-family: "Myriad pro", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif;\
			    font-size: 12px;\
			    font-weight: bold;\
			    padding: 0px;\
			    margin: 0px;\
			    white-space: nowrap;\
			    text-align: center;\
			    vertical-align: middle; \
			}\
			\
			#LEIMainTitleTable td {\
			    padding: 0px 3px 0px 3px;\
			    margin: 0px;    \
			}\
			\
			#LEIMinimize {\
			    background: #323336;\
			    text-align: right;\
			    width: 90px;\
			    padding: 0px;\
			    margin: 0px;\
			    vertical-align:middle;\
			}\
			\
			#LEIMinimize a {\
			    cursor: pointer;\
			    vertical-align: middle;\
			    padding: 0px;\
			    margin: 0px;\
			}\
			#LEIMinimize img {\
			    padding-top: 3px;\
			    display: inline;\
			}\
			\
			#LEITopRight {\
			    background: transparent url(http://lpdevnew/training/emtdebuglib/images/topBarEnd.png) no-repeat scroll right top;\
			    padding: 0px;\
			    margin: 0px;\
			    text-align:right;\
			    width: 6px;\
			}\
			\
			/*  The main monitor window     */\
			#emtDebugMainMonitorTable {\
			    background-color: #515254;\
			    border:none;\
			    margin:0px;\
			}\
			\
			#LEIImgCloseLog {\
				width: 16px;\
				height: 16px;\
			    background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -680px -19px no-repeat;\
			    padding-top: 2px;\
			    padding-right: 2px;   \
			}\
			.LEImainTableTopRow {\
				background-color:#323336;\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px;\
			\
			    padding: 3px;\
			    border-collapse: collapse !important;\
			    border-spacing: 2px !important;\
			}\
			\
			.LEImainTableTopRow td {\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 14px;\
			\
			    padding: 3px;\
			    //border-left: 1px solid #767678;\
			    border-collapse: collapse !important;\
			    border-spacing: 2px !important;\
			    color: #fff;\
			\
			    vertical-align: middle;\
			}\
			.LEIMiniBtn {\
				width: 16px;\
				height: 16px;\
				background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -500px 0px no-repeat\
			}\
			.LEITagStatNotFound {\
				width: 16px;\
				height: 16px;\
				background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -300px 0px no-repeat\
			}\
			.LEITagStatOk {\
				width: 16px;\
				height: 16px;\
				background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -260px 0px no-repeat\
			}\
			.LEITagStatWarn {\
				width: 16px;\
				height: 16px;\
				background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -260px -40px no-repeat\
			}\
			.LEICloseBtn {\
				width: 16px;\
				height: 16px;\
				background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -680px 0px no-repeat\
			}\
			.LEIMiniWrapper{\
				float:right;\
				margin:0px 4px 0px 4px;\
			}\
			.LEIMaxBtn {\
				width: 16px;\
				height: 16px;\
				background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -500px 0px no-repeat\
			}\
			.LEImainTableTopRowAcc {\
				background-color: #FF9801;\
				color: #fff;\
			}\
			\
			.LEILable {\
				text-transform: uppercase;\
				color: #dcdcdc !important;\
				font-size: 10px !important;\
			}\
			\
			.LEIEMTDivider{\
				border-right:1px solid #767678;\
			}\
			.LEImainTableLabelRow {\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px;\
			\
				background-color:#515254 !important;\
			    padding: 1px;\
			    border-collapse: collapse !important;\
			    border-spacing: 2px !important;\
			\
			    vertical-align: middle;\
			}\
			\
			.LEImainTableLabelRow td {\
				text-transform: uppercase;\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 10px;\
			\
			    padding: 1px;\
			    background-color: #515254;\
			    color: #dcdcdc !important;\
			\
			    vertical-align: middle;\
			}\
			\
			.LEImainTableNumberRow {\
				background-color:#515254 !important;\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px;\
			\
			    padding: 3px;\
			    white-space: nowrap;\
			\
			    vertical-align: middle;\
			}\
			\
			.LEImainTableNumberRow td {\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 16px;\
			\
			    padding: 3px;\
			    white-space: nowrap;\
			    color: #fff !important;\
			\
			    vertical-align: middle;\
			}\
			\
			.emtDebugInfo {\
			    cursor: pointer;\
			}\
			\
			/* The main Log Window */\
			#LEIMainLogWindow {\
			    display: none;\
			}\
			\
			#LEILogWindow {\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px;\
			    border-top: 1px solid #767678;\
			    background-color: #323336;\
			}\
			#LEILogWindow table{\
				border-collapse:collapse;\
				border:none;\
				width: 100%;\
				text-align:left;\
			    color: #fff;\
			}\
			#LEILogWindow table tr td{\
			    color: #fff;\
			}\
			#LEILogWindow tr:nth-child(2n+1){\
				background-color: #656568;\
			}\
			#LEILogWindow tr:nth-child(2n){\
				background-color: #5A5B5E;\
			}\
			\
			#LEIMessageWindowTitle, #LEIMessageWindowCtrlPanel, #LEIMessageWindowClose{\
			    text-align: center;\
			    font-family: "Myriad pro", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif;\
			    font-size: 12px;\
			    color: #fff;\
			    font-weight: bold;\
			    background-color:#FF9801;\
			    border-bottom: 1px solid #767678; \
			}\
			\
			#LEIMessageWindowTitle {\
			    border-left: 1px solid #767678;\
			}\
			\
			#LEIMessageWindowClose {\
			    border-right: 1px solid #767678;   \
			}\
			\
			#LEIMessageWindowClose{\
			    text-align: right;\
			    padding:2px;\
			}\
			\
			.LEILogMessageDEBUG {\
			    line-height:12px;\
			    text-align:left;\
			    background-color: #515254;\
			    border: 0px;\
			    color: dcdcdc;\
			    font-family: verdana, tahoma, arial, sans-serif;\
			    white-space: nowrap;\
			    font-size: 12px;\
			}\
			\
			.LEILogMessageOK {\
			    line-height:12px;\
			    text-align:left;\
			    background-color: #515254;\
			    border: 0px;\
			    color: green;\
			    font-family: verdana, tahoma, arial, sans-serif;\
			    white-space: nowrap;\
			    font-size: 12px;\
			}\
			\
			.LEILogMessageWARN {\
			    line-height:12px;\
			    text-align:left;\
			    background-color: #515254;\
			    border: 0px;\
			    color: #FF00FF;\
			    font-family: verdana, tahoma, arial, sans-serif;\
			    white-space: nowrap;\
			    font-size: 12px;\
			}\
			\
			.LEILogMessageERROR {\
			    line-height:12px;\
			    text-align:left;\
			    background-color: #515254;\
			    border: 0px;\
			    color: red; \
			    font-family: verdana, tahoma, arial, sans-serif;\
			    white-space: nowrap;\
			    font-size: 12px;\
			}\
			\
			/*  The Status Bar */\
			#LEIMainStatusTable {\
			    vertical-align: middle;\
			    border:none;\
			    margin:0px;\
			}\
			#LEIMainStatusTable tr td{\
			    color:#fff;\
			}\
			\
			#LEIStatusLeft {\
			    background: #323336;\
			    width: 10px;\
			    padding: 0;\
			    vertical-align: middle;\
			}\
			\
			#LEIStatusImageTD {\
			    background: #323336;\
			    font-family: Arial;\
			    font-size: 12px;\
			    color: #fff !important;\
			    width: 20px;\
			    vertical-align: middle;\
			}\
			\
			#LEIStatusCenter, #LEIStatusProgress, #LEIMsgStatusLogPlayerStatus {\
			    background: #323336;\
			    color: #fff !important;\
			    font-family: Arial;\
			    font-size: 12px;\
			    padding: 0;\
			    white-space: nowrap;\
			    vertical-align: middle;\
			}\
			#LEIMainTable tbody tr{\
				background-color:#323336;\
				border:0px none #323336;\
			}\
			\
			.LEIStatusBar{\
				background-color:#323336;\
				color:#fff !important;\
			    font-family: Arial;\
			    font-size: 10px;\
			    text-align:left;\
			}\
			#LEIMsgStatusLogPlayerStatus {\
			    width: 70px;\
			    text-align: center;\
			}\
			#LEIStatusProgress {\
			    width: 20px;\
			    text-align: center;\
			    vertical-align: middle;\
			}\
			#LEIStatusTimeOnPage {\
			    vertical-align: middle;\
			}\
			\
			.LEIStatusDivider {\
			    background: #323336;\
			    width: 3px;\
			}\
			\
			#LEIImgShowTools{\
			    background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -1780px -19px no-repeat;\
				width:16px;\
				height:16px;\
			}\
			#LEIImgLog{\
			    background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -1040px -60px no-repeat;\
				width:16px;\
				height:16px;\
			}\
			.LEITimeIcon{\
			    background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -120px -80px no-repeat;\
				width:16px;\
				height:16px;\
				cursor:pointer;\
				float:left;\
				margin:0px 5px 0px 5px;\
				vertical-align:middle;\
			}\
			.LEIFilterIcon{\
			    background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -1780px -20px no-repeat;\
				width:16px;\
				height:16px;\
				float:left;\
				cursor:pointer;\
				margin:0px 5px 0px 5px;\
			}\
			.LEILogTitle{\
				vertical-align:middle;\
				height:24px;\
			}\
			.LEIStatusResize {\
			    background: transparent url(https://z1-a.le.liveperson.net/src/modules/web-agent/assets/img/16x16-sprite.png) -2160px -19px no-repeat;\
			    padding: 0 !important;\
			    text-align:right;\
			    width: 16px;\
			    cursor: se-resize;\
			}\
			\
			.LEIStatusNOResize {\
			    padding: 0;\
			    text-align:right;\
			    width: 25px;\
			    cursor: default;\
			}\
			\
			\
			/* Tools DIV and inside of it */\
			#LEIToolsDiv {\
			    position: absolute;\
			    left: 350px;\
			    width: auto;\
			    text-align:left;\
			    background-color: #323336;\
			    border: 2px groove #767678;\
			    font-family: Arial;\
			    font-size: 12px;\
			    display: none;\
			}\
			\
			#LEIToolsTable td{\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px;\
			    font-weight: bold;\
			    color: #fff !important;\
			    white-space: nowrap;\
			    cursor: pointer;\
			    padding: 0px;\
			    margin: 0px;\
			}\
			\
			#LEIToolsTable td a {\
			    text-align: left;\
			    font-family: Arial;\
			    font-weight: bold;\
			    font-size: 12px;\
			    color: #fff !important;\
			    white-space: nowrap;\
			    text-decoration : none;\
			}\
			\
			#LEIEvalInput {\
			    text-align: left;\
			    font-family: Arial;\
			    font-weight: bold;\
			    font-size: 12px !important;\
			    color: #fff !important;\
			    white-space: nowrap;\
			    height: 35px;\
			    overflow: auto;\
			}\
			\
			.LEIEvalToolBtn {\
			    text-align: center;\
			    font-family: Arial;\
			    font-weight: bold;\
			    font-size: 12px !important;\
			    color: #fff !important;\
			    white-space: nowrap;\
			    width: 90px;\
			}\
			\
			.LEIGeneralInfo th{\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px !important;\
			    font-weight: bold;\
			\
			    padding: 3px;\
			    border-bottom: 1px solid #767678;\
			    white-space: nowrap;\
			    vertical-align: top;\
			}\
			\
			.LEIGeneralInfo a{\
			    text-align: left;\
			    font-family: Arial;\
			    font-weight: bold;\
			    font-size: 12px !important;\
			    color: #fff !important;\
			    white-space: nowrap;\
			    text-decoration : underline;\
			}\
			\
			.LEIGeneralInfo td{\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px !important;\
			\
			    padding: 3px;\
			    border-bottom: 1px solid #767678;\
			    white-space: nowrap;\
			}\
			\
			.LEIHiddenTD {\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px !important;\
			\
			    padding: 3px;\
			    border-bottom: 1px solid #767678;\
			    white-space: nowrap;\
			    display: none;\
			}\
			\
			/* General CSS for error/warn and OK display */\
			.emtDebugError {\
			    cursor: pointer;\
			    background-color: red !important;\
			}\
			\
			.emtDebugWarn {\
			    cursor: pointer;\
			    background-color: yellow !important;\
			}\
			\
			.emtDebugOK{\
			    background-color: green;\
			    color: white !important;\
			}\
			\
			.emtDebugRedirectString {\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px !important; \
			    color:green;\
			}\
			\
			#LEIFilterWindow table{\
			    text-align: left;\
			    font-family: Arial;\
			    font-size: 12px !important;\
			    width : 100%;\
			    color : #fff;\
			}\
			#LEIMainLogWindowTable tbody{\
				border:none;\
			}\
			#LEIMainLogWindowTable {\
			    border: 0px;\
			    color:#fff; \
			    margin:0px;\
			}';

    this.debugCookieName = 'LP_MTAG_DEBUG_MODE';

    this.chksiteId = '';

    this.showTimeinLog = false;
    this.showLogFilter = false;
    this.activeFilter = [];

    this.msgShown = false;

    this.timerPeriod = (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.emtDebugTimerPeriod)=='undefined')?1:lpMTagConfig.emtDebugTimerPeriod;
    this.zindex = 200000;

    this.logMaxLines = (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.mtagDebugMaxLine)=='undefined')? 500:lpMTagConfig.mtagDebugMaxLine;
    if ((typeof(lpMTagConfig)!='undefined' && typeof(lpMTagConfig.emtDebugPosX)!='undefined')) {
        this.posX = lpMTagConfig.emtDebugPosX;
    }
    else {
        this.posX= 10;
    }
    this.posY = (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.emtDebugPosY)=='undefined')? 10:lpMTagConfig.emtDebugPosY;

    this.logWindowDimensionLimited = false;
    this.maxLogWindowMaxHeight = 300;
    this.maxLogWindowMaxWidth = 500;

    this.timestart = new Date();

    this.debugCookieName = 'LP_MTAG_DEBUG_MODE';
    this.debugCookieValue = 'cK1FoDtP';

    this.browser = 'IE';
    this.noValueStr = '-';

    this.log = [];
    this.logErr = [];
    this.logWarn = [];
    this.eventLog = {
        'dynButton' : {},
        'invite' : {}
    };

    this.msgSources = {'Not specified':{source: 'Not specified'}};

    this.ude = {};

    this.logShown = false;
    this.toolsShown = false;

    this.counters = {
        logLine : 0,
        logErr : 0,
        logWarn : 0,
        logOK : 0,
        connPOST : 0,
        connGET : 0
    };

    this._LOG_PLAY = 'play';
    this._LOG_STOP = 'stop';
    this._LOG_PAUSE = 'pause';
    this._LOG_TRASH = 'erase';
    this.logStatus = this._LOG_PLAY;

    this.logLineCnt =0;
    this.garbColStrCnt = 0;

    this.progressSymbols = ['-','\\','|','/'];
    this.progressIdx = 0;
    this.evalToolCnt =0;
    this.leChatProps = {
        numberOfButtons: 0,
        numberOfStickyButtons: 0,
        numberOfInvitations: 0,
        numberOfButtonsInPage: 0,
        numberOfStickyButtonsInPage: 0,
        numberOfInvitationsInPage: 0,
        ver: '',
        inPagePluginsArr: null,
        totalPluginsArr: null,
        engagementType: {
            button: 'button',
            sticky_button: 'sticky_button',
            invitation: 'invitation'
        },
        getNumberOfElements: function (type, inPage) {
            var count = 0;
            if (!lpMTagDebug.leChatRef) {
                return 0;
            }

            var arrObjs = inPage ? lpMTagDebug.leChatRef.inPagePluginsArr : lpMTagDebug.leChatRef.jsonsArr;
            if (typeof (arrObjs) != "undefined") {
                for (var id in arrObjs) {
                    if (arrObjs[id].type === type) {
                        count++;
                    }
                }
            }

            return count;
        }
    };

    this.generateHTML = function (){
        this.logCtrlPanelHTML = "<a id='LEILogPlay' href='javascript:;'><img id='LEILogPlayImg' src='"+this.baseURL+"images/pause.png' border='0'></img></a>  \
                                <a id='LEILogStop' href='javascript:;'><img id='LEILogStopImg' src='"+this.baseURL+"images/stop.png' border='0'></img></a>  \
                                <a id='LEILogErase' href='javascript:;'><img id='LEILogEraseImg' src='"+this.baseURL+"images/trashcan.png' border='0'></img></a>  \
                            ";
        this.emtHtml = "<table id='LEIMainTable' cellspacing='0' cellpadding='0' border='0'>\
                            <tbody>\
                                <tr>\
                                    <td>\
                                        <table id='LEIMainTitleTable' width='100%' height='26px' cellspacing='0' cellpadding='0' border='0'>\
                                            <tbody>\
                                                <tr>\
                                                    <!-- <td id='emtDebugTopLeft'></td> -->\
                                                    <td id='emtDebugLogo'></td>\
                                                    <td id='LEIMainTitle'>Inspect Tool ver: "+this.ver+"</td>\
                                                    <td id='LEIMinimize'>\
                                                        <!-- <a href='javascript:;' alt='Show Config' title='Show Config'>\
                                                            <img id='LEIImgConfig' border='0' src='"+this.baseURL+"images/config.gif'></img>\
                                                        </a>\
                                                       <a href='javascript:;' alt='Admin Area' title='Admin Area'>\
                                                            <img id='LEIImgAdmin' border='0' src='"+this.baseURL+"images/admin.gif'></img>\
                                                        </a>\
                                                        <a href='javascript:;' alt='Visitor Logoff' title='Visitor Logoff'>\
                                                            <img id='LEIImgLogoff' border='0' src='"+this.baseURL+"images/logout.gif'></img>\
                                                        </a> -->\
                                                        <div class='LEIMiniWrapper'>\
                                                        	<a href='javascript:;' alt='Close' title='Close'>\
                                                            <div id='LEIImgClose' class='LEICloseBtn'></div></a>\
                                                        </div>\
                                                        <div class='LEIMiniWrapper'>\
                                                        	<a href='javascript:;' alt='Minimize / Maximize' title='Minimize / Maximize'>\
                                                            <div id='LEIImgMinimize' class='LEIMiniBtn'></div></a>\
                                                        </div>\
                                                    </td>\
                                                    <!-- <td id='LEITopRight'></td> -->\
                                                </tr>\
                                            </tbody>\
                                        </table>\
                                    </td>\
                                </tr>\
                                <tr id='LEIMonitorWindow'>\
                                    <td>\
                                        <table id='emtDebugMainMonitorTable' width='100%' cellspacing='0' cellpadding='0' border='0'>\
                                            <tbody>\
                                                <tr class='LEImainTableTopRow'>\
                                                	<td></td>\
                                                    <td colspan='2' class='LEILable'>Account : </td>\
                                                    <td colspan='2' class='LEImainTableTopRowAcc LEIEMTDivider' id='LEIEMTsiteId'>"+this.noValueStr+"</td>\
                                                    <td colspan='4' id='LEIDomain' class='LEIEMTDivider'>"+this.noValueStr+"</td>\
                                                    <td colspan='2' class = 'LEILable'>Section : </td>\
                                                    <td colspan='2' id='LEIEMTSection' class='LEIEMTDivider'>"+this.noValueStr+"</td>\
                                                    <!-- <td colspan='3'>STATUS</td> -->\
                                                    <!-- <td colspan='3'>LECHAT <span id='leChatVer'></span></td> -->\
                                                    <td>\
                                                        <a id='LEIToggleLog' href='javascript:;'>\
                                                            <div id='LEIImgLog'></div>\
                                                        </a>\
                                                    </td>\
                                                     <td>\
                                                        <a id='LEIToggleTools' href='javascript:;'>\
                                                            <div id='LEIImgShowTools'></div>\
                                                        </a>\
                                                    </td>\                                               </tr>\
                                                <tr class='LEImainTableNumberRow'><td style='height:5px'></td></tr>\
                                                <tr class='LEImainTableNumberRow'>\
                                                 	<td></td>\
                                                    <td id='LEIENGcnt' colspan='2'>"+this.noValueStr+"</td>\
                                                    <td id='LEIEMBcnt' colspan='2'>"+this.noValueStr+"</td>\
                                                    <td id='LEIClosedcnt' colspan='2'>"+this.noValueStr+"</td>\
                                                    <td id='LEIENGAtt' colspan='2'>"+this.noValueStr+"</td>\
                                                    <td id='LEIStatusTimeOnPage' colspan='2'>"+this.noValueStr+"</td>\
                                                    <td id='LEIERRcnt'>"+this.noValueStr+"</td>\
                                                    <td id='LEIWARNcnt'>"+this.noValueStr+"</td>\
                                                    <td class='emtDebugOK' id='LEIOKcnt'>"+this.noValueStr+"</td>\
                                                </tr>\
                                               	<tr class='LEImainTableLabelRow'>\
                                               		<td></td>\
                                                    <td colspan='2'>Disp ENG.</td>\
                                                    <td colspan='2'>Emb ENG.</td>\
                                                    <td colspan='2'>Closed ENG.</td>\
                                                    <td colspan='2'>ENG. Att</td>\
                                                    <td colspan='2'>Time on page</td>\
                                                    <td>ERR</td>\
                                                    <td>WARN</td>\
                                                    <td>OK</td>\
                                                </tr>\
                                                <tr class='LEImainTableNumberRow'><td style='height:5px'></td></tr>\
                                            </tbody>\
                                        </table>\
                                    </td>\
                                </tr>\
                                <tr id='LEIMainLogWindow'>\
                                    <td>\
                                        <table id='LEIMainLogWindowTable' width='100%' cellspacing='0' cellpadding='0' border='0'>\
                                            <tbody>\
                                                <tr id='LEIMessageWindowHeader'>\
                                                    <td id='LEIMessageWindowTitle'></td>\
                                                    <td id='LEIMessageWindowCtrlPanel'>\
                                                        </td>\
                                                    <td id='LEIMessageWindowClose' align='right'>\
                                                        <div style='float:right'><a href='javascript:;'>\
                                                            <div id='LEIImgCloseLog' border='0'></div>\
                                                        </a></div>\
                                                    </td>\
                                                </tr>\
                                                <tr id='LEIFilterRow' style='display:none;'>\
                                                    <td  colspan='3'>\
                                                        <div id='LEIFilterWindow'>FILTER GOES HERE</div>\
                                                    </td>\
                                                </tr\
                                                <tr>\
                                                    <td  colspan='3'>\
                                                        <div id='LEILogWindow'></div>\
                                                    </td>\
                                                </tr\
                                            </tbody>\
                                        </table>\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <td>\
                                        <table id='LEIMainStatusTable' height='20px' width='100%' cellspacing='0' cellpadding='0' border='0'>\
                                            <tbody>\
                                                <tr  class='LEIStatusBar'>\
                                                    <td><div id='LEITagStatIcon' class='LEITagStatNotFound'></div></td>\
                                                    <td id='LEITagStatText'>Tag not found.</div></td>\
                                                    <td >Ver :</td>\
                                                    <td id='LEILPTAGver'>"+this.noValueStr+"</td>\
                                                    <td >/</td>\
                                                    <td id='LEITAGver'>"+this.noValueStr+"</td>\
                                                    <td >Tag Load Time:</td>\
                                                    <td id='LEILoadTime'>"+this.noValueStr+"</td>\
                                                    <td></td>\
                                                    <td></td>\
                                                    <td></td>\
                                                    <td></td>\
                                                    <td></td>\
                                                    <td class='LEIStatusDivider'></td>\
                                                    <td id='LEIStatusImageTD'><div id='LEIStatusImage'>OK</div></td>\
                                                    <td class='LEIStatusDivider'></td>\
                                                    <td id='LEIMsgStatusLogPlayerStatus'>Log Active</td>\
                                                    <td class='LEIStatusDivider'></td>\
                                                    <td class='LEIStatusDivider'></td>\
                                                    <td id='LEIStatusResize' class='LEIStatusResize'></td>\
                                                </tr>\
                                            </tbody>\
                                        </table>\
                                    </td>\
                                </tr>\
                            </tbody>\
                        </table>\
                        <div id='LEIToolsDiv'>\
                                    <table id='LEIToolsTable'> \
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEIEMTinfo' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Config Info\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEIPageinfo' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Page Info\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEIShowUDEs' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Show UDEs\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEIAdminArea' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Admin Area\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEILogOut' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Log Out\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEIMarkVisitor' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Mark Visitor\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEISwitchSnipMode' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Clear Snip\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEIStopStartEMT' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Stop EMT\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEIEval' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Eval\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='LEIAbout' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                About\
                                            </td>\
                                        </tr>\
                                    </table>\
                                </div>";

        return this.emtHtml;
    };

    this.getMaxZindex = function () {
        //console.log('getMaxZindex');
        var allElems = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all; // or test for that too
        var maxZIndex = 0;
        for (var i = 0; i < allElems.length; i++) {
            var elem = allElems[i];
            var cStyle = null;
            if (elem.currentStyle) {
                cStyle = elem.currentStyle;
            }
            else if (document.defaultView && document.defaultView.getComputedStyle) {
                cStyle = document.defaultView.getComputedStyle(elem, "");
            }
            var sNum;
            if (cStyle) {
                sNum = Number(cStyle.zIndex);
            } else {
                sNum = Number(elem.style.zIndex);
            }
            if (!isNaN(sNum)) {
                maxZIndex = Math.max(maxZIndex, sNum);
            }
        }
        return maxZIndex;
    };

    this.addCss = function () {
        // -- Change to use internal CSS
        // if(document.createStyleSheet) {
        //     document.createStyleSheet(this.cssUrl);
        // }

        // else {
        //     var styles = "@import url('"+this.cssUrl+"');";
        //     var newSS=document.createElement('link');
        //     newSS.rel='stylesheet';
        //     newSS.href='data:text/css,'+escape(styles);
        //     document.getElementsByTagName("head")[0].appendChild(newSS);
        // }
        var styles = document.createElement('style');
        styles.type = 'text/css';
        styles.appendChild(document.createTextNode(this.css));
        document.getElementsByTagName('head')[0].appendChild(styles);

    };

	this.createGenericDiv = function (id, zindex, left, top, height, width, innerHtml, cursor, onclickFunction, isVisible, extraStyle) {
        if (! document.getElementsByTagName) {
            return;
        }
        var body = document.getElementsByTagName('body');
        if (! body) {
            return;
        }
        if (this.GetObj(id)!=null) { // do not create a div if it already exists
            return;
        }

        var divE = document.createElement('div');
        divE.setAttribute('id', id);
        divE.setAttribute('name', id);
        divE.style.zIndex= zindex;
        divE.style.position = 'absolute';
        divE.style.visibility = isVisible ? 'visible' : 'hidden';
        divE.style.left = left + 'px';
        divE.style.top = top + 'px';
        if (height!=null) {
            divE.style.height = height + 'px';
        }
        if (width!=null) {
            divE.style.width = width + 'px';
        }

        //divE.style.background = '#F1F5F9';
        divE.innerHTML = innerHtml;
        divE.style.cssText = divE.style.cssText + extraStyle + 'height:'+ height +';';

        if (cursor != null) {
            divE.style.cursor = cursor;
        }
        if (onclickFunction != null) {
            divE.onclick = onclickFunction;
        }

        if (document.body.firstChild != null) {
            document.body.insertBefore(divE, document.body.firstChild);
        }
        else {
            body.appendChild(divE);
        }
    };

    this.GetObj = function(id) {
        if (document.getElementById) {
            return document.getElementById(id);
        }
        else {
            if (document.all) {
                return document.all(id);
            }
        }
    };

    this.BrowserSniff = function() {
        if (document.layers) {
            return 'NS';
        }

        var agt=navigator.userAgent.toLowerCase();
        if (document.all) {
            // But is it really IE?
            // convert all characters to lowercase to simplify testing
            var is_opera = (agt.indexOf('opera') != -1);
            var is_konq = (agt.indexOf('konqueror') != -1);
            if(is_opera) {
                return 'OPR';
            } else {
                if(is_konq) {
                    return 'KONQ';
                } else {
                    // Really is IE
                    return 'IE';
                }
            }
        }
        if (document.getElementById) {
            var is_ff = (agt.indexOf('firefox') != -1);
            if (is_ff) {
                return 'FF';
            }
            return 'MOZ';
        }
        return 'OTHER';
    };

    this.attachEvents = function () {
        // add the drag and drop for the table
        var elem = this.GetObj('LEIMainTitle');
        var that = this;
        elem.onmousedown = function(event) { that.DragStart('LEImainDiv',event); };
        //////////

        elem = this.GetObj('LEIImgMinimize');
        elem.onclick = function () {that.minimizeAll();};

        elem = this.GetObj('LEIImgClose');
        elem.onclick = function () {that.closeWindow();};

        elem = this.GetObj('LEIToggleLog');
        elem.onclick = function () {that.toggleLog();};

        elem = this.GetObj('LEIToggleTools');
        elem.onclick = function () {that.toggleTools();};

        elem = this.GetObj('LEIImgCloseLog');
        elem.onclick = function () {that.minimizeMsgDiv();};

        elem = this.GetObj('LEIEMTinfo');
        elem.onclick = function () {that.showEMTinfo();};

        elem = this.GetObj('LEIPageinfo');
        elem.onclick = function () {that.pageInfo();};

        elem = this.GetObj('LEILogOut');
        elem.onclick = function () {that.logOut();};

		elem = this.GetObj('LEIMarkVisitor');
        elem.onclick = function () {that.markVisitor();};

        elem = this.GetObj('LEIStopStartEMT');
        elem.onclick = function () {that.stopStartEMT();};

        elem = this.GetObj('LEIAbout');
        elem.onclick = function () {that.about();};

        elem = this.GetObj('LEISwitchSnipMode');
        elem.onclick = function () {that.clearCompactSnippetMode();};

        elem = this.GetObj('LEIAdminArea');
        elem.onclick = function () {that.adminAreaLogin();};

        elem = this.GetObj('LEIEval');
        elem.onclick = function () {that.evalTool('display','', true);};

        elem = this.GetObj('LEIShowUDEs');
        elem.onclick = function () {that.showUdes();};

        if (this.msgShown) {
            elem = this.GetObj('LEIStatusResize');
            elem.className = 'LEIStatusResize';
            elem.onmousedown = function(event) { that.resizeStart('LEILogWindow',event); };
        }
        else {
            elem = this.GetObj('LEIStatusResize');
            elem.className = 'LEIStatusNOResize';
        }

        // elem = this.GetObj('LEIImgConfig');
        // elem.onclick = function () { that.maximizeAll(); that.showEMTinfo();};

        // elem = this.GetObj('LEIImgAdmin');
        // elem.onclick = function () { that.adminAreaLogin(true);};

        // elem = this.GetObj('LEIImgLogoff');
        // elem.onclick = function () { that.logOut(true);};
    };
    /*
     display the information of the engagement according to the given type
     */
    this.engagementLeChatInfo = function (type, inPage) {
        var arrObjs = inPage ? this.leChatRef.inPagePluginsArr : this.leChatRef.jsonsArr;
        var html = '';

        if (this.toolsShown) {
            this.toggleTools();
        }

        if (this.logShown) {
            this.toggleLog();
        }

        if (!this.leChatRef && typeof (arrObjs) != "undefined") {
            html = 'NO engagements defined';
        }

        html = '<table>';

        for (var id in arrObjs) {
            if (arrObjs[id].type === type) {
                html += '<tr><td>' + this.objectToString(arrObjs[id], undefined, true, 'LEIGeneralInfoNoBorder', true) + '</tr>';
                html += '<tr><td>----------------------------------------------------------</td></tr>'
            }
        }

        html += '</table>';


        this.showMsgWindow(false, 'Engagement Info', html,{width: 400, height: 100});
        return false;
    };

    this.dispEngInfo = function () {
        if (this.toolsShown) {
            this.toggleTools();
        }

        if (this.logShown) {
            this.toggleLog();
        }

        var that = this;

        var html = '';

        html = '<table>\
        			<tr>\
        				<td class="LEILable" width="10%">No.</td>\
        				<td class="LEILable" width="20%">Campaign ID</td>\
        				<td class="LEILable">Engagement ID</td>\
        			</tr>';

        if(this.store.impDisplay.length > 0)
        {
        	var engArr = this.store.impDisplay;
	        for (var i = 0; i < engArr.length; i++) {
	            if (typeof(engArr[i]) == 'object') {
	                html += '<tr>\
	                			<td>'+ (i+1) +'</td>';
	                html += '	<td>'+ engArr[i].campaign +'</td>';
	                html += '   <td>'+ engArr[i].engId+'</td>\
	                		 </tr>';
	            }
	        }
	    }
        html += '</table>';


        this.showMsgWindow(false, 'Displayed Engagement Info', html,{width: 500, height: 100});
        return false;
    };

    this.closedEngInfo = function () {
        if (this.toolsShown) {
            this.toggleTools();
        }

        if (this.logShown) {
            this.toggleLog();
        }

        var that = this;

        var html = '';

        html = '<table>\
        			<tr>\
        				<td class="LEILable" width="10%">No.</td>\
        				<td class="LEILable" width="20%">Campaign ID</td>\
        				<td class="LEILable">Engagement ID</td>\
        			</tr>';

        if(this.store.impClose.length > 0)
        {
        	var engArr = this.store.impClose;
	        for (var i = 0; i < engArr.length; i++) {
	            if (typeof(engArr[i]) == 'object') {
	                html += '<tr>\
	                			<td>'+ (i+1) +'</td>';
	                html += '	<td>'+ engArr[i].campaign +'</td>';
	                html += '   <td>'+ engArr[i].engId+'</td>\
	                		 </tr>';
	            }
	        }
	    }
        html += '</table>';


        this.showMsgWindow(false, 'Displayed Engagement Info', html,{width: 500, height: 100});
        return false;
    };

    this.dispEngAtt = function () {
        if (this.toolsShown) {
            this.toggleTools();
        }

        if (this.logShown) {
            this.toggleLog();
        }

        var that = this;

        var html = '';

        html = '<table>\
        			<tr>\
        				<td class="LEILable" width="10%">No.</td>\
        				<td class="LEILable" width="30%">Engagement Attributes</td>\
        				<td class="LEILable"># Atts</td>\
        			</tr>';

        if(this.store)
        {
        	var index =0;
	        for (name in this.store) {
	            if ((name != 'impDisplay')&&(name != 'impClose')&&(name != 'pagediv')&&(name!='tabActive')) {
	                html += '<tr>\
	                			<td>'+ ++index +'</td>';
	                html += '	<td>'+ name +'</td>';
	                html += '   <td>'+ this.store[name].length+'</td>\
	                		 </tr>';
	            }
	        }
	    }
        html += '</table>';


        this.showMsgWindow(false, 'Engagement Attributes', html,{width: 500, height: 100});
        return false;
    };

    this.dispEMBInfo = function () {
        if (this.toolsShown) {
            this.toggleTools();
        }

        if (this.logShown) {
            this.toggleLog();
        }

        var that = this;

        var html = '';

        html = '<table>\
        			<tr>\
        				<td class="LEILable" width="10%">No.</td>\
        				<td class="LEILable" width="20%">Div ID</td>\
        				<td class="LEILable"></td>\
        			</tr>';

        if(this.store.pagediv.length > 0)
        {
        	var embArr = this.store.pagediv;
	        for (var i = 0; i < embArr.length; i++) {
	            if (typeof(embArr[i]) == 'object') {
	                html += '<tr>\
	                			<td>'+ (i+1) +'</td>';
	                html += '	<td>'+ embArr[i].divId +'</td>';
	                html += '	<td></td></tr>';
	            }
	        }
	    }
        html += '</table>';


        this.showMsgWindow(false, 'Embedded Engagement Info', html,{width: 500, height: 100});
        return false;
    };

    this.dynButtonInfo = function () {
        //console.log('dynButtonInfo');
        if (this.toolsShown) {
            this.toggleTools();
        }

        if (this.logShown) {
            this.toggleLog();
        }

        var that = this;

        this.overrides = null;

        var html = '';
        if (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.dynButton)=='undefined' || lpMTagConfig.dynButton.length == 0) {
            html = 'NO buttons defined';
        }
        else {
            for (var i=0; i<lpMTagConfig.dynButton.length; i++) {
                var multichannel = false;
                var vosBut = false;
                var objRef = lpMTagConfig['dynButton'+i];
                if (objRef==null) {//check if it is not Multichannel
                    objRef = lpMTagConfig['lpMCDynBut'+i];
                    if (objRef!=null) {
                        multichannel = true;
                    }
                }
                if (objRef==null) {//check if it is not Voice single step
                    objRef = lpMTagConfig['lpVOSDynamicButton'+i];
                    if (objRef!=null) {
                        vosBut = true;
                    }
                }

                html += "<table class='LEIGeneralInfo'>";
                if (objRef == null) {
                    html += '<td>Error getting button reference for: '+lpMTagConfig.dynButton[i].name+'</td>';
                }
                else {
                    html += '<tr><th>Name:</th>\
                             <th>'+((multichannel)?objRef.butConfig.origButtonName:objRef.origButtonName)+'</th></tr>';
                    var channel = '';
                    if (multichannel) {
                        channel = 'Multichannel';
                    }
                    else if (typeof(objRef.voice)!='undefined') {
                        if (objRef.voice) {
                            if (vosBut) {
                                channel = 'Voice Single Step';
                            }
                            else {
                                channel = 'Voice';
                            }
                        }
                        else {
                            channel = 'Chat';
                        }
                    }
                    else {
                        channel = objRef.channel;
                    }
                    html += '<tr><th>Channel:</th>\
                             <th>'+channel+'</th></tr>';
                    var state = objRef.buttonState;
                    if (multichannel) {
                        state = "<table class='LEIGeneralInfoNoBorder'><tr><th>Chat</th><td>"+objRef.buttonState.chat.name+"</td></tr><tr><th>Voice</th><td>"+objRef.buttonState.voice.name+"</td></tr></table>";
                    }
                    html += '<tr><th>State:</th>\
                             <td>'+state+'</td></tr>';
                    var url = '';
                    if (objRef.contentType == 0) {
                        url = objRef.imageUrl;
                    }
                    else if (objRef.contentType == 1) {
                        url = 'Custom Images';
                    }
                    else if (objRef.contentType == 2) {
                        url = 'HTML button';
                    }
                    if (!multichannel) {
                        html += '<tr><th>Image URL:</th>\
                                 <td>'+url+'</td></tr>';
                    }
                    var refresh;
                    if (multichannel) {
                        refresh = objRef.butConfig.refresh;
                    }
                    else {
                        refresh = objRef.refresh;
                    }
                    html += '<tr><th>Refresh:</th>\
                             <td>'+((refresh==-1)?'none':refresh)+'</td></tr>';
                    html += '<tr><th>Config:</th>\
                             <td>'+this.objectToString(lpMTagConfig.dynButton[i], undefined, true,'LEIGeneralInfoNoBorder')+'</td></tr>';
                    html += '<tr><th>Overrides:</th>';
                    if (typeof(lpMTagConfig.dynButton[i].ovr)!='undefined') {
                        // there are some overrides so lets see which one
                        html += "<td><a id='LEIDBover"+i+"' href='javascript:;'>show overrides</a></td></tr>";
                        if (this.overrides == null) {
                            this.overrides = {};
                        }
                        var dbOvrRef = eval(lpMTagConfig.dynButton[i].ovr);
                        var text = 'Can not get Object';
                        if (dbOvrRef!=null) {
                            text  = this.objectToString(dbOvrRef, undefined, true,'LEIGeneralInfo');
                        }
                        this.overrides['LEIDBover'+i] = text;
                    }
                    else {
                        html += '<td>none</td></tr>';
                    }
                    var events = '';
                    if (typeof(this.eventLog.dynButton['but'+i]!='undefined')) {
                        var length = (typeof(this.eventLog.dynButton['but'+i])!='undefined')?this.eventLog.dynButton['but'+i].length:-1;
                        for (var j=0; j<length; j++) {
                            events += this.eventLog.dynButton['but'+i][j] + '<br />';
                        }
                    }
                    if (events=='') {
                        events = 'None fired';
                    }
                    html += '<tr><th>Events Fired:</th>\
                             <td>'+events+'</td></tr>';
                    if (multichannel) {
                        text = this.objectToString(objRef.butConfig, undefined, true,'LEIGeneralInfoNoBorder', true);
                        if (this.overrides == null) {
                            this.overrides = {};
                        }
                        this.overrides['LEIDBMCover'+i] = text;
                        html += "<tr><th>Full Config:</th>\
                             <td><a id='LEIDBMCover"+i+"' href='javascript:;'>Show</td></tr>";
                    }
                }
                html += '</table><br /><br />';
            }
        }

        this.showMsgWindow(false, 'Dynamic Button Info', html,{width: 400, height: that.maxLogWindowMaxHeight});

        if (this.overrides != null) {
            var elem;
            for (var name in this.overrides) {
                elem = this.GetObj(name);
                elem.onclick = function () {
                    that.showMsgWindow(false, 'Dynamic Button Config', that.overrides[this.id],{width: 400, height: that.maxLogWindowMaxHeight});
                };
            }
        }
        return false;
    };

    this.getInviteID = function (name) {
        var invID = parseInt(name.replace(/invite/,''),10);
        if (isNaN(invID)) {//maybe MC
            invID = parseInt(name.replace(/inviteMC/,''),10);
        }
        return invID;
    };

    this.getInviteOverrideInfo = function () {
        var str = "<b>Invitation Overrides</b><br /><table class='LEIGeneralInfo'>";
        for (var name in lpMTagConfig) {
            if (name.indexOf('invite')!=-1) {
                if (name!='inviteShown') {
                    if (isNaN(this.getInviteID(name))) {
                        str += '<tr><th>'+name+'</th>\
                                <td>'+lpMTagConfig[name]+'</td></tr>';
                    }
                }
            }
        }
        str += "</table>";
        return str;
    };

    this.invitationInfo = function () {
        //console.log('invitationInfo');
        if (this.toolsShown) {
            this.toggleTools();
        }

        if (this.logShown) {
            this.toggleLog();
        }

        var html = '';
        if (typeof(lpMTagConfig)=='undefined') {
            html = 'NO invitations defined';
        }
        else {
            html += "<table class='LEIGeneralInfo'>";
            for (var name in lpMTagConfig) {
                if (name.indexOf('invite')!=-1) {
                    var invID = this.getInviteID(name);

                    if (invID>0) {
                        var objRef = lpMTagConfig[name];
                        html += '<tr><th>ID:</th>\
                                 <th>'+objRef.inviteID+'</th></tr>';
                        if (objRef.inviteName) {
                            html += '<tr><th>Name:</th>\
                                 <th>'+objRef.inviteName+'</th></tr>';
                        }
                        var channel = '';
                        if (typeof(objRef.voice)!='undefined') {
                            if (objRef.voice) {
                                channel = 'Voice';
                            }
                            else {
                                channel = 'Chat';
                            }
                        }
                        else {
                            channel = objRef.channel;
                        }
                        html += '<tr><th>Channel:</th>\
                                 <th>'+channel+'</th></tr>';

                        var url = '';
                        if (objRef.contentType == 0) {
                            url = objRef.imageUrl;
                        }
                        else if (objRef.contentType == 2) {
                            url = 'HTML invite';
                        }
                        html += '<tr><th>Image URL:</th>\
                                 <td>'+url+'</td></tr>';
                        var events = '';
                        if (typeof(this.eventLog.invite['inv'+invID]!='undefined')) {
                            for (var j=0; j<this.eventLog.invite['inv'+invID].length; j++) {
                                events += this.eventLog.invite['inv'+invID][j] + '<br />';
                            }
                        }
                        if (events=='') {
                            events = 'None fired';
                        }
                        html += '<tr><th>Events Fired:</th>\
                                 <td>'+events+'</td></tr>';
                    }
                }
            }
            html += '</table><br /><br />';
            html += this.getInviteOverrideInfo();
        }

        this.showMsgWindow(false, 'Invitation Info', html,{width: 400, height: this.maxLogWindowMaxHeight});

        return false;
    };

    this.about = function () {
        //console.log('about');
        this.toggleTools();
        if (this.logShown) {
            this.toggleLog();
        }

        var html = '<b>LiveEngage Inspect Tool ver: '+this.ver+'</b><br /><br />';
        html += '<b>Created</b> (Based on the EMTDebugLib Tool) , <b>By</b>: Stoney Shou<br /> ';
        html += '<b>Company</b>: Liveperson<br /><br />';
        html += '<b>Disclamer</b>: This is work in progress and should be treated as such.<br />';
        html += ' No guarantees are given on stability of this tool. Use at your own risk.<br /><br />';
        html += '<b>However suggestions and bug reports are welcome.<b><br /><br />';
        html += '<b>Send suggestion <a href="mailto:sshou@liveperson.com?subject=LE Inspect Tool Suggestion">email</a><b><br /><br />';
        html += '<b>Send bugreport <a href="mailto:sshou@liveperson.com?subject=LE Inspect Tool Bug Report">email</a><b><br />';

        this.showMsgWindow(false, 'About', html,{width: 400, height: this.maxLogWindowMaxHeight});
        return false;
    };

    this.evalTool = function (action, objStr, displayHTML, title) {
        //console.log('evalTool'+ action);
        if (this.logShown) {
            this.toggleLog();
        }
        if (this.toolsShown) {
            this.toggleTools();
        }

        this.evalToolCnt = 0;
        var html = "<table id='LEIEvalTable' class='LEIGeneralInfoNoBorder'>\
                    <tr><td rowspan=2>\
                            <textarea id='LEIEvalInput' rows='3' cols='40'>{VALUE}</textarea>\
                        </td>\
                        <td>\
                            <input type='button' id='LEIEvalRun' value='Execute' class='LEIEvalToolBtn'></input><br />\
                        </td></tr><tr><td>\
                            <input type='button' id='LEIEvalContent' value='Show Content' class='LEIEvalToolBtn'></input><br />\
                        </td>\
                    </tr>\
                   </table>";
                html += "<hr />";

        if (typeof(title)=='undefined') {
            title = "Eval Tool\
                    <a id='LEIEvallpMTagConfig' href=javascript:;>lpMTagConfig</a>\
                    <a id='LEIEvallpMTag' href=javascript:;>lpMTag</a>\
                    <a id='LEIEvallpConnLib' href=javascript:;>lpConnLib</a>";
        }
        var value;
        if (action == 'display') {
            this.showMsgWindow(false, title, html.replace(/{VALUE}/g,''),{width: 400, height: this.maxLogWindowMaxHeight});
        }
        else if (action == 'eval') {
            // eval the code
            value = this.GetObj('LEIEvalInput').value;

            try {
                eval(value);
            }
            catch (e) {
                html += 'Error detected in JS:'+e;
                this.showMsgWindow(false, title, html.replace(/{VALUE}/g,''),{width: this.maxLogWindowMaxWidth, height: this.maxLogWindowMaxHeight});
            }
        }
        else if (action == 'logContent') {
            // logContent the code
            value = '';
            if (typeof(objStr)!='undefined' && objStr!='') {
                value = objStr;
            }
            else  {
                value = this.GetObj('LEIEvalInput').value;
            }

            var objRef = null;
            try {
                objRef = eval(value);
            }
            catch (e) {
                html += 'logContent - Error detected in JS:'+e;
                if (displayHTML) {
                    html = html.replace(/{VALUE}/g,'');
                }
                else {
                    html = 'logContent - Error detected in JS:'+e;
                }
                this.showMsgWindow(false, title, html,{width: this.maxLogWindowMaxWidth, height: this.maxLogWindowMaxHeight});
                return false;
            }

            var output = '';

            if (objRef == null) {
                output = 'The JS provided did not evaluate to an object or parameter';
            }
            else if (typeof(objRef)=='object'){
                output = this.objectToString(objRef,undefined, true,'LEIGeneralInfo' , true);
            }
            else {
                output = objRef;
            }
            html += output;
            this.showMsgWindow(false, title, (displayHTML?html.replace(/{VALUE}/g,''):output),{width: this.maxLogWindowMaxWidth, height: this.maxLogWindowMaxHeight});
        }
        else {
            this.showMsgWindow(false, title, 'Invalid action type:'+action,{width: this.maxLogWindowMaxWidth, height: this.maxLogWindowMaxHeight});
        }
        var that = this;
        var elem = this.GetObj('LEIEvalRun');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('eval','',true);};
        }

        elem = this.GetObj('LEIEvalContent');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('logContent','',true);};
        }

        elem = this.GetObj('LEIEvallpMTagConfig');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('logContent','lpMTagConfig',true);};
        }

        elem = this.GetObj('LEIEvallpMTag');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('logContent','lpMTag',true);};
        }

        elem = this.GetObj('LEIEvallpConnLib');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('logContent','lpConnLib',true);};
        }
        return false;
    };

    this.adminAreaLogin = function (doNotOpenMenu) {
        // if (doNotOpenMenu) {

        // }
        // else {
        //     this.toggleTools();
        // }

        // var server = lpMTagConfig.lpServer;
        // if (server == 'chat.bankofamerica.com') {
        //     server = 'sec1.liveperson.net';
        // }

        // var url = 'https://'+ server + '/hc/web/public/pub/ma/lp/login.jsp?goto=home.jsp&site='+lpMTagConfig.lpNumber+'&useid=1';
        // if (lpMTagConfig.lpServer == this.specialServer) {
        //     url += '&user=efim&pass=1';
        // }
        // window.open(url);
    };

    this.stopStartEMT = function () {
        //console.log('stopStartEMT');
        this.toggleTools();
        if (typeof(lpMTag)!='undefined') {
            if (lpMTag.stopMTag) {// it is stopped already so start it
                lpMTag.lpLoopTimer = setTimeout('lpMTag.lpMTagMain()', 100);
                lpMTag.stopMTag = false;
            }
            else { // stop it
                if (lpMTag.lpLoopTimer) {
                    clearTimeout(lpMTag.lpLoopTimer);
                }
                lpMTag.stopMTag = true;
            }
        }
        return false;
    };

    this.clearCompactSnippetMode = function () {
        //console.log('clearCompactSnippetMode');
        this.toggleTools();

        if (this.GetCookie(this.debugCookieName) == this.debugCookieValue) {// it already exists so delete it
            this.DeleteCookie(this.debugCookieName,'/');
        }
        else { // set it
            this.SetCookie(this.debugCookieName,this.debugCookieValue, null, '/');
        }

        return false;
    };

    this.logOut = function (onlyLogout) {
        //console.log('logOut');
        if (!onlyLogout) {
            this.toggleTools();
        }

        var params = new hcArrayStorage();
        params.add('cmd','visitorLogout');
        params.add('site',lpMTagConfig.lpNumber);

        var url = lpMTagConfig.lpProtocol + '://' + lpMTagConfig.lpServer + '/hc/' + lpMTagConfig.lpNumber +'/';
        if (typeof(lpMTag.mtagAddToQueue)!='undefined') {
            lpMTag.mtagAddToQueue(url,params,null,false,0,true,false,1);
        }
        else {
            lpConnLib.addToQueue(url,params,null,false,0,true,false,1);
        }
        return false;
    };

	this.markVisitor = function (onlyMarkVisitor) {
        //console.log('markVisitor');
        if (!onlyMarkVisitor) {
            this.toggleTools();
        }

        var params = new hcArrayStorage();
        params.add('cmd','markVisitor');
        params.add('site',lpMTagConfig.lpNumber);

        var url = lpMTagConfig.lpProtocol + '://' + lpMTagConfig.lpServer + '/hc/' + lpMTagConfig.lpNumber +'/';
        if (typeof(lpMTag.mtagAddToQueue)!='undefined') {
            lpMTag.mtagAddToQueue(url,params,null,false,0,true,false,1);
        }
        else {
            lpConnLib.addToQueue(url,params,null,false,0,true,false,1);
        }
        return false;
    };

    this.pageInfo = function () {
        //console.log('pageInfo');
        this.toggleTools();
        if (this.logShown) {
            this.toggleLog();
        }

        var html = "<table class='LEIGeneralInfo'>";
        html += '<tr>';
            html += '<th>Title</th>';
            html += '<td>'+ document.title + '</td>';
        html += '</tr>';
        html += '<tr>';
            html += '<th>URL</th>';
            html += '<td>'+ document.location + '</td>';
        html += '</tr>';
        html += '<tr>';
            html += '<th>Referrer</th>';
            html += '<td>'+ document.referrer + '</td>';
        html += '</tr>';
        html += '<tr>';

        var cookies = null;
        if (typeof(lpMTagConfig.GetPageCookies) == 'function') {
            cookies = lpMTagConfig.GetPageCookies();
        }
        else {
            cookies = document.cookie;
        }
            html += '<th>Cookie Length</th>';
            html += '<td>'+ ((typeof(cookies)=='undefined' || cookies==null)? 0 : cookies.length) + '</td>';
        html += '</tr>';
        html += '<tr>';
            html += '<th>Cookies</th>';
            html += '<td>'+ ((typeof(cookies)=='undefined' || cookies==null)? '' : cookies) + '</td>';
        html += '</tr>';
        html += '</table>';

        this.showMsgWindow(false, 'Page Info', html,{width: 400, height: this.maxLogWindowMaxHeight});
        return false;
    };

    this.showEMTinfo = function () {
        //console.log('showEMTinfo');
        this.evalTool('logContent', 'lpMTagConfig', false, 'EMT Configuration');
        return false;
    };

    this.toggleViewMode = function (id) {
        //console.log('toggleViewMode'+id);
        var elem = lpMTagDebug.GetObj('LEIObjectInfo-'+id);
        if (elem!=null) {
            if (elem.style.display=='none' || elem.style.display=='') {
                elem.style.display='block';
            }
            else {
                elem.style.display='none';
            }
        }

        return false;
    };

    this.objectToString = function(obj, delimiter, tableFormat, tableClass, recursive) {
        if (typeof(delimiter)=='undefined') {
            delimiter = ',';
        }
        if (typeof(tableFormat)=='undefined') {
            tableFormat = false;
        }
        if (typeof(recursive)=='undefined') {
            recursive = false;
        }
        var text='';
        var startText;

        if (tableFormat) {
            startText = "<table class='"+tableClass+"'>";
        }
        else {
            startText = '{';
        }
        var first = true;
        for (var name in obj) {
            if (first) {
                first = false;
            }
            else if (!tableFormat){
                text += delimiter;
            }

            var constructorName = '';
            if (obj[name]!=null && typeof(obj[name].constructor)!='undefined') {
                if (typeof(obj[name].constructor.name)!='undefined') {
                    constructorName = obj[name].constructor.name;
                }
                else {
                    if (obj[name].constructor.toString().indexOf('function')==0) {
                        constructorName = 'function';
                    }
                    else {
                        constructorName = obj[name].constructor.toString();
                    }
                }
            }
            if (recursive && typeof(obj[name])=='object' && obj[name]!=null && typeof(obj[name].constructor)!='undefined' &&
                    obj[name].constructor!=Image && obj[name].constructor!=Date && constructorName.indexOf('HTML')==-1) {
                if (tableFormat) {
                    var cnt = this.evalToolCnt++;
                    var retStr = this.objectToString(obj[name],delimiter, tableFormat, tableClass, recursive);
                    if (retStr!='') {
                        text += "<tr><th><a href=javascript:; onclick='lpMTagDebug.toggleViewMode("+cnt+")'>" + name + "</a></th><td id='LEIObjectInfo-"+cnt+"' class='LEIHiddenTD'>" +retStr + "</td>";
                    }
                    else {
                        text += "<tr><th>" + name + "</th><td id='LEIObjectInfo-"+cnt+"'>" +retStr + "</td>";
                    }
                }
                else {
                    text += "'" + name + "'"+ ':' + "'" + this.objectToString(obj[name],delimiter, tableFormat, tableClass, recursive) + "'";
                }
            }
            else {
                var value = (obj[name]==null)?'':obj[name].toString();
                value = value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
                if (tableFormat) {
                    text += "<tr><th>" + name + "</th><td>" + value + "</td>";
                }
                else {
                    text += "'" + name + "'"+ ':' + "'" + value + "'";
                }
           }
        }
        if (text != '') {
            text = startText + text;
            if (tableFormat) {
                text += '</table>';
            }
            else {
                text += '}';
            }
        }
        return text;
    };

    this.logPlayer = function (action) {
        //console.log('logPlayer-'+ action);
        var that = this;
        var elem;
        switch (action) {
            case this._LOG_TRASH:
                this.log = [];
                this.clearLogDisplay();
                break;
            case this._LOG_PLAY:
                elem = this.GetObj('LEILogPlay');
                elem.onclick = function () {that.logPlayer(that._LOG_PAUSE);};
                elem = this.GetObj('LEILogPlayImg');
                elem.src = this.baseURL+'images/pause.png';
                elem = this.GetObj('LEIMsgStatusLogPlayerStatus');
                elem.innerHTML = 'Log Active';
                this.logStatus = action;
                this.clearLogDisplay();
                this.displayFullLog(this.log);
                break;
            case this._LOG_PAUSE:
                elem = this.GetObj('LEILogPlay');
                elem.onclick = function () {that.logPlayer(that._LOG_PLAY);};
                elem = this.GetObj('LEILogPlayImg');
                elem.src = this.baseURL+'images/play.png';
                elem = this.GetObj('LEIMsgStatusLogPlayerStatus');
                elem.innerHTML = 'Log Paused';
                this.logStatus = action;
                break;
            case this._LOG_STOP:
                elem = this.GetObj('LEILogPlay');
                elem.onclick = function () {that.logPlayer(that._LOG_PLAY);};
                elem = this.GetObj('LEILogPlayImg');
                elem.src = this.baseURL+'images/play.png';
                elem = this.GetObj('LEIMsgStatusLogPlayerStatus');
                elem.innerHTML = 'Log Stopped';
                this.logStatus = action;
                break;
        }
        return false;
    };

    this.toggleLog = function() {
        //console.log('toggleLog');
        if (this.toolsShown) {
            this.toggleTools();
        }
        var that = this;

        if (this.logShown) {
            this.logShown = false;
            this.hideMsgWindow();
        }
        else {
            this.logShown = true;
            var title = "<div id='LEILogToggleTime' class='LEITimeIcon'></div>" +
                        "<div id='LEILogToggleFilter' class='LEIFilterIcon'></div>"+
                        "<div class='LEILogTitle'>EMT Log</div>";
            this.showMsgWindow(true, title);
            var elem = this.GetObj('LEILogToggleTime');
            elem.onclick = function () {that.toggleLogTime(); return false;};

            var elem = this.GetObj('LEILogToggleFilter');
            elem.onclick = function () {that.toggleLogFilter(); return false;};

            this.displayFullLog(this.log);
        }
        this.resizeShowHideImage();
        return false;
    };

    this.toggleLogFilter = function () {
        this.showLogFilter = !this.showLogFilter;
        if (this.showLogFilter) {
            var html = '<table><tr>';
            var col = [];
            col[0] = '';
            col[1] = '';
            var idx=0;
            for (var name in this.msgSources) {
                if (typeof(this.msgSources[name])=='object' && this.msgSources[name].source) {
                    var checked = '';
                    for (var i=0; i<this.activeFilter.length; i++) {
                        if (name == this.activeFilter[i]) {
                            checked = 'checked';
                            break;
                        }
                    }
                    col[idx] += '<input name="LEIFilterChoice" value="' + name + '" type="checkbox" '+checked+'>'+name+'</input><br>';
                    (idx==0)? idx=1:idx=0;
                }
            }
            html += '<td>'+col[0]+'</td>';
            html += '<td>'+col[1]+'</td>';
            html += "<td align='center'><a id='LEILogToggleFilterApply' href=javascript:;><img src='" + this.baseURL + "images/apply.png' border='0'/></td></a>";
            html += "<td align='center'><a id='LEILogToggleFilterCancel' href=javascript:;><img src='" + this.baseURL + "images/cancel.png' border='0'/></td></a>";
            html += '</tr></table>';
            var el = this.GetObj('LEIFilterWindow');
            if (el!=null) {
                el.innerHTML = html;
                var that = this;
                var elem = this.GetObj('LEILogToggleFilterApply');
                elem.onclick = function () {that.logFilterApply(); return false;};
                elem = this.GetObj('LEILogToggleFilterCancel');
                elem.onclick = function () {that.logFilterCancel(); return false;};
            }
            this.showObj('LEIFilterRow');
        }
        else {
            this.hideObj('LEIFilterRow');
        }
    };

    this.logFilterCancel = function () {
        this.showLogFilter = !this.showLogFilter;
        this.activeFilter = [];
        this.hideObj('LEIFilterRow');
        this.displayFullLog(this.log);
    };

    this.logFilterApply = function () {
        this.showLogFilter = !this.showLogFilter;
        this.activeFilter = [];
        this.hideObj('LEIFilterRow');
        var elems = document.getElementsByName("LEIFilterChoice");
        for (var i=0; i< elems.length; i++) {
            if (elems[i].checked) {
                this.activeFilter[this.activeFilter.length] = elems[i].value;
            }
        }
        this.displayFullLog(this.log);
    };

    this.toggleLogTime = function() {
        this.showTimeinLog = !this.showTimeinLog;
        this.displayFullLog(this.log);
        return false;
    };

    this.hideMsgWindow = function () {
        this.msgShown = false;
        if (this.logShown) {
            this.logShown = false;
        }
        this.hideObj('LEIMainLogWindow', true);
        this.GetObj('LEILogWindow').innerHTML = '';
        this.resizeShowHideImage();
    };

    this.showMsgWindow = function (withLogCtrl, title, html, dimensions) {
        //console.log('showMsgWindow'+this.browser);
        this.msgShown = true;
        this.resizeShowHideImage();
        this.showTR('LEIMainLogWindow');
        this.showObj('LEIMainLogWindow', false);
        var elem;
        if (typeof(withLogCtrl)!='undefined' && withLogCtrl) {
            this.GetObj('LEIMessageWindowCtrlPanel').innerHTML = this.logCtrlPanelHTML;
            var that = this;
            elem = this.GetObj('LEILogPlay');
            elem.onclick = function () {that.logPlayer(that._LOG_PAUSE);};

            elem = this.GetObj('LEILogStop');
            elem.onclick = function () {that.logPlayer(that._LOG_STOP);};

            elem = this.GetObj('LEILogErase');
            elem.onclick = function () {that.logPlayer(that._LOG_TRASH);};
        }
        else {
            this.GetObj('LEIMessageWindowCtrlPanel').innerHTML = '';
        }
        if (title) {
            this.GetObj('LEIMessageWindowTitle').innerHTML = title;
        }
        if (html) {
            this.GetObj('LEILogWindow').innerHTML = html;
        }
        if (typeof(dimensions)!='undefined' && !this.resized) {
            elem = this.GetObj('LEILogWindow');
            if (dimensions.width) {
                //elem.style.width = dimensions.width + 'px';
                elem.style.width = '100%';
            }
            if (dimensions.height) {
                elem.style.height = dimensions.height + 'px';
            }
            elem.style.overflow = 'auto';
        }
    };

    this.toggleTools = function() {
        //console.log('toggleTools');
        if (this.toolsShown) {
            this.toolsShown = false;
            this.hideObj('LEIToolsDiv');
        }
        else {
            this.toolsShown = true;
            var elem;
            if (typeof(lpMTag)!='undefined') {
                elem = this.GetObj('LEIStopStartEMT');
                if (lpMTag.stopMTag){
                    elem.innerHTML = 'Start EMT';
                }
                else {
                    elem.innerHTML = 'Stop EMT';
                }
            }

            elem = this.GetObj('LEISwitchSnipMode');
            if (this.GetCookie(this.debugCookieName) == this.debugCookieValue) {
                elem.innerHTML = 'Compact Snip';
            }
            else {
                elem.innerHTML = 'Clear Snip';
            }
            if (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.lpServer)=='undefined' || document.location.host != lpMTagConfig.lpServer) {
                this.hideObj('LEISwitchSnipMode');
            }

            if (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.lpServer)=='undefined' || typeof(lpMTagConfig.lpNumber)=='undefined') {
                this.hideObj('LEIAdminArea');
            }
            else {
                this.showObj('LEIAdminArea');
            }

            var dimensions = this.getElWidthHeight('LEIToggleTools','LEImainDiv');
            elem = this.GetObj('LEIToolsDiv');
            elem.style.left = (dimensions.ul.x) + 'px';
            elem.style.top = (dimensions.br.y+3) + 'px';
            this.showObj('LEIToolsDiv');
        }
        return false;
    };

    this.updateConfig = function() {
        ////console.log('updateConfig');
        var that = this;
        var updated = false;

        // var elem = this.GetObj('LEIStatusProgress');
        // this.progressIdx++;
        // if (this.progressIdx == this.progressSymbols.length) {
        //     this.progressIdx=0;
        // }
        // elem.innerHTML = this.progressSymbols[this.progressIdx];

        // If core tag detected
        if(typeof(lpMTag) != 'undefined')
        {
        	elem = this.GetObj('LEITagStatIcon');
        	if(elem.className != 'LEITagStatWarn'){
        		updated = true;
        		elem.className = 'LEITagStatWarn';
        		elem = this.GetObj('LEITagStatText');
        		elem.innerHTML = 'Old monitor tag';
        	}
        }

        // Get info from lpTag
        if (typeof(lpTag)!='undefined') {

        	// Update Tag status
        	elem = this.GetObj('LEITagStatIcon');
        	if((elem.className != 'LEITagStatOk') && (lpTag.site != undefined)){
        		elem.className = 'LEITagStatOk';
        		updated = true;
        		elem = this.GetObj('LEITagStatText');
        		elem.innerHTML = 'Tag detected.';
        	}


        	// Update time on page
	        var timenow = new Date();
	        var difDate = new Date();

	        this.timestart = (lpTag._timing.contReady>0)?new Date(lpTag._timing.contReady) : this.timestart;

	        var dif = timenow.getTime() - this.timestart.getTime();
	        difDate.setTime(dif);
	        var minTxt =  (difDate.getUTCMinutes()>0)? (difDate.getUTCMinutes()+'m ') : '';
	        var hourTxt = (difDate.getUTCHours()>0)?(difDate.getUTCHours() + 'h '):'';
	        var secTxt = difDate.getUTCSeconds() + 's';
	        var timeText = hourTxt + minTxt + secTxt;
	        elem = this.GetObj('LEIStatusTimeOnPage');
	        elem.innerHTML = timeText;
            

            // Get site ID
            var siteId = lpTag.site || "Not Found";
            this.store = (typeof(lpTag.sdes.inspect) === 'function')? lpTag.sdes.inspect().store : {};

            elem = this.GetObj('LEIEMTsiteId');
            if(elem.innerHTML != siteId){
	            updated = true;
	            elem.innerHTML = siteId;
            }

            // Get Engagement attributes number
            var ENGAttCnt = 0;
            for(name in this.store){
            	if((name != 'impDisplay')&&(name != 'impClose')&&(name != 'pagediv')&&(name!='tabActive'))
            		ENGAttCnt ++;
            }
            if(ENGAttCnt > 0){
	            elem = this.GetObj('LEIENGAtt');
	            elem.innerHTML = ENGAttCnt;
	            elem.style.cursor = 'pointer';
	            elem.onclick = function () {that.dispEngAtt()};
			}
            // Get server domain 
            var domainStr = (typeof(lpTag.getDomain)==='function')?lpTag.getDomain() : this.noValueStr;
            elem = this.GetObj('LEIDomain');
            if ((elem.innerHTML != domainStr) && domainStr != 'undefined') {
                updated = true;
                elem.innerHTML = domainStr;
            }
            
            // Get section
            if(lpTag.section != '')
            {
            	elem = this.GetObj('LEIEMTSection');
            	updated = true;
            	elem.innerHTML = lpTag.section;
            }

            // Get Engagement impression count
            var dispEngs = this.store.impDisplay;
            if(typeof(dispEngs) != 'undefined')
            {   
            	var engCnt = dispEngs.length;
	            elem = this.GetObj('LEIENGcnt');
            	if(elem.innerHTML != engCnt)
		        {    
		            updated = true;
		            elem.innerHTML = engCnt;
		            elem.onclick = function(){that.dispEngInfo()};
                    elem.className='emtDebugInfo';
		        }
			}

			// Get Embedded Engagement count
            var emds = this.store.pagediv;
            if(typeof(emds) != 'undefined')
            {   
            	var embCnt = emds.length;
	            elem = this.GetObj('LEIEMBcnt');
            	if(elem.innerHTML != embCnt)
		        {    
		            updated = true;
		            elem.innerHTML = embCnt;
		            elem.onclick = function(){that.dispEMBInfo()};
                    elem.className='emtDebugInfo';
		        }
			}

			// Get closed engagement count
			var closEngs = this.store.impClose;
			if(typeof(closEngs)!='undefined')
			{
            	var engCnt = closEngs.length;
	            elem = this.GetObj('LEIClosedcnt');
            	if(elem.innerHTML != engCnt)
		        {    
		            updated = true;
		            elem.innerHTML = engCnt;
		            elem.onclick = function(){that.closedEngInfo()};
                    elem.className='emtDebugInfo';
		        }
			}

			// Get tag load time
			elem = this.GetObj('LEILoadTime');
			var startTime = lpTag._timing.start||0;
			var readyTime = lpTag._timing.contReady||0;

			var loadTime = (readyTime - startTime)>0?(readyTime - startTime):'N/A';
			if((elem.innerHTML === this.noValueStr))
			{
				updated = true;
				elem.innerHTML = loadTime + 'ms';
			}

            this.leChatRef = (typeof (lpTagConfig) != "undefined") && (typeof (lpTagConfig.tagPlugins) != "undefined") ? lpTagConfig.tagPlugins : null;
            this.leChatProps.ver = (typeof (lpTagConfig) != "undefined") ? ' (' + lpTagConfig._ver + ')' : '';

            // if (typeof (lpTagConfig) != "undefined") {
            //     this.leChatProps.ver = ' (VS: ' + lpTagConfig._ver + ')';
            // }

            // if (typeof (LEChat) != "undefined" && typeof (LEChat.conf) != "undefined" && typeof (LEChat.conf.ver) != "undefined") {
            //     this.leChatProps.ver += ' (LE: ' + LEChat.conf.ver + ')';
            // }

            var lpTagVer = typeof (lpTag) != "undefined" ? lpTag._v : this.noValueStr;
            elem = this.GetObj('LEILPTAGver');
            if (elem.innerHTML != lpTagVer) {
                updated = true;
                elem.innerHTML = lpTagVer;
            }

            var tagVer = typeof (lpTag) != "undefined" ? lpTag._tagv : this.noValueStr;
            elem = this.GetObj('LEITAGver');
            if (elem.innerHTML != tagVer) {
                updated = true;
                elem.innerHTML = tagVer;
            }

            // var srvVer = this.noValueStr;
            // if (typeof(lpMTagConfig.serverVer)!='undefined') {
            //     srvVer = lpMTagConfig.serverVer;
            //     if (typeof(lpMTagConfig.serverBuild)!='undefined') {
            //         srvVer = srvVer + ' b' + lpMTagConfig.serverBuild;
            //     }
            // }
            // elem = this.GetObj('LEISRVver');
            // if (elem.innerHTML != srvVer) {
            //     updated = true;
            //     elem.innerHTML = srvVer;
            // }


            // var dbCnt = this.noValueStr;
            // if (typeof(lpMTagConfig.dynButton)!='undefined' && lpMTagConfig.dynButton.length>0) {
            //     dbCnt = lpMTagConfig.dynButton.length;
            // }
            // elem = this.GetObj('LEIDBcnt');
            // if (elem.innerHTML != dbCnt) {
            //     updated = true;
            //     elem.innerHTML = dbCnt;
            //     elem.onclick = function () {that.dynButtonInfo();};
            //     elem.className='emtDebugInfo';
            // }

            // var sbCnt = this.noValueStr;
            // if (typeof(lpMTagStatic)!='undefined') {
            //     for (var name in lpMTagStatic) {
            //         if (name.indexOf('lpStaticBut')!=-1) {
            //             if (sbCnt == this.noValueStr) { sbCnt = 0;}
            //             sbCnt++;
            //         }
            //     }
            // }
            // elem = this.GetObj('LEISBcnt');
            // if (elem.innerHTML != sbCnt) {
            //     updated = true;
            //     elem.innerHTML = sbCnt;
            //     elem.onclick = function () {that.dispEngInfo();};
            //     elem.className='emtDebugInfo';
            // }

            // var invCnt = this.noValueStr;
            // var cnt = 0;
            // for (var name in lpMTagConfig) {
            //     if (name.indexOf('inviteMC')!=-1) {
            //         if (parseInt(name.replace(/inviteMC/,''),10)>0) {
            //             cnt++;
            //         }
            //     }
            //     else if (name.indexOf('invite')!=-1) {
            //         if (parseInt(name.replace(/invite/,''),10)>0) {
            //             cnt++;
            //         }
            //     }
            // }
            // if (cnt>0) {
            //     invCnt = cnt;
            // }
            // elem = this.GetObj('LEIINVcnt');
            // if (elem.innerHTML != invCnt) {
            //     updated = true;
            //     elem.innerHTML = invCnt;
            //     elem.onclick = function () {that.invitationInfo();};
            //     elem.className='emtDebugInfo';
            // }

            if (this.counters.logOK > 0) {
                elem = this.GetObj('LEIOKcnt');
                if (elem.innerHTML != this.counters.logOK) {
                    updated = true;
                    elem.innerHTML = this.counters.logOK;
                }
                elem.className='emtDebugOK';
            }

            if (this.counters.logWarn > 0) {
                elem = this.GetObj('LEIWARNcnt');
                if (elem.innerHTML != this.counters.logWarn) {
                    updated = true;
                    elem.innerHTML = this.counters.logWarn;
                }
                elem.className='emtDebugWarn';
                elem.onclick = function () {that.logShowErrWarn('warn');};

                if (this.counters.logErr == 0) {
                    elem = this.GetObj('LEIStatusImage');
                    elem.innerHTML = "Warning";
                    elem.style.cursor ='pointer';
                    elem.onclick = function () {that.maximizeAll(); that.logShowErrWarn('warn');};
                 }
            }

            if (this.counters.logErr > 0) {
                elem = this.GetObj('LEIERRcnt');
                if (elem.innerHTML != this.counters.logErr) {
                    updated = true;
                    elem.innerHTML = this.counters.logErr;
                }
                elem.className='emtDebugError';
                elem.onclick = function () {that.logShowErrWarn('error');};

                elem = this.GetObj('LEIStatusImage');
                elem.innerHTML = 'Error';
                elem.style.cursor ='pointer';
                elem.onclick = function () {that.maximizeAll(); that.logShowErrWarn('error');};
            }

            // if (this.counters.connGET > 0) {
            //     elem = this.GetObj('LEIGETcnt');
            //     if (elem.innerHTML != this.counters.connGET) {
            //         updated = true;
            //         elem.innerHTML = this.counters.connGET;
            //     }
            // }

            // if (this.counters.connPOST > 0) {
            //     elem = this.GetObj('LEIPOSTcnt');
            //     if (elem.innerHTML != this.counters.connPOST) {
            //         updated = true;
            //         elem.innerHTML = this.counters.connPOST;
            //     }
            // }

            // elem = this.GetObj('leChatVer');
            // if (elem.innerHTML != this.leChatProps.ver) {
            //     updated = true;
            //     elem.innerHTML = this.leChatProps.ver;
            // }

            // elem = this.GetObj('LEIEMcntLPChat'); // calc the current number of inPage and total embedded buttons
            // if (this.leChatProps.numberOfButtons === 0 || this.leChatProps.numberOfButtonsInPage === 0) {
            //     this.leChatProps.numberOfButtons = this.leChatProps.getNumberOfElements(this.leChatProps.engagementType.button, false);
            //     this.leChatProps.numberOfButtonsInPage = this.leChatProps.getNumberOfElements(this.leChatProps.engagementType.button, true);
            // }

            // if (elem.innerHTML != this.leChatProps.numberOfButtons) {
            //     updated = true;
            //     elem.className='emtDebugInfo';
            //     elem.innerHTML = '<span id="embeddedButtons">' +  this.leChatProps.numberOfButtons  + '</span><span id="embededLoadedButtons">(' + this.leChatProps.numberOfButtonsInPage + ')</span>';
            //     elem = this.GetObj('embeddedButtons');
            //     elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.button, false);};
            //     elem = this.GetObj('embededLoadedButtons');
            //     elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.button, true);}
            // }

            // elem = this.GetObj('LEISBcntLPChat');

            // if(this.leChatProps.numberOfStickyButtons === 0 || this.leChatProps.numberOfStickyButtonsInPage === 0) {
            //     this.leChatProps.numberOfStickyButtons = this.leChatProps.getNumberOfElements(that.leChatProps.engagementType.sticky_button, false);
            //     this.leChatProps.numberOfStickyButtonsInPage = this.leChatProps.getNumberOfElements(that.leChatProps.engagementType.sticky_button, true);
            // }

            // if (elem.innerHTML != this.leChatProps.numberOfStickyButtons) {
            //     updated = true;
            //     elem.className='emtDebugInfo';
            //     elem.innerHTML = '<span id="stickyButtons">' +  this.leChatProps.numberOfStickyButtons  + '</span><span id="stickyButtonsLoaded">(' + this.leChatProps.numberOfStickyButtonsInPage + ')</span>';
            //     elem = this.GetObj('stickyButtons');
            //     elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.sticky_button, false);};
            //     elem = this.GetObj('stickyButtonsLoaded');
            //     elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.sticky_button, true);}
            // }
            // elem = this.GetObj('LEIINVcntLPChat');
            // if(this.leChatProps.numberOfInvitations === 0 || this.leChatProps.numberOfInvitationsInPage === 0) {
            //     this.leChatProps.numberOfInvitations = this.leChatProps.getNumberOfElements(this.leChatProps.engagementType.invitation, false);
            //     this.leChatProps.numberOfInvitationsInPage = this.leChatProps.getNumberOfElements(this.leChatProps.engagementType.invitation, true);
            // }
            // if (elem.innerHTML != this.leChatProps.numberOfInvitations) {
            //     updated = true;
            //     elem.className='emtDebugInfo';
            //     elem.innerHTML = '<span id="invitations">' +  this.leChatProps.numberOfInvitations  + '</span><span id="invitationsLoaded">(' + this.leChatProps.numberOfInvitationsInPage + ')</span>';
            //     elem = this.GetObj('invitations');
            //     elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.invitation, false);};
            //     elem = this.GetObj('invitationsLoaded');
            //     elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.invitation, true);}
            // }

        }
        this.timerRef = setTimeout(function() {that.updateConfig();},this.timerPeriod*1000);
    };

    this.minimizeAll = function() {
        //console.log('minimizeAll');
        var that = this;

        if (this.toolsShown) {
            this.toggleTools();
        }
        if (this.logShown) {
            this.toggleLog();
        }

        this.hideObj('LEIMonitorWindow');
        this.hideObj('LEIMainLogWindow');

        var elem = this.GetObj('LEIImgMinimize');
        elem.className = 'LEIMaxBtn';
        elem.onclick = function () {that.maximizeAll();};

        return false;
    };

    this.closeWindow = function () {
    	var parentNd = document.body;
    	var childNd = document.getElementById('LEImainDiv');
    	parentNd.removeChild(childNd);
    };

    this.showTR = function (id) {
        //console.log('showTR');
        if (this.browser == 'IE') {
            this.GetObj(id).style.display='block';
        }
        else {
            this.GetObj(id).style.display='table-row';
        }
        this.showObj(id, false);
    };

    this.maximizeAll = function() {
        //console.log('maximizeAll');
        var that = this;

        this.showTR('LEIMonitorWindow');

        var elem = this.GetObj('LEIImgMinimize');
        elem.className = 'LEIMiniBtn';
        elem.onclick = function () {that.minimizeAll();};

        return false;
    };

    this.minimizeMsgDiv = function() {
        //console.log('minimizeMsgDiv');
        this.hideMsgWindow();
        return false;
    };

    this.resizeShowHideImage = function () {
        var elem = this.GetObj('LEIStatusResize');
        if (this.msgShown) {
            var that=this;
            elem.className = 'LEIStatusResize';
            elem.onmousedown = function(event) { that.resizeStart('LEILogWindow',event); };
        }
        else {
            elem.className = 'LEIStatusNOResize';
            elem.onmousedown = null;
        }
    };

    this.resizeObj = null;
    this.resized = false;
    this.resizeStart = function(id,event) {
        //console.log('resizeStart');
        if (!this.msgShown) {
            return false;
        }
        this.resizeObj = this.GetObj(id);
        if (this.resizeObj== null) {
            alert('NO resize Object:'+id);
            return;
        }
        this.resized = true;
        var x,y;
        // Get cursor position with respect to the page.
        if (this.browser == 'IE') {
            x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
            y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
        }
        else {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
        }

        // Save starting positions of cursor and element.
        this.resizeCursorStartX = x;
        this.resizeCursorStartY = y;
        this.resizeElStartDimen  = this.getElWidthHeight(id);

        // Capture mousemove and mouseup events on the page.
        if (this.browser == 'IE') {
            document.attachEvent("onmousemove", lpMTagDebug.resizeGo);
            document.attachEvent("onmouseup",   lpMTagDebug.resizeStop);
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        else {
            document.addEventListener("mousemove", lpMTagDebug.resizeGo,   true);
            document.addEventListener("mouseup",   lpMTagDebug.resizeStop, true);
            event.preventDefault();
        }

        return false;
    };

    this.resizeGo = function(event) {
        //console.log('resizeGo'+ ' w='+lpMTagDebug.resizeElStartDimen.width + ' h='+lpMTagDebug.resizeElStartDimen.height + ' curX:'+lpMTagDebug.resizeCursorStartX + ' curY:'+lpMTagDebug.resizeCursorStartY);

        var x, y;

        // Get cursor position with respect to the page.
        if (lpMTagDebug.browser == 'IE') {
            x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
            y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
        }
        else {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
        }
        var width = lpMTagDebug.resizeElStartDimen.width + (x - lpMTagDebug.resizeCursorStartX);
        var height = lpMTagDebug.resizeElStartDimen.height + (y - lpMTagDebug.resizeCursorStartY);

        if (width>=0) {
            lpMTagDebug.resizeObj.style.width = width + 'px';
        }
        if (height>=0) {
            lpMTagDebug.resizeObj.style.height = height + 'px';
        }

        var dimension = lpMTagDebug.getElWidthHeight('LEIMainLogWindow');
        if (width < dimension.width) {
            if (width>=0) {
                lpMTagDebug.resizeObj.style.width = (dimension.width) + 'px';
            }
        }

        return false;
    };

    this.resizeStop = function() {
        //console.log('resizeStop');
        // Stop capturing mousemove and mouseup events.
        if (lpMTagDebug.browser == 'IE') {
            document.detachEvent("onmousemove", lpMTagDebug.resizeGo);
            document.detachEvent("onmouseup",   lpMTagDebug.resizeStop);
        }
        else {
            document.removeEventListener("mousemove", lpMTagDebug.resizeGo,   true);
            document.removeEventListener("mouseup",   lpMTagDebug.resizeStop, true);
        }

        return false;
    };

    this.getElWidthHeight = function (id, limitByID) {
        //console.log('getElWidthHeight');
        var elem = this.GetObj(id);
        if (elem==null) {
            alert('Error getting the element:'+id);
            return false;
        }

        var pointUL = {};
        pointUL.x = elem.offsetLeft;
        pointUL.y = elem.offsetTop;
        var parent = elem.offsetParent;
        while (parent && parent.id!=limitByID && (parent.tagName.toUpperCase() != 'BODY')) {
            pointUL.x += parent.offsetLeft;
            pointUL.y += parent.offsetTop;
            parent = parent.offsetParent;
        }
        var pointBR = {};
        pointBR.x = pointUL.x + elem.offsetWidth;
        pointBR.y = pointUL.y + elem.offsetHeight;
        return {width: (pointBR.x-pointUL.x) , height: (pointBR.y-pointUL.y), ul : pointUL, br : pointBR};
    };

    this.dragObj = null;
    this.DragStart = function(id,event) {
        if (this.toolsShown) {
            this.hideObj('LEIToolsDiv');
            this.toolsShown = false;
        }

        this.dragObj = this.GetObj(id);
        if (this.dragObj== null) {
            alert('NO drag Object');
            return;
        }
        var x,y;
        // Get cursor position with respect to the page.
        if (this.browser == 'IE') {
            x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
            y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
        }
        else {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
        }

        //console.log('DragStart x='+x + ' y='+y);

        // Save starting positions of cursor and element.
        this.dragCursorStartX = x;
        this.dragCursorStartY = y;
        this.dragElStartLeft  = parseInt(this.dragObj.style.left, 10);
        this.dragElStartTop   = parseInt(this.dragObj.style.top,  10);

        if (isNaN(this.dragElStartLeft)) {
            this.dragElStartLeft = 0;
        }
        if (isNaN(this.dragElStartTop))  {
            this.dragElStartTop  = 0;
        }

        // Update element's z-index.
        //this.dragObj.style.zIndex = ++this.dragzIndex;

        // Capture mousemove and mouseup events on the page.
        if (this.browser == 'IE') {
            document.attachEvent("onmousemove", lpMTagDebug.dragGo);
            document.attachEvent("onmouseup",   lpMTagDebug.dragStop);
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        else {
            document.addEventListener("mousemove", lpMTagDebug.dragGo,   true);
            document.addEventListener("mouseup",   lpMTagDebug.dragStop, true);
            event.preventDefault();
        }
        return false;
    };

    this.dragGo = function(event) {

        var x, y;

        // Get cursor position with respect to the page.
        if (lpMTagDebug.browser == 'IE') {
            x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
            y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
        }
        else {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
        }
        ////console.log('DragGo x='+x +' y='+y);
        // Move drag element by the same amount the cursor has moved.
        var posx = lpMTagDebug.dragElStartLeft + x - lpMTagDebug.dragCursorStartX;
        if (posx<1) {
            posx=1;
        }
        var posy = lpMTagDebug.dragElStartTop  + y - lpMTagDebug.dragCursorStartY;
        if (posy<1) {
            posy=1;
        }
        lpMTagDebug.dragObj.style.left = posx + "px";
        lpMTagDebug.dragObj.style.top  = posy + "px";

        if (lpMTagDebug.browser == 'IE') {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        else {
            event.preventDefault();
        }
        return false;
    };

    this.dragStop = function() {
        ////console.log('DragStop');
        // Stop capturing mousemove and mouseup events.
        if (lpMTagDebug.browser == 'IE') {
            document.detachEvent("onmousemove", lpMTagDebug.dragGo);
            document.detachEvent("onmouseup",   lpMTagDebug.dragStop);
        }
        else {
            document.removeEventListener("mousemove", lpMTagDebug.dragGo,   true);
            document.removeEventListener("mouseup",   lpMTagDebug.dragStop, true);
        }
        return false;
    };

    this.hideObj = function(id, useBlock) {
        if (typeof(useBlock)=='undefined') {
            useBlock = true;
        }
        var el = this.GetObj(id);
        if (el!=null) {
            el.style.visibility = 'hidden';
            if (useBlock) {
                el.style.display = 'none';
            }
        }
    };

    this.showObj = function(id, useBlock) {
        if (typeof(useBlock)=='undefined') {
            useBlock = true;
        }
        var el = this.GetObj(id);
        if (el!=null) {
            el.style.visibility = 'visible';
            if (useBlock) {
                el.style.display = 'block';
            }
        }
    };

    this.Display = function (str, level, source) {
        //console.log('Display');
        if (str.indexOf('Garbage Collection')>-1) {
            this.garbColStrCnt++;
            if (this.garbColStrCnt==10) {
                str = 'PAUSING LOG DISPLAY';
                level = 'WARN';
            }
            else if (this.garbColStrCnt>10) {
                return;
            }
        }
        else {
            this.garbColStrCnt = 0;
        }

        if (str.indexOf('GET')>-1) {
            this.counters.connGET++;
        }

        if (str.indexOf('POST')>-1) {
            this.counters.connPOST++;
        }
        var pnt,
            idx,
            event;
        if (str.indexOf('EVENT')>-1) { // store the events separately
            if (str.indexOf('DynBut')>-1) {// dynamic button event
                // which button
                var butID = null;
                pnt = null;
                idx = str.indexOf('lpMTagConfig.dynButton');
                if (idx!=-1) {
                    pnt =  idx+'lpMTagConfig.dynButton'.length;
                    butID = parseInt(str.substr(pnt),10);
                }

                if (butID==null) {
                    //probably multichannel button

                    idx = str.indexOf('DynBut') + 'DynBut '.length;
                    var butName = str.substring(idx,(str.indexOf('EVENT')-1));
                    for (var i=0;i<lpMTagConfig.dynButton.length; i++) {
                        if (lpMTagConfig.dynButton[i].name == butName) {
                            butID = i;
                            break;
                        }
                    }
                }

                event = str.substr(str.indexOf('EVENT') +' EVENT:'.length);

                if (typeof(this.eventLog.dynButton['but'+butID])=='undefined') {
                    this.eventLog.dynButton['but'+butID] = [];
                }
                this.eventLog.dynButton['but'+butID][this.eventLog.dynButton['but'+butID].length] = event;

                //console.log('Event DB='+event);
            }
            else if (str.indexOf('lpMTagConfig.invite')>-1) {// invite event
                // which invite
                idx = str.indexOf('lpMTagConfig.invite');
                pnt =  idx+'lpMTagConfig.invite'.length;
                var invID = parseInt(str.substr(pnt),10);
                if (isNaN(invID)) {
                    pnt = idx+'lpMTagConfig.inviteMC'.length;
                    invID = parseInt(str.substr(pnt),10);
                }
                event = str.substr(pnt + invID.toString().length +' EVENT: '.length);

                if (typeof(this.eventLog.invite['inv'+invID])=='undefined') {
                    this.eventLog.invite['inv'+invID] = [];
                }
                this.eventLog.invite['inv'+invID][this.eventLog.invite['inv'+invID].length] = event;

            }
        }


        if (level == 'ERROR') {
            this.counters.logErr ++;
        }
        else if (level == 'EXEC-OK') {
            this.counters.logOK ++;
        }
        else if (level == 'WARN') {
            this.counters.logWarn ++;
        }
        else {
            this.counters.logOK ++;
        }
        this.counters.logLine ++;

        if (this.log.length == this.logMaxLines) {
            this.log.shift();
        }

        var timeStamp = new Date();
        var hours = timeStamp.getHours();
        var minutes = timeStamp.getMinutes();
        var seconds = timeStamp.getSeconds();

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        var time = hours + ':' + minutes + ':' + seconds;
        if (typeof(source)=='undefined') {source = 'Not specified';}
        var logLine = {'msg':str, 'time': time,'level':level, source : source};
        if (typeof(this.msgSources[source])=='undefined') {
            this.msgSources[source] = {source : source};
        }

        if (level == 'ERROR') {
            this.logErr[this.logErr.length] = logLine;
        }
        else if (level == 'WARN') {
            this.logWarn[this.logWarn.length] = logLine;
        }

        if (this.logStatus!=this._LOG_STOP) {
            this.log[this.log.length] = logLine;
            //console.log('length='+this.log.length);
            if (this.logShown && this.logStatus!=this._LOG_PAUSE) {
                this.printLogLine(logLine);
            }
        }
    };

    this.displayFullLog = function(log) {
        //console.log('displayFullLog');
        this.clearLogDisplay();
        for (var i=0; i<log.length; i++) {
            this.printLogLine(log[i]);
        }
    };

    this.clearLogDisplay = function() {
        //console.log('clearLogDisplay');
        var divE = this.GetObj('LEILogWindow');
        divE.innerHTML = '';
    };

    this.logShowErrWarn = function(logType) {
        //console.log('logShowErrWarn');
        if (this.logShown) {
            this.toggleLog();
        }
        if (this.toolsShown) {
            this.toggleTools();
        }

        var log;
        if (logType=='warn') {
            log = this.logWarn;
        }
        else if (logType=='error') {
            log = this.logErr;
        }
        else {
            alert('wrong logType='+logType);
            return;
        }

        this.showMsgWindow(false, 'Error Messages from Log !!!Not updated Live!!!', '',{width: 400, height: this.maxLogWindowMaxHeight});

        this.displayFullLog(log);
        return false;
    };

    this.printLogLine = function (logLine) {
        //console.log('printLogLine');
        var inFilter = true;
        if (this.activeFilter.length > 0 ) {
            inFilter = false;
            for (var i=0; i < this.activeFilter.length ; i++) {
                if (logLine.source == this.activeFilter[i]) {
                    inFilter = true;
                    break;
                }
            }
            if (!inFilter) {
                return;
            }
        }
        var styleClass = '';
        if (logLine.level == 'ERROR') {
            styleClass = 'LEILogMessageERROR';
        }
        else if (logLine.level == 'EXEC-OK') {
            styleClass = 'LEILogMessageOK';
        }
        else if (logLine.level == 'WARN') {
            styleClass = 'LEILogMessageWARN';
        }
        else {
            styleClass = 'LEILogMessageDEBUG';
        }

        var divE = this.GetObj('LEILogWindow');
        var textDiv = document.createElement('div');
        textDiv.id = 'mtagTextDiv-'+ this.counters.logLine;
        textDiv.className = styleClass;
        textDiv.innerHTML = (this.showTimeinLog?(logLine.time + ' '):' ') + logLine.msg;
        if (divE.firstChild != null) {
            divE.insertBefore(textDiv,divE.firstChild);
        }
        else {
            divE.appendChild(textDiv);
        }
        var dimensions = this.getElWidthHeight('LEILogWindow');
        var elem;
        if (!this.resized && dimensions.height > this.maxLogWindowMaxHeight) {

            elem = this.GetObj('LEILogWindow');
            elem.style.height = this.maxLogWindowMaxHeight + 'px';
            if (!this.logWindowDimensionLimited) {
                elem.style.width = (dimensions.width + 15) + 'px';
            }
            elem.style.overflow = 'auto';
            this.logWindowDimensionLimited = true;
        }

        if (!this.resized && dimensions.width > this.maxLogWindowMaxWidth) {
            elem = this.GetObj('LEILogWindow');
            elem.style.width = this.maxLogWindowMaxWidth + 'px';
            elem.style.overflow = 'auto';
            this.logWindowDimensionLimited = true;
        }
    };

    this.getUdes = function () {
        //console.log('getUdes');
        if (typeof(lpMTagConfig)!='undefined') {
            this.ude.page = lpMTagConfig.pageVar;
            this.ude.session = lpMTagConfig.sessionVar;
            this.ude.visitor = lpMTagConfig.visitorVar;
        }
    };

    this.showUdes = function () {
        //console.log('showUdes');
        if (this.logShown) {
            this.toggleLog();
        }
        if (this.toolsShown) {
            this.toggleTools();
        }

        var html = '<b>Page UDEs</b><br />';
        html += this.objectToString(this.ude.page, undefined, true, 'LEIGeneralInfo', false);
        html += '<br /><b>Session UDEs</b>';
        html += this.objectToString(this.ude.session, undefined, true, 'LEIGeneralInfo', false);
        html += '<br /><b>Visitor UDEs</b>';
        html += this.objectToString(this.ude.visitor, undefined, true, 'LEIGeneralInfo', false);

        this.showMsgWindow(false, 'UDEs at page start', html,{width: 400, height: this.maxLogWindowMaxHeight});
        return false;
    };

    this.DisplayArray = function (data, source) {
        //console.log('DisplayArray');
        for (var i=0; i<data.length; i++) {
            var d = data[i].split('<!!>');
            this.Display(d[0], d[1], source);
        }
    };

    this.GetPageWidth = function() {
        //console.log('GetPageWidth');
        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        }
        else if (document.body) {
            return document.body.clientWidth;
        }
        else {
            return window.innerWidth;
        }
    };

    this.SetCookie = function( name, value, expires, path, domain, secure ) {
        //console.log('SetCookie');
        // set time, it's in milliseconds
        var today = new Date();

        /*
        if the expires variable is set, make the correct
        expires time, the current script below will set
        it for x number of days, to make it for hours,
        delete * 24, for minutes, delete * 60 * 24
        */
        var expires_date = today.getTime();
        if ( typeof(expires)=='undefined' || expires == null ) {
            expires = expires * 1000 * 60 * 60 * 24;
            expires_date = today.getTime() + (expires);
        }

        document.cookie = name + '=' +escape( value ) +
            ( ( expires ) ? ';expires=' + expires_date.toGMTString() : '' ) +
            ( ( path ) ? ';path=' + path : '' ) +
            ( ( domain ) ? ';domain=' + domain : '' ) +
            ( ( secure ) ? ';secure' : '' );
    };

    this.DeleteCookie = function ( name, path, domain ) {
        //console.log('DeleteCookie');
        if ( this.GetCookie( name ) ) {
            document.cookie = name + "=" +
                ( ( path ) ? ';path=' + path : '') +
                ( ( domain ) ? ';domain=' + domain : '' ) +
                ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
        }
    };

    this.GetCookie = function( name ) {
        //console.log('GetCookie');
        var start = document.cookie.indexOf( name + '=' );
        var len = start + name.length + 1;
        if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
            return null;
        }
        if ( start == -1 ) {
            return null;
        }
        var end = document.cookie.indexOf( ';', len );
        if ( end == -1 ) {
            end = document.cookie.length;
        }
        return unescape( document.cookie.substring( len, end ) );
    };
    //////////////////////////////////////////////////////////////////////////////////////
    this.start = function () {
        //console.log('start');
        var that = this;

        // make sure that the zIndex is the highest on page
        if ((typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.emtDebugZindex)=='undefined')) {
            this.zindex = this.getMaxZindex()+1;
        }

        this.getUdes();
        this.browser = this.BrowserSniff();
        this.addCss();
        this.generateHTML();
        this.createGenericDiv('LEImainDiv', this.zindex, this.posX, this.posY, null, null,this.emtHtml, null, null, 0);

        if (typeof(lpMTagConfig)!='undefined' && typeof(lpMTagConfig.emtDebugPosRight)!='undefined' && lpMTagConfig.emtDebugPosRight) {
            this.posX = this.GetPageWidth() - this.GetObj('LEImainDiv').clientWidth-30;
        }
        //this.posX = this.GetPageWidth() - this.GetObj('mainDiv').clientWidth - 120;
        //if (this.posX<10) this.posX = 10;
        this.GetObj('LEImainDiv').style.left = this.posX + 'px';
        this.showObj('LEImainDiv', false);

        this.attachEvents();
        if (typeof(lpMTagConfig)!='undefined' && typeof(lpMTagConfig.emtDebugSuperMiniMode)!='undefined' && lpMTagConfig.emtDebugSuperMiniMode) {
            this.minimizeAll();
        }
        this.timerRef = setTimeout(function() {that.updateConfig();},500);
    };
}

var newScript = document.createElement('script'); 
newScript.type ='text/javascript'; 
//newScript.src = 'EMTLib.js';
newScript.appendChild(document.createTextNode(LEI));
newScript.appendChild(document.createTextNode("var lpMTagDebug= new LEI();lpMTagDebug.start();"));

document.getElementsByTagName('body')[0].appendChild(newScript);
