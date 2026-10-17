import { profile } from "../data/portfolio";
import KineticName from "./KineticName";

export default function Hero() {
  const lines = profile.name.split(" ");

  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-28"
    >
      {profile.available && (
        <p className="mb-8 inline-flex w-fit items-center gap-3 rounded-full bg-ink px-4 py-2 text-sm font-medium text-mist">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-mint" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
          </span>
          {profile.availableText}
        </p>
      )}

      <KineticName lines={lines} />

      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-xl leading-relaxed text-ink/80">
          <span className="font-semibold text-ink">{profile.role}.</span> {profile.headline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-ink px-7 py-3.5 font-semibold text-mist transition-colors hover:bg-violet"
          >
            See my work
          </a>
          <a
            href={profile.cv}
            download
            className="rounded-full border-2 border-ink px-7 py-3.5 font-semibold transition-colors hover:bg-sun"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

