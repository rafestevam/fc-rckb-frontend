import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fc-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  usersForm: FormGroup;
  files: File[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usersForm = this.formBuilder.group({
      username: ['',
        Validators.required
      ],
      name: ['',
        Validators.required
      ],
      cellPhone: [''],
      profile: ['',
        Validators.required
      ],
      userActive: [false]
    })
  }

  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
  }

  createOrUpdate(){

  }

}
