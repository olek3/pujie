var current_allday = null;
var cut_length = 16;
var latest_allday = [cur_evnt_full]?[cur_evnt_full].begin.offset : null;
for ( var i=0;i<[cal_events].length;i++) {
	if ( [cal_events][i].allday && [cal_events][i].progress > 0 && [cal_events][i].progress<1 ) {
		var offset_i = [cal_events][i].begin.offset; 
		var progress_i = [cal_events][i].progress;  
        if ( latest_allday === null || latest_allday <= offset_i ||  (latest_allday = offset_i && progress_i > [cal_events][current_allday].progress ) ) {
            latest_allday = offset_i;
            current_allday = i;
        }
	}
}

announce = (current_allday === null ) ? "" : [cal_events][current_allday].title;

if (announce.length > cut_length ) { announce = announce.substring(1,cut_length) + "...";}

return  announce ;

