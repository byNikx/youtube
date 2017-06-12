import { Component, OnInit, DoCheck } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/1';

@Component({
  selector: 'nx-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements DoCheck {


  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 

  ngDoCheck(){
  	///console.log(this.uploader.queue);
  }	

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  files = [
  	{
  		name: "MkGBcuEULRDAhacWUBYBWKUFoY.jpg",
  		completed: true,
  		uploading: false
  	},{
  		name: "OHNQaNWkKeHVopZlUBYBWKUFoY.jpg",
  		completed: true,
  		uploading: false
  	},{
  		name: "qtcTNUBYBWKUFoY.jpg",
  		completed: false,
  		uploading: true
  	},{
  		name: "KkNvoTyfployKpFUBYBWKUFoY.jpg",
  		completed: false,
  		uploading: false
  	},{
  		name: "guzisFdCgMDPwXVQNUBYBWKUFoY.jpg",
  		completed: false,
  		uploading: false
  	},{
  		name: "kYFlSRYzUBYBWKUFoY.jpg",
  		completed: false,
  		uploading: false
  	},
  ]

  constructor() { }

  ngOnInit() {
  }

}
