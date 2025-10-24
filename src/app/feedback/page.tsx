"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Star, AlertTriangle, CheckCircle, ArrowLeft, ArrowRight, Upload, Home } from "lucide-react";

type FeedbackType = "review" | "complaint" | null;

interface FormData {
  // Personal Information
  fullName: string;
  phoneNumber: string;
  dateOfVisit: string;
  departmentVisited: string;
  
  // Review fields
  overallExperience: number;
  cleanliness: number;
  staffFriendliness: number;
  waitingTime: number;
  qualityOfCare: number;
  wouldRecommend: boolean | null;
  likedMost: string;
  suggestions: string;
  
  // Complaint fields
  departmentConcerned: string;
  incidentDateTime: string;
  complaintDescription: string;
  staffInvolved: boolean | null;
  staffName: string;
  complaintSeriousness: string;
  desiredAction: string;
  supportingEvidence: File | null;
  
  // Consent
  agreedToTerms: boolean;
}

const departments = [
  "General Consultation",
  "Surgery",
  "Pharmacy",
  "Laboratory",
  "Emergency",
  "Cardiology",
  "Pediatrics",
  "Gynecology",
  "Orthopedics",
  "Dermatology",
  "Ophthalmology",
  "ENT",
  "Radiology",
  "Physiotherapy",
  "Other"
];

const complaintActions = [
  "Investigate",
  "Apology",
  "Service Correction",
  "Others"
];

const seriousnessLevels = [
  "Minor",
  "Moderate", 
  "Serious"
];

