import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cat-module/model/cat';


@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  public create(cat: Cat): void {
    this.cats.push(cat);
  }

  public findAll(): Cat[] {
    return this.cats;
  }
}
