import { Component, OnInit } from '@angular/core';
import * as nes from 'nes';

@Component({
  selector: 'app-narrator',
  templateUrl: './narrator.component.html',
  styleUrls: ['./narrator.component.css']
})
export class NarratorComponent implements OnInit {
  public client = new nes.Client('ws://localhost:6001'); // <-- Config the port!
  private lassoer = {armed: 'X', mounted: 'N'};
  constructor() {
      var self = this
      self.client.connect(function (error) {
      if(error){
        return console.error("Cant connect to ws server: " + error.message);
      }
      self.client.subscribe('/event/1/narrator', self.handleJudge.bind(self), function (err) {
        console.log(err);
      });
      self.client.subscribe('/event/1/lassoers', self.handleLassoerUpdate.bind(self), function (err) {
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
    this.lassoer = lassoerObject
  }

  ngOnInit() {
  }

}
