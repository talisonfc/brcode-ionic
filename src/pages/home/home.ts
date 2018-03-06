import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData: {}
  options: BarcodeScannerOptions

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  scan(){
    this.options = {
      prompt: "Scan your barcode",
      showFlipCameraButton: true
      //formats: 'QR_CODE'
    }
    this.barcodeScanner.scan(this.options).then((data)=>{
      console.log(data)
      this.scanData = data;
    }, (err)=>{
      console.log(err)
    })
  }
}
