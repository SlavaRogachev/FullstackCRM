import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

require('../types').TokenType


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private token: TokenType = null

    constructor(private http: HttpClient) {

    }    
    
    register() {

    }

    login(user: User): Observable<{token: string}> {
        return this.http.post<{token: string}>('/api/auth/login', user)
            .pipe(
                tap(
                    ({token}): void => {
                        localStorage.setItem('auth-token', token)
                        this.setToken(token)
                    }
                )
            )
    }

    setToken(token: TokenType): void {
        this.token = token
    }

    getToken(): TokenType {
        return this.token
    }

    isAuthenticated(): Boolean {
        return !!this.token
    }

    logout(): void {
        this.setToken(null)
        localStorage.clear()
    }
}