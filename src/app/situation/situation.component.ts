import { Component, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import {SituationService} from "../services/situation.service";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css'],
  providers: [MessageService]
})
export class SituationComponent {
  showResults = false;
  jsonData: any;
  excelData: any;
  pc! : any;
  styleOBJ = {
    'background':'#F4F5F7'
  }
  startDateValue = '';
  endDateValue = '';
  typeValue = '';

  @ViewChild('startDate') startDateInput!: ElementRef;
  @ViewChild('endDate') endDateInput!: ElementRef;
  @ViewChild('startDate') startDate!: ElementRef;
  @ViewChild('endDate') endDate!: ElementRef;
  @ViewChild('typeSelect') typeSelect!: ElementRef;


  constructor(private messageService: MessageService, private situationService : SituationService) {}
  
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

    if (diffInMonths > 1) {
      this.showResults = false;
      this.messageService.add({severity:'error', summary:'Erreur', detail:'La date ne doit pas dépasser un mois.'});
    }else if(diffInMonths <= 1) {
      this.showResults = true;
      this.startDateValue = this.startDate.nativeElement.value;
      this.endDateValue = this.endDate.nativeElement.value;
      this.typeValue = this.typeSelect.nativeElement.value;      
    }else{
      this.showResults = false;
      this.messageService.add({severity:'error', summary:'Erreur', detail:'Veuillez remplir tous les champs.'});
    }    

    if (this.typeSelect.nativeElement.value == 'PCE') {
      this.situationService.pcSituationTotal(this.startDateValue, this.endDateValue).subscribe({
        next: (data: any) => {
          this.jsonData = data.total;
          console.log(this.jsonData);
        },
        error: (err: any) => {
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Aucune donnée disponible'});
          console.error(err);
        }
      });
    }else{
      this.showResults = false;
    } 
  }
  downloadFile() {
    this.situationService.pcSituationSheet(this.startDateValue, this.endDateValue).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.ms-excel' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'pcSituationSheet.xlsx';
        link.click();
      },
      error => console.error(error)
    );
  }
  downloadExcel() {
    this.situationService.pcSituationSheet(this.startDateValue, this.endDateValue).subscribe(response => {
      const blob = new Blob([response], { type: 'application/vnd.ms-excel' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'pcSituationSheet.xlsx';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
