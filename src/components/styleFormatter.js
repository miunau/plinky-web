function coordAsString(val) {
  if(typeof val === 'number') {
    return val+"px";
  }
  else {
    return val;
  }
}

/**
 * Take in an object with layout attributes and turn it into a string to stick into html style attribute
 * @param {*} attrs 
 * @param {*} opts
 */
export default function styleFormatter(attrs, opts) {

  let obj = Object.assign({}, attrs);

  Object.keys(obj).forEach(key => {
    const k = key;
    if(opts && opts.ignore && opts.ignore.indexOf(k) > -1) {
      obj[k] = null;
    }
  });

  const styles = {

    'padding': obj.padding ? coordAsString(obj.padding) : undefined,
    'padding-top': obj.paddingTop ? coordAsString(obj.paddingTop) : undefined,
    'padding-bottom': obj.paddingBottom ? coordAsString(obj.paddingBottom) : undefined,
    'padding-left': obj.paddingLeft ? coordAsString(obj.paddingLeft) : undefined,
    'padding-right': obj.paddingRight ? coordAsString(obj.paddingRight) : undefined,

    'background-color': obj.backgroundColor ? obj.backgroundColor : undefined,
    'background-image': obj.backgroundImage ? `url(${obj.backgroundImage})` : undefined,

    'border-color': obj.borderColor ? obj.borderColor : undefined,
    'border-radius': obj.borderRadius ? coordAsString(obj.borderRadius) : undefined,
    'border-width': obj.borderWidth ? coordAsString(obj.borderWidth) : undefined,

    'transform': obj.transform ? obj.transform : undefined,

    'width': obj.width ? coordAsString(obj.width) : undefined,
    'height': obj.height ? coordAsString(obj.height) : undefined,
    'top': obj.y ? coordAsString(obj.y) : undefined,
    'left': obj.x ? coordAsString(obj.x) : undefined
    
  };

  let styleString = '';

  Object.keys(styles).forEach(key => {
    if(styles[key] !== undefined) {
      styleString += `${key}: ${styles[key]}; `;
    }
  })

  return styleString;

}