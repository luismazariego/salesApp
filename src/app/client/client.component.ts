import { ClientdialogComponent } from './dialog/clientdialog/clientdialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiclientService } from '../services/apiclient.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public list: any[] = [];
  public columns: string[] = ['id', 'name'];

  constructor(private clientService: ApiclientService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
     this.clientService.getClients().subscribe((res) => {
       this.list = res.data;
     });
  }

  add() {
    const dialogRef = this.dialog.open(ClientdialogComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getClients();
    });
  }

}
