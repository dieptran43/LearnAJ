import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    public _isLoggedIn: boolean;
    IsLogined(): boolean {
        return this._isLoggedIn;
    }

    setLogin(isLoggedIn: boolean) {
        this._isLoggedIn = isLoggedIn;
    }
}