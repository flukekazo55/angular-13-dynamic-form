import {
    ValidatorConstraintInterface,
    ValidatorConstraint,
} from 'class-validator-multi-lang';

@ValidatorConstraint()
export class TextLength8 implements ValidatorConstraintInterface {
    validate(text: string) {
        return text ? text.length >= 8 : false;
    }
}