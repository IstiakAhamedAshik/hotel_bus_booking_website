const { z } = require("zod");

export const orderSchema = z.object({
    model: z.string().min(1, "Model is required"),
    caseType: z.enum(["glass", "hard"], "Case type is required"),
    name: z.string().min(1, "Name is required").regex(/^[A-Za-z\s]+$/, "Name must contain only letters"),
    phone: z.string().length(11, "Phone number must be 11 digits"),
    password: z.string().min(8, "Password must be at least 8 digits long").optional(),
    confirmPassword: z.string().min(8, "Password must be at least 8 digits long").optional(),
    address: z.string().min(1, "Address is required"),
    division: z.string().min(1, "Division is required"),
    district: z.string().min(1, "District is required"),
    // deliveryLocation: z.enum(["Inside Dhaka", "Outside Dhaka"], "Select delivery location"),
    paymentMethod: z.enum(["cod", "bkash"], "Select payment method"),
    productName: z.string().min(1, "Product name is required"),
    price: z.number().min(1, "Price is required"),
    productImage: z.string().min(1, "Product image is required").url(),
    note: z.string().min(1, "Product image is required").max(200, "Note must be less than 200 characters").optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});;