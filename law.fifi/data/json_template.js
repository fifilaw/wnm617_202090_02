
//user template
[
  '{{repeat(10)}}',
  {
    id:'{{index(1)}}',
    firstname: '{{firstName()}}',
    lastname: '{{surname()}}',
    username: function(){
      return 'user' + this.id;
    },
    email: function(){
     return this.username +'@gmail.com'; 
    },
    gender:'{{gender()}}',
  
    password: 'md5(pass)',
    
    location: '{{city()}}'+', '+ '{{state()}}',
    
    bio:'{{lorem(2, "sentences")}}',
    
    initial: function(tags){
      return this.firstname.charAt(0) + this.lastname.charAt(0);
    },
    
    img: function(tags){
      return 'https://via.placeholder.com/400/' + tags.integer(700,999)+ '/fff/?text=' + this.intial;
    }, 
    date_create:'{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'

  }
]

//New Animal Template

[
  '{{repeat(50)}}',
  {
    id:'{{index(1)}}',
    user_id:'{{integer(1,10)}}',
    name: '{{company()}}',

    gender:'{{random("Boy","Girl")}}',
    
    breed:'{{random("Tabby","Maine Coon", "Rag doll","Siamese")}}',
    
    color:'{{random("Grey", "Black","Tri-color","Ginger")}}',
    
    coat:'{{random("Short","Medium","Long")}}',
    
    size:'{{random("Small","Medium","Large")}}',

    neutered:'{{random("Yes","No")}}',
    
    description:'{{lorem(2, "sentences")}}',
    
    img: function(tags){
      return 'https://via.placeholder.com/400/' + tags.integer(700,999)+ '/fff/?text=' + this.name;
    }, 
    date_create:'{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'


  }
]





//Animal template

[
  '{{repeat(50)}}',
  {
    id:'{{index(1)}}',
    user_id:'{{integer(1,10)}}',
    name: '{{company()}} ',
    
    type:'{{random("dog","horse","cat")}}',
    breed:function (tags){
      var breeds ={
        dog :["labrador","pitbull", "dschund", "yorkie"],
        horse:["unicorn", "shetland"],
        cat:["tabby","maine coon", "rag doll","siamese"]
      };
      
      
      var chosen_type= breeds[this.type];
      
      var chosen_index=tags.integer(0,chosen_type.length-1);
      
      return chosen_type[chosen_index];
    },
    
    description:'{{lorem(3, "sentences")}}',
    
    img: function(tags){
      return 'https://via.placeholder.com/400/' + tags.integer(700,999)+ '/fff/?text=' + this.name;
    }, 
    date_create:'{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'


  }
]

//location template

[
  '{{repeat(250)}}',
  {
    id:'{{index(1)}}',
    animal_id:'{{integer(1,50)}}',
  
   
 
    lat: '{{floating(37.796072, 37.701525)}}',
    lng:'{{floating(-122.526401 , -122.362700)}}',
    
    status:'{{random("Eating","Sleeping","Walking")}}',
    
    description:'{{lorem(2, "sentences")}}',
    
    photo: 'https://via.placeholder.com/400x500', 
    icon: 'images/map.svg', 
    
    date_create:'{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'


  }
]














[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]