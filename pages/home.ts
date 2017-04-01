import {Component} from '@angular/core';  
import {NavController, Alert} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    public showingWelcome: boolean;
    public productList: Array<Object>;

    public constructor(private navCtrl: NavController) {
        this.showingWelcome = true;
        this.productList = [];
    }

    public dismissWelcome() {
        this.showingWelcome = false;
    }

    public add() {
        let alert = Alert.create({
            title: "Add Product",
            message: "Enter a product and the price of that product",
            inputs: [
                {
                    name: "product",
                    placeholder: "Product Name"
                },
                {
                    name: "price",
                    placeholder: "Product Price"
                }
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Save",
                    handler: data => {
                        this.productList.push({
                            name: data.product,
                            price: data.price
                        });
                    }
                }
            ]
        });
        this.navCtrl.present(alert);
    }

}