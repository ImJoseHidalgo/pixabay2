import { db } from "../firebase/firebaseConfig"

export const loadImgs = async(uid) => {
  const imgsSnap = await db.collection(`${uid}/pixabay2/favorites`).get();
  const imgs = [];

  imgsSnap.forEach(snapHijo => {
    imgs.push({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  });

  return imgs;
}