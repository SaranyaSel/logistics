import {  Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Items } from '../items';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.scss'],
})
export class AlldataComponent implements OnInit, OnDestroy {
  @Input() logis: Items[];
  dataI: any;
  dataA: any;
  size: [];
  isLoading = false;
  dataSource: MatTableDataSource<Items>;
  allForm: FormGroup;
  containerNoz = '';
  sizez: number;
  valCN: any;
  selectsize: any;
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(public apiService: ApiService) {}

  displayedColumns: string[] = ['ContainerNumber', 'Size'];

  ngOnInit() {
    this.allForm = new FormGroup({
      containerNo: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      size: new FormControl(''),
    });
    this.apiService
      .getAlloc()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (data) => {
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
        }
      );
    setTimeout(() => {
      console.log('timeout');
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }, 100000);
  }
  applyFilter() {
    let cn;
    cn = this.allForm.get('containerNo').value;
    this.allForm
      .get('containerNo')
      .valueChanges.pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.valCN = value;
      });
    setTimeout(() => {
      if (this.valCN) {
        cn = this.valCN;
      }
      const sz = this.selectsize;
      this.containerNoz = cn === null || cn === undefined ? '' : cn;
      this.sizez = sz === null || sz === '' || sz === undefined ? '' : sz;
      const filterValue = this.containerNoz + '$' + this.sizez;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }, 700);
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
    this.ngUnsubscribe.next();
    // This completes the subject properlly.
    this.ngUnsubscribe.complete();
  }
}
