import { Component, OnInit } from '@angular/core';
import { UpdateaccountService } from './updateaccount.service';


@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.scss'],
})

export class UpdateaccountComponent implements OnInit {
    public salesforceentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        company: '',
    }

    constructor (
        private updateaccountService: UpdateaccountService,
    ) { }

    ngOnInit() {
        this.salesforceentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}