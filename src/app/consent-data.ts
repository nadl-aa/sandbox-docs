import {DataObj} from './data-obj';
import {FilterData} from './filter-data';
export class ConsentData {
  consentStart: string = undefined;
  consentExpiry: string = undefined;
  consentMode: string = undefined;
  fetchType: string = undefined;
  consentTypes: any = [];
  fiTypes: any = [];
  dataConsumer: any = undefined;
  customer: any = undefined;
  accountIds: any = [];
  purposeId: string = undefined;
  fiDataRange: any = undefined;
  dataLife: DataObj = undefined;
  frequency: DataObj = undefined;
  dataFilter: FilterData[] = [];
  dataProvider: any= undefined;
}
