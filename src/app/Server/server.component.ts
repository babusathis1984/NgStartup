import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = "offline";
    allowNewServer=true;
constructor(){
    setTimeout(() => {
       this.allowNewServer= false;
    }, 5000);

}
}