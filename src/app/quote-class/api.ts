export class Stall {
 housename: any;
 description: string;
 location: string;
 price: string;
 image: any;

 constructor( housename: string,  description: string,  location: string,  price: string, image:any) {

  this.description = description;
  this.housename = housename;
  this.location = location;
  this.price = price;
  this.image = image;
 }

}
