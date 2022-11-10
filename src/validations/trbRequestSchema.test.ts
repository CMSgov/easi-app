import { basicSchema, TrbRequestFormBasic } from './trbRequestSchema';

describe('TRB Basic Form schema validation', () => {
  const minimumRequiredForm = {
    name: 'Request Name',
    component: 'Center for Medicaid and CHIP Services',
    needsAssistanceWith: 'Needs assist',
    hasSolutionInMind: false,
    whereInProcess: 'I_HAVE_AN_IDEA_AND_WANT_TO_BRAINSTORM',
    hasExpectedStartEndDates: false,
    collabGroups: ['SECURITY'],
    collabDateSecurity: 'Fall 2021'
  };

  it('passes backend input validation', async () => {
    await expect(
      basicSchema.isValid(minimumRequiredForm)
    ).resolves.toBeTruthy();
  });

  it(`errors on an empty form`, async () => {
    await expect(basicSchema.isValid({})).resolves.toBeFalsy();
  });

  it.each(['whereInProcess', 'collabGroups'])(
    `errors on other values in enum based field: %s`,
    async inputKey => {
      let optionVal: any = 'buz';
      if (inputKey === 'collabGroups') {
        optionVal = [optionVal];
      }
      await expect(
        basicSchema.fields[inputKey as keyof TrbRequestFormBasic].isValid(
          optionVal
        )
      ).resolves.toBeFalsy();
    }
  );

  const freeTextDate = 'Q1 2021';

  it.each([
    {
      parent: { hasSolutionInMind: true },
      empty: {
        proposedSolution: ''
      },
      filled: {
        proposedSolution: 'solution'
      }
    },
    {
      parent: {
        collabGroups: ['SECURITY']
      },
      empty: {
        collabDateSecurity: ''
      },
      filled: {
        collabDateSecurity: freeTextDate
      }
    },
    {
      parent: {
        collabGroups: ['ENTERPRISE_ARCHITECTURE']
      },
      empty: {
        collabDateEnterpriseArchitecture: ''
      },
      filled: {
        collabDateEnterpriseArchitecture: freeTextDate
      }
    },
    {
      parent: {
        collabGroups: ['CLOUD']
      },
      empty: {
        collabDateCloud: ''
      },
      filled: {
        collabDateCloud: freeTextDate
      }
    },
    {
      parent: {
        collabGroups: ['PRIVACY_ADVISOR']
      },
      empty: {
        collabDatePrivacyAdvisor: ''
      },
      filled: {
        collabDatePrivacyAdvisor: freeTextDate
      }
    },
    {
      parent: {
        collabGroups: ['GOVERNANCE_REVIEW_BOARD']
      },
      empty: {
        collabDateGovernanceReviewBoard: ''
      },
      filled: {
        collabDateGovernanceReviewBoard: freeTextDate
      }
    },
    {
      parent: {
        collabGroups: ['OTHER']
      },
      empty: {
        collabDateOther: '',
        collabGroupOther: ''
      },
      filled: {
        collabDateOther: freeTextDate,
        collabGroupOther: 'other group'
      }
    }
  ])('validates conditional fields: %j', async ({ parent, empty, filled }) => {
    await expect(
      basicSchema.validate({
        ...minimumRequiredForm,
        ...parent,
        ...empty
      })
    ).rejects.toThrow('required field');

    await expect(
      basicSchema.isValid({
        ...minimumRequiredForm,
        ...parent,
        ...filled
      })
    ).resolves.toBeTruthy();
  });

  it('requires at least one expected start or end date', async () => {
    await expect(
      basicSchema.isValid({
        ...minimumRequiredForm,
        hasExpectedStartEndDates: true,
        expectedStartDate: freeTextDate,
        expectedEndDate: ''
      })
    ).resolves.toBeTruthy();
    await expect(
      basicSchema.isValid({
        ...minimumRequiredForm,
        hasExpectedStartEndDates: true,
        expectedStartDate: '',
        expectedEndDate: freeTextDate
      })
    ).resolves.toBeTruthy();
    await expect(
      basicSchema.isValid({
        ...minimumRequiredForm,
        hasExpectedStartEndDates: true,
        expectedStartDate: '',
        expectedEndDate: ''
      })
    ).resolves.toBeFalsy();
  });
});
