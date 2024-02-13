import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData() {
    console.log('shjksdhj;fdgsa;fls;dehghaf');
    this.powerService.supplyPower(20);
    return 'data';
  }
}
