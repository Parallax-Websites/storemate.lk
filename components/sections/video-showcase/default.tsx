import { ListVideo, PlayCircle } from "lucide-react";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

const videos = [
  {
    id: "5EE0qlEBe5Q",
    title: "StoreMate Video 01",
    href: "https://youtu.be/5EE0qlEBe5Q?si=2vh3x83UlnwSpqJr",
  },
  {
    id: "tdGd5rRIuG0",
    title: "StoreMate Video 02",
    href: "https://youtu.be/tdGd5rRIuG0?si=0N2x2_NbRzwMUEHI",
  },
  {
    id: "82dOuZyYMKE",
    title: "StoreMate Video 03",
    href: "https://youtu.be/82dOuZyYMKE?si=N77dsq5OZFm39hci",
  },
];

const playlistUrl =
  "https://youtube.com/playlist?list=PLqSm9dDRnJ6geVOx98x1G7KDn20T0iWgS&si=i6hb-1mu_puPtdlo";

export default function VideoShowcase() {
  return (
    <Section className="relative overflow-hidden">
      <div className="bg-primary/10 pointer-events-none absolute -top-12 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full blur-3xl" />
      <div className="max-w-container relative mx-auto">
        <div className="mb-10 flex flex-col gap-5 text-center sm:mb-14">
          <p className="text-primary text-sm font-semibold tracking-[0.24em] uppercase">
            Video Walkthroughs
          </p>
          <h2 className="mx-auto max-w-[18ch] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Watch StoreMate in Action
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[780px] text-md font-medium sm:text-xl">
            Explore these quick videos to see how StoreMate helps automate order
            workflows, reduce errors, and scale daily operations.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="glow" className="gap-2">
              <a
                href={playlistUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open full YouTube playlist"
              >
                <ListVideo className="size-4" />
                View Full Playlist
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {videos.map((video, index) => (
            <article
              key={video.id}
              className="from-card/85 to-card/50 border-border/60 relative overflow-hidden rounded-2xl border bg-linear-to-br p-3 shadow-sm"
            >
              <div className="bg-primary/10 absolute -top-10 -right-10 h-24 w-24 rounded-full blur-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 px-1 pb-1">
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Video {String(index + 1).padStart(2, "0")}
                </p>
                <a
                  href={video.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                >
                  <PlayCircle className="size-4" />
                  Open on YouTube
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
