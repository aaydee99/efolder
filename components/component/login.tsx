'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function Login() {
  const [role, setRole] = useState("");

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here

    if (role === "Teacher") {
      window.location.href = "/teacher";
    } else if (role === "Coordinator") {
      window.location.href = "/coordinator";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to eFOLDER</h1>
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <Button 
              variant="outline" 
              className={`mr-2 ${role === "Admin" ? "bg-gray-200" : ""}`}
              onClick={() => handleRoleSelection("Admin")}
            >
              Admin
            </Button>
            <Button 
              variant="outline" 
              className={`mr-2 ${role === "Teacher" ? "bg-gray-200" : ""}`}
              onClick={() => handleRoleSelection("Teacher")}
            >
              Teacher
            </Button>
            <Button 
              variant="outline" 
              className={role === "Coordinator" ? "bg-gray-200" : ""}
              onClick={() => handleRoleSelection("Coordinator")}
            >
              Coordinator
            </Button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <div className="text-center mt-4">
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
