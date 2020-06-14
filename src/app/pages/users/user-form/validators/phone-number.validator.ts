import { AbstractControl } from '@angular/forms';

export function phoneNumberValidator(control: AbstractControl) {
    
    if(control.value.trim() && !/^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$/.test(control.value)){
        return { phoneNumber: true }
    }
    return null;

}