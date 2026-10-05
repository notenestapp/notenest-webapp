import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DeleteAccount = () => {
  useEffect(() => {
    document.title = "Delete Account | NoteNest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Instructions on how to delete your NoteNest account.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-4xl mx-auto px-8 md:px-12 py-12 mt-20">
        <h1 className="text-4xl font-bold mb-8">How to Delete Your NoteNest Account</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p>
            If you no longer wish to use NoteNest, you can easily deactivate or permanently delete your account directly from within the app. Follow the steps below:
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Step-by-Step Instructions</h2>
          <ol className="list-decimal pl-6 space-y-4 mt-4">
            <li><strong className="text-foreground">Open the NoteNest App:</strong> Launch the application on your device and ensure you are logged into the account you wish to delete.</li>
            <li><strong className="text-foreground">Navigate to Accounts:</strong> Go to the main menu or settings tab and select the <strong>Accounts</strong> section.</li>
            <li><strong className="text-foreground">Select Delete/Deactivate:</strong> Tap on the option that says <strong>Delete Account</strong> or <strong>Deactivate Account</strong>.</li>
            <li><strong className="text-foreground">Confirm Deletion:</strong> You will be presented with a prompt: <em>"Your account will be deactivated and you will be logged out. In 30 days, your data will be permanently deleted."</em> Confirm your action to proceed.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">What Happens Next?</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>You will be immediately logged out of your account on all devices.</li>
            <li>Your account will be placed in a <strong>deactivated state for 30 days</strong>.</li>
            <li>If you change your mind within this 30-day window, simply log back into NoteNest to cancel the deletion process and restore your account.</li>
            <li>After 30 days, all your data, including notes, chats, and profile information, will be <strong>permanently and irreversibly deleted</strong> from our servers.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Need Help?</h2>
          <p>
            If you encounter any issues while trying to delete your account or have questions about our data retention policies, please contact our support team.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeleteAccount;
