import {trigger,animate,style,transition,keyframes } from '@angular/animations'; // new version angular has animations under @angular/animations
import { Component} from '@angular/core';

@Component({
    selector: 'editable',
    template: `
      <ng-container *ngTemplateOutlet="currentView"></ng-container>
    `
  })
  export class EditableComponent {
    @Output() update = new EventEmitter();
    @ContentChild(ViewModeDirective) viewModeTpl: ViewModeDirective;
    @ContentChild(EditModeDirective) editModeTpl: EditModeDirective;
  
    mode: 'view' | 'edit' = 'view';
  
    constructor(private host: ElementRef {
    }
    
    get currentView() {
      return this.mode === 'view' ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
    }
  
    ngOnInit() {
      this.viewModeHandler();
      this.editModeHandler();
    }
  
    private get element() {
      return this.host.nativeElement;
    }
    
  }