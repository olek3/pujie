
if([com_evnt] && [com_evnt_full] && [com_evnt_full].begin.offset >= 0 ) {
    var in_time = [com_evnt_full].begin.offset > 60 ? Math.round([com_evnt_full].begin.offset /6)/10+"ч" : [com_evnt_full].begin.offset +"м";
    if([com_evnt_full].begin.offset == 0 ) return  "["+[com_evnt_full].time +"]\n" + [com_evnt_full].title;
    return ([com_evnt_full].allday ? "{завтра}" : [com_evnt_full].begin.hour24+":"+([com_evnt_full].begin.minutes<10?"0":"")+[com_evnt_full].begin.minutes+" (+"+in_time+")" ) +"\n"+[com_evnt];
}

return "";