var current_allday = null;
var cut_length = 13;
var soonest_allday = [cur_evnt_full]?[cur_evnt_full].end.offset : null;
var debug = "";
for ( var i=0;i<[cal_events].length;i++) {
        if ( [cal_events][i].allday && [cal_events][i].progress > 0 && [cal_events][i].progress<1 ) {
                var offset_i = [cal_events][i].end.offset;
        if ( soonest_allday === null || soonest_allday >= offset_i ) {
            soonest_allday = offset_i;
            current_allday = i;
        }
        }
}

var announce = (current_allday === null ) ? "" : [cal_events][current_allday].title;

if(announce.slice(0,5).toLowerCase() == 'день ') {announce = announce.slice(5);}
if(announce.slice(0,7).toLowerCase() == 'day of ') {announce = announce.slice(7);}

if (announce.length > cut_length ) { announce = announce.slice(0,cut_length) + String.fromCharCode(8230);}

return  announce ;