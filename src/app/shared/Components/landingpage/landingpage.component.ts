import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import{faTrash} from '@fortawesome/free-solid-svg-icons'
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

 
  
  constructor( private elementRef:ElementRef, private renderer2: Renderer2){
  }
  
    ngOnInit(): void {
    }

    @HostListener('window:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
      // calculating screen height,width
      const xvalue = event.clientX - window.innerWidth / 2;
      const yvalue = event.clientY - window.innerHeight / 2;


    // selecting an element by classname
      const parallaxElements = this.elementRef.nativeElement.querySelectorAll('.parallax');
      // for eachclass element 
      parallaxElements.forEach((element: HTMLElement) => {
        const speedx = parseFloat(element.getAttribute('data-speedx') || '0');
        const speedy = parseFloat(element.getAttribute('data-speedy') || '0');
        
    
        // Apply transformations to achieve parallax effect
        element.style.transform = `
          translateX(calc(-30% + ${-xvalue * speedx }px)) 
          translateY(calc(-30% + ${-yvalue * speedy}px))
          `;
      });
    }
    
  }

