import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { CheckCircle2, Bell, AlertTriangle, MessageSquare, ArrowRight } from "lucide-react";

interface WhatsAppModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const WhatsAppModal = ({ isOpen, onOpenChange }: WhatsAppModalProps) => {
  const whatsappLink = import.meta.env.VITE_WHATSAPP_GROUP_LINK || "https://chat.whatsapp.com/invite/placeholder";

  const benefits = [
    {
      icon: <Bell className="w-5 h-5 text-primary" />,
      title: "Receive Updates",
      desc: "Be the first to know about new features, improvements, and updates.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-primary" />,
      title: "File Complaints",
      desc: "Having issues? Reach out directly to our developers for rapid assistance.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
      title: "Lay Feedback & Suggest Features",
      desc: "Share your thoughts and shape the future roadmap of NoteNest.",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border border-border/80 bg-background shadow-2xl rounded-2xl">
        {/* Decorative Top Accent */}
        <div className="h-2 bg-gradient-to-r from-primary to-[#25D366]" />

        <div className="p-6 md:p-8 space-y-6">
          {/* Success Download Header */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 animate-bounce" />
            <div>
              <p className="text-sm font-bold text-foreground">Download Initiated!</p>
              <p className="text-xs text-muted-foreground">The NoteNest APK download has successfully started.</p>
            </div>
          </div>

          {/* Core Call to Action */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/10 mb-2 relative">
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping opacity-75" />
              <svg className="w-10 h-10 text-[#25D366] relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.419 1.46h.007c5.556 0 10.082-4.522 10.086-10.08.002-2.695-1.047-5.227-2.952-7.13C17.29 1.492 14.763.447 12.01.447c-5.56 0-10.088 4.524-10.092 10.082-.001 1.93.504 3.813 1.464 5.418L2.4 21.6l5.77-1.514zm11.39-7.613c-.305-.153-1.805-.89-2.083-.99-.278-.103-.48-.152-.68.153-.2.304-.775.99-.95 1.192-.175.203-.35.228-.655.076-.305-.152-1.288-.475-2.455-1.514-.908-.81-1.52-1.81-1.7-2.115-.18-.304-.02-.468.133-.62.137-.138.305-.355.457-.533.153-.178.203-.305.305-.51.102-.202.05-.38-.025-.531-.075-.153-.682-1.642-.932-2.247-.244-.587-.493-.508-.68-.518-.173-.01-.375-.012-.578-.012-.203 0-.533.076-.812.38-.28.305-1.066 1.04-1.066 2.537 0 1.497 1.09 2.943 1.24 3.146.15.203 2.146 3.277 5.198 4.593.725.313 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.805-.738 2.058-1.453.253-.715.253-1.328.177-1.454-.075-.127-.278-.203-.583-.356z"/>
              </svg>
            </div>
            
            <DialogTitle className="text-2xl font-display font-bold">
              Join the NoteNest Community
            </DialogTitle>
            
            <DialogDescription className="text-sm text-muted-foreground max-w-sm mx-auto">
              Connect with fellow users and developers to make your NoteNest experience even better.
            </DialogDescription>
          </div>

          {/* Benefits List */}
          <div className="space-y-4 py-2 border-y border-border/40">
            {benefits.map((b, index) => (
              <div key={index} className="flex gap-3 text-left">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  {b.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{b.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              }}
            >
              Join WhatsApp Group
              <ArrowRight className="w-4 h-4" />
            </a>

            <DialogClose asChild>
              <button
                type="button"
                className="w-full py-3.5 bg-secondary/10 hover:bg-secondary/20 text-foreground font-semibold rounded-full border border-border/50 transition-all duration-300"
              >
                Maybe Later
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppModal;
