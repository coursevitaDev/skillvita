"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Search, ChevronDown, Clock, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ProgramData {
    C_id?: {
        name?: string;
        logo?: string;
    } | null;
    title: string;
    image: string;
    duration: string;
    m_name: string;
    m_profession: string;
    _id: string;
    visibility: boolean;
    domain: string;
}

export default function CertificationsListing() {
    const [programs, setPrograms] = useState<ProgramData[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [domain, setDomain] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPrograms = async () => {
            setLoading(true);
            try {
                const base = process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_LINK;
                const response = await axios.get(`${base}/programs`);
                const data = await response.data;
                setPrograms(data?.data ?? []);
            } catch (err) {
                console.error("Failed to fetch programs", err);
                setError("Failed to load certifications.");
            } finally {
                setLoading(false);
            }
        };
        fetchPrograms();
    }, []);

    const domains = useMemo(() => {
        const d = new Set(programs.filter(p => p.visibility).map(p => p.domain));
        return Array.from(d).sort();
    }, [programs]);

    const companies = useMemo(() => {
        const c = new Set(programs.map(p => p.C_id?.name).filter(Boolean) as string[]);
        return Array.from(c).sort();
    }, [programs]);

    const filteredPrograms = useMemo(() => {
        return programs.filter(p => {
            const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchDomain = !domain || p.domain === domain;
            const matchCategory = !category || p.C_id?.name === category;
            return matchSearch && matchDomain && matchCategory;
        });
    }, [programs, searchTerm, domain, category]);

    const clearFilters = () => {
        setSearchTerm("");
        setDomain("");
        setCategory("");
    };

    return (
        <section id="certification-listing" className="py-20 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Explore <span className="text-[#32fe6b]">Certifications</span>
                    </h2>

                    <div className="grid gap-6 md:flex md:items-center md:gap-4 flex-wrap">
                        {/* Search Bar */}
                        <div className="relative flex-1 min-w-[300px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                            <input
                                type="text"
                                placeholder="Search Simulations"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#32fe6b]/50 transition-colors"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex gap-4 flex-wrap w-full md:w-auto">
                            <div className="relative flex-1 md:w-48">
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-3 px-4 text-white appearance-none focus:outline-none focus:border-[#32fe6b]/50 transition-colors cursor-pointer"
                                >
                                    <option value="">All Companies</option>
                                    {companies.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                            </div>

                            <div className="relative flex-1 md:w-48">
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-3 px-4 text-white appearance-none focus:outline-none focus:border-[#32fe6b]/50 transition-colors cursor-pointer"
                                >
                                    <option value="">All Domains</option>
                                    {domains.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                            </div>

                            {(searchTerm || domain || category) && (
                                <Button
                                    onClick={clearFilters}
                                    variant="ghost"
                                    className="text-neutral-400 hover:text-white hover:bg-neutral-800 gap-2"
                                >
                                    <X className="h-4 w-4" />
                                    Clear Filters
                                </Button>
                            )}
                        </div>
                    </div>

                    <p className="mt-4 text-neutral-500 text-sm italic">
                        Technology, Data & AI, Web Development, Cloud, IoT, Design, Marketing, Operations, and more
                    </p>
                </div>

                {loading ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-[400px] rounded-2xl bg-neutral-900 animate-pulse border border-neutral-800" />
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center py-20 text-neutral-500 bg-neutral-900/50 rounded-3xl border border-neutral-800">
                        {error}
                    </div>
                ) : filteredPrograms.length === 0 ? (
                    <div className="text-center py-20 text-neutral-500 bg-neutral-900/50 rounded-3xl border border-neutral-800">
                        No simulations found matching your criteria.
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <AnimatePresence>
                            {filteredPrograms.map((program) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={program._id}
                                    className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-[#32fe6b]/30 transition-all group"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={program.image}
                                            alt={program.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {program.C_id?.logo && (
                                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 h-10 w-24 flex items-center justify-center">
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={program.C_id.logo}
                                                        alt={program.C_id.name || ""}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="text-white font-bold mb-4 line-clamp-2 min-h-[3rem]">
                                            {program.title}
                                        </h3>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-2 text-neutral-400 text-sm">
                                                <User className="h-4 w-4 text-[#32fe6b]" />
                                                <span>Mentored by <span className="text-white font-semibold">{program.m_name}</span></span>
                                            </div>
                                            <div className="flex items-center gap-2 text-neutral-400 text-sm">
                                                <Clock className="h-4 w-4 text-[#32fe6b]" />
                                                <span className="font-semibold">{program.duration}</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <Link
                                                href={`https://simulation.coursevita.com/course/${program._id}`}
                                                target="_blank"
                                                className="block"
                                            >
                                                <Button
                                                    variant="outline"
                                                    className="w-full border-neutral-700 hover:border-[#32fe6b] hover:bg-[#32fe6b]/10 hover:text-white transition-all text-neutral-300 font-bold h-11"
                                                >
                                                    Know More
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </section>
    );
}
