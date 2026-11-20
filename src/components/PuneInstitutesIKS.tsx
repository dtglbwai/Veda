import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  Award, 
  Search, 
  Filter, 
  ExternalLink, 
  Layers, 
  Clock, 
  Users, 
  Sparkles, 
  FileText, 
  Copy, 
  Check, 
  ChevronRight, 
  Flame, 
  BookMarked,
  Scroll,
  Cpu,
  Atom,
  HelpCircle,
  BarChart3,
  School
} from "lucide-react";
import { PUNE_IKS_INSTITUTIONS, IKS_DOMAINS_LIST, ACADEMIC_LEVELS_LIST } from "../data/puneInstitutesData";
import { PuneInstitution, CourseSyllabus, AcademicLevel, IKSDomain } from "../types";

interface PuneInstitutesIKSProps {
  onNavigateToScripture?: (searchQuery: string) => void;
}

export default function PuneInstitutesIKS({ onNavigateToScripture }: PuneInstitutesIKSProps) {
  // Navigation tabs inside the Pune IKS portal
  const [activeSubTab, setActiveSubTab] = useState<"directory" | "syllabus_explorer" | "pathway_advisor" | "nep_matrix">("directory");

  // Selected institute for deep profile view
  const [selectedInstituteId, setSelectedInstituteId] = useState<string>("bsiks");

  // Filters for syllabus explorer
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>("ALL");
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>("ALL");
  const [selectedInstituteFilter, setSelectedInstituteFilter] = useState<string>("ALL");

  // Modal / Drawer for detailed course syllabus inspection
  const [inspectingCourse, setInspectingCourse] = useState<CourseSyllabus | null>(null);
  const [copiedCourseCode, setCopiedCourseCode] = useState<string | null>(null);

  // Pathway advisor questionnaire state
  const [pathwayGoal, setPathwayGoal] = useState<string | null>(null);
  const [pathwayInterest, setPathwayInterest] = useState<string | null>(null);

  const selectedInstitute = useMemo(() => {
    return PUNE_IKS_INSTITUTIONS.find(inst => inst.id === selectedInstituteId) || PUNE_IKS_INSTITUTIONS[0];
  }, [selectedInstituteId]);

  // Aggregate all courses across all institutions
  const allCourses = useMemo(() => {
    const coursesList: { institute: PuneInstitution; programTitle: string; course: CourseSyllabus }[] = [];
    PUNE_IKS_INSTITUTIONS.forEach(inst => {
      inst.programs.forEach(prog => {
        prog.curriculumStructure.forEach(sem => {
          sem.courses.forEach(c => {
            coursesList.push({
              institute: inst,
              programTitle: prog.title,
              course: c
            });
          });
        });
      });
    });
    return coursesList;
  }, []);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return allCourses.filter(item => {
      const matchesSearch = 
        searchQuery === "" ||
        item.course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.course.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.course.courseOverview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.course.units.some(u => 
          u.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.keyTopics.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
          u.canonicalSourceTexts.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
        );

      const matchesLevel = selectedLevelFilter === "ALL" || item.course.academicLevel === selectedLevelFilter;
      const matchesDomain = selectedDomainFilter === "ALL" || item.course.domain === selectedDomainFilter;
      const matchesInstitute = selectedInstituteFilter === "ALL" || item.institute.id === selectedInstituteFilter;

      return matchesSearch && matchesLevel && matchesDomain && matchesInstitute;
    });
  }, [allCourses, searchQuery, selectedLevelFilter, selectedDomainFilter, selectedInstituteFilter]);

  const copySyllabus = (course: CourseSyllabus) => {
    const text = `COURSE SYLLABUS: ${course.courseCode} - ${course.courseTitle}
Credits: ${course.credits} (L: ${course.contactHours.lecture}, T: ${course.contactHours.tutorial}, P: ${course.contactHours.practicalOrField})
Level: ${course.academicLevel} | Domain: ${course.domain}

OVERVIEW:
${course.courseOverview}

LEARNING OUTCOMES:
${course.learningOutcomes.map(o => `• ${o}`).join("\n")}

UNITS:
${course.units.map(u => `Unit ${u.unitNumber}: ${u.title} (${u.durationHours} hrs)\n${u.description}\nKey Topics: ${u.keyTopics.join(", ")}\nCanonical Sources: ${u.canonicalSourceTexts.join(", ")}`).join("\n\n")}

PRIMARY LITERATURE:
${course.prescribedPrimaryLiterature.map(p => `• ${p}`).join("\n")}

SCHOLARLY REFERENCES:
${course.referenceScholarlyWorks.map(r => `• ${r}`).join("\n")}

EVALUATION:
Continuous Assessment: ${course.evaluationScheme.continuousAssessmentPercent}%, End Sem: ${course.evaluationScheme.endSemesterExamPercent}%, Practical: ${course.evaluationScheme.practicalOrProjectPercent}%
Criteria: ${course.evaluationScheme.criteria.join(", ")}`;

    navigator.clipboard.writeText(text);
    setCopiedCourseCode(course.courseCode);
    setTimeout(() => setCopiedCourseCode(null), 2500);
  };

  // Recommended institution based on pathway advisor
  const pathwayRecommendation = useMemo(() => {
    if (!pathwayGoal || !pathwayInterest) return null;

    let targetInstId: string = "bsiks";
    let explanation: string = "";

    if (pathwayInterest === "architecture") {
      targetInstId = "bsiks";
      explanation = "Bhishma School of IKS offers the most comprehensive accredited curriculum in Vastu Vidya, Mayamata, Manasara, and Temple Architecture with hands-on field surveys.";
    } else if (pathwayInterest === "computational_nlp_ayur") {
      targetInstId = "mitsvs";
      explanation = "MIT School of Vedic Sciences is the global pioneer in Paninian computational grammars, Sanskrit knowledge representation, and Ayur-informatics tridosha phenotyping.";
    } else if (pathwayInterest === "metallurgy_governance") {
      targetInstId = "despu";
      explanation = "DES Pune University IKS Center leads experiential research in ancient Indian metallurgy (Wootz crucible steel, zinc smelting) and Kautilyan economic statecraft.";
    } else if (pathwayInterest === "management_sustainability") {
      targetInstId = "vu_ciks";
      explanation = "Vishwakarma University CIKS focuses on applying the Bhagavad Gita, Arthashastra, and traditional crafts/guild systems to contemporary management and sustainable design.";
    } else if (pathwayInterest === "manuscripts_philology") {
      targetInstId = "bori";
      explanation = "Bhandarkar Oriental Research Institute (BORI) holds 125,000+ manuscripts and is the legendary author of the 19-Volume Critical Edition of the Mahabharata standard.";
    } else if (pathwayInterest === "archaeology_lexicography") {
      targetInstId = "deccan_college";
      explanation = "Deccan College is India's 3rd-oldest university, cradle of Indian scientific archaeology, and creator of the 35+ fascicule Encyclopaedic Sanskrit Dictionary.";
    }

    const inst = PUNE_IKS_INSTITUTIONS.find(i => i.id === targetInstId);
    return { institution: inst, explanation };
  }, [pathwayGoal, pathwayInterest]);

  return (
    <div className="w-full min-h-screen bg-[#110e0c] text-stone-100 font-sans pb-24">
      {/* Hero Header */}
      <div className="relative border-b border-[#34271c] bg-gradient-to-b from-[#1c1510] via-[#14100d] to-[#110e0c] px-4 md:px-8 py-10">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-950/80 border border-amber-500/50 text-amber-300 shadow-xl shadow-amber-950/40">
                <School className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/80">
                    Pune Academic IKS Standards Portal
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                    NEP 2020 Aligned
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-[#fdf5e6] mt-1">
                  Indic Sciences, Indology & IKS Institutions of Pune
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Pune, Maharashtra • Cultural & Scholarly Capital</span>
            </div>
          </div>

          <p className="text-sm md:text-base text-stone-300 max-w-4xl font-sans leading-relaxed">
            Exhaustive curriculum standards, accredited program frameworks, and semester-by-semester syllabi of the 6 premier institutions in Pune dedicated to Indian Knowledge Systems (IKS), Indology, Vedic Sciences, and Archaeological research.
          </p>

          {/* Sub-Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-stone-800/80">
            <button
              onClick={() => setActiveSubTab("directory")}
              className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                activeSubTab === "directory"
                  ? "bg-amber-900 text-amber-100 border-amber-500 shadow-lg shadow-amber-950/50"
                  : "bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>1. Institutions & Standards Directory (6 Centers)</span>
            </button>

            <button
              onClick={() => setActiveSubTab("syllabus_explorer")}
              className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                activeSubTab === "syllabus_explorer"
                  ? "bg-amber-900 text-amber-100 border-amber-500 shadow-lg shadow-amber-950/50"
                  : "bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>2. Interactive Syllabus & Course Explorer ({allCourses.length} Courses)</span>
            </button>

            <button
              onClick={() => setActiveSubTab("pathway_advisor")}
              className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                activeSubTab === "pathway_advisor"
                  ? "bg-amber-900 text-amber-100 border-amber-500 shadow-lg shadow-amber-950/50"
                  : "bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>3. Enrollment & Research Pathway Finder</span>
            </button>

            <button
              onClick={() => setActiveSubTab("nep_matrix")}
              className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                activeSubTab === "nep_matrix"
                  ? "bg-amber-900 text-amber-100 border-amber-500 shadow-lg shadow-amber-950/50"
                  : "bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>4. NEP 2020 Compliance Matrix</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        
        {/* =========================================================================
            TAB 1: INSTITUTION DIRECTORY & STANDARDS
           ========================================================================= */}
        {activeSubTab === "directory" && (
          <div className="space-y-8">
            {/* Institute Selection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PUNE_IKS_INSTITUTIONS.map((inst) => {
                const isSelected = selectedInstituteId === inst.id;
                return (
                  <button
                    key={inst.id}
                    onClick={() => setSelectedInstituteId(inst.id)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                      isSelected
                        ? "bg-gradient-to-br from-[#2a1d15] to-[#18120e] border-amber-500 shadow-xl shadow-amber-950/40 ring-1 ring-amber-500/40"
                        : "bg-[#16120f] border-stone-800/80 hover:bg-[#1f1914] hover:border-stone-700"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-bl-full pointer-events-none" />
                    )}

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 font-bold">
                          {inst.category}
                        </span>
                        {inst.establishedYear && (
                          <span className="text-[10px] font-mono text-stone-400">
                            Est. {inst.establishedYear}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-serif font-bold text-stone-100 group-hover:text-amber-300">
                        {inst.name}
                      </h3>

                      <p className="text-xs text-stone-400 font-sans mt-1 line-clamp-2">
                        {inst.tagline}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between text-xs font-mono text-stone-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        {inst.location.area}
                      </span>
                      <span className="text-amber-400 flex items-center gap-1 font-bold">
                        {inst.programs.length} Programs <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Institute Deep Profile & Standards Card */}
            <div className="bg-[#181310] border border-[#3b2b1d] rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl">
              
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b border-stone-800 pb-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-700/80">
                      {selectedInstitute.category}
                    </span>
                    <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {selectedInstitute.location.address}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#fcf5e7]">
                    {selectedInstitute.name}
                  </h2>
                  <p className="text-sm text-amber-400 font-serif italic">
                    "{selectedInstitute.tagline}"
                  </p>
                  <p className="text-sm text-stone-300 font-sans leading-relaxed pt-2">
                    {selectedInstitute.overview}
                  </p>
                </div>

                <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
                  <a
                    href={selectedInstitute.officialWebsiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold font-serif text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-950/60 transition-all"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      setSelectedInstituteFilter(selectedInstitute.id);
                      setActiveSubTab("syllabus_explorer");
                    }}
                    className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-200 border border-amber-900/60 font-serif text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>View All Course Syllabi</span>
                  </button>
                </div>
              </div>

              {/* 3 Columns: Accreditations, Facilities, Unique Strengths */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Accreditation & Affiliation */}
                <div className="bg-[#130f0d] p-5 rounded-2xl border border-stone-800/80 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-serif font-bold">
                    <Award className="w-4 h-4" />
                    <span>Accreditation & Standards</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-300 font-sans">
                    {selectedInstitute.accreditationAndAffiliation.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Facilities & Treasures */}
                <div className="bg-[#130f0d] p-5 rounded-2xl border border-stone-800/80 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-serif font-bold">
                    <Building2 className="w-4 h-4" />
                    <span>Key Facilities & Treasures</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-300 font-sans">
                    {selectedInstitute.keyFacilitiesAndTreasures.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Unique Strengths */}
                <div className="bg-[#130f0d] p-5 rounded-2xl border border-stone-800/80 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-serif font-bold">
                    <Flame className="w-4 h-4" />
                    <span>Distinctive Institutional Legacy</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-300 font-sans">
                    {selectedInstitute.uniqueInstitutionalStrengths.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Lead Scholars & Faculty */}
              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-stone-200 flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Lead Scholars, Mentors & Faculty Chairs</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedInstitute.leadFacultyOrScholars.map((faculty, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#120f0d] border border-stone-800 space-y-1">
                      <div className="font-serif font-bold text-stone-200 text-sm">{faculty.name}</div>
                      <div className="text-xs text-amber-400 font-mono">{faculty.designation}</div>
                      <div className="text-[11px] text-stone-400 font-sans">{faculty.specialization}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Programs & Curricular Tracks */}
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-stone-100 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-amber-400" />
                    <span>Formal Academic Programs & Degrees</span>
                  </h3>
                  <span className="text-xs font-mono text-stone-400">
                    {selectedInstitute.programs.length} Standard Programs Offered
                  </span>
                </div>

                <div className="space-y-6">
                  {selectedInstitute.programs.map((prog) => (
                    <div 
                      key={prog.programId}
                      className="bg-[#120f0c] border border-amber-900/40 rounded-2xl p-5 space-y-4"
                    >
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 border-b border-stone-800/80 pb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                              {prog.level}
                            </span>
                            <span className="text-xs font-mono text-stone-400">
                              {prog.duration} • {prog.totalCredits} Credits
                            </span>
                          </div>
                          <h4 className="text-xl font-serif font-bold text-[#fcf5e7] mt-1">
                            {prog.title}
                          </h4>
                          <p className="text-xs text-amber-400/90 font-mono">
                            Recognition: {prog.recognitionOrAffiliation}
                          </p>
                        </div>

                        <div className="text-xs text-stone-400 font-mono bg-stone-950 px-3 py-2 rounded-xl border border-stone-800">
                          <div><strong className="text-stone-300">Eligibility:</strong> {prog.eligibility}</div>
                        </div>
                      </div>

                      {/* Objectives */}
                      <div>
                        <div className="text-xs font-mono uppercase font-bold text-stone-400 mb-1">
                          Program Educational Objectives (PEOs):
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-300">
                          {prog.programObjectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Semester Structure & Courses */}
                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-mono uppercase font-bold text-amber-400">
                          Curriculum Structure & Core Courses:
                        </div>
                        {prog.curriculumStructure.map((sem, sIdx) => (
                          <div key={sIdx} className="space-y-2">
                            <div className="text-xs font-serif font-bold text-stone-300 flex items-center justify-between bg-stone-900/60 px-3 py-1.5 rounded-lg border border-stone-800">
                              <span>{sem.semesterOrYear}: {sem.semesterTitle}</span>
                              <span className="font-mono text-amber-400">{sem.credits} Credits</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {sem.courses.map((course) => (
                                <div
                                  key={course.courseCode}
                                  className="p-4 rounded-xl bg-[#171310] border border-stone-800 hover:border-amber-700/60 transition-all flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-1">
                                      <span className="text-amber-400 font-bold">{course.courseCode}</span>
                                      <span>{course.credits} Credits (L:{course.contactHours.lecture} T:{course.contactHours.tutorial} P:{course.contactHours.practicalOrField})</span>
                                    </div>
                                    <h5 className="text-sm font-serif font-bold text-stone-100">
                                      {course.courseTitle}
                                    </h5>
                                    <p className="text-xs text-stone-400 mt-1 line-clamp-2 font-sans">
                                      {course.courseOverview}
                                    </p>
                                  </div>

                                  <div className="mt-3 pt-3 border-t border-stone-850 flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-stone-400 px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                                      {course.domain}
                                    </span>
                                    <button
                                      onClick={() => setInspectingCourse(course)}
                                      className="text-xs font-serif font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                                    >
                                      <span>Inspect Syllabus</span>
                                      <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: INTERACTIVE SYLLABUS & COURSE EXPLORER
           ========================================================================= */}
        {activeSubTab === "syllabus_explorer" && (
          <div className="space-y-6">
            
            {/* Search & Filter Bar */}
            <div className="bg-[#181310] border border-[#3b2b1d] rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex flex-col md:flex-row gap-3">
                
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses, topics, Sanskrit treatises (e.g. Ashtadhyayi, Mayamata, Wootz, Arthashastra)..."
                    className="w-full bg-[#120f0c] text-stone-100 pl-10 pr-4 py-2.5 rounded-xl border border-stone-800 text-xs focus:outline-none focus:border-amber-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2.5 text-xs text-stone-500 hover:text-stone-300"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Institute Filter */}
                <select
                  value={selectedInstituteFilter}
                  onChange={(e) => setSelectedInstituteFilter(e.target.value)}
                  className="bg-[#120f0c] text-stone-200 px-3 py-2.5 rounded-xl border border-stone-800 text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="ALL">All 6 Institutions</option>
                  {PUNE_IKS_INSTITUTIONS.map(inst => (
                    <option key={inst.id} value={inst.id}>{inst.shortName}</option>
                  ))}
                </select>

                {/* Level Filter */}
                <select
                  value={selectedLevelFilter}
                  onChange={(e) => setSelectedLevelFilter(e.target.value)}
                  className="bg-[#120f0c] text-stone-200 px-3 py-2.5 rounded-xl border border-stone-800 text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="ALL">All Academic Levels</option>
                  {ACADEMIC_LEVELS_LIST.map(lvl => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>

                {/* Domain Filter */}
                <select
                  value={selectedDomainFilter}
                  onChange={(e) => setSelectedDomainFilter(e.target.value)}
                  className="bg-[#120f0c] text-stone-200 px-3 py-2.5 rounded-xl border border-stone-800 text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="ALL">All IKS Subject Domains</option>
                  {IKS_DOMAINS_LIST.map(dom => (
                    <option key={dom} value={dom}>{dom}</option>
                  ))}
                </select>

              </div>

              <div className="flex items-center justify-between text-xs font-mono text-stone-400 pt-2 border-t border-stone-800">
                <span>Showing <strong className="text-amber-400">{filteredCourses.length}</strong> accredited course modules matching filters</span>
                {(searchQuery || selectedLevelFilter !== "ALL" || selectedDomainFilter !== "ALL" || selectedInstituteFilter !== "ALL") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedLevelFilter("ALL");
                      setSelectedDomainFilter("ALL");
                      setSelectedInstituteFilter("ALL");
                    }}
                    className="text-amber-400 hover:underline cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCourses.map(({ institute, programTitle, course }) => (
                <div
                  key={course.courseCode}
                  className="bg-[#16120f] border border-stone-800 hover:border-amber-600/70 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-2">
                      <span className="font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/60">
                        {course.courseCode}
                      </span>
                      <span>{course.credits} Credits</span>
                    </div>

                    <div className="text-[11px] font-serif text-amber-300/90 font-bold mb-1">
                      {institute.shortName}
                    </div>

                    <h4 className="text-base font-serif font-bold text-stone-100 line-clamp-2">
                      {course.courseTitle}
                    </h4>

                    <p className="text-xs text-stone-400 font-sans mt-2 line-clamp-3">
                      {course.courseOverview}
                    </p>

                    {/* Canonical Sanskrit Sources preview */}
                    <div className="mt-3 pt-3 border-t border-stone-800/80 space-y-1">
                      <div className="text-[10px] font-mono uppercase text-stone-400">Canonical Sanskrit Treatises:</div>
                      <div className="flex flex-wrap gap-1">
                        {course.units.flatMap(u => u.canonicalSourceTexts).slice(0, 2).map((s, sI) => (
                          <span key={sI} className="text-[10px] font-serif text-amber-200 bg-[#241a12] px-2 py-0.5 rounded border border-amber-900/50 truncate max-w-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-400">
                      {course.units.length} Units • {course.contactHours.lecture + course.contactHours.practicalOrField} Hrs
                    </span>
                    <button
                      onClick={() => setInspectingCourse(course)}
                      className="px-3 py-1.5 rounded-lg bg-amber-900/70 hover:bg-amber-800 text-amber-200 text-xs font-serif font-bold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <span>Full Syllabus</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16 bg-[#16120f] rounded-3xl border border-stone-800 space-y-3">
                <BookOpen className="w-10 h-10 text-stone-600 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-stone-300">No matching course syllabi found</h4>
                <p className="text-xs text-stone-500 max-w-md mx-auto">
                  Try adjusting your search keywords or resetting the academic level and subject domain filters.
                </p>
              </div>
            )}

          </div>
        )}

        {/* =========================================================================
            TAB 3: ENROLLMENT & RESEARCH PATHWAY FINDER
           ========================================================================= */}
        {activeSubTab === "pathway_advisor" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-[#181310] border border-[#3b2b1d] rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-400 px-2.5 py-0.5 rounded bg-amber-950 border border-amber-800">
                  Interactive Academic Matchmaker
                </span>
                <h2 className="text-2xl font-serif font-extrabold text-[#fdf5e6] mt-2">
                  Find Your Ideal IKS Program & Pune Institution
                </h2>
                <p className="text-xs md:text-sm text-stone-300 font-sans mt-1">
                  Answer two quick questions to discover the exact accredited program, syllabus track, and research academy tailored to your scholarly goals.
                </p>
              </div>

              {/* Question 1: Academic Goal */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase font-bold text-amber-300 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Step 1: What type of academic credential or research track are you seeking?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: "masters", title: "Master's Degree (M.A. / M.Sc. / MIKS)", desc: "2-Year full degree with thesis & credit transfer" },
                    { id: "diploma", title: "Postgraduate Diploma", desc: "1-Year specialized research & applied skills" },
                    { id: "minor", title: "NEP Minor / Elective", desc: "For university students seeking IKS credits" },
                    { id: "cert", title: "Executive Certificate / Fellowship", desc: "Short-term hybrid & research manuscript access" },
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => setPathwayGoal(option.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        pathwayGoal === option.id
                          ? "bg-amber-950 text-amber-100 border-amber-500 shadow-lg"
                          : "bg-stone-900/60 text-stone-300 border-stone-800 hover:border-stone-700"
                      }`}
                    >
                      <div className="text-xs font-serif font-bold">{option.title}</div>
                      <div className="text-[11px] text-stone-400 mt-1 font-sans">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Primary Intellectual Passion */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase font-bold text-amber-300 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Step 2: What is your primary discipline or research passion?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { id: "architecture", title: "Temple Vastu & Sacred Architecture", desc: "Mayamata, Manasara, 64 Kalas, Iconometry" },
                    { id: "computational_nlp_ayur", title: "Computational Sanskrit & Ayur-Informatics", desc: "Paninian NLP, AI Knowledge Graphs, Tridosha ML" },
                    { id: "metallurgy_governance", title: "Ancient Metallurgy & Statecraft", desc: "Wootz Steel, Zinc Smelting, Kautilya Arthashastra" },
                    { id: "management_sustainability", title: "Ethical Management & Sustainable Design", desc: "Bhagavad Gita Leadership, Vernacular Green Tech" },
                    { id: "manuscripts_philology", title: "Manuscriptology & Critical Edition Indology", desc: "125K Manuscripts, Textual Criticism, Sharada Script" },
                    { id: "archaeology_lexicography", title: "Field Archaeology & Historical Dictionaries", desc: "Excavation, Stratigraphy, Sanskrit Lexicography" },
                  ].map(interest => (
                    <button
                      key={interest.id}
                      onClick={() => setPathwayInterest(interest.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        pathwayInterest === interest.id
                          ? "bg-amber-950 text-amber-100 border-amber-500 shadow-lg"
                          : "bg-stone-900/60 text-stone-300 border-stone-800 hover:border-stone-700"
                      }`}
                    >
                      <div className="text-xs font-serif font-bold">{interest.title}</div>
                      <div className="text-[11px] text-stone-400 mt-1 font-sans">{interest.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recommendation Output Card */}
              {pathwayRecommendation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-[#271b12] to-[#17120e] border-2 border-amber-500/80 shadow-2xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded bg-amber-500 text-black">
                      Recommended Best Match
                    </span>
                    <span className="text-xs font-mono text-amber-400">
                      {pathwayRecommendation.institution?.location.area}, Pune
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {pathwayRecommendation.institution?.name}
                    </h3>
                    <p className="text-xs text-amber-300 font-mono mt-0.5">
                      {pathwayRecommendation.institution?.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-stone-200 font-sans leading-relaxed">
                    {pathwayRecommendation.explanation}
                  </p>

                  <div className="pt-3 border-t border-amber-900/60 flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        setSelectedInstituteId(pathwayRecommendation.institution!.id);
                        setActiveSubTab("directory");
                      }}
                      className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Explore Institutional Standards</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedInstituteFilter(pathwayRecommendation.institution!.id);
                        setActiveSubTab("syllabus_explorer");
                      }}
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-200 border border-stone-700 font-serif font-bold text-xs flex items-center gap-2 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span>Browse Syllabi</span>
                    </button>

                    <a
                      href={pathwayRecommendation.institution?.officialWebsiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 font-serif font-bold text-xs flex items-center gap-2"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: NEP 2020 COMPLIANCE MATRIX
           ========================================================================= */}
        {activeSubTab === "nep_matrix" && (
          <div className="space-y-6">
            <div className="bg-[#181310] border border-[#3b2b1d] rounded-2xl p-6 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-amber-400 px-2.5 py-0.5 rounded bg-amber-950 border border-amber-800">
                National Education Policy (NEP 2020) Mandate
              </span>
              <h2 className="text-2xl font-serif font-extrabold text-[#fcf5e7]">
                Institutional Compliance & Pedagogical Architecture
              </h2>
              <p className="text-xs text-stone-300 font-sans max-w-3xl">
                Comparative analysis of how Pune's 6 leading IKS institutions implement the 4 core pillars of NEP 2020: Interdisciplinary Integration, Academic Bank of Credits (ABC), Sanskrit Primary Source Hermeneutics, and Experiential / Laboratory Fieldwork.
              </p>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-[#16120f] shadow-2xl">
              <table className="w-full text-left text-xs text-stone-300 border-collapse">
                <thead className="bg-[#1e1713] text-amber-400 font-serif font-bold border-b border-stone-800">
                  <tr>
                    <th className="p-4 min-w-[180px]">Institution</th>
                    <th className="p-4 min-w-[220px]">1. Interdisciplinary Integration</th>
                    <th className="p-4 min-w-[200px]">2. Credit Transfer (ABC)</th>
                    <th className="p-4 min-w-[220px]">3. Sanskrit Source Texts</th>
                    <th className="p-4 min-w-[220px]">4. Experiential / Lab Fieldwork</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/80 font-sans">
                  {PUNE_IKS_INSTITUTIONS.map((inst) => (
                    <tr key={inst.id} className="hover:bg-[#1f1914] transition-colors">
                      <td className="p-4 font-serif font-bold text-stone-100 align-top">
                        <div className="text-sm text-amber-300">{inst.shortName}</div>
                        <div className="text-[10px] font-mono text-stone-400">{inst.category}</div>
                      </td>
                      <td className="p-4 align-top leading-relaxed text-stone-300">
                        {inst.nep2020StandardsCompliance.interdisciplinaryIntegration}
                      </td>
                      <td className="p-4 align-top leading-relaxed text-stone-300">
                        {inst.nep2020StandardsCompliance.creditTransferABC}
                      </td>
                      <td className="p-4 align-top leading-relaxed text-stone-300">
                        {inst.nep2020StandardsCompliance.multilingualAndSourceTexts}
                      </td>
                      <td className="p-4 align-top leading-relaxed text-stone-300">
                        {inst.nep2020StandardsCompliance.experientialLearningAndFieldwork}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          DETAILED COURSE SYLLABUS MODAL / DRAWER
         ========================================================================= */}
      <AnimatePresence>
        {inspectingCourse && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#181310] border-2 border-amber-600/70 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-stone-800 bg-[#1f1813] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                      {inspectingCourse.courseCode}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {inspectingCourse.academicLevel} • {inspectingCourse.credits} Credits
                    </span>
                    <span className="text-xs font-mono text-amber-400/90">
                      (L:{inspectingCourse.contactHours.lecture} T:{inspectingCourse.contactHours.tutorial} P:{inspectingCourse.contactHours.practicalOrField})
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-extrabold text-[#fdf5e6]">
                    {inspectingCourse.courseTitle}
                  </h3>
                  <p className="text-xs font-mono text-stone-400">
                    Domain: <span className="text-amber-400">{inspectingCourse.domain}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copySyllabus(inspectingCourse)}
                    className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-all cursor-pointer"
                    title="Copy Full Course Syllabus"
                  >
                    {copiedCourseCode === inspectingCourse.courseCode ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => setInspectingCourse(null)}
                    className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-400 hover:text-white transition-all cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Body Scrollable */}
              <div className="p-6 overflow-y-auto space-y-6 text-stone-300 text-xs md:text-sm font-sans">
                
                {/* Course Overview */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Course Description & Philosophical Scope</span>
                  </div>
                  <p className="leading-relaxed text-stone-300 bg-[#120f0d] p-4 rounded-xl border border-stone-800">
                    {inspectingCourse.courseOverview}
                  </p>
                </div>

                {/* Course Learning Outcomes */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Course Learning Outcomes (CLOs)</span>
                  </div>
                  <ul className="space-y-1.5 bg-[#120f0d] p-4 rounded-xl border border-stone-800">
                    {inspectingCourse.learningOutcomes.map((clo, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <span className="text-amber-500 font-bold font-mono">CLO {i + 1}:</span>
                        <span>{clo}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detailed Units */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Unit-by-Unit Detailed Syllabus</span>
                  </div>

                  <div className="space-y-3">
                    {inspectingCourse.units.map((unit) => (
                      <div 
                        key={unit.unitNumber}
                        className="p-4 rounded-xl bg-[#130f0d] border border-stone-800/90 space-y-2"
                      >
                        <div className="flex items-center justify-between text-xs font-serif font-bold text-amber-300">
                          <span>Unit {unit.unitNumber}: {unit.title}</span>
                          <span className="font-mono text-stone-400">{unit.durationHours} Hours</span>
                        </div>

                        <p className="text-xs text-stone-300 leading-relaxed">
                          {unit.description}
                        </p>

                        <div className="pt-2 border-t border-stone-850 space-y-1">
                          <div className="text-[11px] font-mono text-stone-400">
                            <strong>Key Topics:</strong> {unit.keyTopics.join(" • ")}
                          </div>
                          <div className="text-[11px] font-serif text-amber-200">
                            <strong>Canonical Sanskrit Source Treatises:</strong> {unit.canonicalSourceTexts.join(" | ")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Literature & Scholarly References */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#120f0d] p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                      <BookMarked className="w-3.5 h-3.5" />
                      <span>Prescribed Primary Texts</span>
                    </div>
                    <ul className="space-y-1 text-xs text-stone-300 font-serif">
                      {inspectingCourse.prescribedPrimaryLiterature.map((book, bI) => (
                        <li key={bI} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{book}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#120f0d] p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="text-xs font-mono uppercase font-bold text-stone-400 flex items-center gap-1.5">
                      <Scroll className="w-3.5 h-3.5" />
                      <span>Scholarly References & Monographs</span>
                    </div>
                    <ul className="space-y-1 text-xs text-stone-300 font-sans">
                      {inspectingCourse.referenceScholarlyWorks.map((ref, rI) => (
                        <li key={rI} className="flex items-start gap-1.5">
                          <span className="text-stone-500">•</span>
                          <span>{ref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Evaluation Scheme */}
                <div className="bg-[#120f0d] p-4 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-xs font-mono uppercase font-bold text-amber-400">
                    Grading & Assessment Framework
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono py-2 bg-stone-900/80 rounded-lg">
                    <div>
                      <div className="text-stone-400">Continuous Assessment</div>
                      <div className="text-base font-bold text-amber-400">{inspectingCourse.evaluationScheme.continuousAssessmentPercent}%</div>
                    </div>
                    <div>
                      <div className="text-stone-400">End Semester Exam</div>
                      <div className="text-base font-bold text-amber-400">{inspectingCourse.evaluationScheme.endSemesterExamPercent}%</div>
                    </div>
                    <div>
                      <div className="text-stone-400">Practical / Fieldwork</div>
                      <div className="text-base font-bold text-amber-400">{inspectingCourse.evaluationScheme.practicalOrProjectPercent}%</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-stone-400 font-sans">
                    <strong>Assessment Criteria:</strong> {inspectingCourse.evaluationScheme.criteria.join(" • ")}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-stone-800 bg-[#16110e] flex items-center justify-between">
                <button
                  onClick={() => copySyllabus(inspectingCourse)}
                  className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-stone-950 font-serif font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
                >
                  {copiedCourseCode === inspectingCourse.courseCode ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Syllabus Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setInspectingCourse(null)}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-serif font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
