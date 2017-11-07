import { Component, OnInit } from '@angular/core';
import * as nes from '../client.min.js';

@Component({
  selector: 'app-narrator',
  templateUrl: './narrator.component.html',
  styleUrls: ['./narrator.component.css']
})
export class NarratorComponent implements OnInit {
  public client = new nes.Client('ws://localhost:6001'); // <-- Config the port!
  constructor() {
      this.client.connect(function (error) {
      if(error){
        return console.error("Cant connect to ws server: " + error.message);
      }
      this.client.subscribe('/event/1/narrator', this.handleJudge, function (err) {
        console.log(err);
      });
      this.client.subscribe('/event/1/lassoers', this.handleLassoerUpdate, function (err) {
        console.log(err);
      });
    });
  }

  public handleJudge (message, flags) {
   let judgeInfo;
   if(message.judges > 0){
     judgeInfo = message.judges + " Online";
   }else{
     judgeInfo = "Offline";
   }
    document.getElementById("judgeStatus").innerHTML = judgeInfo;
  }

  public handleLassoerUpdate(message, flags){
   let lassoerObject = message.data;
   document.getElementById("infoArmed").innerHTML = lassoerObject.armed;
   document.getElementById("infoMounted").innerHTML = lassoerObject.mounted;
  }

  ngOnInit() {
  }

}
