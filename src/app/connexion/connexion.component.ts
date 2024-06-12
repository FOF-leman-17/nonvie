import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  connexionform = this.fb.group({
    utilisateur: ['', Validators.required],
    password: ['', Validators.required],
  });

  isSubmitted: boolean = false;
  validerbouton: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.connexionform.value, this.connexionform.invalid);
    this.isSubmitted = true;
  }

  validation() {
    this.validerbouton = !this.validerbouton;
  }
}
