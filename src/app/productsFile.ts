export interface Product {
    productId : string,
        productName: string,
        price: number,
        availableQuantity: number,
        expiryDate:string,
        description:string
  }
  
  export const products = [
    {
        productId: 'PR001',
        productName: 'MILK',
        price: 20,
        availableQuantity: 500,
        expiryDate: '2022-07-2',
        description: 'A HEALTHY MILK WITH VERY LESS WATER'
    },
    {
        productId: 'PR002',
        productName: 'BISCUIT',
        price: 10,
        availableQuantity: 312,
        expiryDate: '2022-06-13',
        description: 'A BISCUIT WITH ALL VITAMINS'
    },
    {
        productId: 'PR003',
        productName: 'FRUITS',
        price: 30,
        availableQuantity: 500,
        expiryDate: '2022-02-02',
        description:''
    },
    {
        productId: 'PR004',
        productName: 'SOAP',
        price: 50,
        availableQuantity: 500,
        expiryDate: '2022-03-16',
        description:''
    },
    {
        productId: 'PR005',
        productName: 'VEGETABLES',
        price: 40,
        availableQuantity: 500,
        expiryDate: '2022-11-20',
        description:' A VEGETABLES FOR LIFE '
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */