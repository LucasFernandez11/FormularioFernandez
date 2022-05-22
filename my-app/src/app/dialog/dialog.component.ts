import { Component, Inject, OnInit } from '@angular/core';
import { DialogData } from './login.interface'; 
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  login: DialogData;
  constructor( public dialogRef:MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();    
  }

}
