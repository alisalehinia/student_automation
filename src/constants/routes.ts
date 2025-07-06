import {
    Home,
    User,
    Book,
    University,
    GraduationCap,
    LibraryBig,
  } from "lucide-react";
  
  const routes = {
    home: {
      name: "خانه",
      url: "/",
      icon: Home,
    },
    login: {
      name: "ورود",
      url: "/login",
      icon: User,
    },
    profile: {
      name: "پروفایل",
      url: "/profile",
      icon: User,
    },
    todayClasses: {
      name: "کلاس‌های امروز",
      url: "/today-classes",
      icon: Book,
    },
    allClasses: {
      name: "همه کلاس‌ها",
      url: "/all-classes",
      icon: University,
    },
    teachers: {
      name: "مدرسین",
      url: "/teachers",
      icon: GraduationCap,
    },
    booksForSale: {
      name: "کتاب ها‌",
      url: "/books-for-sale",
      icon: LibraryBig,
    },
  };
  
  export default routes;
  