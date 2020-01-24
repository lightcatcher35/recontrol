import React, { Component } from 'react';
import PropTypes from 'prop-types';


import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../../node_modules/@fullcalendar/core/main.css';
import '../../node_modules/@fullcalendar/daygrid/main.css';
import { formatDate } from '@fullcalendar/core'
import interactionPlugin from "@fullcalendar/interaction"

let str = formatDate('2020-01-23', {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
  timeZoneName: 'short',
  timeZone: 'UTC',
  locale: 'tr'
})
console.log(str);
class Calendar extends Component {
    handleDateClick = (arg) => { // bind with an arrow function
        alert('Clicked on: ' + arg.dateStr);
        alert('Coordinates: ' + arg.jsEvent.pageX + ',' + arg.jsEvent.pageY);
        alert('Current view: ' + arg.view.type);
        // change the day's background color just for fun
        arg.dayEl.style.backgroundColor = 'red';
    }
    render() {
        return (
            <div>
                <FullCalendar 
                        defaultView="dayGridMonth" 
                        header={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                          }}
                        plugins={[ dayGridPlugin,interactionPlugin]}
                        locale="tr"
                        firstDay={1}
                        dateClick={this.handleDateClick} 
                        events={[
                            { title: 'Cilt Bakımı', date: '2020-01-10' },
                            { title: 'Kalıcı Makyaj', date: '2020-01-13' },
                            { title: 'Lazer Epilasyon 1. Seans', date: '2020-01-24' },
                            { title: 'Cilt Bakımı', date: '2020-01-5' },
                            { title: 'Cilt Bakımı', date: '2020-01-24' },
                            { title: 'Lazer Epilasyon 1. Seans', date: '2020-01-25' },
                            { title: 'Manikür', date: '2020-01-23' },
                            { title: 'Manikür', date: '2020-01-24' },
                            { title: 'Cilt Bakımı', date: '2020-01-24' }
                          ]}
                         />
            </div>
        );
    }
}


Calendar.propTypes = {
    
};


export default Calendar;
