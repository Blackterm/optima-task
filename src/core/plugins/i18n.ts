import { createI18n } from "vue-i18n";

const messages = {
  
  tr: {
    validation_errors:{
      mixed:{
        required: "{path} alanı zorunlu.",
      },
      string:{
        length: '{path} tam olarak {length} karakter olmalıdır',
        min: '{path}, en az {min} karakter olmalıdır',
        max: '{path}, en fazla {max} karakter olmalıdır', 
      }, 
    },

    welcome:'Hoşgeldiniz',
    weather: 'Hava Durumu',
    wind: 'Rüzgar',
    button_name:{
        login:'Giriş Yap',
        okey:'Tamam',
        search:'Ara',
    },
    login:{
        username:'Kullanıcı Adı',
        password:'Şifre',
    },
    location:{
      country:'Ülke',
      province:'İl',
    },
    error_message:{
      userError:'Böyle bir kullanıcı bulunamadı',
      somethingError: 'Bir şeyler ters gitti',
    },
  },

  en: {
    validation_errors:{
      mixed:{
        required: "{path} field is required.",
      },
      string:{
        length: '{path} must be exactly {length} characters',
        min: '{path} must be at least {min} characters',
        max: '{path} must be at most {max} characters', 
      }, 
    },
     welcome:'Welcome',
     weather: 'Weather',
      wind: 'Wind',
     button_name:{
        login:'Login',
        okey:'Okey',
         search:'Search',
    },
    login:{
        username:'Username',
        password:'Password',
    },
    location:{
      country:'Country',
      province:'Province',
    },
     error_message:{
      userError:'No such user found',
      somethingError: 'Something went wrong',
    },
  }
};

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VUE_APP_I18N_LOCALE,
  globalInjection: true,
  messages,
});

export default i18n;
