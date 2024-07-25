// MessageService.js
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const saveMessage = async (name, email, message) => {
  try {
    await addDoc(collection(db, 'messages'), {
      name,
      email,
      message,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error saving message: ', error);
    throw error;
  }
};

export { saveMessage };
