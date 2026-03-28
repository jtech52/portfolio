import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './config';

const PROJECTS_COLLECTION = 'project';
const PROJECTS_FALLBACK_COLLECTION = 'projects';
const MESSAGES_COLLECTION = 'messages';

const toDateValue = (value) => {
  if (!value) return 0;
  if (typeof value === 'number') return value;
  if (value?.toDate) return value.toDate().getTime();
  return 0;
};

const normalizeProject = (id, data) => ({
  id,
  title: data.title || 'Untitled Project',
  description: data.description || '',
  problem: data.problem || '',
  role: data.role || '',
  category: data.category || 'Website',
  technologies: Array.isArray(data.technologies) ? data.technologies : [],
  image: data.image || '',
  images: Array.isArray(data.images) && data.images.length ? data.images : [data.image || ''],
  liveLink: data.liveLink || '#',
  githubLink: data.githubLink || '#',
  featured: Boolean(data.featured),
  updatedAt: data.updatedAt || null,
});

export const getPublicProjects = async () => {
  if (!isFirebaseConfigured || !db) {
    return [];
  }

  let snapshot;
  try {
    snapshot = await getDocs(collection(db, PROJECTS_COLLECTION));
    if (snapshot.size === 0) {
      const legacySnapshot = await getDocs(collection(db, PROJECTS_FALLBACK_COLLECTION));
      snapshot = legacySnapshot;
    }
  } catch {
    snapshot = await getDocs(collection(db, PROJECTS_FALLBACK_COLLECTION));
  }

  const projects = snapshot.docs.map((item) => normalizeProject(item.id, item.data()));

  return projects.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return toDateValue(b.updatedAt) - toDateValue(a.updatedAt);
  });
};

export const saveContactMessage = async (payload) => {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured.');
  }

  await addDoc(collection(db, MESSAGES_COLLECTION), {
    ...payload,
    status: 'new',
    createdAt: serverTimestamp(),
  });
};
