const MeusLivros = require('./index.js');
const MeusLivros2 = require('./index.js');
const MeusLivros3 = require('./index.js');


MeusLivros.setLivros(['Design Pattern', 'Clean Code', 'Solid'])
MeusLivros2.setLivros(['Clean Architecture', 'Cracking the Coding Interview'])
MeusLivros3.setLivros('Introduction to Algorithms')

console.log(MeusLivros.getLivros())