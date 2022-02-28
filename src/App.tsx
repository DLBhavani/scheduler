import React from "react";
import Navbar from "./Navbar";
import "./App.css";

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,

  EventSettingsModel,
  ViewDirective,
  ViewsDirective,
  DragAndDrop,
  Resize,
} from "@syncfusion/ej2-react-schedule";
//import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data';
//import { DropDownListComponent } from "@syncfusion/ej2-react-DropDowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
class App extends React.Component {
  private localData: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: "FED reports share successfully ",

        StartTime: new Date(2022, 1, 26, 9, 0),
        EndTime: new Date(2022, 1, 26, 10, 0),


      },
      {
        Id: 2,
        Subject: "FED reports share successfully",
        StartTime: new Date(2022, 1, 24, 9, 0),
        EndTime: new Date(2022, 1, 24, 10, 0),



      },
      {
        Id: 3,
        Subject: "FED reports share successfully",
        StartTime: new Date(2022, 1, 24, 12, 0),
        EndTime: new Date(2022, 1, 24, 13, 0),



      },
      {
        Id: 4,
        Subject: "FED reports share successfully",
        StartTime: new Date(2022, 1, 21, 14, 0),
        EndTime: new Date(2022, 1, 21, 15, 0),



      },
      {
        Id: 5,
        Subject: "FED reports share successfully",
        StartTime: new Date(2022, 1, 22, 9, 0),
        EndTime: new Date(2022, 1, 22, 10, 0),



      },

    ],
  };
  private eventTemplate(props: { [key: string]: Object }): JSX.Element {
    return(

      <div className="month-wrap">{props.Subject}</div>
    )
  }
  private editorWindowTemplate(props: any): JSX.Element {
    return (
      <table>
        <tbody>
          <tr>
            <td className="e-textlabel">Summary</td>
            <td>
              <input id="Summary" name="Subject" type="text" />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td><DateTimePickerComponent id="StartTime" data-name="StartTime"
            value={new Date(props.StartTime|| props.StartTime)} format='dd/MM/yy hh:mm a'></DateTimePickerComponent></td>

          </tr>
          <tr>
            <td className="e-textlabel">To</td>
            <td><DateTimePickerComponent id="EndTime" data-name="EndTime"
             value={new Date(props.StartTime|| props.StartTime)} format='dd/MM/yy hh:mm a'></DateTimePickerComponent></td>


          </tr>
        </tbody>
      </table>
    );
  }

  public render() {
    return (
      <div className=".e-schedule .e-appointment-details ">
      <Navbar/>

      <ScheduleComponent
        selectedDate={new Date(2022, 1, 24)}

        eventSettings={this.localData}>



        <ViewsDirective>


          <ViewDirective option="Day"  startHour="9:00" endHour="16:00"  ></ViewDirective>



          <ViewDirective option="Week" startHour="9:00" endHour="16:00" ></ViewDirective>


          <ViewDirective option="WorkWeek"
           startHour="9:00" endHour="16:00" ></ViewDirective>
          <ViewDirective
            option="Month"
            eventTemplate={this.eventTemplate.bind(this)}
          ></ViewDirective>

        </ViewsDirective>


        <Inject
          services={[Day, Week, Month, WorkWeek, DragAndDrop, Resize]}
        />
      </ScheduleComponent>
      </div>
    );
  }
}

export default App;
