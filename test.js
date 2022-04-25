import { capitalize, reverseString, createCalculator, caesarCipher, analyzeArrays } from './functions';

test('capitalize string with all undercase', () => {
  expect(capitalize('word')).toBe('Word');
});

test('capitalize string with all uppercase', () => {
  expect(capitalize('WORD')).toBe('Word');
});

test('capitalize string with both cases', () => {
  expect(capitalize('wOrD')).toBe('Word');
});

test('reverse string', () => {
  expect(reverseString('word')).toBe('drow');
})

test('reverse string with 1 char', () => {
  expect(reverseString('W')).toBe('W');
})

const calculator = createCalculator();

test('calculator add', () => {
  expect(calculator.add(5, 10)).toBe(15);
})

test('calculator subtract', () => {
  expect(calculator.subtract(5, 10)).toBe(-5);
})

test('calculator multiply', () => {
  expect(calculator.multiply(5, 10)).toBe(50);
})

test('calculator divide', () => {
  expect(calculator.divide(5, 10)).toBeCloseTo(0.5);
})

test('caesar cipher simple', () => {
  expect(caesarCipher('abcde')).toBe('bcdef');
})

test('caesar cipher uppercase', () => {
  expect(caesarCipher('aBcdE')).toBe('bCdeF');
})

test('caesar cipher Z to A', () => {
  expect(caesarCipher('abcdZ')).toBe('bcdeA');
})

test('caesar cipher punctuation', () => {
  expect(caesarCipher('abc.de.')).toBe('bcd.ef.');
})

test('analyze arrays count', () => {
  expect(analyzeArrays([3, 5, 6, 8, 9]).length).toBe(5);
})

test('analyze arrays count', () => {
  expect(analyzeArrays([3, 5, 6, 8, 9]).min).toBe(3);
})

test('analyze arrays count', () => {
  expect(analyzeArrays([3, 5, 6, 8, 9]).max).toBe(9);
})

test('analyze arrays count', () => {
  expect(analyzeArrays([3, 5, 6, 8, 9]).average).toBeCloseTo(6.2);
})