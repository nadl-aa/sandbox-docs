import { Component, OnInit } from '@angular/core';
import {Account} from '../account';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { DiscoveryService } from '../discovery.service';
import { ConsentData} from '../consent-data';
import { ToastrService } from 'ngx-toastr';
import {  DataObj} from "../data-obj";
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Consent } from '../consent';
@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
  accounts: any;
  startpicker1;
  picker1;
  operator;
  selectedFilterType;
  transactionvalue;
  setForm: FormGroup;
  dis:any;
  acc:any[]=[];
  accd:string;
  data:string[]=[];
  types=[
    {
      id:1,
      displayName:'ONETIME'
    },
    {
      id:2,
      displayName:'PERIODIC'
    }
  ]
  selectedperiod;
  a:any[]=[];
  timePeriodForm: FormGroup;
  consents=new Consent();
  consent=new ConsentData();
  scenarios = [
    {
      id: 1,
      displayName: 'New',
    },
    {
      id: 2,
      displayName: 'Balance as on any date',
    },
    {
      id: 3,
      displayName: 'One time consent for Transactions pertaining to one month',
    },
    {
      id: 4,
      displayName: 'One time consent for Profile',
    },
     {
      id: 5,
      displayName: 'Monthly spending pattern for 6 months',
    },
     {
      id: 6,
      displayName: 'Statement for Past six months',
    },
    {
      id: 7,
      displayName: 'Post Disbursement Monitoring for 3 years',
    },
  ]
  purposes = [
    {
      id: '1',
      displayName: 'Wealth management service'
    },
    {
      id: '2',
      displayName: 'Customer spending patterns, budget or other reportings'
    },
    {
      id: '3',
      displayName: 'Aggreagated statement'
    },
    {
      id: '4',
      displayName: 'Explicit consent for monitoring of the accounts '
    },
     {
      id: '5',
      displayName: 'Explicit one time consent for the accounts'
    }
  ]
  frequency = [
    {
      id: 1,
      displayName: 'MONTH'
    },
    {
      id: 2,
      displayName: 'HOUR'
    },
    {
      id: 3,
      displayName: 'YEAR'
    },
    {
      id: 4,
      displayName: 'DAY'
    },

  ]
  consentmode = [
    {
      id: 1,
      displayName: 'QUERY'
    },
    {
      id: 2,
      displayName: 'STORE'
    },
    {
      id: 3,
      displayName: 'VIEW'
    },
    {
      id: 4,
      displayName: 'STREAM'
    }
  ]
  datatype = [
    {
      id: 1,
      displayName: 'PROFILE'
    },
    {
      id: 2,
      displayName: 'TRANSACTIONS'
    },
    {
      id: 3,
      displayName: 'BALANCE'
    },

  ]
  dataFilterType = [
    {
      id: 1,
      displayName: 'TRANSACTIONAMOUNT'
    },
    {
      id: 2,
      displayName: 'TRANSACTIONTYPE'
    }
  ]
  operatorList = [
    {
      id: 1,
      displayName: '='
    },
    {
      id: 2,
      displayName: '!='
    },
    {
      id: 3,
      displayName:'>'
    },
    {
      id: 4,
      displayName:'>='
    },
    {
      id: 5,
      displayName:'<'
    },
    {
      id: 6,
      displayName:'<='
    }
  ]
  transcationList = [
    {
      id: 1,
      displayName: 'Debit'
    },
    {
      id: 2,
      displayName: 'Credit'
    },
    {
      id: 3,
      displayName:'Both'
    }
  ]
  datalife = [
    {
      id: 1,
      displayName: 'DAY'
    },
    {
      id: 2,
      displayName: 'MONTH'
    },
    {
      id: 3,
      displayName:'YEAR'
    },
    {
      id: 4,
      displayName:'INF'
    }
  ]

  constructor(private readonly discoveryservice: DiscoveryService, private readonly formbuilder: FormBuilder, private readonly toastr:ToastrService) { }

  ngOnInit() {
    this.createForm();
    this.discovery();
    this.createform();
  }
  createForm() {
    this.setForm = this.formbuilder.group({
      roles: [] as Array<string>
    });
  }
  discovery()
  {
    this.accounts = new Array <Account>();
    this.discoveryservice.getaccount('sbi101').subscribe(data => {
    this.accounts = data;
    //console.log(data.discoveredaccount);
    this.dis=data.discoveredaccount;
    this.dis.forEach(element => {
      this.a.push(element.typeid);

    });
    console.log(this.a);
    });
  }
  onChange(accid: string, isChecked: boolean) {
    alert(accid);
   // this.acc.push(accid);
    if(isChecked) {
    this.acc.push(accid);
    }
  }
  onSubmit()
  {
    console.log(this.acc);
  }
  selectPeriodicData(value)
  {
    this.selectedperiod = value;
  }
  createform()
  {
  this.timePeriodForm = this.formbuilder.group({
    reason: [''],
    types: [''],
    Frequency: [''],
    scenario:[''],
    EndDate: ['', [Validators.required]],
    StartDate: ['', [Validators.required]],
    FIEndDate: ['', [Validators.required]],
    FIStartDate: ['', [Validators.required]],
    reasonValue: [null, [Validators.required]],
    consentmode: [''],
    dataLife: [''],
    dataLifeValue: [null, [Validators.required]],
    roles: [] as Array<string>
  });
}
change(dataid:string, isChecked:boolean)
{
  alert(dataid);
  if(isChecked)
  {
    this.data.push(dataid);
  }
  console.log(this.data);
}
onFilterTypeChange(selectedType) {
  this.selectedFilterType = selectedType;
  console.log('jfgj', this.selectedFilterType);
  if (this.selectedFilterType === 'TRANSACTIONTYPE') {
    this.operator = '=';
    this.transactionvalue = '';
  } else {
    this.operator = '';
    this.transactionvalue = '';
  }
}

