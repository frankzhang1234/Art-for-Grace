import { useState, useRef } from "react";
import { Plus, X, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface UploadFormProps {
  onAdd: (artwork: {
    src: string;
    title: string;
    date: string;
    description?: string;
  }) => void;
}

const UploadForm = ({ onAdd }: UploadFormProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date>();
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setTitle("");
    setDate(undefined);
    setDescription("");
    setPreview(null);
    setError("");
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preview) {
      setError("Please select an image.");
      return;
    }
    if (!title.trim()) {
      setError("Please enter a title.");
      return;
    }
    if (!date) {
      setError("Please select a date.");
      return;
    }

    onAdd({
      src: preview,
      title: title.trim(),
      date: format(date, "MMMM d, yyyy"),
      description: description.trim() || undefined,
    });

    reset();
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center border border-foreground bg-foreground text-primary-foreground hover:bg-background hover:text-foreground transition-colors duration-300"
        aria-label="Add artwork"
      >
        <Plus className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-background border border-border w-full max-w-md mx-6 p-8 animate-fade-in-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            reset();
            setOpen(false);
          }}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-display text-xl font-medium mb-6">Add Artwork</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* File input */}
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Image
            </label>
            {preview ? (
              <div className="relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-48 object-contain bg-secondary"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreview(null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                  className="absolute top-2 right-2 bg-background/80 p-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="w-full border border-dashed border-border py-8 text-muted-foreground text-sm hover:border-foreground hover:text-foreground transition-colors duration-300"
              >
                Click to select an image
              </button>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="hidden"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Untitled"
              className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Date Created
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "w-full border border-border bg-background px-4 py-3 text-sm text-left flex items-center justify-between transition-colors duration-300 focus:outline-none focus:border-foreground",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "MMMM yyyy") : "Select a date"}
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Description <span className="normal-case">(optional)</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A few words about this piece..."
              rows={2}
              className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive animate-fade-in">{error}</p>
          )}

          <button
            type="submit"
            className="w-full border border-foreground bg-foreground text-primary-foreground px-4 py-3 text-xs tracking-[0.2em] uppercase hover:bg-background hover:text-foreground transition-colors duration-300"
          >
            Add to Gallery
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
