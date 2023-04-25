import { Component, OnInit } from '@angular/core';
import { AccountdetailService } from './accountdetail.service';


@Component({
  selector: 'app-accountdetail',
  templateUrl: './accountdetail.component.html',
  styleUrls: ['./accountdetail.component.scss'],
})

export class AccountdetailComponent implements OnInit {
    public salesforceentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        company: '',
    }

    constructor (
        private accountdetailService: AccountdetailService,
    ) { }

    ngOnInit() {
        this.salesforceentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}