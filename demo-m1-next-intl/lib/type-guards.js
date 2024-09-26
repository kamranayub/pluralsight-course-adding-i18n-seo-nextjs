
export const isObject = (object) => {
  return typeof object === 'object' && object !== null && !Array.isArray(object);
};

export const isShopifyError = (error) => {
  if (!isObject(error)) return false;

  if (error instanceof Error) return true;

  return findError(error);
};

function findError(error) {
  if (Object.prototype.toString.call(error) === '[object Error]') {
    return true;
  }

  const prototype = Object.getPrototypeOf(error);

  return prototype === null ? false : findError(prototype);
}
