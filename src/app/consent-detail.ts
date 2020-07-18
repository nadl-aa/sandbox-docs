import {Accounts} from './accounts';
import { from } from 'rxjs';
import {DataObj} from './data-obj';
import {FilterData} from './filter-data';
import {Purpose} from './purpose';
export class ConsentDetail {

  consentStart: string = undefined;

  consentExpiry: string = undefined;

  consentMode: string = undefined;

  fetchType: string = undefined;

  accounts: Accounts[] = undefined;
  accountIds: string[]= undefined;

  consentTypes: any = undefined;

  fiTypes: any = undefined;

  dataConsumer: any = undefined;
  dataProvider: any = undefined;
  customer: any = undefined;

  purpose: Purpose = undefined;
  purposeId: Purpose = undefined;

  fiDataRange: any = undefined;

  dataLife: DataObj = undefined;

  frequency: DataObj = undefined;

  dataFilter: FilterData[] = [];
}
