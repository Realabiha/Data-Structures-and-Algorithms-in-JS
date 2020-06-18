import { sort } from "./sort";
test('sort test', () => {
    expect(sort([2,9,3])).toEqual([2,3,9]);
})