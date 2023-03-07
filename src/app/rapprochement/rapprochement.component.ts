import { Component, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-rapprochement',
  templateUrl: './rapprochement.component.html',
  styleUrls: ['./rapprochement.component.css'],
  providers: [MessageService]
})
export class RapprochementComponent {
  showResults = false;
  styleOBJ = {
    'background':'#F4F5F7'
  }
  startDateValue = '';
  endDateValue = '';
  typeValue = '';
  operationValue = '';

  @ViewChild('startDate') startDateInput!: ElementRef;
  @ViewChild('endDate') endDateInput!: ElementRef;
  @ViewChild('startDate') startDate!: ElementRef;
  @ViewChild('endDate') endDate!: ElementRef;
  @ViewChild('typeSelect') typeSelect!: ElementRef;
  @ViewChild('operationSelect') operationSelect!: ElementRef;

  constructor(private messageService: MessageService) {}
  
    ngAfterViewInit() {
    // Initialize ViewChild properties
    this.startDateInput = this.startDateInput;
    this.endDateInput = this.endDateInput;
  }

  onClick() {
      
    const startDate = new Date(this.startDateInput.nativeElement.value);
    const endDate = new Date(this.endDateInput.nativeElement.value);

    const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12
      + (endDate.getMonth() - startDate.getMonth());

    if (diffInMonths > 3) {
      this.showResults = false;
      this.messageService.add({severity:'error', summary:'Erreur', detail:'La date ne doit pas dépasser un trimestre'});
    }else if(diffInMonths < 3) {
      this.showResults = true;
      this.startDateValue = this.startDate.nativeElement.value;
      this.endDateValue = this.endDate.nativeElement.value;
      this.typeValue = this.typeSelect.nativeElement.value;
      this.operationValue = this.operationSelect.nativeElement.value;
      // Reset the input value
      this.startDateInput.nativeElement.value = '';
      this.endDateInput.nativeElement.value = '';
      this.typeSelect.nativeElement.value = 'PCE';
      this.operationSelect.nativeElement.value = 'Echange';
    }else{
      this.showResults = false;
      this.messageService.add({severity:'error', summary:'Erreur', detail:'Veuillez remplir les champs obligatoires.'});
    }
    
  }
}
