import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ThemeService } from '../styles/themes/theme.service';
import { environment } from '../environments/environment';
import { MatCheckboxModule, MatCheckbox } from '@angular/material/checkbox';
import { MatToolbar } from '@angular/material/toolbar';
import { MatRadioGroup, MatRadioButton,MatRadioChange,MatRadioModule,MatRadioDefaultOptions } from '@angular/material/radio';
import { MatSelect, MatOption, MatLabel, MatFormField, MatSelectModule, MatSelectTrigger } from '@angular/material/select';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldAppearance,MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ReactiveFormsModule , MatFormFieldModule ,MatInputModule,
            MatCheckboxModule, MatCheckbox, MatRadioGroup, MatRadioButton,MatRadioModule, MatToolbar
            ,MatSelect, MatOption, MatLabel, MatFormField, MatSelectModule, MatSelectTrigger
            , MatCard, MatCardModule
  ] // Include MatCheckboxModule in imports array
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private themeService: ThemeService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      role: [''],
      gender: [''],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    this.themeService.switchTheme(environment.theme as 'brand1-theme' | 'brand2-theme');
  }

  switchTheme(theme: 'brand1-theme' | 'brand2-theme') {
    this.themeService.switchTheme(theme);
  }
}
