// src/models/product.model.ts
import { Schema, Document } from 'mongoose';

export interface Product extends Document {
    name: string;
    description: string;
    price: number;
}

export const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0 },
    image: { type: String },


});

