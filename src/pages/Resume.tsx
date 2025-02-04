import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Download, FileText, FileType2, Loader2 } from "lucide-react";

const Resume = () => {
  const [selectedFormat, setSelectedFormat] = useState<"pdf" | "docx" | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const pdfUrl =
    "https://github.com/vishnuchandramc/vault/blob/ab379c6309000986d9e826ee2d4d3a1bab33c62f/Vishnu%20Chandra%20Resume%20(1).pdf?raw=true";
  const docxUrl =
    "https://github.com/vishnuchandramc/vault/raw/ab379c6309000986d9e826ee2d4d3a1bab33c62f/Vishnu%20Chandra%20Resume%20(2).docx";

  const getViewerUrl = (format: "pdf" | "docx") => {
    const url = format === "pdf" ? pdfUrl : docxUrl;
    return `https://docs.google.com/viewer?url=${encodeURIComponent(
      url
    )}&embedded=true`;
  };

  const handleDownload = (format: "pdf" | "docx") => {
    const url = format === "pdf" ? pdfUrl : docxUrl;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-24 px-2 md:px-4">
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            My{" "}
            <span className="relative inline-block">
              Professional
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M1 5.5C47.6667 2.16667 154.4 -2.3 199 6.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary"
                />
              </motion.svg>
            </span>{" "}
            Journey
          </h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore my career path and journey through my detailed resume.
            Available in both PDF and DOCX formats for your convenience.
          </motion.p>
        </motion.div>

        {/* Resume Format Cards */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* PDF Format Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card
              className="overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group border dark:border-gray-800 hover:bg-accent hover:text-accent-foreground"
              onClick={() => {
                setSelectedFormat("pdf");
                setIsDialogOpen(true);
              }}
            >
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="p-3 rounded-full bg-red-50 dark:bg-red-950/30 group-hover:bg-red-100 dark:group-hover:bg-red-950/50 transition-colors">
                  <svg viewBox="0 0 48 48" className="h-8 w-8">
                    <path
                      fill="#e53935"
                      d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28 C42,40.209,40.209,42,38,42z"
                    />
                    <path
                      fill="#fff"
                      d="M34.841,26.799c-1.692-1.757-6.314-1.041-7.42-0.911c-1.627-1.562-2.734-3.45-3.124-4.101 c0.586-1.757,0.976-3.515,1.041-5.402c0-1.627-0.651-3.385-2.473-3.385c-0.651,0-1.237,0.391-1.562,0.911 c-0.781,1.367-0.456,4.101,0.781,6.899c-0.716,2.018-1.367,3.97-3.189,7.42c-1.888,0.781-5.858,2.604-6.183,4.556 c-0.13,0.586,0.065,1.172,0.521,1.627C13.688,34.805,14.273,35,14.859,35c2.408,0,4.751-3.32,6.379-6.118 c1.367-0.456,3.515-1.107,5.663-1.497c2.538,2.213,4.751,2.538,5.923,2.538c1.562,0,2.148-0.651,2.343-1.237 C35.492,28.036,35.297,27.32,34.841,26.799z M33.214,27.905c-0.065,0.456-0.651,0.911-1.692,0.651 c-1.237-0.325-2.343-0.911-3.32-1.692c0.846-0.13,2.734-0.325,4.101-0.065C32.824,26.929,33.344,27.254,33.214,27.905z M22.344,14.497c0.13-0.195,0.325-0.325,0.521-0.325c0.586,0,0.716,0.716,0.716,1.302c-0.065,1.367-0.325,2.734-0.781,4.036 C21.824,16.905,22.019,15.083,22.344,14.497z M22.214,27.124c0.521-1.041,1.237-2.864,1.497-3.645 c0.586,0.976,1.562,2.148,2.083,2.669C25.794,26.213,23.776,26.604,22.214,27.124z M18.374,29.728 c-1.497,2.473-3.059,4.036-3.905,4.036c-0.13,0-0.26-0.065-0.391-0.13c-0.195-0.13-0.26-0.325-0.195-0.586 C14.078,32.136,15.77,30.899,18.374,29.728z"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-xl">PDF Format</CardTitle>
                  <CardDescription className="text-base text-muted-foreground/80">
                    Optimized for viewing and distribution
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          {/* DOCX Format Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card
              className="overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group border dark:border-gray-800 hover:bg-accent hover:text-accent-foreground"
              onClick={() => {
                setSelectedFormat("docx");
                setIsDialogOpen(true);
              }}
            >
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-950/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/50 transition-colors">
                  <svg viewBox="0 0 48 48" className="h-8 w-8">
                    <path
                      fill="#2d92d4"
                      d="M42.256,6H15.744C14.781,6,14,6.781,14,7.744v7.259h30V7.744C44,6.781,43.219,6,42.256,6z"
                    />
                    <path
                      fill="#2150a9"
                      d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42h26.513C43.219,42,44,41.219,44,40.256v-7.202H14z"
                    />
                    <path
                      fill="#2d83d4"
                      d="M14 15.003H44V24.005000000000003H14z"
                    />
                    <path fill="#2e70c9" d="M14 24.005H44V33.055H14z" />
                    <path
                      fill="#00488d"
                      d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"
                    />
                    <path
                      fill="#fff"
                      d="M18.403 19L16.857 26.264 15.144 19 12.957 19 11.19 26.489 9.597 19 7.641 19 9.985 29 12.337 29 14.05 21.311 15.764 29 18.015 29 20.359 19z"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-xl">DOCX Format</CardTitle>
                  <CardDescription className="text-base text-muted-foreground/80">
                    Editable Microsoft Word format
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>

        {/* Preview Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-[98vw] sm:max-w-[95vw] w-full sm:w-[1200px] h-[85vh] sm:h-[90vh] p-2 sm:p-3 md:p-6 flex flex-col dark:bg-gray-900/70 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-gray-800/50">
            <DialogHeader className="mb-2 md:mb-4 flex-shrink-0">
              <DialogTitle className="text-base sm:text-lg md:text-2xl font-bold">
                Resume Preview - {selectedFormat?.toUpperCase()} Format
              </DialogTitle>
            </DialogHeader>

            <div className="flex-1 overflow-hidden rounded-lg bg-muted dark:bg-gray-800/50 min-h-0">
              {selectedFormat ? (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/80 dark:bg-gray-900/80 backdrop-blur-sm">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="text-sm text-muted-foreground">
                          Loading {selectedFormat.toUpperCase()} file...
                        </p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={getViewerUrl(selectedFormat)}
                    className="w-full h-full border-none"
                    title="Resume Preview"
                    loading="lazy"
                    style={{
                      backgroundColor: "rgb(247, 247, 247)",
                    }}
                    onLoad={() => setIsLoading(false)}
                    onLoadStart={() => setIsLoading(true)}
                  />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <FileText className="h-12 w-12 text-muted-foreground/60" />
                  <div className="text-muted-foreground text-xs sm:text-sm md:text-base">
                    Select a format to preview the resume.
                  </div>
                </div>
              )}
            </div>

            <div className="flex-shrink-0 mt-2 sm:mt-3 md:mt-4">
              <Button
                onClick={() => selectedFormat && handleDownload(selectedFormat)}
                className="w-full sm:w-auto gap-1.5 sm:gap-2 bg-primary hover:bg-primary/90 text-xs sm:text-sm md:text-base py-1.5 sm:py-2 h-8 sm:h-9 md:h-10"
              >
                <Download className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                <span className="inline-block">
                  Download {selectedFormat?.toUpperCase()}
                </span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Resume;
