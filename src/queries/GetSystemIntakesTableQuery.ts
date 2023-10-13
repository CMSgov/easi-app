import { gql } from '@apollo/client';

/**
 * For use on requests table
 *
 * Returns all system intakes that have a submitted intake request form
 */
export default gql`
  query GetSystemIntakesTable($openRequests: Boolean!) {
    systemIntakes(openRequests: $openRequests) {
      id
      euaUserId
      requestName
      status
      state

      # Uses requesterName and requesterComponent instead of full requester object
      # to prevent multiple calls to Okta
      requesterName
      requesterComponent

      businessOwner {
        name
        component
      }
      productManager {
        name
        component
      }
      isso {
        name
      }

      trbCollaboratorName
      oitSecurityCollaboratorName
      eaCollaboratorName

      existingFunding
      fundingSources {
        source
        fundingNumber
      }

      contract {
        hasContract
        contractor
        number
        startDate {
          day
          month
          year
        }
        endDate {
          day
          month
          year
        }
      }

      businessNeed
      businessSolution
      currentStage
      needsEaSupport
      grtDate
      grbDate

      lcid
      lcidScope
      lcidExpiresAt

      adminLead

      notes {
        id
        createdAt
        content
      }

      actions {
        id
        createdAt
      }

      hasUiChanges

      decidedAt
      submittedAt
      updatedAt
      createdAt
      archivedAt
    }
  }
`;