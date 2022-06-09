import GhostAdminAPI from '@tryghost/admin-api';

const admin = new GhostAdminAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: 'v5.2.2',
});

export function addMember(email, name) {
  return admin.members.add(
    { email, name },
    { send_email: true, email_type: 'signin' }
  );
}
