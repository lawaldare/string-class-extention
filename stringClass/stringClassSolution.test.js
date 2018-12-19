require('./StringClassSolution');

   test('A simple case where no vowel exist', () => {
       expect('whtdsn'.hasVowels()).toEqual(false);
   })
   test('A simple case where Vowel is both upper and lower', () => {
       expect('Amidso'.hasVowels()).toEqual(true);
   })

   test('A case where question mark ends the question', () => {
       expect('Is the world yours, on a blimp?'.isQuestion()).toEqual(true);
   })
   test('A simple case with no question mark', () => {
       expect('What\'s your name'.isQuestion()).toEqual(false);
   })
   test('A case where question mark comes inside the string', () => {
       expect('H?allo'.isQuestion()).toEqual(false);
   })
   test('A case sentence strings', () => {
       expect('I miss you'.toUpper()).toEqual('I MISS YOU');
   })
   test('A case sentence where all are uppercase', () => {
       expect('JOSHUA'.toUpper()).toEqual('JOSHUA');
   })
   test('A case where uppercase are in between a string', () => {
       expect('nOPe'.toUpper()).toEqual('NOPE');
   })
   test('A case where uppercase are in between a string', () => {
       expect('I MIss YOU'.toLower()).toEqual('i miss you');
   })
   test('A case sentence where all are uppercase', () => {
       expect('JOSHUA'.toLower()).toEqual('joshua');
   })
   test('A case sentence where all are lowercase', () => {
       expect('adesewa'.toLower()).toEqual('adesewa');
   })



