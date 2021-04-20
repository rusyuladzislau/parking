import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertCtrl: AlertController) { }
  async alert($title, $message, $buttons = null, $input = null) {
    const alert = await this.alertCtrl.create({
      header: $title,
      message: $message,
      inputs: $input,
      buttons: $buttons
    });
    await alert.present();
  }
}