import {  Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Items } from '../items';

@Component({
  selector: 'app-expdata',
  templateUrl: './expdata.component.html',
  styleUrls: ['./expdata.component.scss']
})
export class ExpdataComponent implements OnInit, OnDestroy {
  @Input() logis: Items[];
  dataI: any;
  dataA: any;
  size: [];
  isLoading = false;
  private apiSub: Subscription;
  dataSource: MatTableDataSource<Items>;
  expForm: FormGroup;
  containerNoz = '';
  sizez: number;
  selectsize: any;
  constructor(public apiService: ApiService) { }


  displayedColumns: string[] = ['ContainerNumber', 'Size'];



  ngOnInit() {
    this.expForm = new FormGroup({
      containerNo: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      size: new FormControl(''),
    });
    this.apiService.getExport().subscribe((data) => {
      if (data) {
        this.dataI = data;
        this.dataA = this.dataI.items;
        this.size = this.dataA
          .map((item) => item.Size)
          .filter((value, index, self) => self.indexOf(value) === index);
        this.dataSource = new MatTableDataSource<Items>(this.dataA);
        this.dataSource.filterPredicate = this.getFilterPredicate();
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      console.log('completed');
    });
  }
  applyFilter() {
    const cn = this.expForm.get('containerNo').value;
    const sz = this.selectsize;
    this.containerNoz = cn === null ? '' : cn;
    this.sizez = (sz === null || sz === '' || sz === undefined) ? '' : sz;
    const filterValue = this.containerNoz + '$' + this.sizez ;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getFilterPredicate() {
    return (row: Items, filters: string) => {
      const filterArray = filters.split('$');
      const containerNo = filterArray[0];
      const sizeFlz = filterArray[1];
      const matchFilter = [];
      const fetcontainerNo = row.ContainerNumber;
      const fetsizeFlz = row.Size;
      const filterCN = fetcontainerNo.toLowerCase().includes(containerNo);
      const filterS = fetsizeFlz.toString().includes(sizeFlz);
      matchFilter.push(filterCN);
      matchFilter.push(filterS);
      return matchFilter.every(Boolean);

    };
  }
  ngOnDestroy() {
    this.apiSub.unsubscribe();
  }

}
