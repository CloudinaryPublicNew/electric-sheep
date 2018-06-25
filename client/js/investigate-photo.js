class Photo {
  constructor(url, history=[]){
    this.url = url;
    this.history = history;
  }

  update(transform) {
    let url = this.url; // remember the url before we changed it
    if(this.perform(transform)){
      this.history.push({url, transform});
    }
  }

  /**
   * @typedef {object} Point
   */

  /**
   * Perform the transformation on the image.
   *
   * @param transform
   * @param transform.action the action to perform on the image
   * @param {object} transform.params
   * @param {string} transform.params.id
   * @param {Array<Point>} transform.params.coordinates
   * @param transform.params.direction
   *
   * @return {boolean} Returns true if the transformation was successful
   */
  perform(transform) {
    switch (transform.action){
      case 'zoom':
      case 'enhance':
        console.log("Perform zoom");
        break;
      case 'pan':
        console.log("Perform pan");
        break;
      case 'left':
        console.log("Perform left");
        break;
      case 'right':
        console.log("Perform right");
        break;
      case 'center':
        console.log("Perform center");
        break;
      default:
        console.error(`Transformation ${transform.action} is unknown`);
        return false;
    }
    return true;
  }

  static translatePoint(number){
    switch(number) {
      case '2242176':
        return [{x: 100, y: 500}, {x: 100, y: 500}];
      case '176':
        return '';
    }
  }

  zoom(from,to){
    let transformation = `c_crop,h_${to.y},x_${from.x},y_${from.y},w_${to.x}`
    fetch(newUrl)
    animateRectical(Photo.translatePoint(param));

  }
}