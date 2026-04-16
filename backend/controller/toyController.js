import Toy from '../models/Toy';
import dbConnect from '../dbConfig/db';

export const addToy = async (data) => {
  await dbConnect();
  const toy = new Toy(data);
  return await toy.save();
};

export const getToys = async () => {
  await dbConnect();
  return await Toy.find({}).sort({ createdAt: -1 });
};

// ── NEW: single toy ──────────────────────────────────────────
export const getToyById = async (id) => {
  await dbConnect();
  return await Toy.findById(id);
};

export const updateToy = async (id, body) => {
  await dbConnect();
  const { title, category, brand, stock, description, gender, age, tags, images } = body;

  return await Toy.findByIdAndUpdate(
    id,
    {
      title, category, brand,
      stock: Number(stock) || 0,
      description, gender, age,
      tags: tags || [],
      ...(images?.length > 0 ? { images } : {}),
    },
    { new: true, runValidators: true }
  );
};

export const deleteToy = async (id) => {
  await dbConnect();
  return await Toy.findByIdAndDelete(id);
};