
/* 
 ================================================
 PVII Pop Menu Magic 3 scripts
 Copyright (c) 2013-2014 Project Seven Development
 www.projectseven.com
 Version: 3.3.8 -build 38
 ================================================
 
*/


var p7PM3over='_over';
var p7PM3open='_down';
var p7PM3ctl=[],p7PM3i=false,p7PM3a=false,p7PM3adv=[],p7PM3dy=(1000/100),p7PM3kf=false,p7PM3clk=false;
function P7_PM3set(){
	var i,h,sh,hd,x,v,ie=P7_PM3getIEver();
	if(!document.getElementById || (ie>4 && ie<6)){
		return;
	}
	sh='.p7PM3 ul div {position:absolute; display:none; height:0px; top:100%; z-index:999;}\n';
	sh+='.p7PM3 li.pmm3-title-bar div {position:relative; display:block; height:auto; top:auto;}\n';
	sh+='@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\n';
	sh+='body * {cursor: pointer;}\n}\n';
	sh+='@media only screen and (min-width: 0px) and (max-width: 700px) {\n';
	sh+='.p7PM3.responsive {max-height: 700777px;}\n';
	sh+='.p7PM3.responsive ul a {max-height: 700777px;}\n';
	sh+='.p7PM3.responsive ul div {position:relative; overflow:hidden;margin-left:0 !important; margin-top:0 !important;}\n';
	sh+='.p7PM3 ul ul {\n-webkit-transform: none !important; -webkit-transition: none !important;';
	sh+='transform: none !important; transition: none !important;';
	sh+='opacity:100 !important;}\n';
	sh+='}\n';
	sh+='@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n';
	sh+='.p7PM3.responsive {max-height: 700777px;}\n';
	sh+='}\n';
	if(document.styleSheets){
		if(ie>4 && ie<7){
			sh+='.p7PM3 li {zoom: 1;}\n';
		}
		h='\n<st' + 'yle type="text/css">\n'+sh+'\n</s' + 'tyle>';
		document.write(h);
	}
	else{
		P7_PM3addSheet(sh);
	}
}
P7_PM3set();
function P7_PM3op(){
	if(!document.getElementById){
		return;
	}
	p7PM3ctl[p7PM3ctl.length]=arguments;
	if(arguments[2]>5){
		P7_PM3setCSSanim(arguments);
	}
}
function P7_PM3setCSSanim(op){
	var i,pf,prf,sh='';
	prf=P7_PM3getCSSPre();
	if(prf!='none'){
		if(op[2]==6){
			sh+='#'+op[0]+' ul ul {\n';
			sh+='-webkit-transition: -webkit-transform 300ms, opacity 300ms;\n';
			sh+='transition: transform 300ms, opacity 300ms;\n';
			sh+='-webkit-transform: scale(0);\n';
			sh+='transform: scale(0);\n';
			sh+='opacity: 0;\n}\n';
			sh+='#'+op[0]+' ul ul.sub-open {\n';
			sh+='-webkit-transform: scale(1);\n';
			sh+='transform: scale(1);\n';
			sh+='opacity: 1;\n}\n';
		}
		else if(op[2]==7){
			sh+='#'+op[0]+' ul ul {\n';
			sh+='-webkit-transition: -webkit-transform 300ms, opacity 300ms;\n';
			sh+='transition: transform 300ms, opacity 300ms;\n';
			sh+='-webkit-transform: translateY(-100%) rotate(-120deg);\n';
			sh+='transform: translateY(-100%) rotate(-120deg);\n';
			sh+='opacity: 0;\n}\n';
			sh+='#'+op[0]+' ul ul.sub-open {\n';
			sh+='-webkit-transform: translateY(0px) rotate(0deg);\n';
			sh+='transform: translateY(0px) rotate(0deg);\n';
			sh+='opacity: 1;\n}\n';
		}
		else if(op[2]==8){
			sh+='#'+op[0]+' ul ul {\n';
			sh+='-webkit-transition: -webkit-transform 300ms, opacity 300ms;\n';
			sh+='transition: transform 300ms, opacity 300ms;\n';
			sh+='-webkit-transform: scale(0,1);\n';
			sh+='transform: scale(0,1);\n';
			sh+='opacity: 0;\n}\n';
			sh+='#'+op[0]+' ul ul.sub-open {\n';
			sh+='-webkit-transform: scale(1,1);\n';
			sh+='transform: scale(1,1);\n';
			sh+='opacity: 1;\n}\n';
		}
		else if(op[2]==9){
			sh+='#'+op[0]+' ul ul {\n';
			sh+='-webkit-transition: -webkit-transform 300ms, opacity 300ms;\n';
			sh+='transition: transform 300ms, opacity 300ms;\n';
			sh+='-webkit-transform: scale(1,0);\n';
			sh+='transform: scale(1,0);\n';
			sh+='opacity: 0;\n}\n';
			sh+='#'+op[0]+' ul ul.sub-open {\n';
			sh+='-webkit-transform: scale(1,1);\n';
			sh+='transform: scale(1,1);\n';
			sh+='opacity: 1;\n}\n';
		}
		P7_PM3addSheet(sh);
	}
}
function P7_PM3bb(){
	P7_PM3shutall();
}
function P7_PM3addLoad(){
	var ie=P7_PM3getIEver();
	if(!document.getElementById || (ie>4 && ie<6)){
		return;
	}
	if(window.addEventListener){
		window.addEventListener("load",P7_PM3init,false);
		window.addEventListener("unload",P7_PM3bb,false);
		window.addEventListener("resize",P7_PM3rsz,false);
	}
	else if(window.attachEvent){
		document.write("<script id=p7ie_pm3 defer src=\"//:\"><\/script>");
		document.getElementById("p7ie_pm3").onreadystatechange=function(){
			if (this.readyState=="complete"){
				if(p7PM3ctl.length>0){
					P7_PM3init();
				}
			}
		};
		window.attachEvent("onload",P7_PM3init);
		window.attachEvent("onunload",P7_PM3bb);
		window.attachEvent("onresize",P7_PM3rsz);
	}
}
P7_PM3addLoad();
function P7_PM3init(){
	var i,j,jj,k,x,tB,tU,tD,tS,tA,taA,tBR,tBU,iM,cN,dv,pn,lv,ls,fs,d,sr,s1,s2,pp,cl,pf;
	if(p7PM3i){
		return;
	}
	p7PM3i=true;
	document.p7PM3preload=[];
	pf=P7_PM3getCSSPre();
	for(jj=0;jj<p7PM3ctl.length;jj++){
		tB=document.getElementById(p7PM3ctl[jj][0]);
		if(tB){
			tB.p7opt=p7PM3ctl[jj];
			tU=tB.getElementsByTagName('UL');
			if(tU&&tU.length>1){
				for(i=tU.length-1;i>0;i--){
					pn=tU[i].parentNode;
					dv=document.createElement('div');
					dv.pm3d=true;
					dv.appendChild(tU[i]);
					pn.appendChild(dv);
				}
			}
			P7_PM3remClass(tB,'p7PM3noscript');
			tB.pm3Duration=100;
			tB.pm3AnimType='quad';
			tB.pmm3DefLink=false;
			tB.pm3Shut=true;
			dv=P7_PM3isMobile();
			if(dv=='touch'){
				if(P7_PM3getStyle(tB,'maxHeight','max-height')!='700777px'){
					dv=false;
				}
			}
			if(dv){
				tB.p7opt[15]=0;
			}
			if((tB.p7opt[15]===0 && !p7PM3clk) || navigator.maxTouchPoints || navigator.msMaxTouchPoints){
				p7PM3clk=true;
				if(window.addEventListener){
					document.addEventListener("click",P7_PM3body,false);
				}
				else if(window.attachEvent){
					window.attachEvent("click",P7_PM3body,false);
				}
			}
			if(tB.p7opt[2]>5){
				if(pf=='none'){
					tB.p7opt[2]=3;
				}
			}
			tB.style.position='relative';
			tB.style.zIndex=tB.p7opt[14];
			tU=tB.getElementsByTagName('UL');
			tD=tU[0].getElementsByTagName('DIV');
			for(i=0;i<tD.length;i++){
				if(tD[i].pm3d){
					tD[i].setAttribute("id",tB.id+'d'+(i+2));
					tD[i].pm3State='closed';
					tD[i].pm3Menu=tB.id;
				}
			}
			tB.pm3UL=tU[0];
			tB.pm3MouseTimer=null;
			tB.pm3Fixed=false;
			pp=tB;
			while(pp){
				if(P7_PM3getStyle(pp,'position','position')=='fixed'){
					tB.pm3Fixed=true;
					break;
				}
				if(pp.nodeName=='BODY'){
					break;
				}
				pp=pp.parentNode;
			}
			tB.pm3ToolbarClosed=false;
			tBR=document.getElementById(tB.id.replace('_','tb_'));
			tBU=tU[0];
			if(tBR && tBU){
				tBR.pm3Menu=tB.id;
				tBR.pm3UL=tBU;
				cl=tBR.className;
				if(cl && cl!=='' && cl.indexOf('opened')>-1){
					tBU.pm3State='open';
					tBR.pm3State='open';
					P7_PM3setClass(tBU,'opened');
				}
				else{
					P7_PM3remClass(tBR,'closed');
					P7_PM3remClass(tBU,'closed');
					tB.pm3ToolbarClosed=true;
					tBU.pm3State='closed';
					tBR.pm3State='closed';
				}
				tBR.onclick=
function(){
	var tBR=document.getElementById(this.pm3Menu.replace('_','tb_'));
	var tBU=this.pm3UL;
	if(tBU.pm3State=='open'){
		tBR.pm3State='closed';
		tBU.pm3State='closed';
		P7_PM3changeClass(tBR,'opened','closed');
		P7_PM3changeClass(tBU,'opened','closed');
	}
	else{
		tBR.pm3State='open';
		tBU.pm3State='open';
		P7_PM3changeClass(tBR,'closed','opened');
		P7_PM3changeClass(tBU,'closed','opened');
	}
};
tA=tBR.getElementsByTagName('A');
if(tA && tA[0]){
	tA[0].onclick=function(){
		return false;
	};
}
}
d=1;
for(i=0;i<tU.length;i++){
tU[i].setAttribute("id",tB.id+'u'+(i+1));
tU[i].pm3Menu=tB.id;
tU[i].setAttribute('aria-hidden','true');
lv=1;
pp=tU[i].parentNode;
while(pp){
	if(pp.id&&pp.id==tB.id){
		break;
	}
	if(pp.tagName&&pp.tagName=="UL"){
		lv++;
	}
	pp=pp.parentNode;
}
tU[i].pm3Level=lv;
P7_PM3setClass(tU[i],'level_'+lv);
cN=tU[i].childNodes;
fs=-1;
ls=0;
if(cN){
	for(j=0;j<cN.length;j++){
		if(cN[j].tagName&&cN[j].tagName=='LI'){
			ls++;
			cl=cN[j].getAttribute('class');
			if(cl && cl!=='' && cl.indexOf('pmm3-title-bar')>-1){
				if(fs<0){
					P7_PM3setClass(cN[j],'pm3first');
				}
				fs=j;
				cN[j].pm3Title=true;
				cN[j].onclick=function(){
					P7_PM3toggleTB(this.parentNode.id);
				};
				if(tB.p7opt[15]==1){
					cN[j].onmouseover=function(){
						var tU=this.parentNode;
						var tB=document.getElementById(tU.pm3Menu);
						if(tB.pm3MouseTimer){
							clearTimeout(tB.pm3MouseTimer);
						}
						if(P7_PM3getStyle(tB,'maxHeight','max-height')=='700777px'){
							return;
						}
						if(this.pm3Pointer){
							return;
						}
						P7_PM3trigTB(tU.id);
					};
				}
				P7_PM3bindPointer(cN[j]);
			}
			else{
				taA=cN[j].getElementsByTagName('A');
				if(taA && taA[0]){
					tA=taA[0];
				}
				else{
					continue;
				}
				if(fs<0){
					P7_PM3setClass(tA,'pm3first');
					P7_PM3setClass(cN[j],'pm3first');
				}
				fs=j;
				tA.setAttribute("id",tB.id+'a'+(d));
				d++;
				tA.pm3State='closed';
				tA.pm3Level=lv;
				tA.pm3ParentDiv=tU[i].parentNode.id;
				tA.pm3Menu=tB.id;
				tA.pm3Sub=false;
				if(i===0){
					P7_PM3setClass(cN[j],('root_'+ls));
				}
				tA.onclick=function(){
					return P7_PM3click(this);
				};
				if(tB.p7opt[15]==1){
					tA.onmouseover=function(){
						var tB=document.getElementById(this.pm3Menu);
						if(tB.pm3MouseTimer){
							clearTimeout(tB.pm3MouseTimer);
						}
						if(P7_PM3getStyle(this,'maxHeight','max-height')=='700777px'){
							return;
						}
						if(this.pm3Pointer){
							return;
						}
						P7_PM3trig(this.id);
					};
					P7_PM3bindPointer(tA);
				}
				tA.hasImg=false;
				iM=tA.getElementsByTagName("IMG");
				if(iM&&iM[0]){
					sr=iM[0].getAttribute("src");
					iM[0].pm3Swap=tB.p7opt[9];
					x=sr.lastIndexOf(".");
					s1=sr.substring(0,x)+p7PM3over+'.'+sr.substring(x+1);
					s2=sr.substring(0,x)+p7PM3open+'.'+sr.substring(x+1);
					if(iM[0].pm3Swap==1){
						iM[0].p7imgswap=[sr,s1,s1];
						P7_PM3preloader(s1);
					}
					else if (iM[0].pm3Swap==2){
						iM[0].p7imgswap=[sr,s1,s2];
						P7_PM3preloader(s1,s2);
					}
					else{
						iM[0].p7imgswap=[sr,sr,sr];
					}
					iM[0].p7state='closed';
					iM[0].mark=false;
					iM[0].rollover=tB.p7opt[10];
					if(iM[0].pm3Swap>0){
						tA.hasImg=true;
						iM[0].onmouseover=function(){
							P7_PM3imovr(this);
						};
						iM[0].onmouseout=function(){
							P7_PM3imout(this);
						};
						tA.onfocus=function(){
							P7_PM3imovr(this.getElementsByTagName('IMG')[0]);
						};
						tA.onblur=function(){
							P7_PM3imout(this.getElementsByTagName('IMG')[0]);
						};
					}
				}
				tS=cN[j].getElementsByTagName('UL');
				if(tS&&tS.length>0){
					tA.pm3Sub=tS[0].parentNode.id;
					tS[0].parentNode.pm3Trigger=tA;
					if(i===0){
						P7_PM3setClass(tA,('root_trig'));
						P7_PM3setClass(tA.parentNode,('root_trig'));
					}
					P7_PM3setClass(tA,'trig_closed');
					P7_PM3setClass(tA.parentNode,'trig_closed');
					if(tB.p7opt[5]==1){
						P7_PM3setClass(tA,'trig_left');
						P7_PM3setClass(tA.parentNode,'trig_left');
					}
					if(tB.p7opt[13]==1){
						P7_PM3setClass(tA,'trig_up');
						P7_PM3setClass(tA.parentNode,'trig_up');
					}
				}
				else{
					P7_PM3setClass(tA,'pm3-link');
					P7_PM3setClass(tA.parentNode,'pm3-link');
					if(i===0){
						P7_PM3setClass(tA,('root_link'));
						P7_PM3setClass(tA.parentNode,('root_link'));
					}
				}
			}
		}
	}
	if(fs>0){
		P7_PM3setClass(cN[fs],'pm3last');
		if(!cN[fs].pm3Title){
			P7_PM3setClass(tA,'pm3last');
		}
	}
}
}
if(tB.p7opt[15]==1){
P7_PM3bindPointer(tB);
tB.onmouseout=function(evt){
	var k,rt,pp,tD,m=true;
	evt=(evt)?evt:((event)?event:null);
	if(P7_PM3getStyle(this,'maxHeight','max-height')=='700777px'){
		return;
	}
	if(evt){
		rt=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;
		if(rt){
			pp=rt.parentNode;
			while(pp){
				if(pp && pp.id && typeof(pp.id)=='string' && pp.id.indexOf(this.id)===0){
					m=false;
					break;
				}
				if(pp && pp.tagName && (pp.tagName=='BODY'||pp.tagName=='HTML')){
					break;
				}
				pp=pp.parentNode;
			}
		}
		if(this.pm3Pointer){
			m=false;
		}
		if(m){
			if(this.pm3MouseTimer){
				clearTimeout(this.pm3MouseTimer);
			}
			if(this.p7opt[8]==1){
				this.pm3MouseTimer=setTimeout("P7_PM3shut('"+this.id+"')",360);
			}
			else{
				P7_PM3shut(this.id);
			}
		}
	}
};
}
if(tB.pm3ToolbarClosed){
P7_PM3setClass(tBR,'closed');
P7_PM3setClass(tBU,'closed');
}
if(tB.p7opt[11]==1){
P7_PM3currentMark(tB);
}
P7_PM3setBC(tB.id);
}
}
p7PM3a=true;
}
function P7_PM3preloader(){
	var i,x;
	for(i=0;i<arguments.length;i++){
		x=document.p7PM3preload.length;
		document.p7PM3preload[x]=new Image();
		document.p7PM3preload[x].src=arguments[i];
	}
}
function P7_PM3imovr(im){
	var m=true;
	if(im.p7state=='open' && im.rollover===0){
		m=false;
	}
	if(m){
		im.src=im.p7imgswap[1];
	}
}
function P7_PM3imout(im){
	if(im.p7state=='open' || im.mark){
		im.src=im.p7imgswap[2];
	}
	else{
		im.src=im.p7imgswap[0];
	}
}
function P7_PM3setBC(d){
	var i,j,k,tB,bC,tU,tA,wH,cl,m,a,ba,bli,im,tx,el,tgs,nd;
	tB=document.getElementById(d);
	bC=document.getElementById(d.replace('_','bc_'));
	wH=window.location.href;
	if(tB && bC){
		tU=bC.getElementsByTagName('UL');
		if(tU && tU[0]){
			tA=tU[0].getElementsByTagName('A');
			if(tA && tA.length>0){
				for(i=0;i<tA.length;i++){
					cl=tA[i].getAttribute('class');
					if(cl && cl!==''){
						if(cl.indexOf('placeholder')>-1){
							tU[0].removeChild(tA[i].parentNode);
						}
					}
				}
			}
			tA=tB.getElementsByTagName('A');
			var aP=[];
			for(j=0;j<tA.length;j++){
				cl=tA[j].getAttribute('class');
				if(cl && cl.indexOf('current_mark')>-1){
					aP[aP.length]=j;
				}
			}
			for(k=0;k<aP.length;k++){
				m=false;
				a=tA[aP[k]];
				ba=document.createElement('a');
				bli=document.createElement('li');
				im=a.getElementsByTagName('IMG');
				if(im && im[0]){
					tx=document.createTextNode(im[0].getAttribute('alt'));
				}
				else{
					tx=document.createTextNode(a.textContent);
				}
				if(!tx || tx===''){
					tx='Page '+(i+1);
				}
				if(a.href!=wH && a.href!=wH+'#'){
					if(a.href.toLowerCase().indexOf('javascript:')==-1){
						m=true;
					}
				}
				if(m){
					ba.setAttribute('href',a.href);
					ba.appendChild(tx);
					bli.appendChild(ba);
				}
				else{
					bli.appendChild(tx);
				}
				tU[0].appendChild(bli);
			}
			if(!aP || aP.length===0 || (tB.pmm3DefLink && tB.pmm3DefLink.href!=wH)){
				bli=document.createElement('li');
				cl=bC.getAttribute('class');
				nd=null;
				m=true;
				if(cl && cl!==''){
					if(cl.indexOf('def-a')>-1){
						tgs=document.getElementsByTagName('A');
					}
					else if(cl.indexOf('def-h1')>-1){
						tgs=document.getElementsByTagName('H1');
					}
					else if(cl.indexOf('def-h2')>-1){
						tgs=document.getElementsByTagName('H2');
					}
					else if(cl.indexOf('def-p')>-1){
						tgs=document.getElementsByTagName('P');
					}
					else if(cl.indexOf('def-t')>-1){
						tgs=document.getElementsByTagName('TITLE');
					}
					else{
						m=false;
					}
					if(tgs && tgs[0]){
						nd=tgs[0];
					}
				}
				if(nd && nd.textContent && nd.textContent!==''){
					tx=document.createTextNode(nd.textContent);
				}
				else{
					tx=document.createTextNode('Page');
				}
				if(m){
					bli.appendChild(tx);
					tU[0].appendChild(bli);
				}
			}
		}
	}
}
function P7_PM3trig(d){
	var tB,a;
	a=document.getElementById(d);
	tB=document.getElementById(a.pm3Menu);
	if(tB.pm3MouseTimer){
		clearTimeout(tB.pm3MouseTimer);
	}
	if(a.pm3Pointer){
		return;
	}
	if(a.pm3Sub){
		if(tB.p7opt[8]==1){
			tB.pm3MouseTimer=setTimeout("P7_PM3open('"+a.id+"',null,2)",160);
		}
		else{
			P7_PM3open(a.id,null,2);
		}
	}
	else{
		if(tB.p7opt[8]==1){
			tB.pm3MouseTimer=setTimeout("P7_PM3toggle('"+a.id+"',null,2)",160);
		}
		else{
			P7_PM3toggle(a.id,null,2);
		}
	}
}
function P7_PM3trigTB(du){
	var tB,tU;
	tU=document.getElementById(du);
	tB=document.getElementById(tU.pm3Menu);
	if(tB.pm3MouseTimer){
		clearTimeout(tB.pm3MouseTimer);
	}
	if(tB.pm3Pointer){
		return;
	}
	if(tB.p7opt[8]==1){
		tB.pm3MouseTimer=setTimeout("P7_PM3toggleTB('"+tU.id+"')",160);
	}
	else{
		P7_PM3toggleTB(tU.id);
	}
}
function P7_PM3click(a){
	var wH,tB,m=false;
	P7_PM3shutall(a.pm3Menu);
	wH=window.location.href;
	if(a.href!=wH&&a.href!=wH+'#'){
		if(a.href.toLowerCase().indexOf('javascript:')==-1){
			m=true;
		}
	}
	tB=document.getElementById(a.pm3Menu);
	if(tB.p7opt[15]===0 && m && a.pm3Sub && a.pm3State=='closed'){
		m=false;
	}
	if(a.pm3State=='closed'){
		P7_PM3open(a.id,null,1);
	}
	else{
		P7_PM3close(a.id,null,1);
	}
	if(m){
		P7_PM3shutall();
	}
	return m;
}
function P7_PM3open(d,bp,p){
	var i,a,tB,iM,op,sD,tU,mT,mL,cmb,pB;
	a=document.getElementById(d);
	if(a.pm3State=='open'){
		return;
	}
	tB=document.getElementById(a.pm3Menu);
	if(a.pm3Pointer && p==2){
		return;
	}
	if(!bp){
		P7_PM3toggle(a.id);
	}
	op=tB.p7opt[2];
	if(P7_PM3getStyle(a,'maxHeight','max-height')=='700777px'){
		if(op!==0){
			op=99;
		}
	}
	if(a.hasImg){
		iM=a.getElementsByTagName("IMG")[0];
		iM.p7state='open';
		iM.src=iM.p7imgswap[2];
	}
	if(a.pm3Sub){
		sD=document.getElementById(a.pm3Sub);
		sD.pm3State='open';
		tB.pm3Shut=false;
		a.pm3State='open';
		P7_PM3changeClass(a,'trig_closed','trig_open');
		P7_PM3changeClass(a.parentNode,'trig_closed','trig_open');
		tU=sD.getElementsByTagName('UL')[0];
		tU.setAttribute('aria-hidden','false');
		sD.style.visibility='hidden';
		sD.style.height='auto';
		sD.style.display='block';
		mT=(a.parentNode.offsetHeight*-1)+tB.p7opt[3];
		mL=a.parentNode.offsetWidth+tB.p7opt[4];
		if(tB.p7opt[5]==1){
			mL=(tU.offsetWidth*-1)-tB.p7opt[4];
		}
		if(tB.p7opt[1]==1 && a.pm3Level==1){
			mT=0;
			mL=0;
			if(tB.p7opt[7]==1){
				mL=((sD.offsetWidth-a.parentNode.offsetWidth)/2)*-1;
			}
			else if(tB.p7opt[7]==2){
				mL=((sD.offsetWidth-a.parentNode.offsetWidth))*-1;
			}
			if(tB.p7opt[16]==1){
				if(a.className.indexOf('pm3first')>-1){
					mL=0;
				}
				else if(a.className.indexOf('pm3last')>-1){
					mL=(sD.offsetWidth-a.parentNode.offsetWidth)*-1;
				}
			}
		}
		if(tB.p7opt[13]==1){
			mT-=sD.offsetHeight;
			if(tB.p7opt[1]==1 && a.pm3Level==1){
				mT-=a.parentNode.offsetHeight;
			}
		}
		if(tB.p7opt[6]>0 && sD.getBoundingClientRect){
			var adjL=0,adjT=0,vL,vR,pL,pR,pT;
			var ws=P7_PM3getWinScroll();
			var wn=P7_PM3getWinDims();
			pL=mL+a.parentNode.getBoundingClientRect().left+ws[1];
			pR=pL+sD.offsetWidth;
			if(tB.p7opt[6]==2){
				vL=tB.getBoundingClientRect().left+ws[1];
				vR=vL+tB.offsetWidth;
				if(pR>vR){
					if(tB.p7opt[1]==1 && a.pm3Level==1){
						mL=mL-(pR-vR);
					}
					else{
						mL=(tU.offsetWidth*-1)-tB.p7opt[4];
					}
				}
				pL=mL+a.parentNode.getBoundingClientRect().left+ws[1];
				if(pL<vL){
					if(tB.p7opt[5]==1 && (tB.p7opt[1]!=1 || (tB.p7opt[1]==1 && a.pm3Level!=1))){
						mL=a.parentNode.offsetWidth+tB.p7opt[4];
					}
					else{
						mL=mL+(vL-pL);
					}
				}
			}
			if(tB.p7opt[6]>0){
				pL=mL+a.parentNode.getBoundingClientRect().left+ws[1];
				pR=pL+sD.offsetWidth;
				vL=ws[1];
				vR=wn[1];
				if(pR>vR){
					if(tB.p7opt[1]==1 && a.pm3Level==1){
						mL=mL-(pR-vR);
					}
					else{
						mL=(tU.offsetWidth*-1)-tB.p7opt[4];
					}
				}
				pL=mL+a.parentNode.getBoundingClientRect().left+ws[1];
				if(pL<vL){
					if(tB.p7opt[5]==1 && (tB.p7opt[1]!=1 || (tB.p7opt[1]==1 && a.pm3Level!=1))){
						mL=a.parentNode.offsetWidth+tB.p7opt[4];
					}
					else{
						mL=mL+(vL-pL);
					}
				}
				pB=mT+a.parentNode.getBoundingClientRect().bottom+sD.offsetHeight+ws[0];
				if(pB > wn[0]){
					mT = mT-(pB-wn[0]+2);
				}
				pT=mT+a.parentNode.getBoundingClientRect().bottom+ws[0];
				if(pT<0){
					mT=mT-pT+ws[0];
				}
			}
		}
		sD.style.marginTop=mT+'px';
		if(tB.p7opt[4]===0){
			if(mL==a.parentNode.offsetWidth){
				sD.style.marginLeft='100%';
			}
			else if(mL==a.parentNode.offsetWidth*-1){
				sD.style.marginLeft='-100%';
			}
			else{
				sD.style.marginLeft=mL+'px';
			}
		}
		else{
			sD.style.marginLeft=mL+'px';
		}
		tU.p7animDuration=tB.pm3Duration;
		tU.p7animType='linear';
		if(op==3){
			if(tB.p7opt[1]==1 && tU.pm3Level==2){
				cmb=2;
			}
			else{
				cmb=1;
			}
		}
		if(op==1 || cmb==1){
			tU.p7animProp='fontSize';
			tU.p7animUnit='%';
			tU.pm3DefProp='100%';
			tU.p7animStartVal=5;
			tU.p7animCurrentVal=tU.p7animStartVal;
			tU.p7animFinishVal=100;
			tU.style[tU.p7animProp]=tU.p7animCurrentVal+tU.p7animUnit;
			tU.p7animStartTime=P7_PM3getTime(0);
			tU.p7animDuration=160;
			sD.style.visibility='visible';
			if(!tU.p7PM3running){
				tU.p7PM3running=true;
tU.p7PM3anim=setInterval(function(){
	P7_PM3animator(tU);
}
, p7PM3dy);
}
}
else if(op==2 || cmb==2){
tU.p7animProp='lineHeight';
tU.p7animUnit='%';
if(!tU.pm3DefProp){
tU.pm3DefProp=P7_PM3getStyle(tU,'lineHeight','line-height');
tU.pm3DefProp=(tU.pm3DefProp)?tU.pm3DefProp:'normal';
}
tU.p7animStartVal=5;
tU.p7animCurrentVal=tU.p7animStartVal;
tU.p7animFinishVal=100;
tU.style[tU.p7animProp]=tU.p7animCurrentVal+tU.p7animUnit;
tU.p7animStartTime=P7_PM3getTime(0);
tU.p7animDuration=160;
sD.style.visibility='visible';
tU.p7cb=function(){
this.style[this.p7animProp]=this.pm3DefProp;
};
if(!tU.p7PM3running){
tU.p7PM3running=true;
tU.p7PM3anim=setInterval(function(){
	P7_PM3animator(tU,tU.p7cb);
}
, p7PM3dy);
}
}
else if(op==4){
tU.p7animProp='textIndent';
tU.p7animUnit='px';
tU.style.overflow='hidden';
tU.p7animStartVal=-100;
tU.p7animCurrentVal=tU.p7animStartVal;
tU.p7animFinishVal=0;
tU.style[tU.p7animProp]=tU.p7animCurrentVal+tU.p7animUnit;
tU.p7animStartTime=P7_PM3getTime(0);
tU.p7animDuration=160;
sD.style.visibility='visible';
tU.p7cb=function(){
this.style.textIndent='0px';
this.style.overflow='visible';
};
if(!tU.p7PM3running){
tU.p7PM3running=true;
tU.p7PM3anim=setInterval(function(){
	P7_PM3animator(tU,tU.p7cb);
}
, p7PM3dy);
}
}
else if(op==5){
if(sD.p7PM3fadeRunning){
clearInterval(sD.p7PM3fade);
sD.p7PM3fadeRunning=false;
}
sD.p7animType='quad';
sD.pm3StartFade=0;
sD.pm3FinishFade=99;
sD.pm3CurrentFade=sD.pm3StartFade;
if(sD.filters){
sD.style.filter='alpha(opacity='+sD.pm3CurrentFade+')';
}
else{
sD.style.opacity=sD.pm3CurrentFade/100;
}
sD.style.visibility='visible';
sD.pm3FadeStartTime=P7_PM3getTime(0);
sD.pm3FadeDuration=400;
if(!sD.p7PM3fadeRunning){
sD.p7PM3fadeRunning=true;
sD.p7PM3fade=setInterval(function(){
	P7_PM3fade(sD);
}
, p7PM3dy);
}
}
else if(op>5 && op<99){
sD.style.visibility='visible';
P7_PM3setClass(tU,'sub-open');
}
else if(op==99){
if(sD.p7PM3running){
clearInterval(sD.p7PM3anim);
sD.p7PM3running=false;
}
sD.style.overflow='hidden';
sD.p7animType='quad';
sD.p7animProp='height';
sD.p7animUnit='px';
sD.p7animStartVal=0;
sD.p7animCurrentVal=sD.p7animStartVal;
sD.p7animFinishVal=tU.offsetHeight;
sD.style[sD.p7animProp]=sD.p7animCurrentVal+sD.p7animUnit;
sD.p7animStartTime=P7_PM3getTime(0);
sD.p7animDuration=360;
sD.style.visibility='visible';
sD.p7cb=function(){
this.style.height='auto';
this.style.overflow="visible";
};
if(!sD.p7PM3running){
sD.p7PM3running=true;
sD.p7PM3anim=setInterval(function(){
	P7_PM3animator(sD,sD.p7cb);
}
, p7PM3dy);
}
}
else{
sD.style.visibility='visible';
}
}
}
function P7_PM3close(d,p){
	var i,a,tB,iM,op,sD,tU;
	a=document.getElementById(d);
	if(a.pm3State=='closed'){
		return;
	}
	tB=document.getElementById(a.pm3Menu);
	op=tB.p7opt[2];
	if(P7_PM3getStyle(a,'maxHeight','max-height')=='700777px'){
		if(op!==0){
			op=99;
		}
	}
	if(a.hasImg){
		iM=a.getElementsByTagName("IMG")[0];
		iM.p7state='closed';
		iM.src=iM.p7imgswap[0];
	}
	if(a.pm3Sub){
		sD=document.getElementById(a.pm3Sub);
		sD.pm3State='closed';
		a.pm3State='closed';
		P7_PM3changeClass(a,'trig_open','trig_closed');
		P7_PM3changeClass(a.parentNode,'trig_open','trig_closed');
		tU=sD.getElementsByTagName('UL')[0];
		tU.setAttribute('aria-hidden','true');
		if(op>0 && op<6){
			if(sD.p7PM3fadeRunning){
				clearInterval(sD.p7PM3fade);
				sD.p7PM3fadeRunning=false;
			}
			sD.p7animType='quad';
			sD.pm3StartFade=100;
			sD.pm3FinishFade=0;
			sD.pm3CurrentFade=sD.pm3StartFade;
			if(sD.filters){
				sD.style.filter='alpha(opacity='+sD.pm3CurrentFade+')';
			}
			else{
				sD.style.opacity=sD.pm3CurrentFade/100;
			}
			sD.pm3FadeStartTime=P7_PM3getTime(0);
			sD.pm3FadeDuration=220;
			if(!sD.p7PM3fadeRunning){
				sD.p7PM3fadeRunning=true;
sD.p7PM3fade=setInterval(function(){
	P7_PM3fade(sD);
}
, p7PM3dy);
}
}
else if(op>5 && op<99){
P7_PM3remClass(tU,'sub-open');
setTimeout(function(){
	P7_PM3closeAnim(sD);
}
,300);
}
else if(op==99){
if(sD.p7PM3running){
	clearInterval(sD.p7PM3anim);
	sD.p7PM3running=false;
}
sD.style.overflow='hidden';
sD.p7animType='quad';
sD.p7animProp='height';
sD.p7animUnit='px';
sD.p7animStartVal=sD.offsetHeight;
sD.p7animCurrentVal=sD.p7animStartVal;
sD.p7animFinishVal=0;
sD.style[sD.p7animProp]=sD.p7animCurrentVal+sD.p7animUnit;
sD.p7animStartTime=P7_PM3getTime(0);
sD.p7animDuration=360;
sD.p7cb=function(){
	this.style.height='0px';
	this.style.display='none';
	this.style.overflow="visible";
};
if(!sD.p7PM3running){
	sD.p7PM3running=true;
sD.p7PM3anim=setInterval(function(){
	P7_PM3animator(sD,sD.p7cb);
}
, p7PM3dy);
}
}
else{
sD.style.height='0px';
sD.style.display='none';
}
}
}
function P7_PM3closeAnim(el){
	el.style.display='none';
	el.style.height='0px';
}
function P7_PM3toggle(d,bp,p){
	var i,a,tD,pp;
	a=document.getElementById(d);
	pp=a.parentNode;
	while(pp){
		if(pp.tagName&&pp.tagName=='UL'){
			break;
		}
		pp=pp.parentNode;
	}
	tD=pp.getElementsByTagName("DIV");
	if(tD&&tD.length>0){
		for(i=tD.length-1;i>-1;i--){
			if(tD[i].pm3State&&tD[i].pm3State=='open'){
				if(bp==1 || (!bp && tD[i].pm3Trigger!=a)){
					P7_PM3close(tD[i].pm3Trigger.id);
				}
			}
		}
	}
}
function P7_PM3toggleTB(du){
	var i,tU,tD;
	tU=document.getElementById(du);
	if(tU){
		tD=tU.getElementsByTagName("DIV");
		if(tD&&tD.length>0){
			for(i=tD.length-1;i>-1;i--){
				if(tD[i].pm3State&&tD[i].pm3State=='open'){
					P7_PM3close(tD[i].pm3Trigger.id);
				}
			}
		}
	}
}
function P7_PM3shut(d){
	var i,tB,tD;
	if(d){
		tB=document.getElementById(d);
		if(tB && !tB.pm3Shut && tB.pm3UL){
			tD=tB.pm3UL.getElementsByTagName("DIV");
			if(tD&&tD.length){
				tB.pm3Shut=true;
				for(i=tD.length-1;i>-1;i--){
					if(tD[i].pm3State && tD[i].pm3State=='open'){
						P7_PM3close(tD[i].pm3Trigger.id);
					}
				}
			}
		}
	}
}
function P7_PM3shutall(bp){
	var i,tB;
	if(p7PM3ctl && p7PM3ctl.length){
		for(i=0;i<p7PM3ctl.length;i++){
			tB=document.getElementById(p7PM3ctl[i][0]);
			if(tB && (!bp || bp!=tB.id)){
				P7_PM3shut(tB.id);
			}
		}
	}
}
function P7_PM3body(evt){
	evt=(evt)?evt:event;
	var m=true,pp=(evt.fromElement)?evt.fromElement:evt.target;
	while(pp){
		if(pp && pp.id && typeof(pp.id)=='string' && pp.id.indexOf('p7PM3')===0){
			m=false;
			break;
		}
		if(pp && pp.tagName && (pp.tagName=='BODY'||pp.tagName=='HTML')){
			break;
		}
		pp=pp.parentNode;
	}
	if(m){
		P7_PM3shutall();
	}
}
function P7_PM3rsz(){
	var i,tB;
	if(p7PM3ctl && p7PM3ctl.length){
		for(i=0;i<p7PM3ctl.length;i++){
			tB=document.getElementById(p7PM3ctl[i][0]);
			if(tB){
				if(tB.p7opt && tB.p7opt[15]==1){
					if(P7_PM3getStyle(tB,'maxHeight','max-height')!='700777px'){
						P7_PM3shut(tB.id);
					}
				}
			}
		}
	}
}
function P7_PM3animator(el,cb,op){
	var i,tB,tA,tS,et,nv,m=false;
	et=P7_PM3getTime(el.p7animStartTime);
	if(et>=el.p7animDuration){
		et=el.p7animDuration;
		m=true;
	}
	if(el.p7animCurrentVal!=el.p7animFinishVal){
		nv=P7_PM3anim(el.p7animType, et, el.p7animStartVal, el.p7animFinishVal-el.p7animStartVal, el.p7animDuration);
		el.p7animCurrentVal=nv;
		el.style[el.p7animProp]=nv+el.p7animUnit;
	}
	if(m){
		el.p7PM3running=false;
		clearInterval(el.p7PM3anim);
		if(cb && typeof(cb) === "function"){
			cb.call(el);
		}
	}
}
function P7_PM3fade(el,tp){
	var i,tC,tA,op,et,cet,m=false;
	et=P7_PM3getTime(el.pm3FadeStartTime);
	if(et>=el.pm3FadeDuration){
		et=el.pm3FadeDuration;
		m=true;
	}
	if(el.pm3CurrentFade!=el.pm3FinishFade){
		op=P7_PM3anim(tp,et,el.pm3StartFade,el.pm3FinishFade-el.pm3StartFade,el.pm3FadeDuration);
		el.pm3CurrentFade=op;
		if(el.filters){
			el.style.filter='alpha(opacity='+el.pm3CurrentFade+')';
		}
		else{
			el.style.opacity=el.pm3CurrentFade/100;
		}
	}
	if(m){
		el.p7PM3fadeRunning=false;
		clearInterval(el.p7PM3fade);
		if(el.pm3FinishFade===0){
			el.style.height='0px';
			el.style.display='none';
		}
		if(el.filters){
			el.style.filter='';
		}
		else{
			el.style.opacity=1;
		}
	}
}
function P7_PM3anim(tp,t,b,c,d){
	if(tp=='quad'){
		if((t/=d/2)<1){
			return c/2*t*t+b;
		}
		else{
			return -c/2*((--t)*(t-2)-1)+b;
		}
	}
	else{
		return (c*(t/d))+b;
	}
}
function P7_PM3getTime(st){
	var d = new Date();
	return d.getTime() - st;
}
function P7_PM3bindPointer(el){
	if(navigator.maxTouchPoints){
		el.addEventListener('pointerdown',P7_PM3setPointer,false);
		el.addEventListener('mouseover',P7_PM3setPointer,false);
		el.addEventListener('pointerout',P7_PM3setPointer,false);
		el.addEventListener('mouseout',P7_PM3setPointer,false);
	}
	else if(navigator.msMaxTouchPoints){
		el.addEventListener('MSPointerDown',P7_PM3setPointer,false);
		el.addEventListener('mouseover',P7_PM3setPointer,false);
		el.addEventListener('MSPointerOut',P7_PM3setPointer,false);
		el.addEventListener('mouseout',P7_PM3setPointer,false);
	}
	else if(el.ontouchstart !== undefined){
		el.addEventListener('touchstart',P7_PM3setPointer,false);
	}
}
function P7_PM3setPointer(evt){
	if(evt.pointerType){
		if( evt.MSPOINTER_TYPE_TOUCH || evt.pointerType=='touch'){
			this.pm3Pointer=true;
		}
		else if( evt.MSPOINTER_TYPE_PEN || evt.pointerType=='pen'){
			this.pm3Pointer=true;
		}
		else{
			this.pm3Pointer=false;
		}
	}
	else if (this.ontouchstart !== undefined){
		this.pm3Pointer=true;
	}
}
function P7_PM3mark(){
	p7PM3adv[p7PM3adv.length]=arguments;
}
function P7_PM3currentMark(el){
	var j,i,wH,cm=false,mt=['',1,'',''],op,r1,k,kk,tA,aU,pp,a,im,x;
	wH=window.location.href;
	if(el.p7opt[12]!=1){
		wH=wH.replace(window.location.search,'');
	}
	if(wH.charAt(wH.length-1)=='#'){
		wH=wH.substring(0,wH.length-1);
	}
	for(k=0;k<p7PM3adv.length;k++){
		if(p7PM3adv[k][0]&&p7PM3adv[k][0]==el.id){
			mt=p7PM3adv[k];
			cm=true;
			break;
		}
	}
	op=mt[1];
	if(op<1){
		return;
	}
	r1=/index\.[\S]*/i;
	k=-1;
	kk=-1;
	tA=el.getElementsByTagName("A");
	for(j=0;j<tA.length;j++){
		aU=tA[j].href.replace(r1,'');
		if(op>0){
			if(tA[j].href==wH||aU==wH){
				k=j;
				kk=-1;
			}
		}
		if(op==2){
			if(tA[j].firstChild){
				if(tA[j].firstChild.nodeValue==mt[2]){
					kk=j;
				}
			}
		}
		if(op==3&&tA[j].href.indexOf(mt[2])>-1){
			kk=j;
		}
		if(op==4){
			for(x=2;x<mt.length;x+=2){
				if(wH.indexOf(mt[x])>-1){
					if(tA[j].firstChild&&tA[j].firstChild.nodeValue){
						if(tA[j].firstChild.nodeValue==mt[x+1]){
							kk=j;
						}
					}
				}
			}
		}
	}
	k=(kk>k)?kk:k;
	if(k>-1){
		el.pmm3DefLink=tA[k];
		pp=tA[k].parentNode;
		while(pp){
			if(pp.tagName&&pp.tagName=='LI'){
				P7_PM3setClass(pp,'li_current_mark');
				a=pp.getElementsByTagName('A');
				if(a&&a[0]){
					P7_PM3setClass(a[0],'current_mark');
					if(a[0].hasImg){
						im=a[0].getElementsByTagName('IMG')[0];
						im.mark=true;
						im.src=im.p7imgswap[2];
					}
				}
			}
			else{
				if(pp==el){
					break;
				}
			}
			pp=pp.parentNode;
		}
	}
}
function P7_PM3setClass(ob,cl){
	if(ob){
		var cc,nc,r=/\s+/g;
		cc=ob.className;
		nc=cl;
		if(cc&&cc.length>0){
			if(cc.indexOf(cl)==-1){
				nc=cc+' '+cl;
			}
			else{
				nc=cc;
			}
		}
		nc=nc.replace(r,' ');
		ob.className=nc;
	}
}
function P7_PM3remClass(ob,cl){
	if(ob){
		var cc,nc;
		cc=ob.className;
		if(cc&&cc.indexOf(cl>-1)){
			nc=cc.replace(cl,'');
			nc=nc.replace(/\s+/g,' ');
			nc=nc.replace(/\s$/,'');
			nc=nc.replace(/^\s/,'');
			ob.className=nc;
		}
	}
}
function P7_PM3changeClass(ob,clf,clt){
	if(ob){
		var cc,nc;
		cc=ob.className;
		if(cc&&cc.indexOf(clf>-1)){
			nc=cc.replace(clf,clt);
			ob.className=nc;
		}
		else{
			P7_PM3setClass(ob,clt);
		}
	}
}
function P7_PM3getStyle(el,s1,s2){
	var s='';
	if(el.currentStyle){
		s=el.currentStyle[s1];
	}
	else{
		s=document.defaultView.getComputedStyle(el,"").getPropertyValue(s2);
	}
	return s;
}
function P7_PM3getWinDims(){
	var h,w,st;
	if(document.documentElement&&document.documentElement.clientHeight){
		w=document.documentElement.clientWidth;
		h=document.documentElement.clientHeight;
	}
	else if(window.innerHeight){
		if(document.documentElement.clientWidth){
			w=document.documentElement.clientWidth;
		}
		else{
			w=window.innerWidth;
		}
		h=window.innerHeight;
	}
	else if(document.body){
		w=document.body.clientWidth;
		h=document.body.clientHeight;
	}
	return [h,w];
}
function P7_PM3getWinScroll(){
	var st=0,sl=0;
	st=document.body.parentNode.scrollTop;
	if(!st){
		st=document.body.scrollTop;
		if(!st){
			st=window.scrollY?window.scrollY:0;
		}
	}
	sl=document.body.parentNode.scrollLeft;
	if(!sl){
		sl=document.body.scrollLeft;
		if(sl){
			sl=window.scrollX?window.scrollX:0;
		}
	}
	return [st,sl];
}
function P7_PM3getIEver(){
	var j,v=-1,nv,m=false;
	nv=navigator.userAgent.toLowerCase();
	j=nv.indexOf("msie");
	if(j>-1){
		v=parseFloat(nv.substring(j+4,j+8));
		if(document.documentMode){
			v=document.documentMode;
		}
	}
	return v;
}
function P7_PM3isMobile(){
	var i,m=false,ua=navigator.userAgent.toLowerCase();
	var dv=['iphone','ipad','ipod','touch','android','windows ce','iemobile','windowsce','blackberry','palm','symbian','series60',
	'armv','arm7tdmi','opera mobi','opera mini','polaris','kindle','midp','mmp/','portalmmm','smm-mms','sonyericsson'];
	for(i=0;i<dv.length;i++){
		if(ua.search(dv[i])>-1){
			m=dv[i];
			break;
		}
	}
	return m;
}
function P7_PM3getCSSPre(){
	var i,dV,pre=['transition','WebkitTransition'];
	var c='none',cssPre=['','-webkit-'];
	dV=document.createElement('div');
	for(i=0;i<pre.length;i++){
		if(dV.style[pre[i]]!==undefined){
			c=cssPre[i];
			break;
		}
	}
	return c;
}
function P7_PM3addSheet(sh){
	var h,hd;
	h=document.createElement('style');
	h.type='text/css';
	h.appendChild(document.createTextNode(sh));
	hd=document.getElementsByTagName('head');
	hd[0].appendChild(h);
}
