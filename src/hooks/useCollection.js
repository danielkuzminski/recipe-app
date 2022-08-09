import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

// hook to download documents from firestore
// c param stands for collection name
export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      const results = [];

      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    // clean up function invoke
    return () => unsub();
  }, [c]);
  return { documents };
};
