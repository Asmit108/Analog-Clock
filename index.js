setInterval(() => {
	d = new Date();
	htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);    /*for showing time in clock*/

var audio=new Audio('Message.mp3');
const frm=document.querySelector('#frm');
const ip=document.querySelector('#ip');

frm.addEventListener('submit',(e)=>{    /*for alarm tone ringing*/
   e.preventDefault();
   const alarm_time=new Date(ip.value);
   const cur_time=new Date();
   if(alarm_time>=cur_time){
    const tf=alarm_time.getTime()-cur_time.getTime();
    a=setTimeout(()=>{
        alert('Alarm Ringing!');
        let i=0;
        b=setInterval(()=>{
            audio.play();i++;
            if(i>=20){clearInterval(b);}
        },1000);
    },tf);
   }
});

const sfrm=document.querySelector('#sfrm');
const sip=document.querySelector('#sip');
const h=document.querySelector('#h');

sfrm.addEventListener('submit',(e)=>{   /*for setting count-down-timer*/
    e.preventDefault();
    const time=new Date(sip.value);
    const cur_time=new Date();
    if(time>cur_time){
          const divtimer=document.createElement('div');
          divtimer.classList.add('divtmr');
          h.append(divtimer);
          a=setInterval(()=>{
              const cur_time=new Date();
              const dif=Math.floor((time.getTime()-cur_time.getTime())/1000);
              const dfh=Math.floor(dif/3600);
              const dfm=Math.floor((dif%3600)/60);
              const dfs=(dif%60);
              const divtmr=document.querySelector('.divtmr');
              divtimer.innerText=`COUNT-DOWN-TIMER:     ${dfh} : ${dfm} : ${dfs}`;
              if(time==cur_time){divtmr.remove();clearInterval(a);alert('Timer Completed!');}
          },1000);
    }
    else{
        alert('No Count-Down-Timer!');
    }
});
