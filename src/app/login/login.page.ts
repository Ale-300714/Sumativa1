import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';


@Component({

  selector: 'app-login',

  templateUrl: './login.page.html',

  styleUrls: ['./login.page.scss'],

})

export class LoginPage implements OnInit {

  usuario: string = '';

  password: string = '';


  constructor(private router: Router, private alertController: AlertController) {}


  ngOnInit() {}


  async ingresar() {

    // Validaciones

    if (!this.validarUsuario(this.usuario)) {

      await this.mostrarAlerta('Error', 'El usuario debe tener entre 4 y 10 caracteres alfanuméricos.');

      return;

    }


    if (!this.validarPassword(this.password)) {

      await this.mostrarAlerta('Error', 'La contraseña debe ser numérica y tener 6 dígitos.');

      return;

    }


    // Navegación a la página Home

    this.router.navigate(['/home'], {

      state: {

        username: this.usuario,

        password: this.password,

      },

    });

  }


  // Validaciones

  validarUsuario(usuario: string): boolean {

    return /^[a-zA-Z0-9]{4,10}$/.test(usuario);

  }


  validarPassword(password: string): boolean {

    return /^[0-9]{6}$/.test(password);

  }


  // Mostrar una alerta

  async mostrarAlerta(titulo: string, mensaje: string) {

    const alert = await this.alertController.create({

      header: titulo,

      message: mensaje,

      buttons: ['OK'],

    });


    await alert.present();

  }

}
