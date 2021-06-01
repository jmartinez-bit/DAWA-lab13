import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  angForm!: FormGroup;
  resultado?: string;

  get f() {
    return  this.angForm.controls;
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.angForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      secondSurname: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(10)]),
      repeatPassword: new FormControl('', [Validators.required])
    });
  }

  onClickSubmit(email: string, password: string) {
    if(this.angForm.valid) 
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
    alert("Your Email is: " + email)
  }

}
