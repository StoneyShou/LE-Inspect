
function emtDebugLib() {
	this.ver = '1.0';
    this.specialServer = 'efimd';

    //this.baseURL = 'http://lpdevnew/training/emtdebuglib/';
    if (typeof(lpMTagConfig)!='undefined' && lpMTagConfig.lpServer == this.specialServer) {
        this.baseURL = 'http://'+ this.specialServer +'/emtdebug/';
    }
    else {
        this.baseURL = 'http://lpdevnew/training/emtdebuglib/';
    }
    this.cssUrl = this.baseURL + 'emtDebugLib.css';
    this.debugCookieName = 'LP_MTAG_DEBUG_MODE';

    this.chkSiteSrv = '';

    this.showTimeinLog = false;
    this.showLogFilter = false;
    this.activeFilter = [];

    this.msgShown = false;

    this.timerPeriod = (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.emtDebugTimerPeriod)=='undefined')?1:lpMTagConfig.emtDebugTimerPeriod;
    this.zindex = (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.emtDebugZindex)=='undefined')?1000:lpMTagConfig.emtDebugZindex;

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
    this.noValueStr = '&nbsp;-&nbsp;';

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

    this.progressSymbols = ['&nbsp;-&nbsp;','&nbsp;\\&nbsp;','&nbsp;|&nbsp;','&nbsp;/&nbsp;'];
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
        this.logCtrlPanelHTML = "<a id='emtDebugLibLogPlay' href='javascript:;'><img id='emtDebugLibLogPlayImg' src='"+this.baseURL+"images/pause.png' border='0'></img></a>  \
                                <a id='emtDebugLibLogStop' href='javascript:;'><img id='emtDebugLibLogStopImg' src='"+this.baseURL+"images/stop.png' border='0'></img></a>  \
                                <a id='emtDebugLibLogErase' href='javascript:;'><img id='emtDebugLibLogEraseImg' src='"+this.baseURL+"images/trashcan.png' border='0'></img></a>  \
                            ";
        this.emtHtml = "<table id='emtDebugLibMainTable' cellspacing='0' cellpadding='0' border='0'>\
                            <tbody>\
                                <tr>\
                                    <td>\
                                        <table id='emtDebugLibMainTitleTable' width='100%' height='26px' cellspacing='0' cellpadding='0' border='0'>\
                                            <tbody>\
                                                <tr>\
                                                    <td id='emtDebugTopLeft'></td>\
                                                    <td id='emtDebugLogo'></td>\
                                                    <td id='emtDebugLibMainTitle'>&nbsp;LE Monitor ver: "+this.ver+"</td>\
                                                    <td id='emtDebugLibMinimize'>\
                                                        <a href='javascript:;' alt='Show Config' title='Show Config'>\
                                                            <img id='emtDebugLibImgConfig' border='0' src='"+this.baseURL+"images/config.gif'></img>\
                                                        </a>\
                                                       <a href='javascript:;' alt='Admin Area' title='Admin Area'>\
                                                            <img id='emtDebugLibImgAdmin' border='0' src='"+this.baseURL+"images/admin.gif'></img>\
                                                        </a>\
                                                        <a href='javascript:;' alt='Visitor Logoff' title='Visitor Logoff'>\
                                                            <img id='emtDebugLibImgLogoff' border='0' src='"+this.baseURL+"images/logout.gif'></img>\
                                                        </a>\
                                                        <a href='javascript:;' alt='Minimize / Maximize' title='Minimize / Maximize'>\
                                                            <img id='emtDebugLibImgMinimize' border='0' src='"+this.baseURL+"images/minimize_box.png'></img>\
                                                        </a>\
                                                    </td>\
                                                    <td id='emtDebugLibTopRight'></td>\
                                                </tr>\
                                            </tbody>\
                                        </table>\
                                    </td>\
                                </tr>\
                                <tr id='emtDebugLibMonitorWindow'>\
                                    <td>\
                                        <table id='emtDebugMainMonitorTable' width='100%' cellspacing='0' cellpadding='0' border='0'>\
                                            <tbody>\
                                                <tr class='emtDebugLibmainTableTopRow'>\
                                                    <td colspan='2'>Site ID</td>\
                                                    <td colspan='2' class='emtDebugLibmainTableMiddleRow' id='emtDebugLibEMTsiteSrv'>"+this.noValueStr+"</td>\
                                                    <td colspan='3'>Content</td>\
                                                    <td colspan='2'>#Conn</td>\
                                                    <td colspan='3'>STATUS</td>\
                                                    <td colspan='3'>LECHAT <span id='leChatVer'></span></td>\
                                                    <td rowspan='2'>\
                                                        <a id='emtDebugLibToggleLog' href='javascript:;'>\
                                                            <img id='mainTableImgShowLog' src='"+this.baseURL+"images/showlog.png' border='0' height='35'></img>\
                                                        </a>\
                                                    </td>\
                                                </tr>\
                                                <tr class='emtDebugLibmainTableMiddleRow'>\
                                                    <td class='emtDebugLibmainTableTopRow'>EMT</td>\
                                                    <td class='emtDebugLibmainTableTopRow'>SRV</td>\
                                                    <td class='emtDebugLibmainTableTopRow'>LPTAG</td>\
                                                    <td class='emtDebugLibmainTableTopRow'>TAGV</td>\
                                                    <td>#DB</td>\
                                                    <td>#SB</td>\
                                                    <td>#INV</td>\
                                                    <td>POST</td>\
                                                    <td>GET</td>\
                                                    <td>ERR</td>\
                                                    <td>WARN</td>\
                                                    <td>OK</td>\
                                                    <td>#EB</td>\
                                                    <td>#SB</td>\
                                                    <td>#INV</td>\
                                                </tr>\
                                                <tr class='emtDebugLibmainTableBottomRow'>\
                                                    <td id='emtDebugLibEMTver'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibSRVver'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibLPTAGver'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibTAGver'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibDBcnt'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibSBcnt'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibINVcnt'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibPOSTcnt'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibGETcnt'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibERRcnt'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibWARNcnt'>"+this.noValueStr+"</td>\
                                                    <td class='emtDebugOK' id='emtDebugLibOKcnt'>"+this.noValueStr+"</td>\
                                                    <td id='emtDebugLibEMcntLPChat'>" + this.noValueStr + "</td>\
                                                    <td id='emtDebugLibSBcntLPChat'>" + this.noValueStr + "</td>\
                                                    <td id='emtDebugLibINVcntLPChat'>" + this.noValueStr + "</td>\
                                                    <td>\
                                                        <a id='emtDebugLibToggleTools' href='javascript:;'>\
                                                            <img id='emtDebugLibImgShowTools' src='"+this.baseURL+"images/tools.png' border='0' width='35'></img>\
                                                        </a>\
                                                    </td>\
                                                </tr>\
                                            </tbody>\
                                        </table>\
                                    </td>\
                                </tr>\
                                <tr id='emtDebugLibMainLogWindow'>\
                                    <td>\
                                        <table id='emtDebugLibMainLogWindowTable' width='100%' cellspacing='0' cellpadding='0' border='0'>\
                                            <tbody>\
                                                <tr id='emtDebugLibMessageWindowHeader'>\
                                                    <td id='emtDebugLibMessageWindowTitle'></td>\
                                                    <td id='emtDebugLibMessageWindowCtrlPanel'>\
                                                        </td>\
                                                    <td id='emtDebugLibMessageWindowClose'>\
                                                        <a href='javascript:;'>\
                                                            <img id='emtDebugLibImgCloseLog' border='0' src='"+this.baseURL+"images/close_box.png'></img>\
                                                        </a>\
                                                    </td>\
                                                </tr>\
                                                <tr id='emtDebugLibFilterRow' style='display:none;'>\
                                                    <td  colspan='3'>\
                                                        <div id='emtDebugLibFilterWindow'>FILTER GOES HERE</div>\
                                                    </td>\
                                                </tr\
                                                <tr>\
                                                    <td  colspan='3'>\
                                                        <div id='emtDebugLibLogWindow'></div>\
                                                    </td>\
                                                </tr\
                                            </tbody>\
                                        </table>\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <td>\
                                        <table id='emtDebugLibMainStatusTable' height='20px' width='100%' cellspacing='0' cellpadding='0' border='0'>\
                                            <tbody>\
                                                <tr>\
                                                    <td id='emtDebugLibStatusLeft'></td>\
                                                    <td id='emtDebugLibStatusCenter'>Status</td>\
                                                    <td class='emtDebugLibStatusDivider'></td>\
                                                    <td id='emtDebugLibStatusImageTD'><img id='emtDebugLibStatusImage' src='"+this.baseURL+"images/status_ok.png' border='0'></img></td>\
                                                    <td class='emtDebugLibStatusDivider'></td>\
                                                    <td id='emtDebugLibMsgStatusLogPlayerStatus'>Log Active</td>\
                                                    <td class='emtDebugLibStatusDivider'></td>\
                                                    <td id='emtDebugLibStatusProgress'></td>\
                                                    <td class='emtDebugLibStatusDivider'></td>\
                                                    <td id='emtDebugLibStatusTimeOnPage'></td>\
                                                    <td id='emtDebugLibStatusResize' class='emtDebugLibStatusResize'></td>\
                                                </tr>\
                                            </tbody>\
                                        </table>\
                                    </td>\
                                </tr>\
                            </tbody>\
                        </table>\
                        <div id='emtDebugLibToolsDiv'>\
                                    <table id='emtDebugLibToolsTable'> \
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibEMTinfo' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Config Info\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibPageinfo' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Page Info\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibShowUDEs' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Show UDEs\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibAdminArea' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Admin Area\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibLogOut' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Log Out\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibMarkVisitor' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Mark Visitor\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibSwitchSnipMode' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Clear Snip\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibStopStartEMT' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Stop EMT\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibEval' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
                                                Eval\
                                            </td>\
                                        </tr>\
                                        <tr onmouseover=\"this.style.background = '#0A246A'\" onmouseout=\"this.style.background='#D4D0C8'\">\
                                            <td id='emtDebugLibAbout' onmouseover=\"this.style.color = 'white'\" onmouseout=\"this.style.color='black'\">\
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
        if(document.createStyleSheet) {
            document.createStyleSheet(this.cssUrl);
        }

        else {
            var styles = "@import url('"+this.cssUrl+"');";
            var newSS=document.createElement('link');
            newSS.rel='stylesheet';
            newSS.href='data:text/css,'+escape(styles);
            document.getElementsByTagName("head")[0].appendChild(newSS);
        }
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
        var elem = this.GetObj('emtDebugLibMainTitle');
        var that = this;
        elem.onmousedown = function(event) { that.DragStart('emtDebugLibmainDiv',event); };
        //////////

        elem = this.GetObj('emtDebugLibImgMinimize');
        elem.onclick = function () {that.minimizeAll();};

        elem = this.GetObj('emtDebugLibToggleLog');
        elem.onclick = function () {that.toggleLog();};

        elem = this.GetObj('emtDebugLibToggleTools');
        elem.onclick = function () {that.toggleTools();};

        elem = this.GetObj('emtDebugLibImgCloseLog');
        elem.onclick = function () {that.minimizeMsgDiv();};

        elem = this.GetObj('emtDebugLibEMTinfo');
        elem.onclick = function () {that.showEMTinfo();};

        elem = this.GetObj('emtDebugLibPageinfo');
        elem.onclick = function () {that.pageInfo();};

        elem = this.GetObj('emtDebugLibLogOut');
        elem.onclick = function () {that.logOut();};

		elem = this.GetObj('emtDebugLibMarkVisitor');
        elem.onclick = function () {that.markVisitor();};

        elem = this.GetObj('emtDebugLibStopStartEMT');
        elem.onclick = function () {that.stopStartEMT();};

        elem = this.GetObj('emtDebugLibAbout');
        elem.onclick = function () {that.about();};

        elem = this.GetObj('emtDebugLibSwitchSnipMode');
        elem.onclick = function () {that.clearCompactSnippetMode();};

        elem = this.GetObj('emtDebugLibAdminArea');
        elem.onclick = function () {that.adminAreaLogin();};

        elem = this.GetObj('emtDebugLibEval');
        elem.onclick = function () {that.evalTool('display','', true);};

        elem = this.GetObj('emtDebugLibShowUDEs');
        elem.onclick = function () {that.showUdes();};

        if (this.msgShown) {
            elem = this.GetObj('emtDebugLibStatusResize');
            elem.className = 'emtDebugLibStatusResize';
            elem.onmousedown = function(event) { that.resizeStart('emtDebugLibLogWindow',event); };
        }
        else {
            elem = this.GetObj('emtDebugLibStatusResize');
            elem.className = 'emtDebugLibStatusNOResize';
        }

        elem = this.GetObj('emtDebugLibImgConfig');
        elem.onclick = function () { that.maximizeAll(); that.showEMTinfo();};

        elem = this.GetObj('emtDebugLibImgAdmin');
        elem.onclick = function () { that.adminAreaLogin(true);};

        elem = this.GetObj('emtDebugLibImgLogoff');
        elem.onclick = function () { that.logOut(true);};
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
                html += '<tr><td>' + this.objectToString(arrObjs[id], undefined, true, 'emtDebugLibGeneralInfoNoBorder', true) + '</tr>';
                html += '<tr><td>----------------------------------------------------------</td></tr>'
            }
        }

        html += '</table>';


        this.showMsgWindow(false, 'Engagement Info', html,{width: 400, height: this.maxLogWindowMaxHeight});
        return false;
    };

    this.statButtonInfo = function () {
        //console.log('statButtonInfo');
        if (this.toolsShown) {
            this.toggleTools();
        }

        if (this.logShown) {
            this.toggleLog();
        }

        var that = this;

        var html = '';
        if (typeof(lpMTagStatic)=='undefined') {
            html = 'NO buttons defined';
        }

        html = '<table>';

        for (var name in lpMTagStatic) {
            if (typeof(lpMTagStatic[name]) == 'object' && typeof(lpMTagStatic[name].config)!='undefined') {
                html += '<tr><th>Name:</th>\
                        <td>'+ lpMTagStatic[name].config.name +'</td></tr>';
                html += '<tr><th>Config:</th>\
                    <td>'+this.objectToString(lpMTagStatic[name].config, undefined, true,'emtDebugLibGeneralInfoNoBorder')+'</td></tr>';
                html += '<tr><td>------------------------------------------</td></tr>'
            }
        }
        html += '</table>';


        this.showMsgWindow(false, 'Static Button Info', html,{width: 400, height: that.maxLogWindowMaxHeight});
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

                html += "<table class='emtDebugLibGeneralInfo'>";
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
                        state = "<table class='emtDebugLibGeneralInfoNoBorder'><tr><th>Chat</th><td>"+objRef.buttonState.chat.name+"</td></tr><tr><th>Voice</th><td>"+objRef.buttonState.voice.name+"</td></tr></table>";
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
                             <td>'+this.objectToString(lpMTagConfig.dynButton[i], undefined, true,'emtDebugLibGeneralInfoNoBorder')+'</td></tr>';
                    html += '<tr><th>Overrides:</th>';
                    if (typeof(lpMTagConfig.dynButton[i].ovr)!='undefined') {
                        // there are some overrides so lets see which one
                        html += "<td><a id='emtDebugLibDBover"+i+"' href='javascript:;'>show overrides</a></td></tr>";
                        if (this.overrides == null) {
                            this.overrides = {};
                        }
                        var dbOvrRef = eval(lpMTagConfig.dynButton[i].ovr);
                        var text = 'Can not get Object';
                        if (dbOvrRef!=null) {
                            text  = this.objectToString(dbOvrRef, undefined, true,'emtDebugLibGeneralInfo');
                        }
                        this.overrides['emtDebugLibDBover'+i] = text;
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
                        text = this.objectToString(objRef.butConfig, undefined, true,'emtDebugLibGeneralInfoNoBorder', true);
                        if (this.overrides == null) {
                            this.overrides = {};
                        }
                        this.overrides['emtDebugLibDBMCover'+i] = text;
                        html += "<tr><th>Full Config:</th>\
                             <td><a id='emtDebugLibDBMCover"+i+"' href='javascript:;'>Show</td></tr>";
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
        var str = "<b>Invitation Overrides</b><br /><table class='emtDebugLibGeneralInfo'>";
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
            html += "<table class='emtDebugLibGeneralInfo'>";
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

        var html = '<b>EMT Debug and Tools Library ver: '+this.ver+'</b><br /><br />';
        html += '<b>Created By</b>: Efim Dimenstein (2008)<br />';
        html += '<b>Company</b>: Liveperson<br /><br />';
        html += '<b>Disclamer</b>: This is work in progress and should be treated as such.<br />';
        html += ' No guarantees are given on stability of this tool. Use at your own risk.<br /><br />';
        html += '<b>However suggestions and bug reports are welcome.<b><br /><br />';
        html += '<b>Send suggestion <a href="mailto:efim@liveperson.com?subject=EMT Debug Library Suggestion">email</a><b><br /><br />';
        html += '<b>Send bugreport <a href="mailto:efim@liveperson.com?subject=EMT Debug Library Bug Report">email</a><b><br />';

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
        var html = "<table id='emtDebugLibEvalTable' class='emtDebugLibGeneralInfoNoBorder'>\
                    <tr><td rowspan=2>\
                            <textarea id='emtDebugLibEvalInput' rows='3' cols='40'>{VALUE}</textarea>\
                        </td>\
                        <td>\
                            <input type='button' id='emtDebugLibEvalRun' value='Execute' class='emtDebugLibEvalToolBtn'></input><br />\
                        </td></tr><tr><td>\
                            <input type='button' id='emtDebugLibEvalContent' value='Show Content' class='emtDebugLibEvalToolBtn'></input><br />\
                        </td>\
                    </tr>\
                   </table>";
                html += "<hr />";

        if (typeof(title)=='undefined') {
            title = "Eval Tool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
                    <a id='emtDebugLibEvallpMTagConfig' href=javascript:;>lpMTagConfig</a>&nbsp;&nbsp;&nbsp;&nbsp;\
                    <a id='emtDebugLibEvallpMTag' href=javascript:;>lpMTag</a>&nbsp;&nbsp;&nbsp;&nbsp;\
                    <a id='emtDebugLibEvallpConnLib' href=javascript:;>lpConnLib</a>";
        }
        var value;
        if (action == 'display') {
            this.showMsgWindow(false, title, html.replace(/{VALUE}/g,''),{width: 400, height: this.maxLogWindowMaxHeight});
        }
        else if (action == 'eval') {
            // eval the code
            value = this.GetObj('emtDebugLibEvalInput').value;

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
                value = this.GetObj('emtDebugLibEvalInput').value;
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
                output = this.objectToString(objRef,undefined, true,'emtDebugLibGeneralInfo' , true);
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
        var elem = this.GetObj('emtDebugLibEvalRun');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('eval','',true);};
        }

        elem = this.GetObj('emtDebugLibEvalContent');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('logContent','',true);};
        }

        elem = this.GetObj('emtDebugLibEvallpMTagConfig');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('logContent','lpMTagConfig',true);};
        }

        elem = this.GetObj('emtDebugLibEvallpMTag');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('logContent','lpMTag',true);};
        }

        elem = this.GetObj('emtDebugLibEvallpConnLib');
        if (elem!=null) {
            elem.onclick = function () {that.evalTool('logContent','lpConnLib',true);};
        }
        return false;
    };

    this.adminAreaLogin = function (doNotOpenMenu) {
        if (doNotOpenMenu) {

        }
        else {
            this.toggleTools();
        }

        var server = lpMTagConfig.lpServer;
        if (server == 'chat.bankofamerica.com') {
            server = 'sec1.liveperson.net';
        }

        var url = 'https://'+ server + '/hc/web/public/pub/ma/lp/login.jsp?goto=home.jsp&site='+lpMTagConfig.lpNumber+'&useid=1';
        if (lpMTagConfig.lpServer == this.specialServer) {
            url += '&user=efim&pass=1';
        }
        window.open(url);
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

        var html = "<table class='emtDebugLibGeneralInfo'>";
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
        var elem = lpMTagDebug.GetObj('emtDebugLibObjectInfo-'+id);
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
                        text += "<tr><th><a href=javascript:; onclick='lpMTagDebug.toggleViewMode("+cnt+")'>" + name + "</a></th><td id='emtDebugLibObjectInfo-"+cnt+"' class='emtDebugLibHiddenTD'>" +retStr + "</td>";
                    }
                    else {
                        text += "<tr><th>" + name + "</th><td id='emtDebugLibObjectInfo-"+cnt+"'>" +retStr + "</td>";
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
                elem = this.GetObj('emtDebugLibLogPlay');
                elem.onclick = function () {that.logPlayer(that._LOG_PAUSE);};
                elem = this.GetObj('emtDebugLibLogPlayImg');
                elem.src = this.baseURL+'images/pause.png';
                elem = this.GetObj('emtDebugLibMsgStatusLogPlayerStatus');
                elem.innerHTML = 'Log Active';
                this.logStatus = action;
                this.clearLogDisplay();
                this.displayFullLog(this.log);
                break;
            case this._LOG_PAUSE:
                elem = this.GetObj('emtDebugLibLogPlay');
                elem.onclick = function () {that.logPlayer(that._LOG_PLAY);};
                elem = this.GetObj('emtDebugLibLogPlayImg');
                elem.src = this.baseURL+'images/play.png';
                elem = this.GetObj('emtDebugLibMsgStatusLogPlayerStatus');
                elem.innerHTML = 'Log Paused';
                this.logStatus = action;
                break;
            case this._LOG_STOP:
                elem = this.GetObj('emtDebugLibLogPlay');
                elem.onclick = function () {that.logPlayer(that._LOG_PLAY);};
                elem = this.GetObj('emtDebugLibLogPlayImg');
                elem.src = this.baseURL+'images/play.png';
                elem = this.GetObj('emtDebugLibMsgStatusLogPlayerStatus');
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
            var title = "<a id='emtDebugLibLogToggleTime' href=javascript:;><img src='"+this.baseURL+"images/time.png' border='0'/></a>" +
                        "&nbsp;&nbsp;<a id='emtDebugLibLogToggleFilter' href=javascript:;><img src='"+this.baseURL+"images/filter.png'  border='0'/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMT Log";
            this.showMsgWindow(true, title);
            var elem = this.GetObj('emtDebugLibLogToggleTime');
            elem.onclick = function () {that.toggleLogTime(); return false;};

            var elem = this.GetObj('emtDebugLibLogToggleFilter');
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
                    col[idx] += '<input name="emtDebugLibFilterChoice" value="' + name + '" type="checkbox" '+checked+'>'+name+'</input><br>';
                    (idx==0)? idx=1:idx=0;
                }
            }
            html += '<td>'+col[0]+'</td>';
            html += '<td>'+col[1]+'</td>';
            html += "<td align='center'>&nbsp;&nbsp;<a id='emtDebugLibLogToggleFilterApply' href=javascript:;><img src='" + this.baseURL + "images/apply.png' border='0'/></td></a>";
            html += "<td align='center'>&nbsp;&nbsp;<a id='emtDebugLibLogToggleFilterCancel' href=javascript:;><img src='" + this.baseURL + "images/cancel.png' border='0'/></td></a>";
            html += '</tr></table>';
            var el = this.GetObj('emtDebugLibFilterWindow');
            if (el!=null) {
                el.innerHTML = html;
                var that = this;
                var elem = this.GetObj('emtDebugLibLogToggleFilterApply');
                elem.onclick = function () {that.logFilterApply(); return false;};
                elem = this.GetObj('emtDebugLibLogToggleFilterCancel');
                elem.onclick = function () {that.logFilterCancel(); return false;};
            }
            this.showObj('emtDebugLibFilterRow');
        }
        else {
            this.hideObj('emtDebugLibFilterRow');
        }
    };

    this.logFilterCancel = function () {
        this.showLogFilter = !this.showLogFilter;
        this.activeFilter = [];
        this.hideObj('emtDebugLibFilterRow');
        this.displayFullLog(this.log);
    };

    this.logFilterApply = function () {
        this.showLogFilter = !this.showLogFilter;
        this.activeFilter = [];
        this.hideObj('emtDebugLibFilterRow');
        var elems = document.getElementsByName("emtDebugLibFilterChoice");
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
        this.hideObj('emtDebugLibMainLogWindow', true);
        this.GetObj('emtDebugLibLogWindow').innerHTML = '';
        this.resizeShowHideImage();
    };

    this.showMsgWindow = function (withLogCtrl, title, html, dimensions) {
        //console.log('showMsgWindow'+this.browser);
        this.msgShown = true;
        this.resizeShowHideImage();
        this.showTR('emtDebugLibMainLogWindow');
        this.showObj('emtDebugLibMainLogWindow', false);
        var elem;
        if (typeof(withLogCtrl)!='undefined' && withLogCtrl) {
            this.GetObj('emtDebugLibMessageWindowCtrlPanel').innerHTML = this.logCtrlPanelHTML;
            var that = this;
            elem = this.GetObj('emtDebugLibLogPlay');
            elem.onclick = function () {that.logPlayer(that._LOG_PAUSE);};

            elem = this.GetObj('emtDebugLibLogStop');
            elem.onclick = function () {that.logPlayer(that._LOG_STOP);};

            elem = this.GetObj('emtDebugLibLogErase');
            elem.onclick = function () {that.logPlayer(that._LOG_TRASH);};
        }
        else {
            this.GetObj('emtDebugLibMessageWindowCtrlPanel').innerHTML = '';
        }
        if (title) {
            this.GetObj('emtDebugLibMessageWindowTitle').innerHTML = title;
        }
        if (html) {
            this.GetObj('emtDebugLibLogWindow').innerHTML = html;
        }
        if (typeof(dimensions)!='undefined' && !this.resized) {
            elem = this.GetObj('emtDebugLibLogWindow');
            if (dimensions.width) {
                elem.style.width = dimensions.width + 'px';
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
            this.hideObj('emtDebugLibToolsDiv');
        }
        else {
            this.toolsShown = true;
            var elem;
            if (typeof(lpMTag)!='undefined') {
                elem = this.GetObj('emtDebugLibStopStartEMT');
                if (lpMTag.stopMTag){
                    elem.innerHTML = 'Start EMT';
                }
                else {
                    elem.innerHTML = 'Stop EMT';
                }
            }

            elem = this.GetObj('emtDebugLibSwitchSnipMode');
            if (this.GetCookie(this.debugCookieName) == this.debugCookieValue) {
                elem.innerHTML = 'Compact Snip';
            }
            else {
                elem.innerHTML = 'Clear Snip';
            }
            if (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.lpServer)=='undefined' || document.location.host != lpMTagConfig.lpServer) {
                this.hideObj('emtDebugLibSwitchSnipMode');
            }

            if (typeof(lpMTagConfig)=='undefined' || typeof(lpMTagConfig.lpServer)=='undefined' || typeof(lpMTagConfig.lpNumber)=='undefined') {
                this.hideObj('emtDebugLibAdminArea');
            }
            else {
                this.showObj('emtDebugLibAdminArea');
            }

            var dimensions = this.getElWidthHeight('emtDebugLibToggleTools','emtDebugLibmainDiv');
            elem = this.GetObj('emtDebugLibToolsDiv');
            elem.style.left = (dimensions.ul.x) + 'px';
            elem.style.top = (dimensions.br.y+3) + 'px';
            this.showObj('emtDebugLibToolsDiv');
        }
        return false;
    };

    this.updateConfig = function() {
        ////console.log('updateConfig');
        var that = this;
        var updated = false;

        var elem = this.GetObj('emtDebugLibStatusProgress');
        this.progressIdx++;
        if (this.progressIdx == this.progressSymbols.length) {
            this.progressIdx=0;
        }
        elem.innerHTML = this.progressSymbols[this.progressIdx];

        var timenow = new Date();
        var difDate = new Date();
        var dif = timenow.getTime() - this.timestart.getTime();
        difDate.setTime(dif);
        var minTxt =  (difDate.getUTCMinutes()>0)? (difDate.getUTCMinutes()+'m ') : '';
        var hourTxt = (difDate.getUTCHours()>0)?(difDate.getHours() + 'h '):'';
        var secTxt = difDate.getUTCSeconds() + 's';
        var timeText = hourTxt + minTxt + secTxt;
        elem = this.GetObj('emtDebugLibStatusTimeOnPage');
        elem.innerHTML = timeText;

        // Get info from lpTag
        // -- Change lpMTag to lpTag 
        // if (typeof(lpMTagConfig)!='undefined') {
        if (typeof(lpTag)!='undefined') {
            // var siteSrv = this.noValueStr;
            // if (typeof(lpMTagConfig.lpNumber)!='undefined') {
            //     siteSrv = lpMTagConfig.lpNumber;
            // }
            var siteSrv = lpTag.site || "Not Found";

            // -- Remove getting server info from old monitor tag
            // if (typeof(lpMTagConfig.lpServer)!='undefined') {
            //     var srv = lpMTagConfig.lpServer;
            //     var idx = srv.indexOf('.');
            //     if (idx!=-1) {
            //         var tmpsrv = srv.substr(0,idx);
            //         if (tmpsrv == 'server') {
            //             var idx1 =srv.substr(idx+1).indexOf('.');
            //             if (idx1 != -1) {
            //                 srv = srv.substr(0,idx+idx1+1);
            //             }
            //             else {
            //                 srv = tmpsrv;
            //             }
            //         }
            //         else {
            //             srv = tmpsrv;
            //         }
            //     }
            //     if (siteSrv==this.noValueStr) {
            //         siteSrv = '(' + srv + ')';
            //     }
            //     else {
            //         siteSrv += ' (' + srv + ')';
            //     }
            //     var chkSiteSrv = siteSrv;
            //     if (lpMTagConfig.redirectedFromSiteID) {
            //         siteSrv += '<br><span class="emtDebugRedirectString">Rdr from: '+ lpMTagConfig.redirectedFromSiteID + '</span>';
            //         chkSiteSrv += 'Rdr from: '+ lpMTagConfig.redirectedFromSiteID;
            //     }
            // }

            elem = this.GetObj('emtDebugLibEMTsiteSrv');
            // -- Remove check site server
            // if (chkSiteSrv != this.chkSiteSrv) {
            //     this.chkSiteSrv = chkSiteSrv;
                updated = true;
                elem.innerHTML = siteSrv;
            // }


            var emtVer = this.noValueStr;
            if (typeof(lpMTag)!='undefined') {
                emtVer = lpMTag.ver + ' b' + lpMTag.build;
            }
            elem = this.GetObj('emtDebugLibEMTver');
            if (elem.innerHTML != emtVer) {
                updated = true;
                elem.innerHTML = emtVer;
            }

            this.leChatRef = (typeof (lpTagConfig) != "undefined") && (typeof (lpTagConfig.tagPlugins) != "undefined") ? lpTagConfig.tagPlugins : null;
            this.leChatProps.ver = (typeof (lpTagConfig) != "undefined") ? ' (' + lpTagConfig._ver + ')' : '';

            if (typeof (lpTagConfig) != "undefined") {
                this.leChatProps.ver = ' (VS: ' + lpTagConfig._ver + ')';
            }

            if (typeof (LEChat) != "undefined" && typeof (LEChat.conf) != "undefined" && typeof (LEChat.conf.ver) != "undefined") {
                this.leChatProps.ver += ' (LE: ' + LEChat.conf.ver + ')';
            }

            var lpTagVer = typeof (lpTag) != "undefined" ? lpTag._v : this.noValueStr;
            elem = this.GetObj('emtDebugLibLPTAGver');
            if (elem.innerHTML != lpTagVer) {
                updated = true;
                elem.innerHTML = lpTagVer;
            }

            var tagVer = typeof (lpTag) != "undefined" ? lpTag._tagv : this.noValueStr;
            elem = this.GetObj('emtDebugLibTAGver');
            if (elem.innerHTML != tagVer) {
                updated = true;
                elem.innerHTML = tagVer;
            }

            var srvVer = this.noValueStr;
            if (typeof(lpMTagConfig.serverVer)!='undefined') {
                srvVer = lpMTagConfig.serverVer;
                if (typeof(lpMTagConfig.serverBuild)!='undefined') {
                    srvVer = srvVer + ' b' + lpMTagConfig.serverBuild;
                }
            }
            elem = this.GetObj('emtDebugLibSRVver');
            if (elem.innerHTML != srvVer) {
                updated = true;
                elem.innerHTML = srvVer;
            }


            var dbCnt = this.noValueStr;
            if (typeof(lpMTagConfig.dynButton)!='undefined' && lpMTagConfig.dynButton.length>0) {
                dbCnt = lpMTagConfig.dynButton.length;
            }
            elem = this.GetObj('emtDebugLibDBcnt');
            if (elem.innerHTML != dbCnt) {
                updated = true;
                elem.innerHTML = dbCnt;
                elem.onclick = function () {that.dynButtonInfo();};
                elem.className='emtDebugInfo';
            }

            var sbCnt = this.noValueStr;
            if (typeof(lpMTagStatic)!='undefined') {
                for (var name in lpMTagStatic) {
                    if (name.indexOf('lpStaticBut')!=-1) {
                        if (sbCnt == this.noValueStr) { sbCnt = 0;}
                        sbCnt++;
                    }
                }
            }
            elem = this.GetObj('emtDebugLibSBcnt');
            if (elem.innerHTML != sbCnt) {
                updated = true;
                elem.innerHTML = sbCnt;
                elem.onclick = function () {that.statButtonInfo();};
                elem.className='emtDebugInfo';
            }

            var invCnt = this.noValueStr;
            var cnt = 0;
            for (var name in lpMTagConfig) {
                if (name.indexOf('inviteMC')!=-1) {
                    if (parseInt(name.replace(/inviteMC/,''),10)>0) {
                        cnt++;
                    }
                }
                else if (name.indexOf('invite')!=-1) {
                    if (parseInt(name.replace(/invite/,''),10)>0) {
                        cnt++;
                    }
                }
            }
            if (cnt>0) {
                invCnt = cnt;
            }
            elem = this.GetObj('emtDebugLibINVcnt');
            if (elem.innerHTML != invCnt) {
                updated = true;
                elem.innerHTML = invCnt;
                elem.onclick = function () {that.invitationInfo();};
                elem.className='emtDebugInfo';
            }

            if (this.counters.logOK > 0) {
                elem = this.GetObj('emtDebugLibOKcnt');
                if (elem.innerHTML != this.counters.logOK) {
                    updated = true;
                    elem.innerHTML = this.counters.logOK;
                }
                elem.className='emtDebugOK';
            }

            if (this.counters.logWarn > 0) {
                elem = this.GetObj('emtDebugLibWARNcnt');
                if (elem.innerHTML != this.counters.logWarn) {
                    updated = true;
                    elem.innerHTML = this.counters.logWarn;
                }
                elem.className='emtDebugWarn';
                elem.onclick = function () {that.logShowErrWarn('warn');};

                if (this.counters.logErr == 0) {
                    elem = this.GetObj('emtDebugLibStatusImage');
                    elem.src = this.baseURL+'images/status_warn.png';
                    elem.style.cursor ='pointer';
                    elem.onclick = function () {that.maximizeAll(); that.logShowErrWarn('warn');};
                 }
            }

            if (this.counters.logErr > 0) {
                elem = this.GetObj('emtDebugLibERRcnt');
                if (elem.innerHTML != this.counters.logErr) {
                    updated = true;
                    elem.innerHTML = this.counters.logErr;
                }
                elem.className='emtDebugError';
                elem.onclick = function () {that.logShowErrWarn('error');};

                elem = this.GetObj('emtDebugLibStatusImage');
                elem.src = this.baseURL+'images/status_error.png';
                elem.style.cursor ='pointer';
                elem.onclick = function () {that.maximizeAll(); that.logShowErrWarn('error');};
            }

            if (this.counters.connGET > 0) {
                elem = this.GetObj('emtDebugLibGETcnt');
                if (elem.innerHTML != this.counters.connGET) {
                    updated = true;
                    elem.innerHTML = this.counters.connGET;
                }
            }

            if (this.counters.connPOST > 0) {
                elem = this.GetObj('emtDebugLibPOSTcnt');
                if (elem.innerHTML != this.counters.connPOST) {
                    updated = true;
                    elem.innerHTML = this.counters.connPOST;
                }
            }

            elem = this.GetObj('leChatVer');
            if (elem.innerHTML != this.leChatProps.ver) {
                updated = true;
                elem.innerHTML = this.leChatProps.ver;
            }

            elem = this.GetObj('emtDebugLibEMcntLPChat'); // calc the current number of inPage and total embedded buttons
            if (this.leChatProps.numberOfButtons === 0 || this.leChatProps.numberOfButtonsInPage === 0) {
                this.leChatProps.numberOfButtons = this.leChatProps.getNumberOfElements(this.leChatProps.engagementType.button, false);
                this.leChatProps.numberOfButtonsInPage = this.leChatProps.getNumberOfElements(this.leChatProps.engagementType.button, true);
            }

            if (elem.innerHTML != this.leChatProps.numberOfButtons) {
                updated = true;
                elem.className='emtDebugInfo';
                elem.innerHTML = '<span id="embeddedButtons">' +  this.leChatProps.numberOfButtons  + '</span><span id="embededLoadedButtons">(' + this.leChatProps.numberOfButtonsInPage + ')</span>';
                elem = this.GetObj('embeddedButtons');
                elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.button, false);};
                elem = this.GetObj('embededLoadedButtons');
                elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.button, true);}
            }

            elem = this.GetObj('emtDebugLibSBcntLPChat');

            if(this.leChatProps.numberOfStickyButtons === 0 || this.leChatProps.numberOfStickyButtonsInPage === 0) {
                this.leChatProps.numberOfStickyButtons = this.leChatProps.getNumberOfElements(that.leChatProps.engagementType.sticky_button, false);
                this.leChatProps.numberOfStickyButtonsInPage = this.leChatProps.getNumberOfElements(that.leChatProps.engagementType.sticky_button, true);
            }

            if (elem.innerHTML != this.leChatProps.numberOfStickyButtons) {
                updated = true;
                elem.className='emtDebugInfo';
                elem.innerHTML = '<span id="stickyButtons">' +  this.leChatProps.numberOfStickyButtons  + '</span><span id="stickyButtonsLoaded">(' + this.leChatProps.numberOfStickyButtonsInPage + ')</span>';
                elem = this.GetObj('stickyButtons');
                elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.sticky_button, false);};
                elem = this.GetObj('stickyButtonsLoaded');
                elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.sticky_button, true);}
            }
            elem = this.GetObj('emtDebugLibINVcntLPChat');
            if(this.leChatProps.numberOfInvitations === 0 || this.leChatProps.numberOfInvitationsInPage === 0) {
                this.leChatProps.numberOfInvitations = this.leChatProps.getNumberOfElements(this.leChatProps.engagementType.invitation, false);
                this.leChatProps.numberOfInvitationsInPage = this.leChatProps.getNumberOfElements(this.leChatProps.engagementType.invitation, true);
            }
            if (elem.innerHTML != this.leChatProps.numberOfInvitations) {
                updated = true;
                elem.className='emtDebugInfo';
                elem.innerHTML = '<span id="invitations">' +  this.leChatProps.numberOfInvitations  + '</span><span id="invitationsLoaded">(' + this.leChatProps.numberOfInvitationsInPage + ')</span>';
                elem = this.GetObj('invitations');
                elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.invitation, false);};
                elem = this.GetObj('invitationsLoaded');
                elem.onclick = function () {that.engagementLeChatInfo(that.leChatProps.engagementType.invitation, true);}
            }

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

        this.hideObj('emtDebugLibMonitorWindow');
        this.hideObj('emtDebugLibMainLogWindow');

        var elem = this.GetObj('emtDebugLibImgMinimize');
        elem.src = this.baseURL+'images/maximize_box.png';
        elem.onclick = function () {that.maximizeAll();};

        return false;
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

        this.showTR('emtDebugLibMonitorWindow');

        var elem = this.GetObj('emtDebugLibImgMinimize');
        elem.src = this.baseURL+'images/minimize_box.png';
        elem.onclick = function () {that.minimizeAll();};

        return false;
    };

    this.minimizeMsgDiv = function() {
        //console.log('minimizeMsgDiv');
        this.hideMsgWindow();
        return false;
    };

    this.resizeShowHideImage = function () {
        var elem = this.GetObj('emtDebugLibStatusResize');
        if (this.msgShown) {
            var that=this;
            elem.className = 'emtDebugLibStatusResize';
            elem.onmousedown = function(event) { that.resizeStart('emtDebugLibLogWindow',event); };
        }
        else {
            elem.className = 'emtDebugLibStatusNOResize';
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

        var dimension = lpMTagDebug.getElWidthHeight('emtDebugLibMainLogWindow');
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
            this.hideObj('emtDebugLibToolsDiv');
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
        var divE = this.GetObj('emtDebugLibLogWindow');
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

        this.showMsgWindow(false, 'Error Messages from Log &nbsp;&nbsp;&nbsp;!!!Not updated Live!!!', '',{width: 400, height: this.maxLogWindowMaxHeight});

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
            styleClass = 'emtDebugLibLogMessageERROR';
        }
        else if (logLine.level == 'EXEC-OK') {
            styleClass = 'emtDebugLibLogMessageOK';
        }
        else if (logLine.level == 'WARN') {
            styleClass = 'emtDebugLibLogMessageWARN';
        }
        else {
            styleClass = 'emtDebugLibLogMessageDEBUG';
        }

        var divE = this.GetObj('emtDebugLibLogWindow');
        var textDiv = document.createElement('div');
        textDiv.id = 'mtagTextDiv-'+ this.counters.logLine;
        textDiv.className = styleClass;
        textDiv.innerHTML = (this.showTimeinLog?(logLine.time + '&nbsp;&nbsp;'):'') + logLine.msg;
        if (divE.firstChild != null) {
            divE.insertBefore(textDiv,divE.firstChild);
        }
        else {
            divE.appendChild(textDiv);
        }
        var dimensions = this.getElWidthHeight('emtDebugLibLogWindow');
        var elem;
        if (!this.resized && dimensions.height > this.maxLogWindowMaxHeight) {

            elem = this.GetObj('emtDebugLibLogWindow');
            elem.style.height = this.maxLogWindowMaxHeight + 'px';
            if (!this.logWindowDimensionLimited) {
                elem.style.width = (dimensions.width + 15) + 'px';
            }
            elem.style.overflow = 'auto';
            this.logWindowDimensionLimited = true;
        }

        if (!this.resized && dimensions.width > this.maxLogWindowMaxWidth) {
            elem = this.GetObj('emtDebugLibLogWindow');
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
        html += this.objectToString(this.ude.page, undefined, true, 'emtDebugLibGeneralInfo', false);
        html += '<br /><b>Session UDEs</b>';
        html += this.objectToString(this.ude.session, undefined, true, 'emtDebugLibGeneralInfo', false);
        html += '<br /><b>Visitor UDEs</b>';
        html += this.objectToString(this.ude.visitor, undefined, true, 'emtDebugLibGeneralInfo', false);

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
        this.createGenericDiv('emtDebugLibmainDiv', this.zindex, this.posX, this.posY, null, null,this.emtHtml, null, null, 0);

        if (typeof(lpMTagConfig)!='undefined' && typeof(lpMTagConfig.emtDebugPosRight)!='undefined' && lpMTagConfig.emtDebugPosRight) {
            this.posX = this.GetPageWidth() - this.GetObj('emtDebugLibmainDiv').clientWidth-30;
        }
        //this.posX = this.GetPageWidth() - this.GetObj('mainDiv').clientWidth - 120;
        //if (this.posX<10) this.posX = 10;
        this.GetObj('emtDebugLibmainDiv').style.left = this.posX + 'px';
        this.showObj('emtDebugLibmainDiv', false);

        this.attachEvents();
        if (typeof(lpMTagConfig)!='undefined' && typeof(lpMTagConfig.emtDebugSuperMiniMode)!='undefined' && lpMTagConfig.emtDebugSuperMiniMode) {
            this.minimizeAll();
        }
        this.timerRef = setTimeout(function() {that.updateConfig();},500);
    };
}

var lpMTagDebug= new emtDebugLib();
lpMTagDebug.start();
