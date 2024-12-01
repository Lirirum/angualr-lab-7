import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private fb = inject(FormBuilder); 


  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      userInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
      }),
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      }),
    });
  }


  updateForm() {
    this.form.setValue({
      userInfo: { firstName: 'Michael', lastName: 'Jackson' },
      contactInfo: { email: 'jackson.michael@example.com', phone: '1234567890' },
    });
  }


  get formValues() {
    return JSON.stringify(this.form.value, null, 2);
  }
}


