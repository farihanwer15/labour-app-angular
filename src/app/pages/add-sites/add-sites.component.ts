import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SiteServices } from 'src/app/services/site-service';


@Component({
  selector: 'app-add-sites',
  templateUrl: './add-sites.component.html',
  styleUrls: ['./add-sites.component.scss']
})
export class AddSitesComponent implements OnInit {

  LoadingTerm = false;
  siteForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    private ref: MatDialogRef<AddSitesComponent>,
    private formBuilder: FormBuilder,
    private siteService: SiteServices,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.createAddSite(this.data);
      console.log("data", this.data);
    } else {
      this.createAddSite();
    }
  }

  createAddSite(item?) {
    console.log(item);
    this.siteForm = this.formBuilder.group({
      'name': [item && item.name || null, Validators.required],
      'site_address': [item && item.site_address || null, Validators.required]
    });
  }
  submitAddSite() {
    if (this.data) {
      this.siteService.updateSite(this.data.id, this.siteForm.value).subscribe((res) => {
        this.snackBar.open('Sales Channel Updated Successfully', 'close', { duration: 3000 })
        this.siteForm.reset();
        this.data = null;
      }, () => {
        this.LoadingTerm = false; this.snackBar.open('Something went wrong, Please try again', 'close', { duration: 6000 });

      });
    }
    else {
      this.siteService.createSite(this.siteForm.value).subscribe((res) => {
        this.snackBar.open('New Sites Added!', 'close', { duration: 5000 });
      }, () => {
        this.LoadingTerm = false; this.snackBar.open('Something went wrong, Please try again', 'close', { duration: 6000 });

      });
    }
  }

}
