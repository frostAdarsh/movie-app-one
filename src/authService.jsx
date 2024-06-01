import { auth, fireDB } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, query, where, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged as firebaseOnAuthStateChanged } from 'firebase/auth';

// Sign up function
const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Login function
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Save movie function
const saveMovie = async (movie) => {
  const moviesCollection = collection(fireDB, "movies");
  // Check for duplicate
  const q = query(moviesCollection, where('imdbID', '==', movie.imdbID));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    await addDoc(moviesCollection, movie);
  } else {
    throw new Error('Movie already exists in the list');
  }
};

// Fetch movies function
const fetchMovies = async () => {
  const querySnapshot = await getDocs(collection(fireDB, "movies"));
  const movies = [];
  querySnapshot.forEach((doc) => {
    movies.push({ id: doc.id, ...doc.data() });
  });
  return movies;
};

// Delete a movie
const deleteMovie = async (id) => {
  await deleteDoc(doc(fireDB, 'movies', id));
};

// Auth state change function
const onAuthStateChanged = (callback) => {
  return firebaseOnAuthStateChanged(auth, callback);
};

export { signup, login, logout, onAuthStateChanged, saveMovie, fetchMovies, deleteMovie };
