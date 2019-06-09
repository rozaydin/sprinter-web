import { ValidatorFn } from '@angular/forms';

export interface FormControlConf {
    inputtype: InputType,
    value?: string|number,
    validators?: Array<ValidatorFn>
}

export interface FormConf {
    [key: string]: FormControlConf
}

export enum InputType {
    button = "button",
    checkbox = "checkbox",
    color = "color",
    date = "date",
    datetimelocal = "datetime-local",
    email = "email",
    file = "file",
    hidden = "hidden",
    image = "image",
    month = "month",
    number = "number",
    password = "password",
    radio = "radio",
    range = "range",
    reset = "reset",
    search = "search",
    submit = "submit",
    tel = "tel",
    text = "text",
    time = "time",
    url = "url",
    week = "week"
}