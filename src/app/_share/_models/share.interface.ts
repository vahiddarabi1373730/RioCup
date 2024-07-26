import {ValidatorFn, Validators} from "@angular/forms";
import {Type} from "@angular/core";

export interface ValueLabelInterface {
  value: any,
  label: string
}

export interface DynamicFormConfigInterface {
  validatorFn?: ValidatorFn,
  textError?: string,
  formClass?: string,
  controls: {
    [key: string]: DynamicControlInterface
  }
}

export interface DynamicControlInterface<T = any> {
  controlType: ControlType,
  type?: string
  label: string,
  value: T | null,
  options?: ValueLabelInterface[],
  controls?: DynamicFormConfigInterface['controls']
  validators?: {
    [key in ValidatorKeys]?: unknown
  }
  controlClass?: string,
  placeholder?: string,
  inputGroupConfig?: InputGroupType
}

export type CustomValidators = {}
export type ValidatorKeys = keyof Omit<typeof Validators & CustomValidators, 'composeAsync' | 'compose' | 'prototype'>
export type ControlType = 'input' | 'select' | 'slider' | 'input-group' | 'group';
export type DynamicControlsMap = {
  [T in DynamicControlInterface['controlType']]: Type<any>
}

type InputGroupType = 'no' | 'yes';

export interface CoffeeInterface {
  nameFlag: string,
  title: string,
  bitterness: ValueLabelInterface,
  acidity: ValueLabelInterface,
  caffeine: ValueLabelInterface,
  price: number,
  class?: string

}

export interface FooterInterface {
  level: string,
  countProducts: number,
  price: number
}


export interface ButtonInterface {
  iconName?: string
  hasIcon?: boolean,
  operation: () => void,
  innerText?: string,
  hasInnerText?: boolean,
  severity?: SeverityType,
  raised?: boolean,
  icon?: string,
  iconPos?: any,
  hasText?: boolean,
  class: string,
  disabled?: boolean,
  key?: string,

}

export type SeverityType = 'secondary' | 'primary' | 'success' | 'danger'

export interface selectedCoffeeInterface {
  index: number
  coffee: CoffeeInterface
}


export interface DeviceInterface {
  id: string,
  iconName: string,
  title: string
  bitterness: ValueLabelInterface,
  acidity: ValueLabelInterface,
  caffeine: ValueLabelInterface,
  smell: ValueLabelInterface,
  class?: string
}

export interface PackInterface {
  iconName: string,
  title: string,
  id: string,
  class?: string
}

export type CurrentRoute = '/' | '/coffee-mix' | '/devices' | '/name-weight-choice'

export interface AlertInterface {
  title: string,
  message: string,
  type: AlertType
}

export type AlertType = 'success' | 'error' | 'warning' | 'info'

export interface DisabledButtonInterface {
  disabled?: boolean,
  key?: string
}


export interface ChangeConfigPropertyInterface {
  newValue: any,
  propertyName: keyof DynamicControlInterface,
}
