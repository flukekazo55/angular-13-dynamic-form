import { IsNotEmpty, IsNumberString, IsDateString, Validate } from 'class-validator-multi-lang';
import { marker } from '@ngneat/transloco-keys-manager/marker';
import { Exclude, Expose } from 'class-transformer-global-storage';
import { TextLength8 } from 'src/app/utils/custom-validators';

export class AddDynamicFormExample {
    @Validate(TextLength8, {
        message: marker('')
    })
    @IsNotEmpty({
        message: marker('FirstName must be not empty')
    })
    @Expose()
    firstname: string;

    @IsNotEmpty({
        message: marker('LastName must be not empty')
    })
    @Expose()
    lastname: string;

    @IsNotEmpty({
        message: marker('Address must be not empty')
    })
    @Expose()
    address: string;

    @IsNotEmpty({
        message: marker('Age must be not empty')
    })
    @IsNumberString({}, {
        message: marker('Age must be number only')
    })
    @Expose()
    age: number;

    @IsNotEmpty({
        message: marker('Birthday must be not empty')
    })
    @IsDateString({}, {
        message: marker('Birthday must be date only')
    })
    @Expose()
    birthDay: Date;

    @IsNotEmpty({
        message: marker('Bussiness Type must be not empty')
    })
    @Expose()
    typeBussiness: string;

    @IsNotEmpty({
        message: marker('News Letter in must be not empty')
    })
    @Expose()
    newsletterIn: string;

    @IsNotEmpty({
        message: marker('Suscription Type must be not empty')
    })
    @Expose()
    suscriptionType: string;
}