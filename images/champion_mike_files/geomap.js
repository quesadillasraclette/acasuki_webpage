var compte="511597864828";
base_url="";
base_gmt="";
var platform="mac+os+x";
var name_browser="chrome";
var version="71";

//var geonb;
//if(isNaN(geonb)){geonb=1;}
geonb=new Array();
geonb[compte]=1;


function getCookieVal (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}

function EcrireCookieGeo(nom,valeur,nombre)
{
   var argv=EcrireCookieGeo.arguments;
   var argc=EcrireCookieGeo.arguments.length;
   if(nombre==-1){
   var ladate=nombre;
   valeur="";
   }
   else{
   var ladate=new Date();
   ladate.setTime(ladate.getTime()+Number(nombre)*1000);
   }
   var expires=(argc > 2) ? argv[2] : null;
   var expires=nombre;
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
   document.cookie=nom+"="+escape(valeur)+
   "; expires="+ladate.toUTCString()+
   ((path==null) ? "" : ("; path="+path))+
   ((domain==null) ? "" : ("; domain="+domain))+
   ((secure==true) ? "; secure" : "");
} 


var nb_couleur;
if(screen.colorDepth!=undefined){
 nb_couleur=screen.colorDepth;
}
else if(screen.pixelDepth!=undefined){
 nb_couleur=screen.pixelDepth;
}
else{
 nb_couleur=0;
}

var browser = parseInt(navigator.appVersion);
if (browser>=4){var resolution = (screen.height + "*" + screen.width)}
else{var resolution;}

if (navigator.appName.indexOf("Microsoft Internet Explorer")!=-1){langue=navigator.systemLanguage;}
else{langue=navigator.language;}
if(langue==undefined){langue="mx";}
langue=langue.substring(0,2);

var date_geoloc = new Date();
dateloc = date_geoloc.getTime()/1000
var reg
var ref= document.referrer
page_stat = escape(document.URL)
if (ref==""){
ref="NULL"
        if(compte=="166822geovis"){
        ref='';
        page_stat = escape(document.URL)+'?compte=';
        }
}


var url = document.URL
 if(url.indexOf("/")== -1){
   reg2 = "index"
   }

   else{
   tab=url.split("/")
   var i =tab.length-1
   var page = tab[i]
    if((page == "index.htm")  || (page =="index.html") || (page == "index.php") || (page == "")|| (page == "index.php3")|| (page == "index.asp")){
    reg2 = "index"
    }
    else{
     var reg2
    }
    }
var couleur_lib;
var logo_lib;
var compteur_lib;
var categorie_lib;
var undefined;
var defautgif;


var md5="";
var date_test
date_test=1548726200;
dateloc+=10;
var outils2geomap7='';
var bool_refresh="false";
var tab_urlp=new Array();
if(geonb[compte]==1){
//tab_urlp['geomap']
p_geomap7='http://geoloc9.geovisite.com:8080/private/geoloc/pointeur.gif?|'+escape('511597864828')+'|'+escape(base_url)+'|'+escape(resolution)+'|'+escape(platform)+'|'+escape(langue)+'|'+escape(nb_couleur)+'|'+Math.round(dateloc)+'|||'+escape(name_browser)+'|'+escape(version)+'||MX|19.353201|-99.196503|Mexico|Google|1548726200|geomap|3600|';
var datep=1548726200;
document.write('<img src = "'+p_geomap7+datep+'|||'+page_stat+'|'+escape(ref)+'" border="0"  width="1" height="1" alt="geomap7" name="pointeur_geomap7">');
}
//geonb++;
geonb[compte]++;
//if(bool_refresh==true){setInterval("refreshp()",60000);}
var refreshpiiiii = function (v){
datep+=6;
document.images["pointeur_geochat"].src=tab_urlp['geochat']+datep+outils2+'|'+v;
alert(tab_urlp['geochat']+datep+outils2+'|'+v);
}

function detectFlash2(){
 return(false);

 if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) //si IE
   {
    var activeX = null ;
    try{
         activeX = new ActiveXObject('ShockwaveFlash.ShockwaveFlash') ;
    }catch(e){
         //alert('echec activeX')
    }
    if( activeX == null ){
         return(false);
    }else{
         return(true) ;
    }
   }
   else //autre navigateur
   {
    if( navigator.plugins["Shockwave Flash"] ){
         return(true) ;
    }else{
         return(false) ;
    }
   }
}

