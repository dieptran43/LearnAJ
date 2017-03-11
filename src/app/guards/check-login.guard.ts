import { CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { LoginService } from '../services/login.service'

@Injectable()
export class CheckLoginGuard implements CanActivate {
    constructor(private loginService: LoginService) {

    }

    canActivate() {
        let status = this.loginService.IsLogined();
        if (status == false) {
            alert('Ban khong co quyen \n Vui long dang nhap lai!!');
        }
        return status;
    }

}