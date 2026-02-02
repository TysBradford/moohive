"use client";

import { useState, FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import type { WaitlistFormProps, FormErrors, WaitlistFormData } from "@/types/waitlist";

function validateForm(data: WaitlistFormData): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  return errors;
}

export function WaitlistForm({
  source,
  successMessage = "You're on the list! We'll be in touch soon."
}: WaitlistFormProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit
    setIsSubmitting(true);

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("waitlist")
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          source,
        });

      if (error) {
        // Handle duplicate email
        if (error.code === "23505") {
          setErrors({ email: "This email is already on the waitlist" });
        } else {
          setErrors({ submit: "Something went wrong. Please try again." });
        }
        return;
      }

      // Success
      setIsSuccess(true);
    } catch (err) {
      setErrors({ submit: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-4">
        <p className="text-lg text-stone-900 font-medium">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Name input */}
        <div className="flex-1">
          <label htmlFor={`name-${source}`} className="sr-only">
            Your name
          </label>
          <input
            id={`name-${source}`}
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={isSubmitting}
            className={`w-full px-4 py-3 bg-white border rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-colors ${
              errors.name ? "border-red-500" : "border-stone-200"
            } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? `name-error-${source}` : undefined}
          />
          {errors.name && (
            <p id={`name-error-${source}`} className="mt-1 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email input */}
        <div className="flex-1">
          <label htmlFor={`email-${source}`} className="sr-only">
            Your email
          </label>
          <input
            id={`email-${source}`}
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={isSubmitting}
            className={`w-full px-4 py-3 bg-white border rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-colors ${
              errors.email ? "border-red-500" : "border-stone-200"
            } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? `email-error-${source}` : undefined}
          />
          {errors.email && (
            <p id={`email-error-${source}`} className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-6 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isSubmitting ? "Joining..." : "Join the waitlist"}
        </button>
      </div>

      {/* General error message */}
      {errors.submit && (
        <p className="mt-3 text-sm text-red-500 text-center">{errors.submit}</p>
      )}
    </form>
  );
}