if(detectFlash2()==true)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="300" height="170" id="geomapmovie">');
document.write('<param name="movie"  value="http://geoloc9.geovisite.com:8080/skin/geomap/0.swf?compte=511597864828&lg=en&bro=chrome&bro_nom=chrome&os=mac&os_nom=mac+os+x&ip=ip&ip_nom=216.239.55.25&geo_ISO=MX&geo_PAYS=Mexico&geo_LAT=19.353201&geo_LON=-99.196503&isp=isp&isp_nom=Google&geo_CITY=Mexico&fc=FFFFFF&p=_24&tp=Last 24h - Dernieres 24h&md5='+md5+'&skin=0&bgskin=0&anim=1&f=&s=&ca=00FF00&ci=FF0000&onl=&ofl=undefined&ttot=&cbg=000000&cbg2=000000&cbg3=&cbg4=&b=0&dn=1&dec=-1834&tau=2575&base=geoloc9&tty=&cat=Internet&scat=Tools+webmaster&fuseau=Paris;FR;3600&date_website=19-01-29-02-43-20&init=&unit=&icon=&temp=&hmid=&wiso=&wcity=&domaine_img=geovisite.com&domaine_txt=geovisite.com&sheme=http&port_txt=:8080&port_img=:8080&referer='+escape(document.URL)+'&dateloc='+dateloc+'">');
document.write('<param name="quality" value="high">');

if (document.all && !document.getElementsByClassName) {
//document.write('<param name="wmode" value="transparent">');
}
//document.write('<!--[if lte IE 8 ]><param name="wmode" value="transparent"> <![endif]-->');

var iversion = navigator.appVersion.indexOf("MSIE")
if(Number(navigator.appVersion.substring(iversion+5, iversion+8))<=8){
document.write('<param name="wmode" value="transparent">');
}

document.write('<embed src="http://geoloc9.geovisite.com:8080/skin/geomap/0.swf?compte=511597864828&lg=en&bro=chrome&bro_nom=chrome&os=mac&os_nom=mac+os+x&ip=ip&ip_nom=216.239.55.25&geo_ISO=MX&geo_PAYS=Mexico&geo_LAT=19.353201&geo_LON=-99.196503&isp=isp&isp_nom=Google&geo_CITY=Mexico&fc=FFFFFF&p=_24&tp=Last 24h - Dernieres 24h&md5='+md5+'&skin=0&bgskin=0&anim=1&f=&s=&ca=00FF00&ci=FF0000&onl=&ofl=undefined&ttot=&cbg=000000&cbg2=000000&cbg3=&cbg4=&b=0&dn=1&dec=-1834&tau=2575&base=geoloc9&tty=&cat=Internet&scat=Tools+webmaster&fuseau=Paris;FR;3600&date_website=19-01-29-02-43-20&init=&unit=&icon=&temp=&hmid=&wiso=&wcity=&domaine_img=geovisite.com&domaine_txt=geovisite.com&sheme=http&port_txt=:8080&port_img=:8080&referer='+escape(document.URL)+'&dateloc='+dateloc+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="300" height="170" wmode="transparent"  name="geomapmovie"></embed>');
document.write('</object>');
}
else
{
 //document.write('<a href="http://www.geovisite.com/zoom.php?compte=511597864828" target="_blank"><img src="http://geoloc9.geovisite.com/private/geomap.php?compte=511597864828" border=0></a>');
 document.write('<iframe src="http://geoloc9.geovisite.com/private/geomap_iframe_css_64.php?compte=511597864828&fc=FFFFFF&p=_24&tp=Last 24h - Dernieres 24h&skin=0&anim=1&f=&s=&ca=00FF00&ci=FF0000&onl=&ofl=undefined&ttot=&cbg=000000&cbg2=000000&cbg3=&cbg4=&b=NaN&dn=1&wci=&wcc=&wcn=&bgskin=0&ts=300x170" width="300" height="170" bormeBorder="0" scrolling="no" allowTransparency="true" marginheight="0" marginwidth="0" style="border-width: 0px;margin:0px;padding:0px;"></iframe>');

}




geovisite_test_cookie_value = GetCookie('acceptcookie');
if(geovisite_test_cookie_value == null && geovisite_test_cookie_value != "okg"){
EcrireCookieGeo('acceptcookie','ok',604800);
}

