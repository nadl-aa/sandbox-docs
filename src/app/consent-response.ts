import {ConsentDetail} from './consent-detail';
export class ConsentResponse {

  status: string = undefined;
  Consenthandle: string = undefined;
  consentid: string = undefined;
  // tslint:disable-next-line: no-use-before-declare
  Consentdetail: ConsentDetail = undefined;
  createtimestamp: string = undefined;
}
