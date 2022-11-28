import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { SidebarComponent } from './components/sidebar.component';
import { ToolbarComponent } from './components/toolbar.component';
import { MappingsComponent } from './components/mappings.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  standalone: true,
  selector: 'wsp-root',
  template: `
    <wsp-toolbar (toggleMenu)="drawer.toggle()"></wsp-toolbar>
    <mat-drawer-container class="!flex-1">
      <mat-drawer
        #drawer="matDrawer"
        mode="side"
        position="end"
        opened
        disableClose
      >
        <wsp-sidebar></wsp-sidebar>
      </mat-drawer>

      <mat-drawer-content>
        <wsp-mappings></wsp-mappings>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      :host {
        @apply flex flex-col h-full;
      }
    `,
  ],
  imports: [
    AsyncPipe,
    JsonPipe,
    SidebarComponent,
    ToolbarComponent,
    MappingsComponent,
    MatSidenavModule,
  ],
})
export class AppComponent {}
