//user.ts

import {Component, input} from '@angular/core';

@Component({
    selector: 'app-user',
    template: ` <p>The user's name is {{name()}}</p> `,
})
export class User {
    name = input<string>();
}


//app.ts


import {Component} from '@angular/core';
import {User} from './user';

@Component({
    selector: 'app-root',
    template: ` <app-user name = "Simran"></app-user> `,
    imports: [User],
})
export class App {}
