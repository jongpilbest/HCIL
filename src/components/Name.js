
const second_name = new Set([
      'bird',
      'donkey',
      'eagle',
      'hippo',
      'monkey'
])



const animal_name= new Set(
[
    'horse',
    'whale',
    'duck',
    'cow',
    'cat',
    'ape',
    'pig',
    'zebra',
    'turkey',
    'lion',
    'dog',
    'rooster',
    'turtle',
    'humpback whale',
    'tiger',
    'racccon',
    'moonse',
    'elephant',
    'sheep',
    'owl',
    'frog',
    'anteater',
    'hedgehog',
    'guinea-pig',
    'giraffe',
    'crow',
    'butterfly',
'camel',
'wolf',
'chicken',
'lizard',
'falcon',
'moose',
'bat',
'rattlesnake',
'swan',
'buffalo',
'bee',
'owl',
'whale',
'dove',
'lion',
'shark',
'cow',
'otter',
'rooster',
'alligator',
'alpaca',
'yak',
'sheep',
'zebra',
'antelope',
'duck',
'robin',
'ape',
'scorpion',
'rat',
'turkey',
'elephant',
'komodo-dragon',
'rhinoceros',
'rabbit',
'panda',
'ferret',
'penguin',
'leopard',
'hippopotamus',
'hyena',
'tiger',
'humpback-whale',
'african-grey-parrot'
]    
);


export function Animal_name_isTure(name){
  
   // return animal_name.has(name);
   var hey_name= name.split(' ');
   for(var i=0; i<hey_name.length; i++){
    if( animal_name.has(hey_name[i])){
        return ([1,hey_name[i]]);
    }
   }
    
  for(var ii=0; ii<hey_name.length; ii++){
    if(second_name.has(hey_name[ii])){
        return [2,hey_name[ii]]
    }
  }


   return [0,'_'];
}