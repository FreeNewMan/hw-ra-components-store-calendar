let monthNames = [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ];
let monthNames1 = [ "января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря" ];
let dayNames = [ "Понедельник","Вторник","Среда","Четверг","Пятница","Суббота", "Воскресенье" ];
let dayNamesMin = ["Пн","Вт","Ср","Чт","Пт","Сб", "Вс" ];

function getMonday(nyear, nmonth, nweek) {
  const cdate = new Date(nyear, nmonth, 1);
  cdate.setDate(cdate.getDate() - cdate.getDay() + 1 + nweek * 7);
  return cdate
}

function getDatesRange(dbgn) {
   let dateRange = [];
   let cr = dbgn;
   cr.setDate(cr.getDate() - 1);
   for (let i = 0; i < 7 ; i++) { 
     cr.setDate(cr.getDate() + 1);
     dateRange.push(new Date(cr));
   };
   return dateRange
}

function tdCls(curDate, cdate) {
  if (cdate.getMonth() !== curDate.getMonth()) {
    return "ui-datepicker-other-month"
  }

  if (curDate.getDate() === cdate.getDate()) {
    return "ui-datepicker-today"
  }


}

function getWeeks(year, month) {
  let l=new Date(year, month+1, 0);
  return Math.ceil( (l.getDate()- (l.getDay()?l.getDay():7))/7 )+1;
 }


function getArr(n) {
  let a = [];
  for (let i = 0; i < n ; i++) { 
    a.push(i)
  }
  return a
}

 const Calendar = props => {
    let curDate = props.date;
    let curYear = curDate.getFullYear();
    let curMonth = curDate.getMonth();
    let curDay = curDate.getDate();
    let curDayWeek = curDate.getDay();

    function rowRange(nweek) {
      return ( getDatesRange( getMonday(curYear,curMonth,nweek)).map(row =>(<td className={tdCls(curDate,row)} >{row.getDate()}</td>))
        );
     } 

    let allRange = getArr(getWeeks(curYear,curMonth)).map(item => (<tr>{rowRange(item)}</tr>));

    let dayNames1 = dayNamesMin.map((day,index) => (<th scope='col' title={dayNames[index]}>{day}</th>));
     

    return (
   <div className='ui-datepicker'>
     <div className='ui-datepicker-material-header'>
       <div className='ui-datepicker-material-day'>{dayNames[curDayWeek]} </div>
        <div className='ui-datepicker-material-date'>
        <div className='ui-datepicker-material-day-num'>{curDay}</div>  
        <div className='ui-datepicker-material-day-month'>{monthNames1[curMonth].toUpperCase()}</div>  
        <div className='ui-datepicker-material-day-year'>{curYear}</div>  
       </div>  
     </div>  
     <div className='ui-datepicker-header'>
       <div className='ui-datepicker-title'>
         <span className="ui-datepicker-month">{monthNames[curMonth]}</span>&nbsp;<span className="ui-datepicker-year">{curYear}</span> 
       </div>  
     </div>
     <table className='ui-datepicker-calendar'>
      <colgroup>
        <col/>
        <col/>
        <col/>
        <col/>
        <col/>
        <col className='ui-datepicker-week-end'/>
        <col className='ui-datepicker-week-end'/>
       </colgroup>
       <thead>
         <tr>
           {dayNames1}
         </tr>
       </thead>  
       <tbody>
         {allRange}
        </tbody>  
     </table>
        
   </div> 
    ); 
 }

 export default Calendar;