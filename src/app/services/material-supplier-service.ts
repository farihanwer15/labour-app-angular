import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MaterialSupplier } from "../models/materila-supplier.model";
import { WebApiService } from "./web-api-service";

@Injectable({
    providedIn: 'root'
})

export class MaterialSupplierServices {

    constructor(private webApi: WebApiService) { }

    getMaterialSupplier(): Observable<MaterialSupplier> {
        return this.webApi.get<MaterialSupplier>('/get-material-suppliers');
    }

    createMaterialSupplier(body: MaterialSupplier): Observable<MaterialSupplier> {
        return this.webApi.post<MaterialSupplier>('/create-material-supplier', body);
    }

    getMaterialSupplierById(id: number): Observable<MaterialSupplier> {
        return this.webApi.get<MaterialSupplier>(`/get-material-supplier-by-id/${id}`)
    }

    updateMaterialSupplier(id: number, body: MaterialSupplier): Observable<MaterialSupplier> {
        return this.webApi.put<MaterialSupplier>(`/update-material-supplier/${id}`, body)
    }
    deleteMaterialSupplier(id: number): Observable<MaterialSupplier> {
        return this.webApi.delete<MaterialSupplier>(`/delete-material-supplier/${id}`)
    }
}