export default function FeedbackPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    dateOfVisit: "",
    departmentVisited: "",
    overallExperience: 0,
    cleanliness: 0,
    staffFriendliness: 0,
    waitingTime: 0,
    qualityOfCare: 0,
    wouldRecommend: null,
    likedMost: "",
    suggestions: "",
    departmentConcerned: "",
    incidentDateTime: "",
    complaintDescription: "",
    staffInvolved: null,
    staffName: "",
    complaintSeriousness: "",
    desiredAction: "",
    supportingEvidence: null,
    agreedToTerms: false,
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleInputChange("supportingEvidence", file);
  };

  const renderStars = (rating: number, onChange: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`text-2xl transition-colors ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            } hover:text-yellow-400`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFeedbackType(null);
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phoneNumber: "",
      dateOfVisit: "",
      departmentVisited: "",
      overallExperience: 0,
      cleanliness: 0,
      staffFriendliness: 0,
      waitingTime: 0,
      qualityOfCare: 0,
      wouldRecommend: null,
      likedMost: "",
      suggestions: "",
      departmentConcerned: "",
      incidentDateTime: "",
      complaintDescription: "",
      staffInvolved: null,
      staffName: "",
      complaintSeriousness: "",
      desiredAction: "",
      supportingEvidence: null,
      agreedToTerms: false,
    });
  };

  // Step 0: Welcome/Intro Section
  if (currentStep === 0 && !feedbackType) {
    return (
      <div className="min-h-screen bg-[#f4f9f9] py-16">
        <div className="ultramed-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-primary/10 p-4">
                  <MessageSquare className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">UltraMed Review & Complaint Form</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Thank you for taking the time to share your feedback. Your input helps us serve you better. 
                Please tell us about your experience below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer" 
                    onClick={() => setFeedbackType("review")}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-green-100 p-4">
                      <Star className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Submit a Review</h3>
                  <p className="text-gray-600">Share your positive experience and help us improve our services</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => setFeedbackType("complaint")}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-orange-100 p-4">
                      <AlertTriangle className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Submit a Complaint</h3>
                  <p className="text-gray-600">Report any issues or concerns you experienced</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Confirmation & Thank You
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f4f9f9] py-16">
        <div className="ultramed-container">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-12 pb-12">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-green-100 p-4">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for your feedback! Your input helps us improve our services.
                  Our team may reach out if further information is needed. We appreciate your time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetForm} variant="outline" className="px-6 py-3">
                    Submit Another Feedback
                  </Button>
                  <Button asChild className="px-6 py-3">
                    <a href="/">
                      <Home className="h-4 w-4 mr-2" />
                      Return to Home
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Personal Information
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-[#f4f9f9] py-16">
        <div className="ultramed-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Personal Information</h2>
              <p className="text-gray-600">Please provide your contact details and visit information</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name *</label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                      <Input
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Date of Visit *</label>
                      <Input
                        type="date"
                        value={formData.dateOfVisit}
                        onChange={(e) => handleInputChange("dateOfVisit", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Department Visited *</label>
                      <select
                        value={formData.departmentVisited}
                        onChange={(e) => handleInputChange("departmentVisited", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                      >
                        <option value="">Select department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button onClick={nextStep} className="px-8 py-3">
                      Next: {feedbackType === "review" ? "Review Details" : "Complaint Details"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Step 2A: Review Section
  if (currentStep === 1 && feedbackType === "review") {
    return (
      <div className="min-h-screen bg-[#f4f9f9] py-16">
        <div className="ultramed-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Details</h2>
              <p className="text-gray-600">Please rate your experience with our services</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Star Ratings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-700">Overall Experience *</label>
                      {renderStars(formData.overallExperience, (rating) => handleInputChange("overallExperience", rating))}
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-700">Cleanliness of the Facility *</label>
                      {renderStars(formData.cleanliness, (rating) => handleInputChange("cleanliness", rating))}
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-700">Staff Friendliness and Professionalism *</label>
                      {renderStars(formData.staffFriendliness, (rating) => handleInputChange("staffFriendliness", rating))}
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-700">Waiting Time *</label>
                      {renderStars(formData.waitingTime, (rating) => handleInputChange("waitingTime", rating))}
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-700">Quality of Care Received *</label>
                      {renderStars(formData.qualityOfCare, (rating) => handleInputChange("qualityOfCare", rating))}
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Would you recommend our hospital to others? *</label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange("wouldRecommend", true)}
                        className={`px-4 py-2 rounded-md border transition-colors ${
                          formData.wouldRecommend === true
                            ? "bg-green-100 border-green-500 text-green-700"
                            : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInputChange("wouldRecommend", false)}
                        className={`px-4 py-2 rounded-md border transition-colors ${
                          formData.wouldRecommend === false
                            ? "bg-red-100 border-red-500 text-red-700"
                            : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  {/* Text Areas */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">What did you like most about our service?</label>
                    <textarea
                      value={formData.likedMost}
                      onChange={(e) => handleInputChange("likedMost", e.target.value)}
                      placeholder="Please share what you appreciated most..."
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Any suggestions for improvement?</label>
                    <textarea
                      value={formData.suggestions}
                      onChange={(e) => handleInputChange("suggestions", e.target.value)}
                      placeholder="Please share any suggestions for improvement..."
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <Button onClick={nextStep}>
                      Next: Review Summary
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Step 2B: Complaint Section
  if (currentStep === 1 && feedbackType === "complaint") {
    return (
      <div className="min-h-screen bg-[#f4f9f9] py-16">
        <div className="ultramed-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Complaint Details</h2>
              <p className="text-gray-600">Please provide details about your complaint</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Department or Service Concerned *</label>
                      <select
                        value={formData.departmentConcerned}
                        onChange={(e) => handleInputChange("departmentConcerned", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                      >
                        <option value="">Select department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Date and Time of Incident *</label>
                      <Input
                        type="datetime-local"
                        value={formData.incidentDateTime}
                        onChange={(e) => handleInputChange("incidentDateTime", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Description of Complaint *</label>
                    <textarea
                      value={formData.complaintDescription}
                      onChange={(e) => handleInputChange("complaintDescription", e.target.value)}
                      placeholder="Please provide a detailed description of your complaint..."
                      rows={6}
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Was any staff member involved?</label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange("staffInvolved", true)}
                        className={`px-4 py-2 rounded-md border transition-colors ${
                          formData.staffInvolved === true
                            ? "bg-blue-100 border-blue-500 text-blue-700"
                            : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInputChange("staffInvolved", false)}
                        className={`px-4 py-2 rounded-md border transition-colors ${
                          formData.staffInvolved === false
                            ? "bg-gray-100 border-gray-500 text-gray-700"
                            : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  {formData.staffInvolved && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Staff Name (if available)</label>
                      <Input
                        value={formData.staffName}
                        onChange={(e) => handleInputChange("staffName", e.target.value)}
                        placeholder="Enter staff member's name if known"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">How serious do you consider this complaint? *</label>
                      <select
                        value={formData.complaintSeriousness}
                        onChange={(e) => handleInputChange("complaintSeriousness", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                      >
                        <option value="">Select seriousness level</option>
                        {seriousnessLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">What action would you like us to take? *</label>
                      <select
                        value={formData.desiredAction}
                        onChange={(e) => handleInputChange("desiredAction", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                      >
                        <option value="">Select desired action</option>
                        {complaintActions.map((action) => (
                          <option key={action} value={action}>{action}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Upload Supporting Evidence (optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Click to upload files or drag and drop</p>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*,.pdf,.doc,.docx"
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Button type="button" variant="outline" size="sm">
                          Choose Files
                        </Button>
                      </label>
                      {formData.supportingEvidence && (
                        <p className="text-sm text-green-600 mt-2">
                          Selected: {formData.supportingEvidence.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <Button onClick={nextStep}>
                      Next: Review Summary
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Review Summary & Consent
  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-[#f4f9f9] py-16">
        <div className="ultramed-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Summary</h2>
              <p className="text-gray-600">Please review your feedback before submitting</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Personal Information Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div><span className="font-medium">Name:</span> {formData.fullName}</div>
                      <div><span className="font-medium">Phone:</span> {formData.phoneNumber}</div>
                      <div><span className="font-medium">Date of Visit:</span> {formData.dateOfVisit}</div>
                      <div><span className="font-medium">Department:</span> {formData.departmentVisited}</div>
                    </div>
                  </div>

                  {/* Review Summary */}
                  {feedbackType === "review" && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Review Details</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Overall Experience:</span> {"★".repeat(formData.overallExperience)}</div>
                        <div><span className="font-medium">Cleanliness:</span> {"★".repeat(formData.cleanliness)}</div>
                        <div><span className="font-medium">Staff Friendliness:</span> {"★".repeat(formData.staffFriendliness)}</div>
                        <div><span className="font-medium">Waiting Time:</span> {"★".repeat(formData.waitingTime)}</div>
                        <div><span className="font-medium">Quality of Care:</span> {"★".repeat(formData.qualityOfCare)}</div>
                        <div><span className="font-medium">Would Recommend:</span> {formData.wouldRecommend ? "Yes" : "No"}</div>
                        {formData.likedMost && <div><span className="font-medium">Liked Most:</span> {formData.likedMost}</div>}
                        {formData.suggestions && <div><span className="font-medium">Suggestions:</span> {formData.suggestions}</div>}
                      </div>
                    </div>
                  )}

                  {/* Complaint Summary */}
                  {feedbackType === "complaint" && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Complaint Details</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Department Concerned:</span> {formData.departmentConcerned}</div>
                        <div><span className="font-medium">Incident Date/Time:</span> {formData.incidentDateTime}</div>
                        <div><span className="font-medium">Description:</span> {formData.complaintDescription}</div>
                        <div><span className="font-medium">Staff Involved:</span> {formData.staffInvolved ? "Yes" : "No"}</div>
                        {formData.staffName && <div><span className="font-medium">Staff Name:</span> {formData.staffName}</div>}
                        <div><span className="font-medium">Seriousness:</span> {formData.complaintSeriousness}</div>
                        <div><span className="font-medium">Desired Action:</span> {formData.desiredAction}</div>
                        {formData.supportingEvidence && <div><span className="font-medium">Supporting Evidence:</span> {formData.supportingEvidence.name}</div>}
                      </div>
                    </div>
                  )}

                  {/* Consent */}
                  <div className="border-t pt-6">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.agreedToTerms}
                        onChange={(e) => handleInputChange("agreedToTerms", e.target.checked)}
                        className="mt-1"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        By submitting this form, you agree that your feedback may be reviewed by our quality assurance team for service improvement purposes.
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <Button 
                      onClick={handleSubmit} 
                      disabled={!formData.agreedToTerms || isSubmitting}
                      className="px-8 py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        "Submit Feedback"
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
