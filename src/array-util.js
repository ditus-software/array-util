//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
/**
 * Contains static methods for working with arrays.
 */
 export default class ArrayUtil {
  /**
   * Sorts and removes duplicates from the specified array.
   *
   * @param {Array} array The array.
   * @returns {Array} An array with duplicates removed.
   */
  static removeDuplicates(array) {
    let result = [];

    if (array) {
      array.sort();

      result = array.reduce((unique, item) => (unique.includes(item)
        ? unique
        : [...unique, item]),
      []);
    }

    return result;
  }
}
