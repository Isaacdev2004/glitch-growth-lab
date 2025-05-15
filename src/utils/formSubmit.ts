
import { toast } from "@/hooks/use-toast";

interface FormData {
  [key: string]: any;
}

export const sendFormSubmission = async (
  formData: FormData,
  formType: string
): Promise<boolean> => {
  // Convert form data to string for email body
  const formBody = Object.entries(formData)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  try {
    // In a real application, you would typically use a backend service to send emails
    // This is a frontend-only solution that opens the default email client
    const subject = encodeURIComponent(`New ${formType} Form Submission`);
    const body = encodeURIComponent(formBody);
    window.location.href = `mailto:hello@mediaglitch.com?subject=${subject}&body=${body}`;
    
    // Show success toast
    toast({
      title: "Form Submitted Successfully",
      description: "Your information has been sent. Thank you!",
    });
    
    return true;
  } catch (error) {
    console.error("Error sending form:", error);
    // Show error toast
    toast({
      title: "Submission Error",
      description: "There was a problem sending your information. Please try again.",
      variant: "destructive",
    });
    
    return false;
  }
};
