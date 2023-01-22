import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PersonFormDialogComponent } from '../person-form-dialog/person-form-dialog.component';
import { PersonService } from 'src/app/core/services/person.service';
import { Person } from 'src/app/core/models/person';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['id', 'sygnaturaCzasowa', 'ankieteWypelniaCzasowa', 'plecPacjenta', 'wiekPacjenta', 'wyksztalceniePacjent', 'aktywnoscZawodowaPacjenta',
  'trybPrzyjecia', 'decyzjaLeczenia', 'czasOczekiwania', 'czasFormalnosci', 'zyczliwosc', 'czy_zapoznano', 
  'sugestie', 'czasOczekiwaniaIp', 'jakoscOpieki', 'jakoscOpiekiPielegniarka', 'warunkiOpieki', 'czystosc',
  'zapoznanieZKartka', 'sugestieIp', 'czyZna', 'ocenaDostepnosc', 'ocenaPrzekazaniaInformacji', 'poszanowanieIntymnosci',
  'uwagi', 'dostepnoscPielegniarek', 'zabiegPielegnacyjny' ];
  public columnsToDisplay: string[] = [...this.displayedColumns];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  private url = 'http://localhost:8080/data';

  public dataSource: MatTableDataSource<Person>;
  private serviceSubscribe: Subscription;

  constructor(private personsService: PersonService, public dialog: MatDialog,
    private httpClient: HttpClient) {
    this.dataSource = new MatTableDataSource<Person>();
  }


  private filter() {
    
    this.httpClient.get(this.url);
    console.log('filter start')

    this.dataSource.filterPredicate = (data: Person, filter: string) => {
      let find = true;

      console.log(filter)

      for (var columnName in this.columnsFilters) {
        console.log(columnName)
        console.log('jestem')



        let currentData = "" + data[columnName];

  
        if (!this.columnsFilters[columnName]) {
          return;
        }


        let searchValue = this.columnsFilters[columnName]["contains"];

        if (!!searchValue && currentData.indexOf("" + searchValue) < 0) {
          find = false;

          return;
        }

        searchValue = this.columnsFilters[columnName]["equals"];
        if (!!searchValue && currentData != searchValue) {
          find = false;

          return;
        }


      }

      return find;
    };
    console.log('filter end')

    this.dataSource.filter = null;
    this.dataSource.filter = 'activate';

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Create a filter for the column name and operate the filter action.
   */
  applyFilter(columnName: string, operationType: string, searchValue: string) {
    this.columnsFilters[columnName] = {};
    this.httpClient.get(this.url);
    this.columnsFilters[columnName][operationType] = searchValue;
    this.filter();
  }

  /**
   * clear all associated filters for column name.
   */
  clearFilter(columnName: string) {
    if (this.columnsFilters[columnName]) {
      delete this.columnsFilters[columnName];
      this.filter();
    }
  }


  edit(data: Person) {
    const dialogRef = this.dialog.open(PersonFormDialogComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personsService.edit(result);
      }
    });
  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personsService.remove(id);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * initialize data-table by providing persons list to the dataSource.
   */
  ngOnInit(): void {
    this.personsService.getAll();
    this.serviceSubscribe = this.personsService.persons$.subscribe(res => {
      this.dataSource.data = res;
    })
  }

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }

}
