import { Component, OnInit } from '@angular/core';
import * as nes from '../client.min.js';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent implements OnInit {

  public client = new nes.Client('ws://localhost:6001');

  constructor() {
    this.client.connect(function (error) {
      if(error){
        return console.error("Cant connect to ws server: " + error.message);
      }
      this.client.subscribe('/event/1/judge', ()=>{}, function (error) {
        console.log(error);
      });
      this.client.subscribe('/event/1/lassoers', this.handleLassoerUpdate, function (err) {
        console.log(err);
      });

    });

  }

  //Only Judge can send Updates
  public sendUpdate(updateData){
  this.client.message({eventId: 1, type: 'update-lassoer', data: updateData}, function callback(error, message){
      if(error || !message.status){
        return console.error("Error Sending Updates");
      }
   })
  }

  public turnOffline(){
    this.client.unsubscribe('/event/1/judge');
  }

  public handleLassoerUpdate(message, flags){
  let lassoerObject = message.data;
    document.getElementById("infoArmed").innerHTML = lassoerObject.armed;
    document.getElementById("infoMounted").innerHTML = lassoerObject.mounted;
  }

  ngOnInit() {
  }

}
