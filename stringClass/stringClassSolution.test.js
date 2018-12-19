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
   test('A simple case ', () => {
       expect('hallo'.ucFirst()).toEqual('Hallo');
   })
   test('A simple sentence case ', () => {
       expect('am in love with you'.ucFirst()).toEqual('Am in love with you');
   })
   test('A simple sentence case', () => {
       expect('am in love with you'.words()).toEqual([ 'am', 'in', 'love', 'with', 'you' ]);
   })
   test('A case with just a word string', () => {
       expect('love'.words()).toEqual([ 'love' ]);
   })
   test('A simple sentence case', () => {
       expect('am in love with you'.wordCount()).toEqual(5);
   })
   test('A case with just a word', () => {
       expect('you'.wordCount()).toEqual(1);
   })
   test('A case with just a character', () => {
       expect('y'.wordCount()).toEqual(1);
   })
   test('A case of a simple string', () => {
       expect('damIAre'.inverseCase()).toEqual('DAMiaRE');
   })
   test('A case where all are uppercase', () => {
       expect('VEHINCLE'.inverseCase()).toEqual('vehincle');
   })
   test('A case where all are lowercase', () => {
       expect('pastor'.inverseCase()).toEqual('PASTOR');
   })
   test('A case of a sentence string', () => {
       expect('i am Dare Lawal'.inverseCase()).toEqual('I AM dARE lAWAL');
   })
   test('A case of a sentence string', () => {
       expect('i am Dare Lawal'.alternatingCase()).toEqual('i aM DaRe lAwAl');
   })
   test('A case of a simple string', () => {
       expect('Dictionary'.alternatingCase()).toEqual('dIcTiOnArY');
   })
   test('A case where they are all uppercase', () => {
       expect('VEHINCLE'.alternatingCase()).toEqual('vEhInClE');
   })
   test('A case of single number', () => {
       expect('4'.numberWords()).toEqual('four');
   })
   test('A case of more numbers', () => {
       expect('12345'.numberWords()).toEqual('one two three four five');
   })
   test('A case of repeated numbers', () => {
       expect('2222'.numberWords()).toEqual('two two two two');
   })






