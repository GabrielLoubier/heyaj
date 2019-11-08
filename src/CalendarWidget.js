import React, { Component } from 'react'
import TimekitBooking from 'timekit-booking'

export default class TestApp extends Component {
    componentDidMount() {
        var widget = new TimekitBooking();
        widget.init({
            app_key: 'live_widget_key_yYXHsUurvCUctNYflzGDMqEJo6mol0Yo',
            project_id: '352a29be-9ec4-4875-ac87-cb5fb3a2fe62'
            , fullcalendar: {
                firstDay: (new Date().getDay()),
            }
        });
    }
    render() {
        return (
            <div>

                <div id="bookingjs"></div>
            </div>
        )
    }
}