//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import ArrayUtil from './array-util';

describe('ArrayUtil', () => {
  describe('removeDuplicates', () => {
    it('returns an empty array if the array is null or undefined.', () => {
      expect(ArrayUtil.removeDuplicates(null)).toEqual([]);
      expect(ArrayUtil.removeDuplicates(undefined)).toEqual([]);
    });

    it('returns an empty array if the array is an empty array.', () => {
      expect(ArrayUtil.removeDuplicates([])).toEqual([]);
    });

    it('returns the same array if the array is already sorted and unique', () => {
      expect(ArrayUtil.removeDuplicates(['apple', 'pear'])).toEqual(['apple', 'pear']);
    });

    it('returns the array (sorted) if the array is not sorted but unique', () => {
      expect(ArrayUtil.removeDuplicates(['pear', 'apple'])).toEqual(['apple', 'pear']);
    });

    it('returns the array, sorted with duplicates removed, if the array is not sorted and not unique', () => {
      expect(ArrayUtil.removeDuplicates(['pear', 'apple', 'pear', 'apple', 'orange', 'pear'])).toEqual(['apple', 'orange', 'pear']);
    });
  });
});
