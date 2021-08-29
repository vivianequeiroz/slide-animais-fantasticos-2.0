export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.distance = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
  }

  updatePosition(clientX) {
    this.distance.movement = this.distance.startX - clientX;
    return this.distance.movement;
  }

  onStart(event) {
    event.preventDefault();
    this.distance.startX = event.clientX;
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {
    const finalPosition = this.updatePosition(event.clientX);
  }

  onEnd(event) {
    console.log("event finished");
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
