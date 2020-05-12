import React from 'react';
import { Field, FormikProps } from 'formik';
import Label from 'components/shared/Label';
import TextField from 'components/shared/TextField';
import FieldGroup from 'components/shared/FieldGroup';
import FieldErrorMsg from 'components/shared/FieldErrorMsg';
import { BidnessCaseModel } from 'types/bidnessCase';
import flattenErrors from 'utils/flattenErrors';

type GeneralRequestInfoProps = {
  formikProps: FormikProps<BidnessCaseModel>;
};
const GeneralRequestInfo = ({ formikProps }: GeneralRequestInfoProps) => {
  const { errors } = formikProps;
  const flatErrors = flattenErrors(errors);
  const allowedPhoneNumberCharacters = /[\d- ]+/g;

  return (
    <div className="grid-container">
      <h1 className="font-heading-xl">General request information</h1>
      <p className="line-height-body-6">
        Make a first draft of the various solutions you’ve thought of and the
        costs involved to build or buy them. Once you have a draft bidness case
        ready for review, send it to the Governance Review Admin Team who will
        ensure it is ready to be presented at the Governance Review Team (GRT)
        Meeting.
      </p>
      <div className="tablet:grid-col-9 margin-bottom-7">
        <FieldGroup
          scrollElement="requestName"
          error={!!flatErrors.requestName}
        >
          <Label htmlFor="BidnessCase-RequestName">Request Name</Label>
          <FieldErrorMsg>{flatErrors.requestName}</FieldErrorMsg>
          <Field
            as={TextField}
            error={!!flatErrors.requestName}
            id="BidnessCase-RequestName"
            maxLength={50}
            name="requestName"
          />
        </FieldGroup>

        <FieldGroup
          scrollElement="requester.name"
          error={!!flatErrors['requester.name']}
        >
          <Label htmlFor="BidnessCase-RequesterName">Requester</Label>
          <FieldErrorMsg>{flatErrors['requester.name']}</FieldErrorMsg>
          <Field
            as={TextField}
            error={!!flatErrors['requester.name']}
            id="BidnessCase-RequesterName"
            maxLength={50}
            name="requester.name"
          />
        </FieldGroup>

        <FieldGroup
          scrollElement="bidnessOwner.name"
          error={!!flatErrors['bidnessOwner.name']}
        >
          <Label htmlFor="BidnessCase-BidnessOwnerName">Bidness Owner</Label>
          <FieldErrorMsg>{flatErrors['bidnessOwner.name']}</FieldErrorMsg>
          <Field
            as={TextField}
            error={!!flatErrors['bidnessOwner.name']}
            id="BidnessCase-BidnessOwnerName"
            maxLength={50}
            name="bidnessOwner.name"
          />
        </FieldGroup>

        <FieldGroup
          scrollElement="requester.phoneNumber"
          error={!!flatErrors['requester.phoneNumber']}
        >
          <Label htmlFor="BidnessCase-RequesterPhoneNumber">
            Requester Phone Number
          </Label>
          <FieldErrorMsg>{flatErrors['requester.phoneNumber']}</FieldErrorMsg>
          <div className="width-card-lg">
            <Field
              as={TextField}
              error={!!flatErrors['requester.phoneNumber']}
              id="BidnessCase-RequesterPhoneNumber"
              maxLength={20}
              name="requester.phoneNumber"
              match={allowedPhoneNumberCharacters}
            />
          </div>
        </FieldGroup>
      </div>
    </div>
  );
};

export default GeneralRequestInfo;
