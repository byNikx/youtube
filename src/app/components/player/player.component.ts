import { Component, OnInit, ElementRef, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'nx-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

player: ElementRef;
constructor() { 
}

ngOnInit() {
	
}

}
