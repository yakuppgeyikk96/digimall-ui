import { fbStorage } from "@/config/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export const getAllImageUrlsForProduct = async (productId: string) => {
  try {
    const listRef = ref(fbStorage, `/${productId}`); // Product ID ile klasöre referans oluştur
    const res = await listAll(listRef); // Klasördeki tüm dosyaları listele

    const urls = await Promise.all(
      res.items.map((itemRef) => getDownloadURL(itemRef)) // Her dosyanın URL'sini al
    );

    return urls; // Tüm URL'leri döndür
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    throw error;
  }
};
