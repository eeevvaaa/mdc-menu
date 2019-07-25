import { Component, Prop, Method, Element } from '@stencil/core';

@Comment({
  tag: 'menu'
})
export class Menu {
  @Element() menuElement: HTMLElement;
  @Prop() open: boolean = false;
  @Method()
  show() {}
}
