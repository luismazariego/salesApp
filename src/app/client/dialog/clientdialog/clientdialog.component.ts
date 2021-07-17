import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from 'src/app/models/client';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-clientdialog',
  templateUrl: './clientdialog.component.html',
  styles: [],
})
export class ClientdialogComponent implements OnInit {
  public name: string = '';

  constructor(
    public dialogRef: MatDialogRef<ClientdialogComponent>,
    private service: ApiclientService,
    public snackBar: MatSnackBar
  ) { }
  
  close() {
    this.dialogRef.close();
  }

  addClient() {
    const client: Client = {
      name: this.name
    }
    this.service.addClient(client).subscribe(res => {
      if (res.success === 1) {
        this.dialogRef.close();
        this.snackBar.open('Client created successfully', '', {
          duration: 2000
        });
      }
    });
  }

  ngOnInit(): void {}
}
