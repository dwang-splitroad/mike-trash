"use client"

import { AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormErrorProps {
  title: string
  message: string
  onClose?: () => void
}

export function FormError({ title, message, onClose }: FormErrorProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-in zoom-in duration-300">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        )}

        {/* Error icon */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse opacity-75"></div>
            <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg">
              <AlertCircle className="h-10 w-10 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{message}</p>
          
          {onClose && (
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full font-semibold py-3 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Try Again
            </Button>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-1 -left-1 w-20 h-20 bg-red-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  )
}

