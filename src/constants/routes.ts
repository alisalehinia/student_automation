import {
    Home,
    User,
    Book,
    University,
    GraduationCap,
    LibraryBig,
    Key,
  } from "lucide-react";
  
  const routes = {
    home: {
      name: "خانه",
      url: "/",
      icon: Home,
    },
    login: {
      name: "ورود",
      url: "/auth/login",
      icon: User,
    },
    resetPassword: {
      name: "تغییر رمز",
      url: "/auth/reset-password",
      icon: Key,
    },
    forgotPassword: {
      name: "فراموشی رمز",
      url: "/auth/fogot-password",
      icon: Key,
    },
    forgotPasswordConfirm: {
      name: "تایید رمز",
      url: "/auth/fogot-password-confirm",
      icon: Key,
    },
    waitForSms: {
      name:'صبر برای لینک تغییر رمز',
      url:'/wait-for-sms',
      icon: Key
    },
    profile: {
      name: "پنل",
      url: "/panel",
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
  