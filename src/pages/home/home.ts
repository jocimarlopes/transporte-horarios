import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertController: AlertController) {

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      title: 'Sobre',
      message: 'Versão: 1.0<br>Desenvolvedor: <a href="https://jocimarlopes.com.br">Jocimar Lopes</a>',
      buttons: ['OK']
    });

    await alert.present();
  }

}
