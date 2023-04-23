export function getItemFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  try {
    return JSON.parse(item);
  } catch (error) {
    console.error(`Error parsing local storage item with key "${key}"`);
    return null;
  }
}

export function setItemInLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting local storage item with key "${key}"`);
  }
}

export function removeItemFromLocalStorage(key) {
  localStorage.removeItem(key);
}

export function asyncCallImitator(callback) {
  return new Promise((resolve, reject) => {
    try {
      const value = callback();
      resolve(value);
    } catch (error) {
      reject(error);
    }
  });
}

export function isInStorage(key) {
  return localStorage.getItem(key) !== null;
}
