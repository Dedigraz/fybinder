/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Personality } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PersonalityUpdateForm(props) {
  const {
    id: idProp,
    personality: personalityModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    Nickname: "",
    Bio: "",
    ImageUrl: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Nickname, setNickname] = React.useState(initialValues.Nickname);
  const [Bio, setBio] = React.useState(initialValues.Bio);
  const [ImageUrl, setImageUrl] = React.useState(initialValues.ImageUrl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = personalityRecord
      ? { ...initialValues, ...personalityRecord }
      : initialValues;
    setName(cleanValues.Name);
    setNickname(cleanValues.Nickname);
    setBio(cleanValues.Bio);
    setImageUrl(cleanValues.ImageUrl);
    setErrors({});
  };
  const [personalityRecord, setPersonalityRecord] =
    React.useState(personalityModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Personality, idProp)
        : personalityModelProp;
      setPersonalityRecord(record);
    };
    queryData();
  }, [idProp, personalityModelProp]);
  React.useEffect(resetStateValues, [personalityRecord]);
  const validations = {
    Name: [{ type: "Required" }],
    Nickname: [],
    Bio: [],
    ImageUrl: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          Nickname,
          Bio,
          ImageUrl,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Personality.copyOf(personalityRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonalityUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Nickname,
              Bio,
              ImageUrl,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Nickname"
        isRequired={false}
        isReadOnly={false}
        value={Nickname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Nickname: value,
              Bio,
              ImageUrl,
            };
            const result = onChange(modelFields);
            value = result?.Nickname ?? value;
          }
          if (errors.Nickname?.hasError) {
            runValidationTasks("Nickname", value);
          }
          setNickname(value);
        }}
        onBlur={() => runValidationTasks("Nickname", Nickname)}
        errorMessage={errors.Nickname?.errorMessage}
        hasError={errors.Nickname?.hasError}
        {...getOverrideProps(overrides, "Nickname")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={Bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Nickname,
              Bio: value,
              ImageUrl,
            };
            const result = onChange(modelFields);
            value = result?.Bio ?? value;
          }
          if (errors.Bio?.hasError) {
            runValidationTasks("Bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("Bio", Bio)}
        errorMessage={errors.Bio?.errorMessage}
        hasError={errors.Bio?.hasError}
        {...getOverrideProps(overrides, "Bio")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={ImageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Nickname,
              Bio,
              ImageUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.ImageUrl ?? value;
          }
          if (errors.ImageUrl?.hasError) {
            runValidationTasks("ImageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("ImageUrl", ImageUrl)}
        errorMessage={errors.ImageUrl?.errorMessage}
        hasError={errors.ImageUrl?.hasError}
        {...getOverrideProps(overrides, "ImageUrl")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || personalityModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || personalityModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
