class Image {
  /**
   * Represent an image (view)
   * @param {string} publicId
   * @param {int} width
   * @param {int} height
   * @param {Image|string} next in lue of an algorithm to locate the image in space, get the next image in sequence
   * either image instance or publicId
   */
  constructor(publicId, width, height, next) {
    this.publicId = publicId;
    this.width = width;
    this.height = height;
    this.next = next;
  }
}

class Photo {
  path = [];
  IMAGES = [
    Image('es_main_wide', 4032,3024,'es_bottom_left_zoom'),
    Image('es_bottom_left_zoom', 4032,3024,'es_main_zoom_1'),
    Image('es_main_zoom_1', 4032,3024,'es_main_zoom_2'),
    Image('es_main_zoom_2', 4032,3024,'es_main_zoom_3'),
    Image('es_main_zoom_3', 4032,3024,'es_main_rotate_1'),
    Image('es_main_rotate_1', 4032,3024,'es_main_rotate_2'),
    Image('es_main_rotate_2', 4032,3024),
  ];
    currentImage = Image();

  constructor(url, history = []) {
    this.url = url;
    this.history = history;
    this.width = 0;
    this.height = 0;
    this.x = this.y = 0;
    /**
     * The ratio between the view and the image. The larger the scale the
     * smaller the view relative to the image.
     * scale cannot be lower then one.
     * @type {number}
     */
    this.zoom = 1;
    this.cl = new cloudinary.Cloudinary({cloud_name: 'nitzanj'});

  }

  update(transform) {
    let url = this.url; // remember the url before we changed it
    if (this.perform(transform)) {
      this.history.push({url, transform});
    }
  }

  /**
   * @typedef {object} Point
   * @property {number} x
   * @property {number} y
   *
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
    switch (transform.action) {
      case 'zoom':
      case 'enhance':
        console.log("Perform zoom");
        this.path.push();
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

  static translatePoint(number) {
    switch (number) {
      case '2242176':
        return [{x: 100, y: 500}, {x: 100, y: 500}];
      case '176':
        return '';
    }
  }

  toUrl(){
    let tr = new cloudinary.Transformation();
    this.path.forEach(({from, to})=>{
      tr.width(to.x-from.x).height(to.y-from.h).x(from.x).y(from.y).chain();
    });
    return this.cl.url(this.currentImage.publicId, tr);
  }

  /**
   * Zoom in to the current photo
   * @param {Point} from
   * @param {Point} to
   * @return {string} the new image url
   */
  zoomIn(from, to) {
    // let xScale = (to.x - from.x)/this.width;
    // let yScale = (to.y - from.y)/this.height;
    // let transformation = `c_crop,h_${to.y},x_${from.x},y_${from.y},w_${to.x}`
    this.path.push({from,to});
    return toUrl();
  }

  /**
   * Step back from the current zoom level
   * @return {string} the new image url
   */
  zoomOut(){
    this.path.pop();
    return this.toUrl();
  }

  /**
   * Pan the current view
   * @param {number} howMuch positive for right, negative for left, in pixels
   * @return {string} the new image url
   */
  pan(howMuch=300){
    let lastMove = this.path.pop();
    lastMove.x += howMuch;
    this.path.push(lastMove);
    return getUrl();
  }

  nextImage(){
    let next = this.currentImage.next;
    if(typeof next === typeof "string") {
      this.currentImage = this.IMAGES.find(i=>i.publicId === next);
    } else {
      this.currentImage = next;
    }
    return this.currentImage;
  }
}