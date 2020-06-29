import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid'; // import necessary datatypes
// import '~@ng-masonry-grid/ng-masonry-grid.css'; 
import * as $ from 'jquery';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit, OnChanges {

  _masonry: Masonry;
  @Input() masonryItems: any[]; // NgMasonryGrid Grid item list
  @Input() items: any;
  animation_Effect = 'effect-7';
  effect: number;
  @Output() addItemsE: any = new EventEmitter();;


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if (this.masonryItems) {
      this.randomEffect();
    }
  }

  ngOnInit() {
    this.randomEffect();
  }

  // Get ng masonry grid instance first
  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  randomEffect() {
    this.effect = Math.floor(Math.random() * 8) + 1;
    this.animation_Effect = 'effect-' + this.effect;

  }
  // Append items to NgMasonryGrid
  appendItems() {
    if (this._masonry) { // Check if Masonry instance exists
      this._masonry.setAddStatus('append'); // set status to 'append'
      this.masonryItems.push(...this.items); // some grid items: items
    }
    this.randomEffect();

  }

  // Prepend grid items to NgMasonryGrid
  prependItems() {
    if (this._masonry) {
      // set status to 'prepend' before adding items to NgMasonryGrid otherwise default: 'append' will applied
      this._masonry.setAddStatus('prepend');
      this.masonryItems.splice(0, 0, ...this.items);
    }
    this.randomEffect();
        // $(".left-side").load(`${location.href} + ".left-side" `);


  }

  // Add items to NgMasonryGrid
  addItems() {
    if (this._masonry) {
      this._masonry.setAddStatus('add'); // set status to 'add'
      // this.masonryItems.push(...this.items);
      this.randomEffect();

      this.addItemsE.emit();

    }
  }

  // Remove selected item from NgMasonryGrid, For example, (click)="removeItem($event)" event binding on grid item
  // Note: 'id' on ng-masonry-grid is required to remove actual item from the list
  removeItem($event: any) {
    if (this._masonry) {
      this._masonry.removeItem($event.currentTarget)  // removeItem() expects actual DOM (ng-masonry-grid-item element)
        .subscribe((item: MasonryGridItem) => { // item: removed grid item DOM from NgMasonryGrid
          if (item) {
            let id = item.element.getAttribute('id'); // Get id attribute and then find index 
            let index = id.split('-')[2];
            // remove grid item from Masonry binding using index (because actual Masonry items order is different from this.masonryItems items) 
            this.masonryItems.splice(index, 1);
          }
        });
    }
    this.randomEffect();

  }

  // Remove first item from NgMasonryGrid
  removeFirstItem() {
    if (this._masonry) {
      this._masonry.removeFirstItem()
        .subscribe((item: MasonryGridItem) => {
          if (item) {
            let id = item.element.getAttribute('id');
            let index = id.split('-')[2];
            this.masonryItems.splice(index, 1);
          }
        });
    }
    this.randomEffect();

  }

  // Remove all items from NgMasonryGrid
  removeAllItems() {
    if (this._masonry) {
      this._masonry.removeAllItems()
        .subscribe((items: MasonryGridItem) => {
          // remove all items from the list
          this.masonryItems = [];
        });
    }
    this.randomEffect();

  }

  // reorder items to original position
  // Note: Add masonry option:- horizontalOrder: true
  reorderItems() {
    if (this._masonry) {
      this._masonry.reOrderItems();
    }
  }

  scrollAnimationOptions = {
    /* animation effect class will added on ng-masonry-grid-item on scroll, you can choose animation effect class from the predefined list: 
       ["effect-1","effect-2","effect-3","effect-4","effect-5","effect-6","effect-7","effect-8"] or else you can add your own custom class as you wish */
    animationEffect: 'effect-1', // String: (default: 'effect-1')
    // Integer: Minimum and a maximum duration of the animation 
    minDuration: 0,
    maxDuration: 0,
    // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
    // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport.
    // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
    viewportFactor: 0
  }

  //loaded images can throw off Masonry layouts and cause item elements to overlap. imagesLoaded plugin resolves this issue. 

  useImagesLoaded = "true";

}
