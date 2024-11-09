var current_event = null;     
var current_allday = null;  
var latest_start = [cur_evnt_full]?[cur_evnt_full].begin.offset : null;   
var latest_allday = latest_start;  
 for ( var i=0;i<[cal_events].length;i++) {  
	if ( [cal_events][i].progress > 0 && [cal_events][i].progress<1 ) {  
		var offset_i = [cal_events][i].begin.offset; 
		var progress_i = [cal_events][i].progress;  
		if ( ! ([cal_events][i].allday) ) {  
			if (!current_event || latest_start<offset_i || (latest_start=offset_i &&  progress_i > [cal_events][current_event].progress) ) {  
				latest_start = offset_i;  
				current_event = i;  
			}  
		} else {  
			if (!current_event || latest_allday < offset_i || (latest_allday = offset_i && progress_i > [cal_events][current_allday].progress ) ) {  
				latest_allday = offset_i;  
				current_allday = i;  
			}  
		}  
	}
   }
var is_all_day = current_event === null;   
[global].my_current = [cal_events][(is_all_day)?current_allday:current_event];  

var endtime = ""; var enddate = ""; var my_till = "";
if([global].my_current) {
    endtime = [global].my_current.end.hour24 + ":" + ([global].my_current.end.minutes < 10 ? "0" : "" ) + [global].my_current.end.minutes; 
    enddate = [global].my_current.end.day + "/" + [global].my_current.end.month; 
    var tomorrow = ([day_n] == [days_in_month]) ? "1/" + ([month_n]+1 %12) : ([day_n] + 1) + "/" + [month_n];
    var today = [day_n] + "/" + [month_n];
    if (is_all_day) {
        my_till = (enddate == today || enddate == tomorrow ) ? "" : " →"+enddate;
    } else {
        my_till = " →"+ (enddate == today ? endtime : enddate);
    }
    
}
var first_line=([global].my_current?([global].my_current.title+(is_all_day?"":" "+Math.round([global].my_current.progress*100)+ "%")+my_till):([cur_evnt]== "No event")?"":[cur_evnt]);   
return first_line;
