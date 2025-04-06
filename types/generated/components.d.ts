import type { Schema, Struct } from '@strapi/strapi';

export interface ParticipantEmail extends Struct.ComponentSchema {
  collectionName: 'components_participant_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    email: Schema.Attribute.Email;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'participant.email': ParticipantEmail;
    }
  }
}