var uri84='https://www.thegoodplan.ovh/promo.php?compte=511597864828&path=017003&lg=en&pays=MX&lg_nav='+langue+'&platform=mac+os+x&browser=chrome&version=71';
//var uri84='http://164.132.171.89/promo.php?compte=511597864828&path=017003&lg=en&pays=MX&lg_nav='+langue+'&platform=mac+os+x&browser=chrome&version=71';
//var uri84='http://37.187.248.215/promo.php?compte=511597864828&path=017003&lg=en&pays=MX&lg_nav='+langue+'&platform=mac+os+x&browser=chrome&version=71';
//var uri84='http://5.39.67.191/promo.php?compte=511597864828&path=017003&lg=en&pays=MX&lg_nav='+langue+'&platform=mac+os+x&browser=chrome&version=71';
//var uri84='http://94.23.210.144/promo/promo.php?compte=511597864828&path=017003&lg=en&pays=MX&lg_nav='+langue+'&platform=mac+os+x&browser=chrome&version=71';


function geoclick(){
geovisite_test_cookie_value = GetCookie('acceptcookie');
if((geovisite_test_cookie_value == "ok" || geovisite_test_cookie_value == null) && geovisite_test_cookie_value != "ok." && geovisite_test_cookie_value != "okg" && geovisite_test_cookie_value != "okz"){
        geovisite_test_cookie="017003;511597864828;en;";
        lawidth=screen.width;
        laheight=screen.height;
if(navigator.userAgent.indexOf('Firefox') == -1){
wini=window.open(uri84,'promo','toolbar=1,location=0,directories=1,status=0,menubar=0,scrollbars=1,resizable=1,fullscreen=0,width='+lawidth+',height='+laheight+',top=0,left=100');
if(wini)wini.blur();
window.focus();
}
else{
bSimple=false;
 randn='pu_' + Math.floor(89999999*Math.random()+10000000);

 var _parent = self,sToolbar,sOptions,popunder84;
 sToolbar='no';
//sToolbar = (navigator.userAgent.indexOf('webkit')==-1 && (navigator.userAgent.indexOf('mozilla')==-1 || parseInt(navigator.appversion, 10) < 12)) ? 'yes' : 'no';
 if (top != self) {
  try {
   if (top.document.location.toString()) {
    _parent = top;
   }
  }
  catch(err) { }
 }
 sOptions = 'toolbar=' + sToolbar + ',scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + (screen.availWidth - 10).toString();
 sOptions += ',height=' + (screen.availHeight - 122).toString() + ',screenX=0,screenY=0,left=0,top=0';
 popunder84 = _parent.window.open(uri84, randn, sOptions);
 if (popunder84) {
    popunder84.blur();
    if (bSimple) {
    window.focus();
    try { opener.window.focus(); }
    catch (err) { }
    }
    else {
    popunder84.init = function(e) {
    with (e) {
     (function() {
     if (typeof window.mozPaintCount != 'undefined') {
     var x = window.open('about:blank');
     x.close();
     }
     try { opener.window.focus(); }
     catch (err) { }
     })();
     }
     };
     popunder84.params = {
       url: uri84
     };
     popunder84.init(popunder84);
     }
  }
}
EcrireCookieGeo('acceptcookie','ok.',604800);
 }
}


function popup84()
{
 items=new Array();
 if(top.location != self.document.location){
 items = document.getElementsByTagName('a');
 parent.document.onclick=geoclick;
 }
 else{
 items = document.getElementsByTagName('a');
 if (window.addEventListener)document.body.addEventListener('click',geoclick,false)
 if (window.attachEvent)document.body.attachEvent("onclick", geoclick)
 }
 for(var i=0; i<items.length; i++){
 if (items[i].onclick == undefined) items[i].onclick = geoclick;
 }
}
if (window.addEventListener)window.addEventListener("load", popup84, false)
if (window.attachEvent)window.attachEvent("onload", popup84)
document.onclick=geoclick;


if (window.navigator.appVersion.match(/Chrome/)) {
    function chrome_flash_redraw() {
        var objects = document.getElementsByTagName('object');

        for (var i = 0, j = objects.length; i < j; i++) {
	    objects[i].style.display = 'inline-block';
            objects[i].style.marginLeft = 'auto';
            objects[i].style.marginRight = 'auto';
        }
    }

    if (window.addEventListener) {
        window.addEventListener('load', chrome_flash_redraw, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', chrome_flash_redraw);
    }
}

