export class Recipe {
  public name:String;
  public description:String;
  public imgPath:String;


  constructor(name: String, description: String, imgPath: String) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
  }
}
