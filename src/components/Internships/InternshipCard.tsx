import type { Internship } from "@/lib/internships";
import { MapPin, Clock, BadgeCheck, IndianRupee, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InternshipCardProps {
  item: Internship;
}

export default function InternshipCard({ item }: InternshipCardProps) {
  const isVerified = (item as unknown as { verified?: boolean }).verified === true;
  const stipend = (item as unknown as { stipend?: string; pay?: string }).stipend ?? (item as unknown as { pay?: string }).pay ?? "—";

  return (
    <div className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500/50" aria-labelledby={`internship-${item.id}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 text-xl font-bold text-neutral-400 border border-neutral-700">
            {item.company?.charAt(0) ?? ""}
          </div>
          <div>
            <h3 id={`internship-${item.id}`} className="text-lg font-bold text-white line-clamp-1 group-hover:text-emerald-400 transition-colors">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="font-medium text-neutral-300">{item.company}</span>
              {isVerified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/20 border border-emerald-800 px-2 py-0.5 text-xs font-medium text-emerald-400" aria-label="Verified internship">
                  <BadgeCheck className="h-3 w-3" /> Verified
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-neutral-400">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-neutral-500" />
          <span className="truncate">{(item as unknown as { location?: string }).location ?? ""}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-neutral-500" />
          <span>{item.duration}</span>
        </div>
        <div className="col-span-2 flex items-center gap-2 font-medium text-white">
          <IndianRupee className="h-4 w-4 text-neutral-500" />
          <span>{stipend}</span>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {item.skills.slice(0, 3).map((skill: string) => (
          <span key={skill} className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300 border border-neutral-700">
            {skill}
          </span>
        ))}
        {item.skills.length > 3 && (
          <span className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-500 border border-neutral-700">+{item.skills.length - 3}</span>
        )}
      </div>

      <div className="mt-auto pt-4 border-t border-neutral-800">
        <Button className="w-full bg-neutral-950 text-emerald-500 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 justify-between group-hover:bg-emerald-600 group-hover:text-white transition-all" aria-label="View internship details">
          View Details
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
