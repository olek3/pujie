var currentEvent = null;
var cut_length = 18;
var soonestFinish = [cur_evnt_full]?[cur_evnt_full].end.offset : null;
for ( var i=0;i<[cal_events].length;i++) {
	if ( [cal_events][i].allday && [cal_events][i].progress > 0 && [cal_events][i].progress<1 ) {
		var offset_i = [cal_events][i].end.offset; 
		var progress_i = [cal_events][i].progress;  
        if ( soonestFinish === null || soonestFinish > offset_i ||  (soonestFinish = offset_i && progress_i >= [cal_events][i].progress ) ) {
            soonestFinish = offset_i;
            currentEvent = i;
        }
	}
} 

var announce = (currentEvent === null ) ? "" : [cal_events][currentEvent].title;

if(announce.slice(0,5).toLowerCase() == 'день ') {announce = announce.slice(5);}

if (announce.length > cut_length ) { announce = announce.slice(0,cut_length) + String.fromCharCode(8230);}

return  announce ;


