
import GhostAdminAPI from '@tryghost/admin-api'

const admin = new GhostAdminAPI({
  url: 'https://wormwood-saga.ghost.io',
  key: process.env.GHOST_ADMIN_API_KEY,
  version: 'v5.1.1'
});

export function addMember(email, name) {
    return admin.members.add(
        { email, name },
        { send_email: true, email_type: 'signin' });
}