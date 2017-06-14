import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

class FileStatus{
  private status: string;
  private progress: number;
  
  constructor() {}
  
  public setStatus(status: string): void{
    this.status = status;
  }

  public setProgress(progress: number): void{
    this.progress = progress;
  }

  public getStatus(): string{
    return this.status;
  }

  public getProgres(): number{
    return this.progress;
  }

}

@Component({
  selector: 'nx-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements DoCheck {


  public uploader:FileUploader = new FileUploader({url: URL, autoUpload: true});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  @Input() file: FileItem = null;
  public fileProgress: any = null;
 
  constructor(){
    this.fileProgress = this.getFormattedFileStatus(
      this.getFileStatus(this.file)
    );
  }
  ngOnInit() {
  }

  ngDoCheck(){
  	console.log(this.uploader.queue);
  }	

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public getFileStatus(item: FileItem): FileStatus{
    let fileStatus = new FileStatus();
    if(item && item.isReady){
      if(item.isUploading){
        fileStatus.setProgress(item.progress);
        fileStatus.setStatus('Uploading...');
      }else{
        fileStatus.setStatus('Waiting...');
      }
    }
    return fileStatus;
  }

  public getFormattedFileStatus(fileStatus: FileStatus){
    return {
      label: `${fileStatus.getStatus()} ${fileStatus.getProgres()}%`
    };
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


}
