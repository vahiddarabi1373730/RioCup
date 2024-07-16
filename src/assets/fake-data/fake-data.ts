import {CoffeeInterface, DeviceInterface, PackInterface} from "../../app/_share/_models/share.interface";

export const coffees: CoffeeInterface[] = [
  {
    acidity: {value: 85, label: "اسیدیته"},
    title: "برزیل مدیوم 100% عربیکا",
    bitterness: {value: 50, label: "تلخی"},
    caffeine: {value: 66, label: "کافیین"},
    nameFlag: "brazil",
    price: 75000
  },
  {
    acidity: {value: 50, label: "اسیدیته"},
    title: "اوگاندا مدیوم ربوستا",
    bitterness: {value: 90, label: "تلخی"},
    caffeine: {value: 20, label: "کافیین"},
    nameFlag: "uganda",
    price: 75000
  },
  {
    acidity: {value: 85, label: "اسیدیته"},
    title: "کنیا دارک 100% عربیکا",
    bitterness: {value: 50, label: "تلخی"},
    caffeine: {value: 66, label: "کافیین"},
    nameFlag: "kenya",
    price: 75000
  },
  {
    acidity: {value: 50, label: "اسیدیته"},
    title: "پرو مدیوم 100% عربیکا",
    bitterness: {value: 90, label: "تلخی"},
    caffeine: {value: 20, label: "کافیین"},
    nameFlag: "peru",
    price: 75000
  },
  {
    acidity: {value: 85, label: "اسیدیته"},
    title: "برزیل دارک 60% ربوستا",
    bitterness: {value: 50, label: "تلخی"},
    caffeine: {value: 66, label: "کافیین"},
    nameFlag: "brazil",
    price: 75000
  },
  {
    acidity: {value: 50, label: "اسیدیته"},
    title: "اوگاندا مدیوم 100% عربیکا",
    bitterness: {value: 90, label: "تلخی"},
    caffeine: {value: 20, label: "کافیین"},
    nameFlag: "uganda",
    price: 75000
  },
  {
    acidity: {value: 85, label: "اسیدیته"},
    title: "کنیا مدیوم 100% عربیکا",
    bitterness: {value: 50, label: "تلخی"},
    caffeine: {value: 66, label: "کافیین"},
    nameFlag: "kenya",
    price: 75000
  },
  {
    acidity: {value: 50, label: "اسیدیته"},
    title: "پرو مدیوم 100% ربوستا",
    bitterness: {value: 90, label: "تلخی"},
    caffeine: {value: 20, label: "کافیین"},
    nameFlag: "peru",
    price: 75000
  }
]

export const preparerDevices: DeviceInterface[] = [
  {
    acidity: {value: 50, label: "اسدیته"},
    bitterness: {value: 40, label: "تلخی"},
    caffeine: {value: 80, label: "کافیین"},
    smell: {value: 20, label: "رایح"},
    title: 'اسپرسو خانگی',
    iconName: "espresso",
    id: '1'
  },
  {
    acidity: {value: 80, label: "اسدیته"},
    bitterness: {value: 50, label: "تلخی"},
    caffeine: {value: 20, label: "کافیین"},
    smell: {value: 75, label: "رایح"},
    title: 'موکاپات',
    iconName: "mokapat",
    id: '2'
  },
  {
    acidity: {value: 10, label: "اسدیته"},
    bitterness: {value: 80, label: "تلخی"},
    caffeine: {value: 50, label: "کافیین"},
    smell: {value: 45, label: "رایح"},
    title: 'فرانسه ساز',
    iconName: "france",
    id: '3'
  },
  {
    acidity: {value: 100, label: "اسدیته"},
    bitterness: {value: 20, label: "تلخی"},
    caffeine: {value: 50, label: "کافیین"},
    smell: {value: 60, label: "رایح"},
    title: 'فرنچ پرس',
    iconName: "french-press",
    id: '4'
  },
  {
    acidity: {value: 50, label: "اسدیته"},
    bitterness: {value: 40, label: "تلخی"},
    caffeine: {value: 80, label: "کافیین"},
    smell: {value: 20, label: "رایح"},
    title: 'اسپرسو خانگی',
    iconName: "espresso",
    id: '1'
  },
  {
    acidity: {value: 80, label: "اسدیته"},
    bitterness: {value: 50, label: "تلخی"},
    caffeine: {value: 20, label: "کافیین"},
    smell: {value: 75, label: "رایح"},
    title: 'موکاپات',
    iconName: "mokapat",
    id: '2'
  },
  {
    acidity: {value: 10, label: "اسدیته"},
    bitterness: {value: 80, label: "تلخی"},
    caffeine: {value: 50, label: "کافیین"},
    smell: {value: 45, label: "رایح"},
    title: 'فرانسه ساز',
    iconName: "france",
    id: '3'
  },
  {
    acidity: {value: 100, label: "اسدیته"},
    bitterness: {value: 20, label: "تلخی"},
    caffeine: {value: 50, label: "کافیین"},
    smell: {value: 60, label: "رایح"},
    title: 'فرنچ پرس',
    iconName: "french-press",
    id: '4'
  },
]

export const packs: PackInterface[] = [
  {iconName: "pack", title: "بسته 250 گرمی", id: '1', class: ""},
  {iconName: "pack", title: "بسته 500 گرمی", id: '2', class: ""},
  {iconName: "pack", title: "بسته 1 کیلویی", id: '3', class: ""},
  {iconName: "pack", title: "بسته  2 کیلویی", id: '4', class: ""},
]
