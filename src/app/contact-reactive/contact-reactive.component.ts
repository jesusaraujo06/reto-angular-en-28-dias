import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  // Propiedad tipo FormGroup  creada para el formulario
  contactForm!: FormGroup;

  // Propiedad para almaecenar el valor que me pasen por queryParams
  nameParam!: string;

  edad: string = 'hola';
  // Si es solo tenemos un input es mejor utilizar la clase FormControl()
  field = new FormControl();

  // Tenemos que importar el FormBuilder
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Acceder a los parametros del url
    this.route.queryParams.subscribe((params: Params) => {
      this.nameParam = params['nameParam'];
      // console.log(params);
    });
    // Y aqui ya podriamos usar propiedades del FormControl
    // this.field.valid == true;

    // Para FormGroup
    this.contactForm = this.initForm();

    // this.onPathValue();

    // this.onSetValue();
  }

  // Añadir datos a un campo
  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Yisus' });
  }

  // Añadir a datos a todos los campos, nos obliga a pasarle datos a todos los capos
  // onSetValue(): void {
  //   this.contactForm.setValue({ comment: 'Hola mundo' });
  // }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value);
  }

  // Metodo para declarar las propiedades de nuestro formulario
  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: ['', [Validators.required]],
      comment: [''],
    });
  }
}
