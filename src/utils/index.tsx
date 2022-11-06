import moment from 'moment';
import { Dimensions, Platform } from 'react-native';
import { COLORS } from '../constants';
const { height, width } = Dimensions.get('window');

export const isIos = (Platform.OS === 'ios');
// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const movies = [
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    price: 130,
    days,
    times,
  },
  {
    title: 'Paterson',
    poster: 'https://i.imgur.com/pE0C9E0.jpg',
    genre: 'Drama/Comedy',
    price: 230,
    days,
    times,
  },
  {
    title: 'Jackie',
    poster: 'https://i.imgur.com/VqUi1sw.jpg',
    genre: 'Drama/Biography',
    price: 430,
    days,
    times,
  },
  {
    title: 'Lo and Behold Reveries of the Connected World',
    poster: 'https://i.imgur.com/s106X7S.jpg',
    genre: 'Documentary',
    price: 330,
    days,
    times,
  },
  {
    title: '10 Cloverfield Lane',
    poster: 'https://i.imgur.com/kV2BVdH.jpg',
    genre: 'Drama',
    price: 150,
    days,
    times,
  },
  {
    title: 'Birth of a Nation',
    poster: 'https://i.imgur.com/a6HJj8S.jpg',
    genre: 'Fantasy/Myster',
    price: 250,
    days,
    times,
  },
  {
    title: 'De Palma',
    poster: 'https://i.imgur.com/oOIa73M.jpg',
    genre: 'Documentary',
    price: 380,
    days,
    times,
  },
  {
    title: 'Doctor Strange',
    poster: 'https://i.imgur.com/kyHDVOk.jpg',
    genre: 'Fantasy/Science Fiction',
    days,
    price: 220,
    times,
  },
  {
    title: 'Eddie the Eagle',
    poster: 'https://i.imgur.com/GNrdAuF.jpg',
    genre: 'Drama/Sport',
    price: 180,
    days,
    times,
  },
  {
    title: 'Pride and prejudice and zombies',
    poster: 'https://i.imgur.com/KhbG0Lw.jpg',
    genre: 'Thriller/Action',
    price: 320,
    days,
    times,
  },
  {
    title: 'Finding Dory',
    poster: 'https://i.imgur.com/BTexHYJ.jpg',
    genre: 'Comedy/Adventure',
    price: 100,
    days,
    times,
  },
  {
    title: 'Green Room',
    price: 400,
    poster: 'https://i.imgur.com/Q0Ysh7L.jpg',
    genre: 'Crime/Thriller',
    days,
    times,
  },
  {
    title: 'Kubo and the Two Strings',
    poster: 'https://i.imgur.com/uTFCKZc.jpg',
    genre: 'Fantasy/Adventure',
    price: 130,
    days,
    times,
  },
  {
    title: 'In a Valley of Violence',
    poster: 'https://i.imgur.com/DTtJ62G.jpg',
    genre: 'Drama/Western',
    price: 170,
    days,
    times,
  },
  {
    title: 'O.J.: Made in America',
    poster: 'https://i.imgur.com/T8uc6x8.jpg',
    genre: 'Documentary',
    price: 230,
    days,
    times,
  },
  {
    title: 'Rogue One: A Star Wars Story',
    poster: 'https://i.imgur.com/zOF2iYc.jpg',
    genre: 'Science Fiction/Action',
    price: 110,
    days,
    times,
  },
  {
    title: 'Sing Street',
    price: 270,
    poster: 'https://i.imgur.com/C3ExEb6.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Zoolander 2',
    price: 500,
    poster: 'https://i.imgur.com/ejlIijD.jpg',
    genre: 'Comedy',
    days,
    times,
  },
];

export const isTab = () => {

  let ratio = (height / width);
  if (ratio > 1.6) return false; //IPhone
  else return true; //IPad
}

export const seats = [
  {
    name: 'Available',
    isFemale: "#229879",
    color: "#229879",
  },
  {
    name: 'Your Seat',
    isFemale: "#FC6DAB",
    color: "#654DD7",
  },
  {
    name: 'Booked',
    isFemale: "#BABABA",
    color: "#BABABA",
  }
]

export const layoutSeat = [
  {
    status: 'available'
  },
  {
    status: 'booked'
  },
  {
    status: 'available'
  },
  {
    status: 'available'
  },
  {
    status: 'available'
  },
  {
    status: 'available'
  },
  {
    status: 'booked'
  },
  {
    status: 'booked'
  },
  {
    status: 'booked'
  },
  {
    status: 'booked'
  },
  {
    status: 'booked'
  },
  {
    status: 'available'
  },
  {
    status: 'available'
  },
  {
    status: 'available'
  },
  {
    status: 'available'
  },
  {
    status: 'available'
  }
]

export const isCheck = (array: Array<any>, value: string | number | any) => {
  let varIndex = array.indexOf(value);
  if (varIndex == -1) return true;
  else return false;
}

export const handleCheck = (array: Array<any>, value: string | number | any, setArray: Function) => {
  let arr: Array<any> = [...array];
  let varIndex = array.indexOf(value);
  if (isCheck(array, value)) {
      //add the value into array
      arr.push(value);
  } else {
      //remove the value from array
      arr.splice(varIndex, 1);
  }
  setArray(arr);
}
