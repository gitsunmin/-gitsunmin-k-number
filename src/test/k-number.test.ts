import { kNumber } from '../k-number/index';

describe('k-number', () => {
  test('30_000_400 -> 삼천만사백', () => {
    expect(kNumber(30_000_400)).toBe('삼천만사백');
  });
  test('12_389_828 -> 일천이백삼십팔만구천팔백이십팔', () => {
    expect(kNumber(12_389_828)).toBe('일천이백삼십팔만구천팔백이십팔');
  });
  test('3_000 -> 삼천', () => {
    expect(kNumber(3_000)).toBe('삼천');
  });
  test('12_000 -> 일만이천', () => {
    expect(kNumber(12_000)).toBe('일만이천');
  });
  test('34_102 -> 삼만사천일백이', () => {
    expect(kNumber(34_102)).toBe('삼만사천일백이');
  });
  test('10_002_030 -> 일천만이천삼십', () => {
    expect(kNumber(10_002_030)).toBe('일천만이천삼십');
  });
  test('39_393_382 -> 삼천구백삼십구만삼천삼백팔십이', () => {
    expect(kNumber(39_393_382)).toBe('삼천구백삼십구만삼천삼백팔십이');
  });
  test('10_002_030_202 -> 일백억이백삼만이백이', () => {
    expect(kNumber(10_002_030_202)).toBe('일백억이백삼만이백이');
  });
  test('92_193_998_394 -> 구백이십일억구천삼백구십구만팔천삼백구십사', () => {
    expect(kNumber(92_193_998_394)).toBe(
      '구백이십일억구천삼백구십구만팔천삼백구십사'
    );
  });
  test('9_007_199_254_740_991 -> 구천칠조일천구백구십이억오천사백칠십사만구백구십일', () => {
    expect(kNumber(9_007_199_254_740_991)).toBe(
      '구천칠조일천구백구십이억오천사백칠십사만구백구십일'
    );
  });
});
