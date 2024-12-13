"use server";

import { db } from "./firebaseConfig";
import {
  getDocs,
  query,
  where,
  deleteDoc,
  addDoc,
  collection,
  deleteField,
  doc,
  updateDoc,
} from "firebase/firestore";

import { redirect } from "next/navigation";

const addPost = async (formData) => {
  const collectionRef = collection(db, "news");

  await addDoc(collectionRef, {
	category: formData.get("category"),
    url: formData.get("url"),
    imagen: formData.get("imagen"),
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    date: formData.get("date"),
    body: formData.get("body"),
  });

  redirect(`/admin`);
};

const updatePost = async (postId, formData) => {
  const docRef = doc(db, "news", postId);

  await updateDoc(docRef, {
	category: formData.get("category"),
    url: formData.get("url"),
    imagen: formData.get("imagen"),
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    date: formData.get("date"),
    body: formData.get("body"),
  });

  redirect(`/admin`);
};

const deletePost = async (postId) => {
  const docRef = doc(db, "news", postId);
  await deleteDoc(docRef);
  redirect("/admin");
};

const listPosts = async () => {
  const collectionRef = collection(db, "news");
  const docRef = await getDocs(collectionRef);

  const news = docRef.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return news;
};

const getPostByUrl = async (url) => {
  const collectionRef = collection(db, "news");
  const q = query(collectionRef, where("url", "==", url));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    throw new Error(`No document found with the URL: ${url}`);
  }

  return querySnapshot.docs[0].data();
};

const authenticateUser = async (user, password) => {
  const collectionRef = collection(db, "users");
  const q = query(
    collectionRef,
    where("user", "==", user),
    where("password", "==", password)
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return false;
  }
  return querySnapshot.docs[0].data();
};

export {
  addPost,
  updatePost,
  deletePost,
  listPosts,
  getPostByUrl,
  authenticateUser,
};
