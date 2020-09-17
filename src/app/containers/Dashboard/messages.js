import { defineMessages } from 'react-intl';
const scope = 'app.containers.dashboard';

export default defineMessages({
  metatitle: {
    id: `${scope}.meta.title`,
    defaultMessage: 'Dashboard',
  },
  metaDescription: {
    id: `${scope}.meta.description`,
    defaultMessage: 'There was an error while executing the action. {detail}',
  },
});
