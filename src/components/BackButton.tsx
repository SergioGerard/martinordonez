"use client"
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  return (
    <div>
      <Button 
        className="me-10" 
        variant="outline" 
        size="icon" 
        onClick={() => window.history.back()}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    </div>
  );
}