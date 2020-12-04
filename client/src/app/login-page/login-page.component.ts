import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form!: FormGroup
  aSub!: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {

               }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe( (params: Params) => {
      if (params['registered']) {
        
      } else if (params['accessDenied']) {
        
      }
    })
  }
  
  ngOnDestroy() {
    this.aSub?.unsubscribe()
  }

  onSubmit(): void {
    this.form?.disable()
    const user = this.form?.value
    this.aSub = this.auth.login(user).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        console.warn(error);
        this.form?.enable()
      }
    )
  }

}
