/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Personality } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonalityUpdateFormInputValues = {
    Name?: string;
    Nickname?: string;
    Bio?: string;
    ImageUrl?: string;
};
export declare type PersonalityUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Nickname?: ValidationFunction<string>;
    Bio?: ValidationFunction<string>;
    ImageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalityUpdateFormOverridesProps = {
    PersonalityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Nickname?: PrimitiveOverrideProps<TextFieldProps>;
    Bio?: PrimitiveOverrideProps<TextFieldProps>;
    ImageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonalityUpdateFormProps = React.PropsWithChildren<{
    overrides?: PersonalityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    personality?: Personality;
    onSubmit?: (fields: PersonalityUpdateFormInputValues) => PersonalityUpdateFormInputValues;
    onSuccess?: (fields: PersonalityUpdateFormInputValues) => void;
    onError?: (fields: PersonalityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonalityUpdateFormInputValues) => PersonalityUpdateFormInputValues;
    onValidate?: PersonalityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PersonalityUpdateForm(props: PersonalityUpdateFormProps): React.ReactElement;
