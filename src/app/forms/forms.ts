import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  constructor(private form: FormBuilder) {}

  Myform!: FormGroup;

  ngOnInit() {
    this.Myform = this.form.group({
      phoneNumber: ['545451'],
      password: ['45454'],
    });
  }

  formLoogin() {
    console.log(this.Myform.value);
  }

  // formLoogin(form : any){
  //   console.log(form)
  // }
}
