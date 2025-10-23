import Link from 'next/link';

import AboutFari from '@/components/sections/about';
import SEOJsonLD from '@/components/seo-jsonld';
import HomeHighlights from './_components/home-highlights';
import { InstagramIcon } from '@/components/ui/icons';

export default function Page() {
  return (
    <>
      <SEOJsonLD />
      <main>
        <section className="mt-4">
          <AboutFari />
        </section>

        <HomeHighlights />

        <section className="f-container relative pb-14">
          <div className="rounded-2xl">
            <div className="glass-2 specular border-border/60 rounded-2xl border p-4 shadow-[0_16px_50px_rgba(0,0,0,0.14)] sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="border-border bg-card/70 inline-flex h-10 w-10 items-center justify-center rounded-xl border">
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide sm:text-base">
                      Follow on Instagram
                    </h3>
                    <p className="text-muted-foreground text-xs">@fari_makeup</p>
                  </div>
                </div>

                <Link
                  href="https://www.instagram.com/fari_makeup/"
                  target="_blank"
                  rel="noopener"
                  className="border-border/70 bg-card/70 hover:bg-accent/20 inline-flex h-10 items-center rounded-md border px-4 text-sm font-medium transition"
                  aria-label="Open Instagram profile @fari_makeup"
                >
                  Open Instagram
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
