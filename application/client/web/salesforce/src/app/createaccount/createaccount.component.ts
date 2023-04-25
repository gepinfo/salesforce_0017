import { Component, OnInit } from '@angular/core';
import { CreateaccountService } from './createaccount.service';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss'],
})

export class CreateaccountComponent implements OnInit {
    public salesforceentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        company: '',
    }

    constructor (
        private createaccountService: CreateaccountService,
    ) { }

    ngOnInit() {
        this.salesforceentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}