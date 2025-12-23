// api.js - handles contact form submission
export function initApi({ firebaseApp, db }) {
  window.api = { db };
}

// Example: store contact messages in Firestore
export async function submitMessage(data) {
  const { db } = window.api;
  await db.collection('messages').add({
    ...data,
    timestamp: new Date()
  });
}
