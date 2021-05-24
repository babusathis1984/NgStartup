import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls:['./server.component.css'],
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = true;
  serverCreatedStatus = 'Server to be created';
  serverName = '';
  serverCreated = false;
  servers=['server1','server2'];
  constructor() {
    // setTimeout(() => {
    //    this.allowNewServer= false;
    // }, 10000);
    // this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  onServerCreated() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = 'server created : ' + this.serverName;
  }
  onUpdatedServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus(){
      return this.serverStatus === 'offline' ? 'red' : 'green' ;
  }
}
