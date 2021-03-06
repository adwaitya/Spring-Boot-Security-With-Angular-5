import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Demo Application';
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  // Function to logout user
  onLogoutClick() {
    this.authService.logout(); // Logout user

    this.router.navigate(['/login']); // Navigate back to home page
  }
}
