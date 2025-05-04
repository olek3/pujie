var debug = "";

if ([cur_evnt]) debug += [cur_evnt] + ":"  + [cur_evnt_full].title + ":" + [cur_evnt_full].begin + "-" + [cur_evnt_full].offset + "/" ;
if ([com_evnt]) debug += [com_evnt] + ":"  + [com_evnt_full].title + ":" + [com_evnt_full].begin + "-" + [com_evnt_full].offset + "/" ;
debug += "==/";
for ( var i=0;i<[cal_events].length;i++) {
    debug += ":" + [cal_events][i].title + ":" + [cal_events][i].begin + "-" + [cal_events][i].offset + "/" ;
}
return debug;

if([com_evnt] && [com_evnt_full] && [com_evnt_full].begin.offset >= 0 ) {
    var in_time = [com_evnt_full].begin.offset > 60 ? Math.round([com_evnt_full].begin.offset /6)/10+"ч" : [com_evnt_full].begin.offset +"м";
    return ([com_evnt_full].allday ? "{завтра}" : [com_evnt_full].begin.hour24+":"+([com_evnt_full].begin.minutes<10?"0":"")+[com_evnt_full].begin.minutes+" (+"+in_time+")" ) +"\n"+[com_evnt];
}
if([cur_evnt_full] && [cur_evnt_full].begin.offset == 0 ) return  [cur_evnt];




return "";