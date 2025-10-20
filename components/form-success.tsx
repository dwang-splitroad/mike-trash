"use client"

import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormSuccessProps {
  title: string
  message: string
  onClose?: () => void
}

export function FormSuccess({ title, message, onClose }: FormSuccessProps) {
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

        {/* Success icon */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg">
              <CheckCircle className="h-10 w-10 text-white" strokeWidth={2.5} />
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
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
            >
              Got it!
            </Button>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-1 -left-1 w-20 h-20 bg-green-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  )
}

