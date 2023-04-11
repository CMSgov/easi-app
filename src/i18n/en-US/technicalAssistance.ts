const technicalAssistance = {
  heading: 'Technical assistance requests',
  subheading:
    'Request help or feedback for your system, or ask the TRB for other technical assistance.',
  introText:
    'The CMS Technical Review Board (TRB) is a technical assistance resource for project teams across the agency at all stages of their system’s life cycle. It offers consultations and reviews on an ongoing or one-off basis, allowing project teams to consult with a cross-functional team of technical advisors. It also provides guidance to project teams on adhering to CMS technical standards and leveraging existing technologies.',
  infoBox: {
    text: [
      'You can make a request to:',
      'Requests are usually reviewed and have TRB consult sessions scheduled within a week.'
    ],
    list: [
      'ask for help with a technical problem',
      'review potential solutions or ideas with the TRB and other SMEs',
      'schedule an ongoing cadence of technical consultations',
      'consult with SMEs from across the agency',
      'consult with the TRB about CMS guidelines and standards',
      'request research or information about a particular technical topic'
    ]
  },
  questions:
    'If you have any questions, you may reach the TRB team at <1>cms-trb@cms.hhs.gov</1>.',
  nextStep: 'Start a new request',
  adminInfoBox: {
    heading: 'Looking for the TRB Team page?',
    text:
      'Go to <1>Admin Home</1> to review, assign, and manage incoming and existing technical assistance requests.'
  },
  editsRequested: {
    alert:
      'The TRB has requested edits to your initial request form. Please make any necessary changes and re-submit your form.',
    viewFeedback: 'View feedback'
  },
  adminAction: 'Admin Action',
  requestNotes: {
    text: 'note{{-plural}} about this request',
    viewNotes: 'View notes',
    addNote: 'Add a note'
  },
  adviceLetter: {
    introText:
      'The advice letter is sent to the requester after the consult is complete. It outlines any outcomes, advice, recommendations, and next steps that the TRB has for this request.',
    noAdviceLetter:
      'There is no advice letter for this request yet. Once the consult date has passed, you may create an advice letter for this request.',
    downloadAsPdf: 'Download advice letter as PDF',
    sendDate: 'Send date',
    notYetSent: 'Not yet sent',
    whatWeHeard: 'What we heard',
    meetingSummary: 'Meeting summary',
    whatWeRecommend: 'What we recommend',
    resources: 'Resources',
    nextSteps: 'Next steps',
    notSpecified: 'Not specified yet',
    followup: 'Should the team return for a follow-up session?'
  },
  requiredFields:
    'Fields marked with an asterisk ( <red>*</red> ) are required.',
  adviceLetterForm: {
    heading: 'Advice letter',
    description:
      'Document any outcomes, advice, findings, recommendations, or next steps that the TRB has for this request.',
    text:
      'After submitting this form, the requester will recieve an automatic notification letting them know their advice letter is available.',
    returnToRequest: 'Save and return to request',
    steps: [
      {
        name: 'What we heard',
        description:
          'Provide a brief but detailed summary of the purpose of the session, what was discussed or presented, and any other meeting details of note.'
      },
      {
        name: 'What we recommend',
        description:
          'Add recommendations for the project team. Provide a title, description, and any useful resources for each recommendation.'
      },
      {
        name: 'Next steps',
        description:
          'Add any additional next steps the team should take, and mark whether they should return to the TRB for a follow-up session.'
      },
      {
        name: 'Internal review',
        longName: 'Check your work and request an internal review'
      },
      {
        name: 'Check and send',
        longName:
          'Check the content of your advice letter and send it to the requester',
        description:
          'Review the notes from your TRB team members and incorporate any feedback into the advice letter. When you are ready, send it to the requester, project team, and any other recipients you would like to include.'
      }
    ],
    meetingSummary: 'Meeting summary',
    addRecommendation: 'Add a recommendation',
    addAnotherRecommendation: 'Add another recommendation',
    noRecommendations:
      'No recommendations have been added yet. Use the button above to add one, or click next if you have no recommendations to add.',
    continueWithoutAdding: 'Continue without adding recommendations',
    addResourceLink: 'Add a resource link',
    addAnotherResourceLink: 'Add another resource link',
    returnToAdviceLetter:
      'Don’t add a recommendation and return to advice letter',
    editRecommendation: 'Edit recommendation',
    removeRecommendation: 'Remove recommendation',
    nextSteps: 'Next steps',
    isFollowupRecommended: 'Should the team return for a follow-up session?',
    followupYes: 'Yes, a follow-up is recommended',
    notNecessary: 'Not necessary',
    followupHelpText: 'Examples: in 6 months, when development is complete',
    error:
      'There was an issue {{action}} your {{type}}. Please try again, and if the problem persists, try again later.',
    recommendationSuccess:
      'Your recommendation was added to this advice letter.',
    modal: {
      title: 'Confirm you want to remove this recommendation.',
      text:
        'This action cannot be undone. If you remove this recommendation, all content related to it will be removed and will not be sent as a part of the advice letter.',
      removingTitle: 'Removing: {{title}}'
    }
  },
  emailRecipientFields: {
    label: 'Choose recipients <red>*</red>',
    selectedCount: '<bold>{{count}}</bold> recipients selected',
    copyTrbMailbox: 'Copy TRB Mailbox',
    projectTeamMember: 'Project team member',
    showMore: 'Show {{number}} more recipients',
    showFewer: 'Show {{number}} fewer recipients',
    addAnotherRecipient: 'Add another recipient',
    newRecipientName: 'New recipient name',
    newRecipientComponent: 'New recipient component',
    newRecipientRole: 'New recipient role',
    addRecipient: 'Add recipient',
    selectRecipientError: 'Please select a recipient'
  },
  statusLabels: {
    CANNOT_START_YET: 'Cannot start yet',
    COMPLETED: 'Completed',
    IN_PROGRESS: 'In progress',
    READY_FOR_REVIEW: 'Ready for review',
    READY_TO_START: 'Ready to start'
  },
  // Misc breadcrumb items
  breadcrumbs: {
    startTrbRequest: 'Start a TRB Request'
  },
  // Common button text
  button: {
    cancel: 'Cancel',
    back: 'Back',
    continue: 'Continue',
    update: 'Update',
    next: 'Next',
    save: 'Save',
    saveAndExit: 'Save and exit',
    start: 'Start',
    removeYourRequest: 'Remove your request'
  },
  table: {
    heading: 'My TRB Requests',
    header: {
      requestName: 'Request Name',
      submissionDate: 'Submission date',
      status: 'Request status',
      trbConsultDate: 'TRB consult date'
    },
    requestTypes: {
      NEED_HELP: 'System problem',
      BRAINSTORM: 'Idea feedback'
    },
    requestStatus: {
      NEW: 'New',
      DRAFT_REQUEST_FORM: 'Draft request form',
      REQUEST_FORM_COMPLETE: 'Request form complete',
      READY_FOR_CONSULT: 'Ready for consult',
      CONSULT_SCHEDULED: 'Consult scheduled',
      CONSULT_COMPLETE: 'Consult complete',
      DRAFT_ADVICE_LETTER: 'Draft advice letter',
      ADVICE_LETTER_IN_REVIEW: 'Advice letter in review',
      ADVICE_LETTER_SENT: 'Advice letter sent',
      FOLLOW_UP_REQUESTED: 'Follow-up requested'
    }
  },
  // Higher level errors
  errors: {
    checkFix: 'Please check and fix the following',
    fillBlank: 'Please fill in the blank',
    fillDate: 'Please fill in the date',
    includeExplanation: 'Please include an explanation',
    makeSelection: 'Please make a selection',
    selectFile: 'Please select a file',
    somethingWrong: 'Something went wrong.'
  },
  requestType: {
    heading: 'Start a technical assistance request',
    subhead: 'What is this request for?',
    goBack: 'Go back without starting a request',
    goBackWithoutChange: 'Go back without changing the request type',
    type: {
      NEED_HELP: {
        heading: 'I’m having a problem with my system',
        text:
          'The TRB can help you work through technical roadblocks that you are having with your system. Choose this option if:',
        list: [
          'you received a security finding, had an incident, or have a POA&M that you need help addressing',
          'you are having implementation difficulties and want guidance on how to proceed',
          'leadership has directed you to engage with the TRB because of an issue with your system'
        ]
      },
      BRAINSTORM: {
        heading: 'I have an idea and would like feedback',
        text:
          'The TRB now offers more casual conversations about specific topics, solutions, or ideas. Choose this option if:',
        list: [
          'your team is considering a new technical direction for future work',
          'you have a completely new idea for a system or service and would like to get feedback about it',
          'you want to brainstorm open-ended technical solutions'
        ]
      },
      FOLLOWUP: {
        heading: 'Follow-up or cadence consult',
        text:
          'Select this option if you have previously attended an IT Lounge or consultation with the TRB, and the TRB recommended a follow-up session as part of your next steps. Choose this option if:',
        list: [
          'the TRB recommended a follow-up session',
          'you have a regular cadence of engagements with the TRB and need to schedule the next one'
        ]
      },
      FORMAL_REVIEW: {
        heading: 'Formal design review',
        text:
          'Though the TRB has shifted to become more of a consultation and advice service, you can still request a more formal design review or readiness review. Choose this option if:',
        list: [
          'you have a architecture solution in mind and would like a review',
          'you are ready to go live and would like one final review with the TRB to make sure your team didn’t miss anything',
          'you would like a formal review of how your solution aligns with CMS’s Technical Reference Architecture (TRA)'
        ]
      }
    },
    whenOption: 'When should I choose this option?',
    additionalTrbServices: 'Additional TRB services',
    services: {
      other: 'Other (I don’t see what I’m looking for)'
    }
  },
  steps: {
    heading: 'Get technical assistance',
    changeRequestType: 'Change request type',
    description:
      'The CMS Technical Review Board (TRB) is a technical assistance resource for project teams across the agency at all stages of their system’s life cycle. It offers consultations and reviews on an ongoing or one-off basis, allowing project teams to consult with a cross-functional team of technical advisors. It also provides guidance to project teams on adhering to CMS technical standards and leveraging existing technologies.',

    info: {
      text: [
        'Using this process will allow you to:',
        'Requests are usually reviewed and have TRB consult sessions scheduled within a week.'
      ],
      list: [
        'ask for help with a technical problem',
        'consult with SMEs from across the agency',
        'consult with the TRB about CMS guidelines and standards'
      ]
    },
    stepsInTheProcess: 'Steps in the process',
    list: [
      {
        heading: 'Fill out the initial request form',
        text: [
          'Tell the Technical Review Board (TRB) what you need help with, including an overview of your question, problem, and/or solution. You may also upload any documentation that you think the TRB may find helpful (don’t worry, you’ll also be able to add documents later if you aren’t sure what to upload at this stage).',
          'This step helps TRB team members better understand what type of help you’re looking for and how best to assist you. It also lets the TRB prepare ahead of time so that you get more value from your consult session.'
        ]
      },
      {
        heading: 'Feedback from the initial review',
        text: [
          'The TRB will review your request form and decide if they need additional information from you. If not, they’ll direct you to go through the remaining steps as they schedule a consult session for you and/or your team.'
        ]
      },
      {
        heading: 'Prepare for the TRB consult session',
        text: [
          'Prepare by completing some or all of the following:',
          'Prepare for your TRB consult meeting (opens in new tab)'
        ],
        list: [
          'download the TRB presentation deck template and fill it out for your project',
          'upload any additional documentation that may help the TRB and SMEs better understand what you need help with',
          'confirm the list of attendees (if any) from your project team'
        ]
      },
      {
        heading: 'Attend the TRB consult session',
        text: [
          'A TRB team member will schedule a consult session for your project. Attendees could include:',
          'Consult sessions are usually scheduled as 1-hour sessions on Tuesday or Thursday.'
        ],
        list: [
          'Subject Matter Experts (SMEs) to provide additional advice and insight',
          'any additional project team members you’ve specified',
          '1 or more TRB team members'
        ]
      },
      {
        heading: 'Advice letter and next steps',
        text: [
          'The TRB will work with any SMEs who attended your consult session to compile a letter that documents any advice for your project team as well as any recommended next steps.'
        ]
      }
    ],
    back: 'Back',
    continue: 'Continue'
  },
  taskList: {
    heading: 'Task list',
    additionalHelp: 'Additional Help',
    helpLinksNewTab: 'All help links open in a new tab',
    stepsInvolved:
      'Steps involved in getting technical assistance from the TRB',
    prepareConsultMeeting: 'Prepare for the consult meeting',
    viewSubmittedTrbRequest: 'View submitted TRB Request (opens in a new tab)',
    editsRequestedWarning:
      'The TRB has requested edits to your initial request form. View their feedback and make any changes requested.',
    noFeedback:
      'The TRB had no feedback about your request form. If you have any questions, you may contact them at ',
    downloadTemplates: 'Download presentation templates',
    sendAnEmail: 'Send an email',
    uploadDocuments: 'Upload additional documents',
    reviewAttendeeList: 'Review attendee list',
    viewAttendeeList: 'View attendee list',
    prepareForTRB: 'Prepare for your TRB consult meeting (opens in a new tab)',
    trbConsultInfoHeading:
      'Your TRB consult session is scheduled for {{-date}} at {{-time}}',
    trbConsultInfo:
      'If this day or time does not work for you, or if you need to reschedule, please contact the TRB at ',
    trbConsultAttended:
      'You attended your project’s TRB consult session on {{-date}} at {{-time}}',
    viewAdviceLetter: 'View advice letter',
    taskList: [
      {
        heading: 'Fill out the initial request form',
        text:
          'Tell the Technical Review Board (TRB) about your question, problem, and/or solution. This helps TRB team members better understand what type of help you’re looking for and how best to assist you. It also lets the TRB prepare ahead of time so that you get more value from your consult session.'
      },
      {
        heading: 'Feedback from initial review',
        text:
          'The TRB will review your Intake Request form and decide if they need additional information from you. If not, they’ll direct you to go through the remaining steps.'
      },
      {
        heading: 'Prepare for the TRB consult session',
        text: 'Prepare by completing some or all of the following:',
        list: [
          'download the TRB presentation deck template and fill it out for your project',
          'upload any additional documentation requested from the TRB',
          'confirm the list of additional attendees (if any) from your project team'
        ]
      },
      {
        heading: 'Attend the TRB consult session',
        text:
          'A TRB team member will schedule a consult session for your project. Attendees could include Subject Matter Experts (SMEs) to provide additional advice and insight, any additional attendees you’ve specified from your team, and 1 or more TRB team members. Consult sessions are usually 1-hour sessions on Tuesday or Thursday.'
      },
      {
        heading: 'Advice letter and next steps',
        text:
          'The TRB will work with any SMEs who attended your consult session to compile a letter that documents any advice for your project team as well as any recommended next steps.'
      }
    ]
  },
  requestForm: {
    heading: 'TRB Request',
    description: [
      'Tell the Technical Review Board (TRB) what type of technical support you need. The information you provide on this form helps the TRB understand context around your request in order to offer more targeted help.',
      'After submitting this form, you will receive an automatic email from the TRB mailbox, and an TRB team member will reach out regarding next steps.'
    ],
    steps: [
      {
        name: 'Basic request details',
        adminDescription:
          'These basic request details were input by the requester to explain this technical assistance request.'
      },
      {
        name: 'Subject areas',
        description:
          'Select any and all subjects or topics that are relevant to your request or that you would like specific help with. This will help the TRB invite any additional subject matter experts (SMEs) who may be able to provide additional assistance.',
        adminDescription:
          'These subject areas were by the requester to be discussed during the consult session.'
      },
      {
        name: 'Attendees',
        description:
          'As the primary requester, please add your CMS component and role on the project. If you wish to, you may also add the names and contact information for any additional individuals who should be present at the TRB consult session. If you’re not sure who should be present, you may add attendees later or share the calendar invite before the meeting.',
        adminDescription:
          'These attendees were added by the requester and should be included as a part of the consult session.'
      },
      {
        name: 'Supporting documents',
        description:
          'Upload any documents relevant to your request. This could include documents such as presentation slide decks, concept papers, architecture diagrams, or other system information documents.',
        adminDescription:
          'These supporting documents were added by the requester and should be reviewed as needed for this request.'
      },
      {
        name: 'Check and submit',
        longName: 'Check your answers and submit your TRB Request'
      }
    ]
  },
  //
  // Form step components
  //
  basic: {
    labels: {
      name: 'Request name',
      component: 'Request component',
      projectInformation: 'Project Information',
      needsAssistanceWith: 'What do you need technical assistance with?',
      hasSolutionInMind: 'Do you have a solution in mind already?',
      proposedSolution: 'Describe your proposed solution.',
      whereInProcess: 'Where are you in your process?',
      hasExpectedStartEndDates:
        'Does your solution have an expected start and/or end date?',
      expectedStartDate: 'Expected start date',
      expectedEndDate: 'Expected end date',
      fundingSource: 'Funding source',
      fundingNumber: 'Funding number',
      fundingSourcesList: 'Funding sources',
      fundingSources: 'Which existing funding sources will fund this project?',
      collabAndGovernance: 'Collaboration and Governance',
      collabGroups:
        'Select any other OIT groups that you have met with or collaborated with.',
      collabGroupOther: 'Which other group(s)?',
      whenMeet: 'When did you meet with them?',
      collabGRBConsultRequested:
        'Did the GRT or GRB request that you consult with the TRB as a part of your IT Governance or LCID issuance process?',
      pleaseSpecify: 'Please specify'
    },
    hint: {
      component:
        'Let the TRB know which CMS component this request originates from.',
      needsAssistanceWith:
        'Describe the type of help you need from the TRB as well as the project purpose (the “why”) and objectives of your work, if applicable.',
      whereInProcess:
        'This helps the TRB provide the right type of support for your request.',
      whenMeet:
        'Please include specific date(s) if you are able. If not, specifying the month, quarter, or year is acceptable.',
      fundingSources:
        'If you are unsure, please get in touch with your Contracting Officer Representative (COR). If this will not use an existing funding source, skip this question.'
    },
    options: {
      select: 'Select',
      yes: 'Yes',
      no: 'No',
      other: 'Other',
      whereInProcess: {
        iHaveAnIdeaAndWantToBrainstorm: 'I have an idea and want to brainstorm',
        contractingWorkHasStarted:
          'Contracting work has started, but a contractor has not been selected',
        developmentHasRecentlyStarted: 'Development has recently started',
        developmentIsSignificantlyUnderway:
          'Development is significantly underway',
        theSystemIsInOperationAndMaintenance:
          'The system is in Operation and Maintenance',
        other: 'Other'
      },
      collabGroups: {
        security: 'Security',
        enterpriseArchitecture: 'Enterprise Architecture (EA)',
        cloud: 'Cloud',
        privacyAdvisor: 'Privacy',
        governanceReviewBoard:
          'Governance Review Board (GRB) or Governance Review Team (GRT)',
        other: 'Other'
      }
    },
    errors: {
      submit:
        'Your basic request details were not saved. Please try again. If the error persists, please try again at a later date.'
    },
    allFieldsMandatory: 'All fields are mandatory'
  },
  subject: {
    info:
      'Select any and all subjects or topics that are relevant to your request or that you would like specific help with. This will help the TRB invite any additional subject matter experts (SMEs) who may be able to provide additional assistance.',
    labels: {
      ACCESSIBILITY_COMPLIANCE: 'Access Control and Identity Management',
      ACCESS_CONTROL_AND_IDENTITY_MANAGEMENT: 'Accessibility Compliance',
      ASSISTANCE_WITH_SYSTEM_CONCEPT_DEVELOPMENT:
        'Assistance with System Concept Development',
      BUSINESS_INTELLIGENCE: 'Business Intelligence',
      CLOUD_MIGRATION: 'Cloud Migration',
      CONTAINERS_AND_MICROSERVICES: 'Containers and Microservices',
      DISASTER_RECOVERY: 'Disaster Recovery',
      EMAIL_INTEGRATION: 'Email Integration',
      ENTERPRISE_DATA_LAKE_INTEGRATION: 'Enterprise Data Lake Integration',
      FRAMEWORK_OR_TOOL_ALTERNATIVES: 'Framework or Tool Alternatives',
      OPEN_SOURCE_SOFTWARE: 'Open Source Software',
      PORTAL_INTEGRATION: 'Portal Integration',
      SYSTEM_ARCHITECTURE_REVIEW: 'TRA Clarifications and/or Applicability',
      SYSTEM_DISPOSITION_PLANNING: 'System Architecture Review',
      TECHNICAL_REFERENCE_ARCHITECTURE: 'System Disposition Planning',
      WEB_BASED_UI_SERVICES: 'Web Services and Web APIs',
      WEB_SERVICES_AND_APIS: 'Web-based UI Services'
    },
    otherSubjectAreas: 'Other subject areas',
    other: 'Other',
    otherHint:
      'Add a list of additional topics you’d like to discuss with the TRB. Please comma-separate your list if you are including multiple.',
    errors: {
      submit:
        'Your subject areas were not saved. Please try again. If the error persists, please try again at a later date.'
    },
    continueWithoutAdding: 'Continue without selecting subject areas'
  },
  attendees: {
    heading: 'Attendees',
    description:
      'Confirm the names and contact information for any additional individuals who should be present at the TRB consult session. If you wish to, you may also add more attendees. If you’re not yet sure who should be present, you can always share the calendar invite at a later date.',
    additionalAttendees: 'Additional attendees',
    addAnAttendee: 'Add an attendee',
    editAttendee: 'Edit attendee',
    addAnotherAttendee: 'Add another attendee',
    remove: 'Remove',
    cancel: 'Cancel',
    continueWithoutAdding: 'Continue without adding attendees',
    dontAddAndReturn: "Don't add and return to previous page",
    dontEditAndReturn: "Don't edit and return to previous page",
    attendeeHelpText:
      'Please provide the name, CMS component, and role for this attendee.',
    attendeeNameHelpText:
      'This field searches the EUA system. If you wish to invite a team member without an EUA ID, please contact the TRB at <1>cms-rb@cms.hhs.gov</1>.',
    alerts: {
      success: 'Your attendee has been added',
      successEdit: 'Your attendee has been edited',
      error:
        'There was an issue adding your attendee. Please try again, and if the problem persists, try again later.',
      invalidForm: 'Invalid attendees form'
    },
    modal: {
      heading: 'Confirm you want to remove {{-attendee}}.',
      description:
        'If you remove this attendee, they will no longer receive updates about this request or the TRB consult session.',
      remove: 'Remove attendee',
      cancel: 'Cancel'
    },
    fieldLabels: {
      requester: {
        euaUserId: 'Requester',
        component: 'Requester component',
        role: 'Requester role'
      },
      attendee: {
        create: {
          euaUserId: 'New attendee name',
          component: 'New attendee component',
          role: 'New attendee role',
          submit: 'Add attendee'
        },
        edit: {
          euaUserId: 'Attendee name',
          component: 'Attendee component',
          role: 'Attendee role',
          submit: 'Save'
        }
      }
    },
    contactRoles: {
      PRODUCT_OWNER: 'Product Owner',
      SYSTEM_OWNER: 'System Owner',
      SYSTEM_MAINTAINER: 'System Maintainer',
      CONTRACT_REP: 'Contracting Officer’s Representative (COR)',
      CLOUD_NAVIGATOR: 'Cloud Navigator',
      PRIVACY_ADVISOR: 'Privacy Advisor',
      CRA: 'CRA',
      OTHER: 'Other',
      UNKNOWN: 'Unknown'
    }
  },
  documents: {
    addDocument: 'Add a document',
    table: {
      header: {
        fileName: 'File name',
        documentType: 'Document type',
        uploadDate: 'Upload date',
        actions: 'Actions'
      },
      noDocument: 'No documents uploaded',
      view: 'View',
      remove: 'Remove',
      unavailable: 'Unavailable',
      virusScan: 'Virus scan in progress...'
    },
    upload: {
      title: 'Upload a document',
      subtitle:
        'Choose a document to upload, such as a presentation slide deck, concept paper, or other system information document.',
      documentUpload: 'Document upload',
      dragFile: 'Drag file here or choose from folder',
      selectedFile: 'Selected file',
      changeFile: 'Change file',
      whatType: 'What type of document are you uploading?',
      type: {
        ARCHITECTURE_DIAGRAM: 'Architecture diagram',
        PRESENTATION_SLIDE_DECK: 'Presentation slide deck',
        BUSINESS_CASE: 'Business Case',
        OTHER: 'Other'
      },
      whatKind: 'What kind of document is this?',
      toKeepCmsSafe:
        "To keep CMS safe, documents are scanned for viruses after uploading. If something goes wrong, we'll let you know.",
      uploadDocument: 'Upload document',
      dontUploadAndReturn: 'Don’t upload and return to previous page',
      error:
        'There was an issue uploading your document. Please try again, and if the problem persists, try again later.',
      success: 'Your document has been uploaded and is being scanned.'
    },
    continueWithoutAdding: 'Continue without adding documents',
    supportingDocuments: {
      heading: 'Supporting documents',
      info:
        'Upload any documents relevant to your request. This could include documents such as presentation slide decks, concept papers, architecture diagrams, or other system information documents.',
      addAnother: 'Add another document',
      adminInfo:
        'The requester has uploaded these documents as a part of this request. If the TRB needs additional documentation, contact the requester.',
      removeHeading: 'Confirm you want to remove {{-documentName}}.',
      removeInfo:
        'You will not be able to access this document after it is removed, and the TRB team will not be able to view it.',
      removeDocument: 'Remove document',
      cancel: 'Cancel',
      removeFail:
        'There was an issue removing your document. Please try again, and if the problem persists, try again later.',
      removeSuccess: 'You have successfully removed {{-documentName}}.'
    }
  },
  check: {
    submit: 'Submit request',
    edit: 'Edit this section',
    notYetSubmitted: 'Not yet submitted',
    requestType: 'Request type',
    noTopicsSelected: 'No topics selected',
    expectedStart: 'expected start',
    expectedGoLive: 'expected go live',
    and: 'and',
    noAttendees: 'There are no attendees',
    whatNext: {
      title: 'What happens next?',
      text: [
        'The TRB will review and get back to you with one of these outcomes:',
        'A TRB team member will get back to you within two business days.'
      ],
      list: [
        'schedule a consult session',
        'direct you to another governance process or team',
        'request additional information'
      ]
    }
  },
  done: {
    success: {
      heading: 'Success!',
      info:
        'Your TRB Request has been submitted. You will receive an automatic email, and a TRB team member will reach out shortly after regarding next steps.'
    },
    error: {
      heading: 'Something went wrong.',
      info:
        'Your TRB Request was not submitted. Please either return to the previous page and try again or try again at a later date.'
    },
    referenceNumber: 'Reference number',
    returnToTaskList: 'Return to task list',
    backToTrbRequest: 'Back to TRB Request'
  },
  viewSubmitted: {
    heading: 'View submitted Technical Assistance Request'
  },
  requestFeedback: {
    heading: 'Feedback about your request',
    viewFeedback: 'View feedback',
    date: 'Date',
    from: 'Feedback from',
    returnToForm: 'Return to request form',
    returnToTaskList: 'Return to task list',
    adminInfo:
      'A history of feedback sent to the requester. The requester will receive a notification any time you add additional feedback to their request.',
    noFeedbackAlert: 'No feedback has been added for this request.'
  },
  adminHome: {
    breadcrumb: 'Request {{trbRequestId}}',
    requestType: 'Request type',
    requester: 'Requester',
    submissionDate: 'Submission Date',
    status: 'Status',
    requestStatuses: {
      OPEN: 'Open',
      CLOSED: 'Closed'
    },
    taskStatuses: {
      formStatus: {
        READY_TO_START: 'Ready to start request form',
        IN_PROGRESS: 'Draft request form',
        COMPLETED: 'Request form completed'
      },
      feedbackStatus: {
        CANNOT_START_YET: 'Request form completed',
        READY_TO_START: 'Ready to start feedback',
        EDITS_REQUESTED: 'Feedback edits requested',
        IN_REVIEW: 'Feedback in review',
        COMPLETED: 'Feedback completed'
      },
      consultPrepStatus: {
        CANNOT_START_YET: 'Feedback completed',
        READY_TO_START: 'Ready to start consult prep',
        COMPLETED: 'Consult prep completed'
      },
      attendConsultStatus: {
        CANNOT_START_YET: 'Consult prep completed',
        READY_TO_SCHEDULE: 'Ready for consult',
        SCHEDULED: 'Consult scheduled',
        COMPLETED: 'Consult complete'
      },
      adviceLetterStatus: {
        CANNOT_START_YET: 'Consult complete',
        IN_PROGRESS: 'Draft advice letter',
        READY_FOR_REVIEW: 'Advice letter in review',
        READY_TO_START: 'Consult complete',
        COMPLETED: 'Advice letter sent'
      }
    },
    consultDetails: 'Consult meeting details',
    dateTime: 'Date and time',
    addDateTime: 'Add date and time',
    assignLead: 'Assign a TRB Lead',
    consultDate: '{{-date}} at {{-time}}',
    sendEmail: 'Send an email',
    change: 'Change',
    representative: 'TRB representatives',
    formAndDocs: 'Forms and documents',
    initialRequest: 'Initial request form',
    adviceLetter: 'Advice letter',
    completedBy: 'Completed by requester',
    toBeCompleted: 'To be completed by TRB',
    lastUpdated: 'Last updated',
    view: 'View',
    viewAdvice: 'View advice letter',
    startAdvice: 'Start advice letter',
    notStarted: 'Not started',
    supportingDocs: 'Supporting documents',
    docInfo:
      'There is <bold>{{docCount}}</bold> additional document uploaded as a part of this request.',
    docInfoPlural:
      'There are <bold>{{docCount}}</bold> additional documents uploaded as a part of this request.',
    reviewInitialRequest:
      'Please review the initial request form before setting a date and time in EASi.',
    viewDocs: 'View documents',
    open: 'Open',
    closed: 'Closed',
    trbLead: 'TRB Lead',
    notAssigned: 'Not assigned',
    assign: 'Assign',
    subnav: {
      back: 'Back to All Requests',
      requestHome: 'Request home',
      initialRequestForm: 'Initial request form',
      supportingDocuments: 'Supporting documents',
      feedback: 'Feedback',
      adviceLetter: 'Advice letter',
      notes: 'Notes'
    },
    byNameOnDate: 'by {{name}} on {{date}}'
  },
  adminTeamHome: {
    description:
      'From EASi’s TRB home, you can review, assign, and manage incoming and existing TRB support requests.',
    jumpToExistingRequests: 'Jump to existing requests',
    downloadAllTrbRequests: 'Download all TRB requests (csv)',
    switchToDifferentAdminView: 'Swich to a different admin view',
    submitYourOwnRequest: 'Submit your own technical assistance request',
    newRequests: {
      heading: 'New requests',
      description:
        'Review these recently submitted technical assistance requests and assign a TRB lead.',
      downloadCsv: 'Download all new requests (csv)',
      noRequests:
        'There are currently no new requests. The TRB Mailbox will receive an email notification when a new request is submitted, or you can check back here later.'
    },
    existingRequests: {
      heading: 'Existing requests',
      description:
        'Use the tabs below to navigate between closed requests and those that are open and have been reviewed and assigned.',
      downloadCsv: 'Download all existing requests (csv)',
      tabs: {
        label: 'Request Repository Table Navigation',
        open: {
          name: 'Open Requests'
        },
        closed: {
          name: 'Closed Requests'
        }
      },
      noRequests: {
        open:
          'There are currently no open requests that are in progress. Review any new requests above and assign a TRB lead.',
        closed:
          'There are currently no closed requests. Continue to work on open requests. When they are closed, they will appear here.'
      }
    },
    actions: {
      assignLead: 'Assign lead',
      addDate: 'Add date'
    }
  },
  actionRequestEdits: {
    heading: 'Action: request edits',
    description:
      'Use this action if the TRB needs additional information about the request in order to proceed with scheduling a consult session. Specify the edits or additional information needed from the requester.',
    fieldsMarkedRequired:
      'Fields marked with an asterisk ( <red>*</red> ) are required.',
    hint:
      'Provide feedback to the requester about the content of their initial request form or supporting documents. The requester will see this feedback in their task list and in the email you send.',
    label:
      'What type of edits are needed prior to scheduling the consult session?',
    notificationTitle: 'Notification email',
    notificationDescription:
      'A notification email will be sent to the requester when you complete this action. If you would like, you may also send a copy to the TRB mailbox and/or to any additional attendees.',
    submit: 'Complete action',
    error:
      'There was an issue completing the request edits action. Please try again, and if the problem persists, try again later.',
    success:
      'Action completed. You have successfully requested edits to this request.',
    cancelAndReturn: 'Cancel action and return to request'
  },
  actionReadyForConsult: {
    heading: 'Action: ready for consult',
    description:
      'Add any feedback you have for the requester based on your review of their initial intake form. If the consult session has already been scheduled, you may also add that information here.',
    label: 'Feedback for requester',
    error:
      'There was an issue completing the ready for consult action. Please try again, and if the problem persists, try again later.',
    success:
      'Action completed. This request is now ready to schedule a consult session.'
  },
  actionScheduleConsult: {
    heading: 'Action: schedule a TRB consult session',
    description:
      'Once you have confirmed availability with the requester and project team, set a date and time for the consult session for this request.',
    labels: {
      meetingDate: 'Meeting date',
      meetingTime: 'Meeting time',
      notes: 'Notes'
    },
    hints: {
      meetingDate: 'mm/dd/yyyy',
      meetingTime: 'hh:mm pm'
    },
    error:
      'There was an issue scheduling the consult session. Please try again, and if the problem persists, try again later.',
    success:
      'The date for this request’s TRB consult session is set for {{date}} at {{time}}.',
    alert:
      'If you have not already done so, you must also send a calendar invite with meeting details and a video conferencing link. EASi does not currently integrate with calendar tools and will not send a calendar invite for you.',
    breadcrumb: 'Schedule a consult'
  },
  notes: {
    description:
      'Admin notes are internal TRB notes to communicate with other TRB members about this request. They will not be visible to the requester.',
    addNoteDescription:
      'Add a note about this request for other TRB team members.',
    addNote: 'Add a note',
    notes: 'Notes',
    allNotes: 'All notes',
    viewMore: 'View more notes',
    noNotes:
      'No TRB member has added notes for this request yet. If you’d like to add a note, use the button above.',
    date: 'Date',
    author: 'Note author',
    about: 'What is this note about?',
    save: 'Save',
    saveNote: 'Save note',
    cancel: 'Cancel',
    status: {
      success: 'Your note has been added.',
      error:
        'There was a problem saving your note. Please try again. If the error persists, please try again at a later date.'
    },
    labels: {
      category: 'What is this note about?',
      noteText: 'Note'
    },
    categories: {
      ADVICE_LETTER: 'Advice letter',
      CONSULT_SESSION: 'Consult session',
      GENERAL_REQUEST: 'General note about this request',
      INITIAL_REQUEST_FORM: 'Initial request form',
      SUPPORTING_DOCUMENTS: 'Supporting documents'
    }
  },
  actionCloseRequest: {
    heading: 'Action: close request',
    description:
      'Use this action if work on this request is complete, or if it is not a TRB request.',
    breadcrumb: 'Close request',
    label: 'Why did you close this request?',
    hint:
      'Give a brief explanation, especially if you closed this request without sending an advice letter.',
    submit: 'Complete action and close request',
    success: 'Action complete. This request is now closed.',
    error:
      'There was an issue closing this request. Please try again, and if the problem persists, try again later.',
    confirmModal: {
      heading: 'Are you sure you want to close this request?',
      text: [
        'Closing this request will:',
        'send a notification email to the TRB mailbox',
        'prevent any additional updates to the request',
        'set the request status to closed',
        'You may continue to add notes to closed requests, and you may reopen the request at any time.'
      ],
      close: 'Close request',
      cancel: 'Cancel'
    }
  },
  actionReopenRequest: {
    heading: 'Action: re-open request',
    description:
      'Reopen this request if additional work needs to be completed or if it was closed in error.',
    label: 'Why are you re-opening this request?',
    hint: 'Give a brief explanation.',
    submit: 'Complete action and re-open request',
    success: 'Action complete. This request is now open.',
    error:
      'There was an issue re-opening this request. Please try again, and if the problem persists, try again later.'
  },
  assignTrbLeadModal: {
    heading: 'Assign an Admin Lead',
    label: 'Select a Lead from the TRB Team:',
    assignMyself: 'Assign myself',
    submit: 'Assign',
    success: '{{name}} is assigned as the TRB lead for this request.',
    error:
      'There was an issue assigning a TRB lead for this request. Please try again, and if the problem persists, try again later.'
  }
};

export default technicalAssistance;
