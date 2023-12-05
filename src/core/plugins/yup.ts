import { addMethod, StringSchema, string, setLocale } from "yup";
import { AnyObject } from "yup/lib/types";
import i18n from "./i18n";

setLocale({
  mixed: {
      default: ({path}) => i18n.global.t('validation_errors.mixed.default', {path: path}),
      required: ({path}) => i18n.global.t('validation_errors.mixed.required', {path: path}),
      
    },
  string:{
    length: ({path,length}) => i18n.global.t('validation_errors.string.length', {path: path,length: length}),
    min: ({path,min}) => i18n.global.t('validation_errors.string.min', {path: path,min: min}),
    max: ({path,max}) => i18n.global.t('validation_errors.string.max', {path: path,max: max}),
    
},
  

});

declare module "yup" {
  class StringSchema {
    phone(): StringSchema;
    integer(): StringSchema;
    specialCharacter(): StringSchema;
  }
}
