import { Component, OnInit } from '@angular/core';
import { AddSitesComponent } from '../add-sites/add-sites.component';
import { MatDialog } from '@angular/material/dialog';
import { SiteServices } from 'src/app/services/site-service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})

export class SiteComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'site_address', 'actions'];
  dataSource;
  LoadingTerm = false;

  constructor(public dialog: MatDialog,
    private siteService: SiteServices,
    private snackBar: MatSnackBar
  ) { }

  addSiteDialog() {
    const dialogRef = this.dialog.open(AddSitesComponent, {
      panelClass: 'width-80'
    });
  }
  ngOnInit(): void {
    this.getSite();
  }

  getSite() {
    this.LoadingTerm = true;
    this.siteService.getSiteUser().subscribe((res) => {
      this.dataSource = res;
      this.LoadingTerm = false;
      console.log("this.dataSource", this.dataSource);
    }, () => {
      this.LoadingTerm = false; this.snackBar.open('Something went wrong, Please try again', 'close', { duration: 6000 });
    });
  }

  deleteSite(id) {
    if (confirm("Are you sure to delete")) {
      this.siteService.deleteSite(id).subscribe((res) => {
        this.snackBar.open(`Deleted successfully!`, 'close', { duration: 4000 });
        this.getSite();
      }, () => {
        this.LoadingTerm = false; this.snackBar.open('Something went wrong, Please try again', 'close', { duration: 6000 });
      });
    }
    // const index: number = this.dataSource.indexOf(id);
    // this.dataSource.splice(index, 1);
    // const deleteProduct = this.dataSource.filter((item) => item.id !== id)
    // this.dataSource = deleteProduct;
    // this.snackBar.open(`Product ${id} removed from Selected List`, 'close', { duration: 4000 });
  }
  editData(row) {
    this.dialog.open(AddSitesComponent, {
      data: row,
      panelClass: 'width-80'
    });
  }
}
