/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     let ar = this.split(' ');
     for (let i = 0; i < ar.length; i++) {
         let chars = ar[i].split('');
         let up = chars[0].toUpperCase();
         chars.splice(0,1,up);
         ar[i] = chars.join('');
     }
     return ar.join(' ');
   }
  }
);
