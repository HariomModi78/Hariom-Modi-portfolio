const _0x40be5b=_0x2f70;(function(_0x10805e,_0x33527d){const _0x19ffa5=_0x2f70,_0x17e708=_0x10805e();while(!![]){try{const _0x46bcc5=-parseInt(_0x19ffa5(0xed))/0x1+parseInt(_0x19ffa5(0xf6))/0x2+-parseInt(_0x19ffa5(0xfa))/0x3+-parseInt(_0x19ffa5(0x114))/0x4*(-parseInt(_0x19ffa5(0xe8))/0x5)+-parseInt(_0x19ffa5(0x10d))/0x6*(-parseInt(_0x19ffa5(0xe4))/0x7)+-parseInt(_0x19ffa5(0x100))/0x8+-parseInt(_0x19ffa5(0x10f))/0x9;if(_0x46bcc5===_0x33527d)break;else _0x17e708['push'](_0x17e708['shift']());}catch(_0x3aaa16){_0x17e708['push'](_0x17e708['shift']());}}}(_0x9747,0x4c313));let bettypeselect=document['getElementsByClassName']('bettypeselect'),reduce=document[_0x40be5b(0x116)](_0x40be5b(0x109)),increase=document['getElementsByClassName'](_0x40be5b(0xf3)),amountenter=document[_0x40be5b(0x116)](_0x40be5b(0x107)),betamount=document[_0x40be5b(0x116)](_0x40be5b(0xf5)),remove=document['getElementsByClassName'](_0x40be5b(0xfe)),winning=document[_0x40be5b(0xde)]('.winning'),totalBalance=document['querySelector'](_0x40be5b(0x10a)),option=document['getElementsByClassName'](_0x40be5b(0xfb)),refresh=document['querySelector']('.refresh'),wallet=document[_0x40be5b(0xde)](_0x40be5b(0x11a));function _0x2f70(_0x5ec528,_0xe36382){const _0x974775=_0x9747();return _0x2f70=function(_0x2f703b,_0x537f71){_0x2f703b=_0x2f703b-0xde;let _0x5a9e41=_0x974775[_0x2f703b];return _0x5a9e41;},_0x2f70(_0x5ec528,_0xe36382);}wallet['addEventListener'](_0x40be5b(0x11c),()=>{const _0x281a08=_0x40be5b;window[_0x281a08(0xf7)]('wallet.html',_0x281a08(0x111));});let myutr;localStorage[_0x40be5b(0x119)]('wallet')==null?localStorage[_0x40be5b(0x104)](_0x40be5b(0x105),0xb):totalBalance[_0x40be5b(0xf4)]=localStorage['getItem'](_0x40be5b(0x105))+'.00\x20INR';let coins,k=0x0;refresh['addEventListener'](_0x40be5b(0x11c),()=>{const _0x16eab2=_0x40be5b;localStorage[_0x16eab2(0x104)](_0x16eab2(0xf1),0x1a10+k),refresh[_0x16eab2(0x11b)][_0x16eab2(0xf8)](_0x16eab2(0xef));if(parseInt(localStorage[_0x16eab2(0x119)](_0x16eab2(0x103)))==parseInt(localStorage[_0x16eab2(0x119)](_0x16eab2(0xf1))))k=0xc,coins=localStorage[_0x16eab2(0x119)]('userCoins'),totalBalance['innerText']=parseInt(coins)+parseInt(totalBalance[_0x16eab2(0xf4)])+'.00\x20INR',localStorage['setItem'](_0x16eab2(0x105),parseInt(totalBalance[_0x16eab2(0xf4)])),localStorage['setItem'](_0x16eab2(0xf1),0x7d5),localStorage[_0x16eab2(0x104)](_0x16eab2(0x103),null);else localStorage[_0x16eab2(0x119)](_0x16eab2(0x103))==null&&(localStorage[_0x16eab2(0x104)]('userCoins',0x0),coins=0x0);setTimeout(()=>{const _0x16d197=_0x16eab2;refresh[_0x16d197(0x11b)][_0x16d197(0xf8)](_0x16d197(0xef));},0x3e8);});for(let i=0x0;i<option[_0x40be5b(0x10e)];i++){option[i][_0x40be5b(0xe3)](_0x40be5b(0x11c),()=>{const _0x220695=_0x40be5b;localStorage['setItem']('userCoins',0x0),window['open'](_0x220695(0x102));});}let result=document['getElementsByClassName'](_0x40be5b(0x11d)),countforresult=0x0;function setresult(){const _0x23ce34=_0x40be5b;result[countforresult][_0x23ce34(0xf4)]=randomNumber,countforresult++;if(countforresult==0x7)for(let _0x4dfc16=0x0;_0x4dfc16<result[_0x23ce34(0x10e)];_0x4dfc16++){result[_0x4dfc16][_0x23ce34(0xf4)]='',countforresult=0x0,result[countforresult][_0x23ce34(0xf4)]=randomNumber;}}let count=0x0,audio=new Audio(_0x40be5b(0x112)),audio1=new Audio(_0x40be5b(0xeb)),audio2=new Audio(_0x40be5b(0xe5)),audio3=new Audio(_0x40be5b(0xf9)),audio4=new Audio(_0x40be5b(0xfc));for(let i=0x0;i<0x2;i++){bettypeselect[i][_0x40be5b(0xe3)]('click',()=>{const _0x474b85=_0x40be5b;bettypeselect[i]['classList'][_0x474b85(0xf8)](_0x474b85(0xe1)),count==0x0?(bettypeselect[i][_0x474b85(0xea)]=_0x474b85(0xdf),count++):(bettypeselect[i]['textContent']=_0x474b85(0x117),count=0x0);});}let maincoverreal=document['getElementsByClassName'](_0x40be5b(0xe0)),loader=document['getElementsByClassName']('loader'),x=document['querySelector']('.x'),confirm=document[_0x40be5b(0x116)](_0x40be5b(0xf2)),flag=!![];for(let i=0x0;i<confirm[_0x40be5b(0x10e)];i++){confirm[i][_0x40be5b(0xe3)](_0x40be5b(0x11c),()=>{const _0x100fb2=_0x40be5b;totalBalance['innerText']=localStorage['getItem'](_0x100fb2(0x105))+_0x100fb2(0xff);let _0x53205e=document['getElementsByClassName'](_0x100fb2(0xf5));betamount[i][_0x100fb2(0xf4)]=amountenter[i][_0x100fb2(0xf4)];let _0x58d740=setInterval(()=>{const _0x246d4b=_0x100fb2;let _0x5b050f=document['getElementsByClassName']('bettypeselect');!_0x5b050f[i][_0x246d4b(0x11b)][_0x246d4b(0x118)](_0x246d4b(0xe1))&&clearInterval(_0x58d740);let _0x5e38fb=document['querySelector'](_0x246d4b(0x110))['value'];if(_0x5e38fb!='')for(let _0x1ccd66=0x0;_0x1ccd66<confirm[_0x246d4b(0x10e)];_0x1ccd66++){if(flag){flag=![],confirm[i][_0x246d4b(0xfd)][_0x246d4b(0x10b)]='box-shadow:inset\x200\x200\x2020px\x20black';let _0x58e61f=document[_0x246d4b(0xde)]('#target')[_0x246d4b(0x10c)];_0x58e61f=parseInt(_0x58e61f),console['log'](_0x58e61f),parseInt(localStorage['getItem'](_0x246d4b(0x105)))>=parseInt(amountenter[i]['innerText'])?(setTimeout(()=>{const _0x558475=_0x246d4b;loader[0x0][_0x558475(0xfd)][_0x558475(0x10b)]=_0x558475(0xf0),loader[0x0]['innerText']='3',audio2[_0x558475(0x101)]();},0x3e8),setTimeout(()=>{loader[0x0]['innerText']='2';},0x7d0),setTimeout(()=>{const _0x40daf3=_0x246d4b;loader[0x0][_0x40daf3(0xf4)]='1';},0xbb8),setTimeout(()=>{const _0x45d1e6=_0x246d4b;loader[0x0][_0x45d1e6(0xf4)]='0',totalBalance[_0x45d1e6(0xf4)]=parseInt(totalBalance['innerText'])-parseInt(amountenter[i]['innerText'])+_0x45d1e6(0xff),localStorage[_0x45d1e6(0x104)](_0x45d1e6(0x105),parseInt(totalBalance[_0x45d1e6(0xf4)]));},0xfa0),setTimeout(()=>{const _0x31250f=_0x246d4b;loader[0x0][_0x31250f(0xfd)]['cssText']='color:transparent',loader[0x0]['classList'][_0x31250f(0xf8)](_0x31250f(0x106)),audio[_0x31250f(0x101)](),randomNumber=Math[_0x31250f(0xe9)]()**0xa*0x64,randomNumber=randomNumber['toFixed'](0x2);},0x1388),setTimeout(()=>{const _0x51170f=_0x246d4b;maincoverreal[0x0][_0x51170f(0x11b)][_0x51170f(0x115)](_0x51170f(0x108));},0x1388),setTimeout(()=>{const _0x9865f6=_0x246d4b;loader[0x0][_0x9865f6(0xfd)][_0x9865f6(0x10b)]='background-image:url(bomb.jpg)\x20;',audio[_0x9865f6(0xe6)](),audio1[_0x9865f6(0x101)]();if(_0x58e61f<=randomNumber){let _0x114464=parseFloat(amountenter[i][_0x9865f6(0xf4)]);winning['innerText']=(_0x114464*_0x58e61f)[_0x9865f6(0xe7)](0x2)+_0x9865f6(0xe2),audio4[_0x9865f6(0x101)]();}else winning['innerText']='0',audio3[_0x9865f6(0x101)]();x[_0x9865f6(0xf4)]=randomNumber+'x',_0x58e61f<=randomNumber?x['style'][_0x9865f6(0x10b)]='color:green':x[_0x9865f6(0xfd)][_0x9865f6(0x10b)]=_0x9865f6(0xf0),confirm[i][_0x9865f6(0xfd)][_0x9865f6(0x10b)]=_0x9865f6(0x113);},0x30d4),setTimeout(()=>{const _0x1a7915=_0x246d4b;loader[0x0]['classList'][_0x1a7915(0xf8)]('loaderstart'),loader[0x0][_0x1a7915(0xfd)][_0x1a7915(0x10b)]=_0x1a7915(0xec),flag=!![],setresult(),totalBalance[_0x1a7915(0xf4)]=parseInt(parseInt(totalBalance['innerText'])+parseInt(winning[_0x1a7915(0xf4)]))+_0x1a7915(0xff),localStorage[_0x1a7915(0x104)](_0x1a7915(0x105),parseInt(totalBalance[_0x1a7915(0xf4)]));},0x32c8)):(bettypeselect[i]['classList'][_0x246d4b(0x118)](_0x246d4b(0xe1))&&bettypeselect[i][_0x246d4b(0x11b)][_0x246d4b(0xf8)](_0x246d4b(0xe1)),alert(_0x246d4b(0xee)),setTimeout(()=>{const _0x5267b3=_0x246d4b;loader[0x0]['style'][_0x5267b3(0x10b)]=_0x5267b3(0xec),flag=!![],confirm[i][_0x5267b3(0xfd)][_0x5267b3(0x10b)]=_0x5267b3(0x113);}));}}else bettypeselect[i][_0x246d4b(0x11b)][_0x246d4b(0x118)]('bettypeselectjs')?bettypeselect[i][_0x246d4b(0x11b)][_0x246d4b(0xf8)]('bettypeselectjs'):alert('Please\x20Set\x20Target');});});}for(let i=0x0;i<amountenter['length'];i++){increase[i]['addEventListener'](_0x40be5b(0x11c),()=>{const _0x4aacd1=_0x40be5b;let _0x47a620=parseInt(amountenter[i][_0x4aacd1(0xf4)]);amountenter[i][_0x4aacd1(0xf4)]=_0x47a620+0x5,_0x47a620=_0x47a620+0x5,betamount[i][_0x4aacd1(0xf4)]=_0x47a620;}),reduce[i][_0x40be5b(0xe3)](_0x40be5b(0x11c),()=>{const _0x3fb36a=_0x40be5b;let _0x2aac16=parseInt(amountenter[i][_0x3fb36a(0xf4)]);_0x2aac16>0x5&&(amountenter[i][_0x3fb36a(0xf4)]=_0x2aac16-0x5,_0x2aac16=_0x2aac16-0x5,betamount[i]['innerText']=_0x2aac16);});}function _0x9747(){const _0x1e484f=['.00\x20INR','1000760XJXnkH','play','qr.html','utr','setItem','wallet','loaderstart','amountenter','maincoverrealstart','ri-subtract-fill','.totalBalance','cssText','value','534yDPiRl','length','1003842xaEihF','#target','_blank','rocket-launch-sfx-253937.mp3','box-shadow:inset\x200\x200\x200px\x20black','8bCxwwT','add','getElementsByClassName','bet','contains','getItem','.wallet','classList','click','result','querySelector','auto','maincoverreal','bettypeselectjs','INR','addEventListener','8617vCKDvr','timebombbeep-93074.mp3','pause','toFixed','1532310TONIYh','random','textContent','blast-37988.mp3','background-color:transparent','99075Mlgbbu','insufficent\x20balance','refreshjs','color:red','myutr','confirm','ri-add-fill','innerText','betamount','367394MepLKF','open','toggle','maa-chud-gai.mp3','775167CAKCPt','option','tmp5f9yp0pe.mp3','style','remove'];_0x9747=function(){return _0x1e484f;};return _0x9747();}