onChangeOperatorList(operatorValue) {
  this.operator = operatorValue;
}
onTransactionValueChange(transactionValue) {
  this.transactionvalue = transactionValue;
}
timeperiod(data)
{

    this.consent.consentMode = data.consentmode;
    this.consent.purposeId = data.reason;
    this.consent.consentStart = data.StartDate.toISOString();
    this.consent.consentExpiry = data.EndDate.toISOString();
    this.consent.fetchType = data.types;
    const dataLife = new DataObj();
    dataLife.unit = data.dataLife;
    dataLife.value = parseInt(data.dataLifeValue, 10);
    this.consent.dataLife = dataLife;
    const frequency = new DataObj();
    frequency.unit = data.Frequency;
    frequency.value = parseInt(data.reasonValue, 10);
    this.consent.frequency = frequency;
    this.consent.fiDataRange = {
      from: data.FIStartDate,
      to: data.FIEndDate
    };
}
getISOFromatDate(date) {
  const dateValue = new Date(date);
  dateValue.setDate(dateValue.getDate() + 1);
  return dateValue.toISOString();
}
completedConsentFlow()
{
  this.toastr.success(' Successfully!', 'Consent created',
    {timeOut: 2000});
    this.consent.dataFilter = [
      {
       type: this.selectedFilterType,
        operator: this.operator,
        value: this.transactionvalue
      }
    ];

    this.consent.consentTypes = this.data;
    this.consent.accountIds=this.acc;
    this.consent.customer={
      id:"abc@nadl"
    };
    this.consent.dataConsumer={
      id: "123",
      type:"individual"
    };
   this.consent.dataProvider={
     id:"fiu12345",
     type:"type"
   };
   this.consent.fiTypes=this.a;
this.consents.consentdetail=this.consent;

this.discoveryservice.createconsent(this.consents).subscribe(data => {

  console.log(data);
  });
}
goToPreviousStep()
{

}
}
