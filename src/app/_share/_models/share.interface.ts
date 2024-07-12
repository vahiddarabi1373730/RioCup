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
  type: string
  label: string,
  value: T | null,
  options: ValueLabelInterface[],
  controls?: DynamicFormConfigInterface['controls']
  validators?: {
    [key in ValidatorKeys]?: unknown
  }
}

export type CustomValidators = {}
export type ValidatorKeys = keyof Omit<typeof Validators & CustomValidators, 'composeAsync' | 'compose' | 'prototype'>
export type ControlType = 'input' | 'select' | 'slider' | 'group';
export type DynamicControlsMap = {
  [T in DynamicControlInterface['controlType']]: Type<any>
}


export interface CoffeeCardInterface {
  nameFlag: string,
  title: string,
  bitterness: ValueLabelInterface,
  acidity: ValueLabelInterface,
  caffeine: ValueLabelInterface,
  price: number

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
  text?: boolean,
  class: ClassType

}

export type ClassType = 'F2F2F2' | 'DDBE88'
export type SeverityType = 'secondary' | 'primary' | 'success' | 'danger'
