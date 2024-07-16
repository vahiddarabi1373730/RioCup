import {Validators} from "@angular/forms";
import {Type} from "@angular/core";

export interface ValueLabelInterface {
  value: any,
  label: string
}

export interface SvgIcon {
  name: string
}

export interface DynamicFormConfigInterface {
  controls: {
    [key: string]: DynamicControlInterface
  }
}

export interface DynamicControlInterface<T = string> {
  controlType: ControlType,
  type?: string
  label: string,
  value: T | null,
  options?: ValueLabelInterface[],
  controls?: DynamicFormConfigInterface['controls']
  validators?: {
    [key in ValidatorKeys]?: unknown
  }
}

export type CustomValidators = {}
export type ValidatorKeys = keyof Omit<typeof Validators & CustomValidators, 'composeAsync' | 'compose' | 'prototype'>
export type ControlType = 'input' | 'select' | 'slider' | 'input-group' | 'group';
export type DynamicControlsMap = {
  [T in DynamicControlInterface['controlType']]: Type<any>
}


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
  class: string

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
