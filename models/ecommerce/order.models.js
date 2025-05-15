import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Product is required']
    }
}
)

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    orderItems: {
        type: [orderItemsSchema], //another way to define array of objects in terms of schema
        required: [true, 'Order Items are required']
    },
    shippingAddress: { //here we also define the schema for shipping address as we are using it in the orderItems schema
        address: {
            type: String,
            required: [true, 'Address is required']
        },
        city: {
            type: String,
            required: [true, 'City is required']
        },
        postalCode: {
            type: String,
            required: [true, 'Postal Code is required']
        },
        country: {
            type: String,
            required: [true, 'Country is required']
        }
    },
    status: {
        type: String,
        enum: ['PENDING', 'SHIPPED', 'DELIVERED'], //enum means a list of possible values for this field,
        default: 'PENDING' //default value for this field
    }
}, {
    timestamps: true
}
)

export const Order = mongoose.model('Order', orderSchema)