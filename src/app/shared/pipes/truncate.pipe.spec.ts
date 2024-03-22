import { TruncatePipe } from './truncate.pipe';

const referenceString: string = "Als dem Physiker Julius Robert Oppenheimer während " +
                          "des Zweiten Weltkriegs die wissenschaftliche Leitung " +
                          "des Manhattan-Projekts übertragen wird, können er und " +
                          "seine Ehefrau Kitty sich nicht vorstellen, welche " +
                          "Auswirkungen Oppenheimers Arbeit nicht nur auf ihr " +
                          "Leben, sondern auf die ganze Welt haben wird."

describe('TruncatePipe', () => {
  test('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  describe('should be able to truncate, given', () => {
    const pipe = new TruncatePipe();
    test.each([
      {
        given: { value: referenceString, targetedLength: 0, appendDots: false },
        expected:''
      },
      {
        given: { value: referenceString, targetedLength: 0, appendDots: true },
        expected:'...'
      },
      {
        given: { value: referenceString, targetedLength: 0, appendDots: undefined },
        expected:'...'
      },
      {
        given: { value: referenceString, targetedLength: 1, appendDots: false },
        expected:'Als'
      },
      {
        given: { value: referenceString, targetedLength: 1, appendDots: true },
        expected:'Als...'
      },
      {
        given: { value: referenceString, targetedLength: 1, appendDots: undefined },
        expected:'Als...'
      },
      {
        given: { value: referenceString, targetedLength: 6, appendDots: false },
        expected:'Als dem Physiker Julius Robert Oppenheimer'
      },
      {
        given: { value: referenceString, targetedLength: 6, appendDots: true },
        expected:'Als dem Physiker Julius Robert Oppenheimer...'
      },
      {
        given: { value: referenceString, targetedLength: 6, appendDots: undefined },
        expected:'Als dem Physiker Julius Robert Oppenheimer...'
      },
      {
        given: { value: referenceString, targetedLength: 20, appendDots: false },
        expected:'Als dem Physiker Julius Robert Oppenheimer während des Zweiten Weltkriegs die wissenschaftliche Leitung des Manhattan-Projekts übertragen wird, können er und'
      },
      {
        given: { value: referenceString, targetedLength: 20, appendDots: true },
        expected:'Als dem Physiker Julius Robert Oppenheimer während des Zweiten Weltkriegs die wissenschaftliche Leitung des Manhattan-Projekts übertragen wird, können er und...'
      },
      {
        given: { value: referenceString, targetedLength: 20, appendDots: undefined },
        expected:'Als dem Physiker Julius Robert Oppenheimer während des Zweiten Weltkriegs die wissenschaftliche Leitung des Manhattan-Projekts übertragen wird, können er und...'
      }
    ])('the referenceString, "$given.targetedLength" as targetedLength, and "$given.appendDots" as appendDots', ({given, expected}) => {
      expect(pipe.transform(given.value, given.targetedLength, given.appendDots)).toBe(expected);
    });
  });
});
