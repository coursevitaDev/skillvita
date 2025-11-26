"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface WaitlistFormProps {
  onSubmit?: () => void
}

export function WaitlistForm({ onSubmit }: WaitlistFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
  })

  const validateName = (name: string): string => {
    // Check if name is too short
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters"
    }
    
    // Check for sequential numbers (123, 234, 456, etc.)
    if (/\d{3,}/.test(name) || /012|123|234|345|456|567|678|789|890/.test(name)) {
      return "Name cannot contain sequential numbers"
    }
    
    // Check for repeated characters (aaa, bbb, 111, etc.)
    if (/(.)\1{3,}/.test(name)) {
      return "Name cannot contain too many repeated characters"
    }
    
    // Check for excessive repetition of same character patterns
    if (/(.{1,3})\1{3,}/.test(name)) {
      return "Name contains suspicious patterns"
    }
    
    // Check if name has at least one letter
    if (!/[a-zA-Z]/.test(name)) {
      return "Name must contain at least one letter"
    }
    
    // Check for excessive consecutive letters (more than 4 same letters)
    if (/([a-zA-Z])\1{4,}/i.test(name)) {
      return "Name cannot have too many consecutive same letters"
    }
    
    return ""
  }
  
  const validateEmail = (email: string): string => {
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address"
    }
    
    // Check for suspicious patterns in email
    const localPart = email.split('@')[0]
    
    // Check for sequential numbers in email
    if (/012|123|234|345|456|567|678|789/.test(localPart)) {
      return "Email contains suspicious number patterns"
    }
    
    // Check for too many repeated characters
    if (/(.)\1{4,}/.test(localPart)) {
      return "Email contains too many repeated characters"
    }
    
    // Check for common fake email patterns
    if (/^(test|fake|dummy|spam|trash|temp)/i.test(localPart)) {
      return "Please use a real email address"
    }
    
    return ""
  }
  
  const validateNumber = (number: string): string => {
    // Remove spaces, dashes, and parentheses for validation
    const cleanNumber = number.replace(/[\s\-()]/g, '')
    
    // Check if it contains only digits and optional + at start
    if (!/^\+?\d+$/.test(cleanNumber)) {
      return "Phone number can only contain digits"
    }
    
    // Check for minimum length
    if (cleanNumber.replace(/^\+/, '').length < 10) {
      return "Phone number must be at least 10 digits"
    }
    
    // Check for sequential numbers (1234567890, 0123456789, etc.)
    if (/0123456789|1234567890|0987654321|9876543210/.test(cleanNumber)) {
      return "Phone number cannot be sequential"
    }
    
    // Check for patterns like 111111, 222222, etc.
    if (/^\+?(\d)\1{9,}$/.test(cleanNumber)) {
      return "Phone number cannot be all the same digit"
    }
    
    // Check for excessive repetition (5+ same digits in a row)
    if (/(\d)\1{5,}/.test(cleanNumber)) {
      return "Phone number contains too many repeated digits"
    }
    
    return ""
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const numberError = validateNumber(formData.number)
    
    // Set errors
    setErrors({
      name: nameError,
      email: emailError,
      number: numberError,
    })
    
    // If any errors, don't submit
    if (nameError || emailError || numberError) {
      return
    }
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    localStorage.setItem("skillvita_form_submitted", "true")
    localStorage.setItem("skillvita_user_data", JSON.stringify(formData))
    setSubmitted(true)
    onSubmit?.()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  if (submitted) {
    return (
      <Card className="w-full max-w-md border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-primary">Thank You! 🎉</CardTitle>
          <CardDescription className="text-lg">
            You&apos;ve successfully joined the waitlist
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            We&apos;ll notify you at <span className="text-primary font-semibold">{formData.email}</span> when we launch.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md border-2 border-primary/30">
      <CardHeader className="text-center pb-6 border-b border-border">
        <CardTitle className="text-3xl text-primary">Join Today</CardTitle>
        <CardDescription className="text-base">
          Be the first to experience SkillVita
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
            {errors.number && (
              <p className="text-sm text-red-500">{errors.number}</p>
            )}
          </div>
          <Button type="submit" className="w-full" size="lg">
            Join Waitlist
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
