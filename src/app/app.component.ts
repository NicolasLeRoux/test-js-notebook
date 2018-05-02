import { Component } from '@angular/core';

import { EditorConfiguration } from 'codemirror';
import 'codemirror/mode/javascript/javascript';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public config: EditorConfiguration = {
        theme: 'dracula',
        lineNumbers: true
    };

    public code = '// Mon code';
}
