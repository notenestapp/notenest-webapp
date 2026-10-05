import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | NoteNest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Privacy Policy for NoteNest. Learn how we collect, use, and protect your personal data.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-4xl mx-auto px-8 md:px-12 py-12 mt-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p className="font-semibold text-foreground">Last updated: July 2026</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Introduction</h2>
          <p>Welcome to NoteNest. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, store, process, and share your information when you use our mobile application, website, and backend services.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">2. Information We Collect</h2>
          <p>We collect the following categories of personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong className="text-foreground">Profile Information:</strong> Email address, username, and profile picture (avatar) when you sign up using Email/Password or Google OAuth.</li>
            <li><strong className="text-foreground">App Usage Data:</strong> Information about your interaction with the app, including last active time, video watch time, text read time, credits balance, and subscription status.</li>
            <li><strong className="text-foreground">User Content:</strong> Files you upload (e.g., PDFs, images), generated notes, chapters, AI chat conversations, quotes, study plans, and exam scores.</li>
            <li><strong className="text-foreground">Device Identifiers:</strong> Push notification tokens used to send you alerts.</li>
            <li><strong className="text-foreground">Analytics Data:</strong> Event data (such as screen views) collected via PostHog to improve our app experience.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">3. How We Use Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide, operate, and maintain the NoteNest platform.</li>
            <li>Generate study materials using Artificial Intelligence.</li>
            <li>Process payments and manage your subscriptions.</li>
            <li>Send you important administrative messages and push notifications.</li>
            <li>Analyze usage patterns to improve our features.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">4. AI Processing</h2>
          <p>NoteNest uses advanced AI models (such as Google Gemini) to provide its core educational features. When you interact with our AI tutor or generate notes, we transmit your chat prompts, note context, and relevant uploaded file content to these third-party AI providers. These conversations are also stored securely in our PostgreSQL database to maintain chat history.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">5. File Uploads</h2>
          <p>Files and images you upload are stored securely in AWS S3 (Amazon Web Services). These files are processed to assist in note generation and AI conversations. We enforce strict size limits to ensure optimal performance.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">6. Third-party Services and Data Sharing</h2>
          <p>We share your data only with trusted third-party service providers who assist us in operating our platform:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong className="text-foreground">Render PostgreSQL:</strong> For primary database storage and managing custom JWT authentication.</li>
            <li><strong className="text-foreground">AWS S3:</strong> For cloud storage of uploaded files.</li>
            <li><strong className="text-foreground">Google Gemini:</strong> For AI text generation and processing.</li>
            <li><strong className="text-foreground">Paystack & Flutterwave:</strong> For secure payment processing. NoteNest does not store your raw credit card information.</li>
            <li><strong className="text-foreground">PostHog:</strong> For product analytics to help us improve the app.</li>
            <li><strong className="text-foreground">Expo Push:</strong> For delivering push notifications to your device.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">7. Cookies and Tracking</h2>
          <p>Our website uses minimal functional cookies (such as remembering your sidebar state) to enhance your experience. We do not use tracking or marketing cookies on the NoteNest website.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">8. Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Passwords are securely hashed and managed by our authentication provider.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">9. Children's Privacy</h2>
          <p>NoteNest is not directed to children under the age of 13. For users in jurisdictions where parental consent is required for data processing or financial transactions, you must be at least 18 years old or have verifiable parental consent to use our paid features.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">10. Data Retention and Account Deletion</h2>
          <p>We retain your personal information for as long as your account is active or as needed to provide you services. You have the right to request the deletion of your account and associated data. To do so, please contact us using the information below.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">11. User Rights</h2>
          <p>Depending on your location (e.g., GDPR, NDPR), you may have the right to access, rectify, or erase your personal data, as well as the right to data portability and to restrict processing.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">12. Changes to this Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">13. Contact Information</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: <strong className="text-foreground">notenest.app1@gmail.com</strong>.</p>
        </div>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Privacy;
