import { Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  _masonry: Masonry;

  masonryItems = [
    { imgSrc: './assets/imgs/1.jpg' },
    { imgSrc: './assets/imgs/2.jpg' },
    { imgSrc: './assets/imgs/3.jpg' },
    { imgSrc: './assets/imgs/4.jpg' },
    { imgSrc: './assets/imgs/5.jpg' },
    { imgSrc: './assets/imgs/6.jpg' },
    { imgSrc: './assets/imgs/7.jpg' },
    { imgSrc: './assets/imgs/8.jpg' },
    { imgSrc: './assets/imgs/9.jpg' },
    { imgSrc: './assets/imgs/10.jpg' },
    { imgSrc: './assets/imgs/11.jpg' },
    { imgSrc: './assets/imgs/12.jpg' },
    { imgSrc: './assets/imgs/13.jpg' },
    { imgSrc: './assets/imgs/14.jpg' },
    { imgSrc: './assets/imgs/15.jpg' },
    { imgSrc: './assets/imgs/16.jpg' },
    { imgSrc: './assets/imgs/17.jpg' },
    { imgSrc: './assets/imgs/18.jpg' },
    { imgSrc: './assets/imgs/19.jpg' },
    { imgSrc: './assets/imgs/20.jpg' },
    { imgSrc: './assets/imgs/25.jpg' }, //D:\Learning\MasonryDemo\Demo\25.jpg 
  ];

  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  // Append items to NgMasonryGrid
  appendItems() {
    //     if (this._masonry) { // Check if Masonry instance exists
    //       this._masonry.setAddStatus('append'); // set status to 'append'
    //       this.masonryItems.push( ...this.masonryItems 
    // ); // some grid items: items
    //     }
    this.masonryItems.push(...this.masonryItems);

  }

  // Prepend grid items to NgMasonryGrid
  prependItems() {
    //     if (this._masonry) {
    //       // set status to 'prepend' before adding items to NgMasonryGrid otherwise default: 'append' will applied
    //       this._masonry.setAddStatus('prepend');
    //       this.masonryItems.splice(0, 0,  ... this.masonryItems 
    // );
    //     }
    this.masonryItems.splice(0, 0, ... this.masonryItems);

  }

  // Add items to NgMasonryGrid
  addItems() {
    // if (this._masonry) {
    // this._masonry.setAddStatus('add'); // set status to 'add'
    this.masonryItems.push(... this.masonryItems
    );
    // }
  }

  // Remove selected item from NgMasonryGrid, For example, (click)="removeItem($event)" event binding on grid item
  // Note: 'id' on ng-masonry-grid is required to remove actual item from the list
  // removeItem($event: any) {
  //   debugger;
  //   if (this._masonry) {
  //     this._masonry.removeItem($event.currentTarget)  // removeItem() expects actual DOM (ng-masonry-grid-item element)
  //         .subscribe((item: MasonryGridItem) => { // item: removed grid item DOM from NgMasonryGrid
  //           if (item) {
  //             let id = item.element.getAttribute('id'); // Get id attribute and then find index 
  //             let index = id.split('-')[2];
  //             // remove grid item from Masonry binding using index (because actual Masonry items order is different from this.masonryItems items) 
  //             this.masonryItems.splice(index, 1); 
  //           }
  //         });
  //   }
  // }
  removeItem($event: any) {
    console.log(event)
  }
  removeItems(item) {
    this.masonryItems.splice(item, 1);
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
  }

  // Remove all items from NgMasonryGrid
  removeAllItems() {
    // if (this._masonry) {
    //   this._masonry.removeAllItems()
    //       .subscribe( (items: MasonryGridItem) => {
    // remove all items from the list
    this.masonryItems = [];
    // });
    // }
  }

  // reorder items to original position
  // Note: Add masonry option:- horizontalOrder: true
  reorderItems() {
    // if (this._masonry) {
    //   this._masonry.reOrderItems();
      this.masonryItems.sort()
    //}
  }

  scrollAnimationOptions = {
    /* animation effect class will added on ng-masonry-grid-item on scroll, you can choose animation effect class from the predefined list: 
       ["effect-1","effect-2","effect-3","effect-4","effect-5","effect-6","effect-7","effect-8"] or else you can add your own custom class as you wish */
    animationEffect: 'effect-2', // String: (default: 'effect-1')
    // Integer: Minimum and a maximum duration of the animation 
    minDuration: 0,
    maxDuration: 0,
    // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
    // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport.
    // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
    viewportFactor: 0
  }
}
