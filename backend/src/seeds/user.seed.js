import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
        email: "priya@chat.in",
        fullName: "Priya Sharma",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
        email: "neha@chat.in",
        fullName: "Neha Patel",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    },
    {
        email: "aishwarya@chat.in",
        fullName: "Aishwarya Singh",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aishwarya",
    },
    {
        email: "divya@chat.in",
        fullName: "Divya Gupta",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Divya",
    },
    {
        email: "kavita@chat.in",
        fullName: "Kavita Joshi",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita",
    },
    {
        email: "tanvi@chat.in",
        fullName: "Tanvi Reddy",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvi",
    },
    {
        email: "pooja@chat.in",
        fullName: "Pooja Malhotra",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
    },
    {
        email: "meera@chat.in",
        fullName: "Meera Iyer",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
    },

    // Male Users
    {
        email: "arjun@chat.in",
        fullName: "Arjun Kumar",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    },
    {
        email: "rahul@chat.in",
        fullName: "Rahul Verma",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    },
    {
        email: "vikram@chat.in",
        fullName: "Vikram Singh",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    },
    {
        email: "raj@chat.in",
        fullName: "Raj Mehta",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
    },
    {
        email: "deepak@chat.in",
        fullName: "Deepak Sharma",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak",
    },
    {
        email: "aman@chat.in",
        fullName: "Aman Gupta",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
    },
    {
        email: "rohit@chat.in",
        fullName: "Rohit Nair",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit",
    },
    {
        email: "suresh@chat.in",
        fullName: "Suresh Menon",
        password: "saurabh",
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh",
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();

        await User.insertMany(seedUsers);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// Call the function
seedDatabase();