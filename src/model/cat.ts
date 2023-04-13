export class Cat {
  private _name: string;
  private _age: number;
  private _breed: string;

  constructor(name: string, age: number, breed: string) {
    this._age = age;
    this._breed = breed;
    this._name = name;
  }

  public get breed(): string {
    return this._breed;
  }
  public set breed(value: string) {
    this._breed = value;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
